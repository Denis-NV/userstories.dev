import { useCallback } from 'react'
import {
  useAuthenticationStatus,
  useSignOut,
  // useUserDefaultRole,
  // useUserRoles,
} from '@nhost/react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { Cog } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import MainNav from '@/components/MainNav'

function Root() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()
  const { signOut } = useSignOut()
  const location = useLocation()

  // const userRoles = useUserRoles()
  // const userDeafaultRole = useUserDefaultRole()

  const handleSignOut = useCallback(() => {
    signOut()
  }, [signOut])

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="bg-background">
      {isAuthenticated ? (
        <div className="flex h-screen min-h-screen flex-col items-center justify-between font-sans antialiased">
          <header className="bg-background sticky top-0 z-10 flex w-full flex-row justify-between border-b px-2 py-2 align-middle">
            <MainNav />

            <div className="flex flex-row space-x-1 align-middle">
              <Button variant="link" onClick={handleSignOut}>
                Sign Out
              </Button>

              <Button variant="ghost" size="icon">
                <Cog className="h-[1.2rem] w-[1.2rem]  transition-all" />
                <span className="sr-only">Settings</span>
              </Button>
            </div>
          </header>

          {/* <ul>
            <span>User roles: </span>
            {userRoles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
          <span>Default Role: {userDeafaultRole}</span> */}

          <main className="w-full max-w-4xl flex-1 overflow-hidden px-2 pt-6 sm:pt-10">
            <Outlet />
          </main>

          <Toaster />
        </div>
      ) : (
        <Navigate to="/signin" state={{ from: location }} replace />
      )}
    </div>
  )
}

export default Root
