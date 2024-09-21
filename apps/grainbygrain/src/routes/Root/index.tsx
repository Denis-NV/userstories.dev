import {
  useAuthenticationStatus,
  // useUserDefaultRole,
  // useUserRoles,
} from '@nhost/react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

import { Toaster } from '@/components/ui/toaster'
import MainNav from '@/components/MainNav'

function Root() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()
  const location = useLocation()

  // const userRoles = useUserRoles()
  // const userDeafaultRole = useUserDefaultRole()

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="bg-background">
      {isAuthenticated ? (
        <div className="flex h-screen min-h-screen flex-col items-center justify-between font-sans antialiased">
          <header className="bg-background sticky top-0 z-10 w-full border-b px-2 py-2">
            <MainNav />
          </header>

          {/* <ul>
            <span>User roles: </span>
            {userRoles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
          <span>Default Role: {userDeafaultRole}</span> */}

          <main className="w-full flex-1 overflow-hidden pt-6 sm:pt-10">
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
