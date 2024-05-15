import { useAuthenticationStatus } from '@nhost/react'

import SignIn from '../../components/SignIn'
import Landing from '../../components/Landing'

function Root() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()

  if (isLoading) return <div>Loading...</div>

  return isAuthenticated ? <Landing /> : <SignIn />
}

export default Root
