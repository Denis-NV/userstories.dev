import { useQuery } from '@apollo/client'
import { useAccessToken } from '@nhost/react'
import { Link } from 'react-router-dom'

import { CUSTOMERS_QUERY } from './gql'

const Customers = () => {
  const accessToken = useAccessToken()

  const { data, loading } = useQuery(CUSTOMERS_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  return (
    <div>
      Customers
      <ul>
        <li>
          <Link to={`/customers/1`}>Customers 1</Link>
        </li>
        <li>
          <Link to={`/customers/2`}>Customers 2</Link>
        </li>
      </ul>
      {loading ? (
        <span>Loading query ...</span>
      ) : (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default Customers
