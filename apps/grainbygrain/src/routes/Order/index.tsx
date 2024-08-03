import { useParams, useNavigate } from 'react-router-dom'
import { TOrderRouteParams } from './types'
import { Button } from '@/components/ui/button'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'
import { ORDER_QUERY } from './gql'

const Order = (): JSX.Element => {
  const { orderId } = useParams<TOrderRouteParams>()
  const accessToken = useAccessToken()
  const navigate = useNavigate()

  const query = useQuery(ORDER_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    variables: {
      id: orderId,
    },
  })

  const { data, loading } = query
  const order = data?.order_by_pk

  console.log(order)

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <br />
      {order ? <div>Order nr: {order?.order_nr}</div> : <div>{loading && 'loading...'}</div>}
    </div>
  )
}
export default Order
