import { useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useMutation, useQuery } from '@apollo/client'

import { Button } from '@/components/ui/button'
import { removeNulls } from '@/utils'

import { TOrderRouteParams } from './types'
import { ORDER_QUERY, UPDATE_ORDER_MUTATION } from './gql'
import OrderForm, { TFormData } from './components/OrderForm'

const Order = (): JSX.Element => {
  const { orderId } = useParams<TOrderRouteParams>()
  const accessToken = useAccessToken()
  const navigate = useNavigate()

  const [updateOrder] = useMutation(UPDATE_ORDER_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

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

  const handleSubmit = useCallback(
    ({ comment }: TFormData) => {
      updateOrder({
        variables: {
          id: orderId,
          comment: comment,
        },
      })
    },
    [updateOrder, orderId],
  )

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <br />
      {order ? (
        <div>
          Order nr: {order?.order_nr}
          <OrderForm values={{ comment: removeNulls(order.comment) }} onSubmit={handleSubmit} />
        </div>
      ) : (
        <div>{loading && 'loading...'}</div>
      )}
    </div>
  )
}
export default Order
