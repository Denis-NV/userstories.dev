import { ReactNode, useMemo } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as BaseApolloProvider,
  HttpLink,
  from,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { useAuth0 } from '@auth0/auth0-react'
import { AUTH0_AUDIENCE } from '@const/auth0'

export type TApolloProviderProps = {
  children: ReactNode
}

const ApolloProvider = ({ children }: TApolloProviderProps): JSX.Element => {
  const { getAccessTokenSilently } = useAuth0()

  const client = useMemo(() => {
    const httpLink = new HttpLink({
      uri: AUTH0_AUDIENCE,
    })

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        )

      if (networkError) console.log(`[Network error]: ${networkError}`)
    })

    const authLink = setContext(async (_, { headers }) => {
      const token = await getAccessTokenSilently()

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      }
    })
    return new ApolloClient({
      link: from([errorLink, authLink, httpLink]),
      cache: new InMemoryCache(),
      connectToDevTools: import.meta.env.DEV,
    })
  }, [getAccessTokenSilently])

  return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>
}

export default ApolloProvider
