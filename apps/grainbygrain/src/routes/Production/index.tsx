import { useSearchParams } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'
import { format } from 'date-fns'

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
import { getParamsFilter } from './utils'
import Filters from './components/Filters'

type TProdStore = Record<string, Record<string, Record<string, number>>>
type TProdLists = [string, Record<string, Record<string, number>>][]

const Production = () => {
  const accessToken = useAccessToken()
  const [searchParams] = useSearchParams()

  const query = useQuery(PRODUCTS_BY_ORDER_DATE_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    variables: {
      filters: {
        ...getParamsFilter(searchParams),
      },
    },
  })

  const { data, loading } = query
  const products = data?.order_product

  const prodStore: TProdStore = {}

  products?.forEach(({ order, product, quantity }) => {
    if (product.department?.name) {
      const dateKey = String(order.delivery_date)
      const depKey = product.department.name
      const prodKey = `${product.name} ${product.weight}g`

      const existingDate = prodStore[dateKey] ?? {}
      const existingDep = existingDate[depKey] ?? {}
      const totalProdQuantity = (existingDep[prodKey] ?? 0) + quantity

      prodStore[dateKey] = {
        ...existingDate,
        [depKey]: { ...existingDep, [prodKey]: totalProdQuantity },
      }
    }
  })

  const prodsByDate: TProdLists = Object.entries(prodStore).sort(
    (a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime(),
  )

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
          {prodsByDate.map(([date, departments]) => (
            <TableRow key={date}>
              <TableCell>
                {Object.entries(departments).map(([depName, prodList]) => (
                  <div key={depName} className="flex w-full flex-row space-x-4">
                    <span className="mb-2 flex-grow-[1]">{format(date, 'dd LLL')}</span>

                    <span className="flex-grow-[3]">{depName}</span>

                    <div className="mb-1 flex-grow-[4]">
                      {Object.entries(prodList).map(([prod, quantity]) => (
                        <div key={prod} className="flex w-full flex-row space-x-4">
                          <span className="flex-1 font-medium">{prod}</span>
                          <span className="px-4 font-semibold">{quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
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
