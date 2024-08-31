import { useCallback } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography'
import DeleteOrder from '@/components/DeleteOrder'
import {
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from '@/components/ui/table'

import { ORDERS_QUERY } from './gql'
import { getParamsFilter, getCursorFilter } from './utils'
import AddOrder from './components/AddOrder'
import Filters from './components/Filters'
import OrderCell from './components/OrderCell'

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
      navigate(`/order/${id}`)
    },
    [navigate],
  )

  const showLoadMore = Boolean(orders?.length && count && orders?.length < count)

  return (
    <div className="flex h-full flex-col">
      <div className="mb-2  flex justify-between">
        <TypographyH2 text="Orders" />

        <div className="pt-1">
          <AddOrder onAdded={handleOrderAdd} />
        </div>
      </div>

      <Filters />

      <Table className="table-fixed">
        <TableHeader className="bg-background sticky top-0">
          <TableRow>
            <TableHead className="w-12">Nr.</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="w-28">Delivery</TableHead>
            <TableHead className="w-16 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders &&
            [...orders]
              .sort((a, b) => a.order_nr - b.order_nr)
              .map((order) => (
                <TableRow key={order.id}>
                  <OrderCell orderId={order.id} content={String(order.order_nr)} />
                  <OrderCell
                    orderId={order.id}
                    content={`${order.customer.name}, ${order.customer.district?.name}`}
                  />
                  <OrderCell orderId={order.id} content={order.delivery_date} />

                  <TableCell className="text-right">
                    <DeleteOrder orderId={order.id} />
                  </TableCell>
                </TableRow>
              ))}

          {showLoadMore && (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <Button onClick={handleLoadMore} variant="outline" size="sm">
                  Load more
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          {loading && (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <span>loading...</span>
              </TableCell>
            </TableRow>
          )}
        </TableFooter>
      </Table>
    </div>
  )
}
export default Orders
