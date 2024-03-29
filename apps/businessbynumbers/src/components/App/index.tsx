import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@apollo/client'

import { Button, Alert, AlertDescription, AlertTitle } from '@ustrs/shadcn-ui'
import { NestedRecord } from '@ustrs/utils'

import { TEST_QUERY } from './gql'

const rec: NestedRecord = {
  level1: {
    leve2: 'working',
  },
}

const App = (): JSX.Element => {
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0()

  const { data, loading } = useQuery(TEST_QUERY)

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window?.location?.origin,
      },
    })

  console.log(rec, 'hello')

  return isLoading ? (
    <div>Checking Authentication ...</div>
  ) : (
    <div className="bg-slate-300">
      <h1>Business by Numbers!!!</h1>
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>This Alert component comes from local shadcn-ui library</AlertDescription>
      </Alert>
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
