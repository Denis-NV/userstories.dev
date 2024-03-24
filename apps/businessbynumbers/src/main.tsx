import React from 'react'
import { createRoot } from 'react-dom/client'

import Auth0ProviderWithHistory from '@/config/Auth0ProviderWithHistory'
import ApolloProvider from '@/config/ApolloProvider'
import App from '@/components/App'

import './styles.css'
import '@ustrs/shadcn-ui/styles'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <ApolloProvider>
        <App />
      </ApolloProvider>
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
)
