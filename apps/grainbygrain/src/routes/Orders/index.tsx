import { useCallback } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { ORDERS_QUERY } from './gql'

import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography'
import DeleteOrder from '@/components/DeleteOrder'

import { getParamsFilter, getCursorFilter } from './utils'
import AddOrder from './components/AddOrder'

const limit = 3

const Orders = (): JSX.Element => {
  const accessToken = useAccessToken()
  const [searchParams, setSearchParams] = useSearchParams()
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
  }, [setSearchParams, orders])

  const handleOrderAdd = useCallback(
    (id: string) => {
      navigate(`/order/${id}`)
    },
    [navigate],
  )

  return (
    <div>
      <div className="flex justify-between">
        <TypographyH2 text="Orders" />
        <AddOrder onAdded={handleOrderAdd} />
      </div>
      {orders ? (
        <ul>
          {[...orders]
            .sort((a, b) => a.order_nr - b.order_nr)
            .map((order) => (
              <li key={order.id} className="space-x-2">
                <Link
                  to={`/order/${order?.id}`}
                  className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                >
                  <span>{`${order.order_nr} - ${order.customer?.name}`}</span>
                </Link>
                <DeleteOrder orderId={order.id} />
              </li>
            ))}
        </ul>
      ) : (
        <div>{loading && 'loading...'}</div>
      )}

      {orders?.length && count && orders?.length < count && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </div>
  )
}
export default Orders
