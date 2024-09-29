import { TypographyH2 } from '@/components/typography'
import MainContainer from '@/components/MainContainer'
import { useQuery } from '@apollo/client'
import { USERS_QUERY } from './gql'
import { useAccessToken } from '@nhost/react'

const Users = () => {
  const accessToken = useAccessToken()

  const query = useQuery(USERS_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const { data, loading } = query

  const users = data?.users

  return (
    <div className="flex h-full flex-col">
      <MainContainer>
        <div className="mb-2  flex justify-between">
          <TypographyH2 text="Users" />
        </div>

        <div className="flex justify-between pb-4">
          <div className="flex align-middle">Manage app users</div>
        </div>

        <div className="h-1 w-full shadow-sm" />
      </MainContainer>

      <div className="w-full overflow-scroll pb-12 pt-6">
        <MainContainer>
          {loading && <p>loading...</p>}
          {users && (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {`${user.displayName} - ${user.defaultRole} | varified: ${user.emailVerified} | disabled: ${user.disabled}`}
                </li>
              ))}
            </ul>
          )}
        </MainContainer>
      </div>
    </div>
  )
}
export default Users
