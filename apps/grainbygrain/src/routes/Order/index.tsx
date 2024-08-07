import { useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useMutation, useQuery } from '@apollo/client'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { removeNulls } from '@/utils'

import { TOrderRouteParams } from './types'
import { ORDER_QUERY, UPDATE_ORDER_MUTATION } from './gql'
import OrderForm, { TFormData } from './components/OrderForm'

const Order = (): JSX.Element => {
  const { orderId } = useParams<TOrderRouteParams>()
  const accessToken = useAccessToken()
  const navigate = useNavigate()

  const [updateOrder, mutation] = useMutation(UPDATE_ORDER_MUTATION, {
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

  const handleUpdate = useCallback(
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
          <div className="flex w-full py-2">
            <div className="flex-1">Order nr: {order?.order_nr}</div>
            <div className="flex-1 text-right">{mutation.loading && 'Saving changes...'}</div>
          </div>
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <OrderForm values={{ comment: removeNulls(order.comment) }} onUpdate={handleUpdate} />
            </TabsContent>
            <TabsContent value="products">Product list</TabsContent>
          </Tabs>
        </div>
      ) : (
        <div>{loading && 'loading...'}</div>
      )}
    </div>
  )
}
export default Order
