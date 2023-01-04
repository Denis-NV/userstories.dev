import React from 'react'
import ReactDOM from 'react-dom/client'

import Auth0ProviderWithHistory from './config/Auth0ProviderWithHistory'
import ApolloProvider from './config/ApolloProvider'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <ApolloProvider>
        <App />
      </ApolloProvider>
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
)
