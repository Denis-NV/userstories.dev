import React from 'react'
import { createRoot } from 'react-dom/client'
import { NhostClient, NhostProvider } from '@nhost/react'
import { createApolloClient } from '@nhost/apollo'
import { ApolloProvider } from '@apollo/client'

import App from '@/components/App'

const nhost = new NhostClient({
  subdomain: 'aqntrlqfforjhsoobrbn',
  region: 'eu-west-2',
})

const client = createApolloClient({
  nhost,
})

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NhostProvider nhost={nhost}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </NhostProvider>
  </React.StrictMode>,
)
