import React from 'react'
// import { useHistory } from "react-router-dom";
import {
  Auth0Provider,
  // Auth0ProviderOptions
} from '@auth0/auth0-react'
import { AUTH0_AUDIENCE, AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@const/auth0'

export type TAuth0ProviderWithHistoryProps = {
  children: React.ReactNode
}

const Auth0ProviderWithHistory = ({ children }: TAuth0ProviderWithHistoryProps): JSX.Element => {
  // Fail fast if the environment variables aren't set
  if (!AUTH0_DOMAIN || !AUTH0_CLIENT_ID)
    throw new Error('Please set AUTH0_DOMAIN and AUTH0_CLIENT_ID ENV variables')

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
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      // onRedirectCallback={onRedirectCallback}
      audience={AUTH0_AUDIENCE}
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
