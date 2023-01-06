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
      <h1>Business by Numbers!</h1>
      {isAuthenticated ? (
        <div>
          <p className="read-the-docs">Hello {user?.nickname}</p>
          <Button onClick={() => logoutWithRedirect()}>Log out</Button>
          <hr />
          <div>
            {loading && 'Loading data ...'}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
          </div>
        </div>
      ) : (
        <Button onClick={() => loginWithRedirect()}>Log in</Button>
      )}
    </div>
  )
}

export default App
