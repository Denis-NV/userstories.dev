import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="businessbynumbers.uk.auth0.com"
      clientId="VtDA2PocloQFi998sRZfNsW4QR5AqnuD"
      redirectUri={window?.location?.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
