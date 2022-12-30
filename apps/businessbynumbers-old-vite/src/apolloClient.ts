import { ApolloClient, InMemoryCache } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { v4 as uuid4 } from 'uuid'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { print } from 'graphql/language/printer'

import awsExports from './aws-exports'
// import result from './possibleTypes'

const API_URL = awsExports?.aws_appsync_graphqlEndpoint
const API_KEY = awsExports?.aws_appsync_apiKey
const WSS_URL = API_URL.replace('https', 'wss').replace('appsync-api', 'appsync-realtime-api')
const HOST = API_URL.replace('https://', '').replace('/graphql', '')
const apiHeader = {
  host: HOST,
  'X-Api-Key': API_KEY,
}
const headerEncode = (obj: typeof apiHeader | any) => btoa(JSON.stringify(obj))
const connectionUrl =
  WSS_URL + '?header=' + headerEncode(apiHeader) + '&payload=' + headerEncode({})

// @ts-ignore
class UUIDOperationIdSubscriptionClient extends SubscriptionClient {
  generateOperationId() {
    // AppSync recommends using UUIDs for Subscription IDs but SubscriptionClient uses an incrementing number
    return uuid4()
  }

  processReceivedData(receivedData: string) {
    try {
      const parsedMessage = JSON.parse(receivedData)
      if (parsedMessage?.type === 'start_ack') return // sent by AppSync but meaningless to us
    } catch (e) {
      throw new Error('Message must be JSON-parsable. Got: ' + receivedData)
    }

    super['processReceivedData'](receivedData)
  }
}

const createAppSyncGraphQLOperationAdapter = () => ({
  applyMiddleware: async (options: any, next: any) => {
    // AppSync expects GraphQL operation to be defined as a JSON-encoded object in a "data" property
    options.data = JSON.stringify({
      query: typeof options.query === 'string' ? options.query : print(options.query),
      variables: options.variables,
    })

    // AppSync only permits authorized operations
    options.extensions = { authorization: apiHeader }

    // AppSync does not care about these properties
    delete options.operationName
    delete options.variables
    // Not deleting "query" property as SubscriptionClient validation requires it

    next()
  },
})

// WebSocketLink
const wsLink = new WebSocketLink(
  new UUIDOperationIdSubscriptionClient(
    connectionUrl,
    {
      timeout: 5 * 60 * 1000,
      reconnect: true,
      lazy: true,
      connectionCallback: (err) => console.log('connectionCallback', err ? 'ERR' : 'OK', err || ''),
    },
    WebSocket,
  ).use([createAppSyncGraphQLOperationAdapter()]),
)

export const client = new ApolloClient({
  uri: API_URL,
  headers: {
    'X-Api-Key': API_KEY,
  },
  cache: new InMemoryCache(),
  // link: wsLink,
})
