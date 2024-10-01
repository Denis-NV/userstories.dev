import { Navigate } from 'react-router-dom'
import { useAccessToken, useUserEmail } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { Roles } from '@/const'
import useAllowedForUser from '@/utils/useAllowedForUser'
import { TypographyH2 } from '@/components/typography'
import MainContainer from '@/components/MainContainer'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { USERS_QUERY } from './gql'
import UserRow from './components/UserRow'

const Users = () => {
  const accessToken = useAccessToken()
  const ownEmail = useUserEmail()
  const isAllowed = useAllowedForUser(Roles.general_manager)

  const query = useQuery(USERS_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const { data, loading } = query

  const users = data?.users.filter((user) => user.email !== ownEmail)

  return isAllowed ? (
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
            <Table className="table-fixed">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="">Role</TableHead>
                  <TableHead className="w-16">Verified</TableHead>
                  <TableHead className="w-16">Disabled</TableHead>
                  <TableHead className="w-20 text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users?.map((user) => (
                  <UserRow
                    key={user.id}
                    values={{
                      disabled: user.disabled,
                      verified: user.emailVerified,
                      role: user.defaultRole,
                    }}
                    user={user}
                  />
                ))}
              </TableBody>
            </Table>
          )}
        </MainContainer>
      </div>
    </div>
  ) : (
    <Navigate to="/" replace />
  )
}
export default Users
