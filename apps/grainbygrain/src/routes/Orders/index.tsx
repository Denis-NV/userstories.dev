import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'
import { useSearchParams, Link } from 'react-router-dom'

import { ORDERS_QUERY } from './gql'

import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography'
import { getParamsFilter, getCursorFilter } from './utils'
import { useCallback } from 'react'
import AddOrder from './components/AddOrder'

const limit = 1

const Orders = (): JSX.Element => {
  const accessToken = useAccessToken()
  const [searchParams, setSearchParams] = useSearchParams()

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

  return (
    <div>
      <div className="flex justify-between">
        <TypographyH2 text="Orders" />
        <AddOrder />
      </div>
      {orders ? (
        <ul>
          {[...orders]
            .sort((order) => (order.order_nr ? -1 : 1))
            .map((order) => (
              <li key={order.id}>
                <Link
                  to={`/order/${order?.id}`}
                  className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                >
                  <span>{`${order?.order_nr} - ${order?.customer?.name}`}</span>
                </Link>
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
