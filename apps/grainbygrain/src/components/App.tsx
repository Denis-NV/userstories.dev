import { useAuthenticationStatus } from '@nhost/react'

import SignIn from './SignIn'
import Landing from './Landing'

function App() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()

  if (isLoading) return <div>Loading...</div>

  return isAuthenticated ? <Landing /> : <SignIn />
}

export default App
