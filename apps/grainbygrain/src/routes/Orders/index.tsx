import { useCallback } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
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

const limit = 3

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

  // console.log(orders?.length, count)

  return (
    <div>
      <div className="flex justify-between">
        <TypographyH2 text="Orders" />
        <AddOrder onAdded={handleOrderAdd} />
      </div>

      <Filters />

      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead>Nr.</TableHead>
            <TableHead className="w-24">Customer</TableHead>
            <TableHead className="w-32">Delivery</TableHead>
            <TableHead className="w-16 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders &&
            [...orders]
              .sort((a, b) => a.order_nr - b.order_nr)
              .map((order) => (
                <TableRow key={order.id}>
                  <TableCell
                    className="font-medium"
                    onClick={() => console.log('clicked', order.order_nr)}
                  >
                    <Link
                      to={`/order/${order?.id}`}
                      className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                    >
                      <span>{order.order_nr}</span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    {' '}
                    <Link
                      to={`/order/${order?.id}`}
                      className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                    >
                      <span>{order.customer.name}</span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <span>{order.delivery_date}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DeleteOrder orderId={order.id} />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
        <TableFooter>
          {loading ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <span>loading...</span>
              </TableCell>
            </TableRow>
          ) : (
            showLoadMore && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <Button onClick={handleLoadMore}>Load more</Button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableFooter>
      </Table>
    </div>
  )
}
export default Orders
