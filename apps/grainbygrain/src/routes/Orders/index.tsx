import { useCallback } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { Routes } from '@/const'
import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography'

import { ORDERS_QUERY } from './gql'
import { getParamsFilter, getCursorFilter } from './utils'
import AddOrder from './components/AddOrder'
import Filters from './components/Filters'
import OrderCard from './components/OrderCard'

const limit = 5

const Orders = (): JSX.Element => {
  const accessToken = useAccessToken()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const query = useQuery(ORDERS_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    variables: {
      limit,
      filters: {
        ...getCursorFilter(),
        ...getParamsFilter(searchParams),
      },
    },
  })

  const { data, loading } = query
  const orders = data?.order
  const count = data?.order_aggregate?.aggregate?.count

  const handleLoadMore = useCallback(() => {
    if (orders) {
      query.fetchMore({
        variables: {
          limit,
          filters: {
            ...getCursorFilter(orders),
            ...getParamsFilter(searchParams),
          },
        },
      })
    }
  }, [orders])

  const handleOrderAdd = useCallback(
    (id: string) => {
      navigate(`/${Routes.orders}/${id}`)
    },
    [navigate],
  )

  const showLoadMore = Boolean(orders?.length && count && orders?.length < count)

  return (
    <div className="flex h-full flex-col">
      <div className="mb-2 flex justify-between">
        <TypographyH2 text="Orders" />

        <div className="pt-1">
          <AddOrder onAdded={handleOrderAdd} />
        </div>
      </div>

      <Filters />

      <div className="h-1 w-full shadow-sm" />

      <div className="w-full space-y-1 overflow-auto pb-8">
        {orders &&
          [...orders]
            .sort((a, b) => b.order_nr - a.order_nr)
            .map((order) => <OrderCard key={order.id} order={order} />)}

        {showLoadMore && (
          <div className="flex w-full justify-center pt-6">
            <Button onClick={handleLoadMore} variant="secondary" size="sm">
              Load more
            </Button>
          </div>
        )}

        {loading && (
          <div className="flex w-full justify-center pt-6">
            <span>loading...</span>
          </div>
        )}
      </div>
    </div>
  )
}
export default Orders
