import { useQuery } from '@apollo/client'
import { useAccessToken } from '@nhost/react'
import { useParams } from 'react-router-dom'

import { CUSTOMER_QUERY } from './gql'

type TRouteParams = {
  customerId: string
}

const Customer = () => {
  const { customerId } = useParams<TRouteParams>()
  const accessToken = useAccessToken()

  const { data } = useQuery(CUSTOMER_QUERY, {
    variables: { id: customerId },
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const customer = data?.customer_by_pk

  return (
    <div>
      {customer ? (
        <ul>
          <li>Name: {customer?.name}</li>
          <li>Address: {customer?.address}</li>
          <li>District: {customer?.district?.name}</li>
          <li>
            Deliver from: {customer?.delivery_start_time} to {customer?.delivery_end_time}
          </li>
        </ul>
      ) : (
        <p>Please select a customer</p>
      )}
    </div>
  )
}
export default Customer
