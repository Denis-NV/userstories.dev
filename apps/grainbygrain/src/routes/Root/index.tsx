import { useAuthenticationStatus, useSignOut, useUserDefaultRole, useUserRoles } from '@nhost/react'
import { Outlet, Link, redirect } from 'react-router-dom'

function Root() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()
  const { signOut } = useSignOut()

  const userRoles = useUserRoles()
  const userDeafaultRole = useUserDefaultRole()

  if (isLoading) return <div>Loading...</div>
  if (!isAuthenticated) redirect('/signin')

  return (
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
  )
}

export default Root
