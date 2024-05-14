import { useQuery } from '@apollo/client'
import {
  useUserRoles,
  useUserDefaultRole,
  useSignOut,
  useAuthenticated,
  useAccessToken,
} from '@nhost/react'
import { LANDING_QUERY } from './gql'

const Landing = () => {
  const isAuthenticated = useAuthenticated()
  const { signOut } = useSignOut()
  const accessToken = useAccessToken()

  const userRoles = useUserRoles()
  const userDeafaultRole = useUserDefaultRole()
  const { data, loading } = useQuery(LANDING_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  return (
    <div>
      <h1>grain-by-grain</h1>
      {isAuthenticated && <button onClick={() => signOut()}>Sign Out</button>}
      <hr />
      {loading ? (
        <span>Loading query ...</span>
      ) : (
        <div>
          <span>User roles: </span>
          <ul>
            {userRoles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
          <span>Default Role: {userDeafaultRole}</span>

          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
export default Landing
