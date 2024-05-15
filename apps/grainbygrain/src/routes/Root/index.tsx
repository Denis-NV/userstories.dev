import { useAuthenticationStatus, useSignOut, useUserDefaultRole, useUserRoles } from '@nhost/react'
import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'

function Root() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()
  const { signOut } = useSignOut()
  const location = useLocation()

  const userRoles = useUserRoles()
  const userDeafaultRole = useUserDefaultRole()

  if (isLoading) return <div>Loading...</div>

  return isAuthenticated ? (
    <div>
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

      <span>User roles: </span>
      <ul>
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
