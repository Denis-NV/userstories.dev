import { useCallback } from 'react'
import {
  useAuthenticationStatus,
  useSignOut,
  // useUserDefaultRole,
  // useUserRoles,
} from '@nhost/react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { Moon, Sun, Cog } from 'lucide-react'

import useThemeMode from '@/context/ThemeModeProvider/useThemeMode'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import MainNav from '@/components/MainNav'

const navData = [
  {
    name: 'Customers',
    to: '/customers',
  },
  {
    name: 'Products',
    to: '/products',
  },
  {
    name: 'Orders',
    to: '/orders',
  },
]

function Root() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()
  const { signOut } = useSignOut()
  const location = useLocation()

  // const userRoles = useUserRoles()
  // const userDeafaultRole = useUserDefaultRole()

  const { setTheme } = useThemeMode()

  const handleSignOut = useCallback(() => {
    signOut()
  }, [signOut])

  if (isLoading) return <div>Loading...</div>

  return isAuthenticated ? (
    <div className="bg-background min-h-screen font-sans antialiased">
      <div className="flex flex-row justify-between px-2 py-2 align-middle">
        <MainNav navData={navData} />

        <div className="flex flex-row space-x-1 align-middle">
          <Button variant="link" onClick={handleSignOut}>
            Sign Out
          </Button>

          <Button variant="ghost" size="icon">
            <Cog className="h-[1.2rem] w-[1.2rem]  transition-all" />
            <span className="sr-only">Settings</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* <ul>
        <span>User roles: </span>
        {userRoles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
      <span>Default Role: {userDeafaultRole}</span> */}

      <Outlet />

      <Toaster />
    </div>
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  )
}

export default Root
