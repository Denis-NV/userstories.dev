import { useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { Routes } from '@/const'
import { Button } from '@/components/ui/button'
import { TypographyH2, TypographyH3 } from '@/components/typography'
import DeleteOrder from '@/components/DeleteOrder'
import MainContainer from '@/components/MainContainer'

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

  return order ? (
    <div className="flex h-full w-full flex-col">
      <MainContainer>
        <div className="bg-background b-2 top-0 z-10 mb-6">
          <div className="mb-2 flex w-full justify-between">
            <TypographyH2 text={`№ ${order?.order_nr}`} />

            <div className="space-x-2 pt-1">
              <Button variant="outline" onClick={handleBackClick} size="sm">
                Back
              </Button>

              {orderId && (
                <DeleteOrder
                  orderId={orderId}
                  trigger={
                    <Button variant="secondary" size="sm">
                      Delete
                    </Button>
                  }
                  onDeleted={handleOrderDelete}
                />
              )}
            </div>
          </div>
          <div className="h-1 w-full shadow-sm" />
        </div>
      </MainContainer>

      <div className="w-full overflow-scroll pb-8">
        <MainContainer>
          <TypographyH3 text="Order Details" />
          <OrderDetails order={order} />

          <TypographyH3 text="Product List" />
          <Products products={products} orderId={orderId} />
        </MainContainer>
      </div>
    </div>
  ) : (
    <MainContainer>{loading && 'loading...'}</MainContainer>
  )
}
export default Order
