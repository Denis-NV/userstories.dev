import { useParams, useNavigate } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { removeNulls } from '@/utils'

import { TOrderRouteParams } from './types'
import { ORDER_QUERY } from './gql'
import OrderDetails from './components/OrderDetails'
import Products from './components/OrderProducts'

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
  const products = data?.order_by_pk?.order_products

  return (
    <div>
      <div className="flex w-full py-2 ">
        <div className="flex flex-1 flex-row items-center">Order nr: {order?.order_nr}</div>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>

      {order ? (
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <OrderDetails
              values={{ comment: removeNulls(order.comment), delivery_date: order.delivery_date }}
              orderId={orderId}
            />
          </TabsContent>
          <TabsContent value="products">
            <Products products={products} orderId={orderId} />
          </TabsContent>
        </Tabs>
      ) : (
        <div>{loading && 'loading...'}</div>
      )}
    </div>
  )
}
export default Order
