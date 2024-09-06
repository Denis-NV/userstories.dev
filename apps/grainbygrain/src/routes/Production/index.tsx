import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography'
import {
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from '@/components/ui/table'

import { PRODUCTS_BY_ORDER_DATE_QUERY } from './gql'
import { getParamsFilter, getCursorFilter } from './utils'
import Filters from './components/Filters'

const limit = 7

type TProdList = Record<string, Record<string, Record<string, number>>>

const Production = () => {
  const accessToken = useAccessToken()
  const [searchParams] = useSearchParams()

  const query = useQuery(PRODUCTS_BY_ORDER_DATE_QUERY, {
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
  const products = data?.order_product
  const count = data?.order_product_aggregate?.aggregate?.count

  const prodStore: TProdList = {}

  products?.forEach(({ order, product, quantity }) => {
    if (product.department?.name) {
      const dateKey = String(order.delivery_date)
      const depKey = product.department.name
      const prodKey = `${product.name} - ${product.weight}g`

      const existingDate = prodStore[dateKey] ?? {}
      const existingDep = existingDate[depKey] ?? {}
      const totalProdQuantity = (existingDep[prodKey] ?? 0) + quantity

      prodStore[dateKey] = {
        ...existingDate,
        [depKey]: { ...existingDep, [prodKey]: totalProdQuantity },
      }
    }
  })

  const handleLoadMore = useCallback(() => {
    // if (orders) {
    //   query.fetchMore({
    //     variables: {
    //       limit,
    //       filters: {
    //         ...getCursorFilter(orders),
    //         ...getParamsFilter(searchParams),
    //       },
    //     },
    //   })
    // }
  }, [])

  const showLoadMore = Boolean(products?.length && count && products?.length < count)

  const prodsByDate = Object.entries(prodStore).sort(
    (a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime(),
  )

  if (showLoadMore) prodsByDate.pop()

  console.log(prodsByDate)

  return (
    <div className="flex h-full flex-col">
      <div className="mb-2 ">
        <TypographyH2 text="Production List" />
      </div>

      <Filters />

      <Table className="table-fixed">
        <TableHeader className="bg-background sticky top-0">
          <TableRow>
            <TableHead>Production List</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {orders &&
            [...orders]
              .sort((a, b) => b.order_nr - a.order_nr)
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
              ))} */}

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
export default Production
