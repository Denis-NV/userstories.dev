import React from 'react'
// import { useHistory } from "react-router-dom";
import {
  Auth0Provider,
  // Auth0ProviderOptions
} from '@auth0/auth0-react'

export type TAuth0ProviderWithHistoryProps = {
  children: React.ReactNode
}

const Auth0ProviderWithHistory = ({ children }: TAuth0ProviderWithHistoryProps): JSX.Element => {
  // Retrieve the previously created environment variables
  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE

  // Fail fast if the environment variables aren't set
  if (!domain || !clientId)
    throw new Error(
      'Please set REACT_APP_AUTH0_DOMAIN and REACT_APP_AUTH0_CLIENT_ID env. variables',
    )

  /**
   * This is not needed if you're not using a custom router, like `react-router`
   */
  // const history = useHistory();

  /**
   * Callback triggered when a successful login occurs.
   *
   * Here you could redirect your users to a protected route.
   *
   * This is not needed if you're not using a custom router, like `react-router`
   */
  // const onRedirectCallback: Auth0ProviderOptions["onRedirectCallback"] = (
  //   appState
  // ) => {
  //   history.push(appState?.returnTo || window.location.pathname);
  // };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      // onRedirectCallback={onRedirectCallback}
      audience={audience}
      useRefreshTokens
      // Token storage option, `localstorage` gives the feature
      // to not log out your users when they close your application
      // cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory
