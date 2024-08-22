import { useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'
import { TrashIcon } from '@radix-ui/react-icons'

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

  // console.log(orders?.length, count)

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
            .sort((a, b) => a.order_nr - b.order_nr)
            .map((order) => (
              <li key={order.id}>
                <Link
                  to={`/order/${order?.id}`}
                  className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                >
                  <span>{`${order.order_nr} - ${order.customer?.name}`}</span>
                </Link>
                <DeleteOrder
                  orderId={order.id}
                  trigger={
                    <Button>
                      <TrashIcon />
                    </Button>
                  }
                />
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
