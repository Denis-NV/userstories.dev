import { useAuthenticationStatus, useSignOut, useUserDefaultRole, useUserRoles } from '@nhost/react'
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

  const userRoles = useUserRoles()
  const userDeafaultRole = useUserDefaultRole()

  const { setTheme } = useThemeMode()

  if (isLoading) return <div>Loading...</div>

  return isAuthenticated ? (
    <div>
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
      <ul>
        <li>
          <Link to={`/customers`}>Customers</Link>
        </li>
        <li>
          <Link to={`/products`}>Products</Link>
        </li>
        <li>
          <Link to={`/orders`}>Orders</Link>
        </li>
      </ul>

      <h1>grain-by-grain</h1>
      {isAuthenticated && <button onClick={() => signOut()}>Sign Out</button>}

      <ul>
        <span>User roles: </span>
        {userRoles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
      <span>Default Role: {userDeafaultRole}</span>
      <hr />

      <Outlet />
    </div>
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  )
}

export default Root
