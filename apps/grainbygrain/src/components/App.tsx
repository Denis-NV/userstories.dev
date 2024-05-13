import { useAuthenticationStatus, useUserRoles } from '@nhost/react'

import SignIn from './SignIn'

function App() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()
  const userRoles = useUserRoles()

  if (isLoading) return <div>Loding...</div>

  return isAuthenticated ? (
    <div>
      <h1>grain-by-grain</h1>
      <span>User roles: {userRoles}</span>
    </div>
  ) : (
    <SignIn />
  )
}

export default App
