import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@apollo/client'

import { Button } from '@ustrs/react-components'

import { TEST_QUERY } from './gql'

const App = (): JSX.Element => {
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0()

  const { data, loading } = useQuery(TEST_QUERY)

  const logoutWithRedirect = () =>
    logout({
      returnTo: window?.location?.origin,
    })

  return isLoading ? (
    <div>Checking Authentication ...</div>
  ) : (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <p className="read-the-docs">Hello {user?.nickname}</p>
          <Button onClick={() => logoutWithRedirect()}>Log out</Button>
        </div>
      ) : (
        <Button onClick={() => loginWithRedirect()}>Log in</Button>
      )}
      <hr />
      <div>
        {loading && 'Loading data ...'}
        {data && JSON.stringify(data)}
      </div>
    </div>
  )
}

export default App
