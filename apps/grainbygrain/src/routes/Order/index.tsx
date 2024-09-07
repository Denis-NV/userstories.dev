import { useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { Routes } from '@/const'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DeleteOrder from '@/components/DeleteOrder'
import { TypographyH2 } from '@/components/typography'

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

  const handleOrderDelete = useCallback(() => {
    navigate(`/${Routes.orders}`)
  }, [navigate])

  const handleBackClick = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <div className="h-full overflow-scroll pb-10">
      {order ? (
        <Tabs defaultValue="details" className="w-full ">
          <div className="bg-background b-2 sticky top-0 z-10 mb-6">
            <div className="mb-2 flex w-full justify-between">
              <TypographyH2 text={`Order - ${order?.order_nr}`} />

              <div className="space-x-2 pt-1">
                <Button onClick={handleBackClick} size="sm">
                  Back
                </Button>

                {orderId && (
                  <DeleteOrder
                    orderId={orderId}
                    trigger={
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    }
                    onDeleted={handleOrderDelete}
                  />
                )}
              </div>
            </div>

            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="details">
            <OrderDetails order={order} />
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
