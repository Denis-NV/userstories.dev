import { useQuery } from '@apollo/client'
import { useAccessToken } from '@nhost/react'
import { Link, Outlet } from 'react-router-dom'

import { CUSTOMERS_QUERY } from './gql'

const Customers = () => {
  const accessToken = useAccessToken()

  const { data, loading } = useQuery(CUSTOMERS_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const customers = data?.customer

  return (
    <div>
      Customers
      {loading ? (
        <span>Loading query ...</span>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <ul style={{ borderRight: '1px solid grey', paddingRight: '10px', marginRight: '10px' }}>
            {customers?.map((customer, index) => (
              <li key={customer.id}>
                <Link to={`/customers/${customer.id}`}>
                  {index + 1}. {customer.name}
                </Link>
              </li>
            ))}
          </ul>

          <Outlet />
        </div>
      )}
    </div>
  )
}

export default Customers
