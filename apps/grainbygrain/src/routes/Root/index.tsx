import {
  useAuthenticationStatus,
  useSignOut,
  // useUserDefaultRole,
  // useUserRoles,
} from '@nhost/react'
import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'

import useThemeMode from '@/context/ThemeModeProvider/useThemeMode'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

function Root() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()
  const { signOut } = useSignOut()
  const location = useLocation()

  // const userRoles = useUserRoles()
  // const userDeafaultRole = useUserDefaultRole()

  const { setTheme } = useThemeMode()

  if (isLoading) return <div>Loading...</div>

  return isAuthenticated ? (
    <div>
      <div className="flex flex-row justify-between align-middle">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Toggle theme</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <span className="text-lg font-semibold sm:text-3xl">Grain by Grain</span>

        {isAuthenticated && <Button onClick={() => signOut()}>Sign Out</Button>}
      </div>

      <nav className={'mx-6 flex items-center space-x-4 lg:space-x-6'}>
        <Link
          to={`/customers`}
          className="hover:text-primary text-sm font-medium transition-colors"
        >
          Customers
        </Link>
        <Link
          to={`/products`}
          className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
        >
          Products
        </Link>
        <Link
          to={`/orders`}
          className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
        >
          Orders
        </Link>
      </nav>

      {/* <ul>
        <span>User roles: </span>
        {userRoles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
      <span>Default Role: {userDeafaultRole}</span> */}
      <hr />

      <Outlet />
    </div>
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  )
}

export default Root
