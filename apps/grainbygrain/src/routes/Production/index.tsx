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
import ProductTotal from './components/ProductTotal'

type TProdRecord = Record<string, { quantity: number; id: string }>
type TDepRecord = Record<string, { id: string; products: TProdRecord }>
type TDateRecord = Record<string, TDepRecord>
type TProdLists = [string, TDepRecord][]

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

  const prodStore: TDateRecord = {}

  products?.forEach(({ order, product: { id: prodId, name, department, weight }, quantity }) => {
    if (department) {
      const dateKey = String(order.delivery_date)
      const depKey = department.name
      const depId = department.id
      const prodKey = `${name} ${weight}g`

      const existingDate = prodStore[dateKey] ?? {}
      const existingDep = existingDate[depKey] ?? { id: depId, products: {} }
      const existingProd = existingDep.products[prodKey] ?? { id: prodId, quantity: 0 }
      const totalProdQuantity = existingProd.quantity + quantity

      // prodStore[dateKey] = {
      //   ...existingDate,
      //   [depKey]: { ...existingDep, [prodKey]: totalProdQuantity },
      // }

      prodStore[dateKey] = {
        ...existingDate,
        [depKey]: {
          ...existingDep,
          products: {
            ...existingDep.products,
            [prodKey]: { ...existingProd, quantity: totalProdQuantity },
          },
        },
      }

      console.log(prodStore)
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
            <TableHead className="w-16">Delivery</TableHead>
            <TableHead className="w-24">Department</TableHead>
            <TableHead>Production List</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prodsByDate.map(([date, departments]) =>
            Object.entries(departments).map(([depName, { id: depId, products }]) => (
              <TableRow key={depId}>
                <TableCell>
                  <span>{format(date, 'dd LLL')}</span>
                </TableCell>

                <TableCell>
                  <span>{depName}</span>
                </TableCell>
                <TableCell>
                  <div className="space-y-4">
                    {Object.entries(products).map(([prodName, { id: prodId, quantity }]) => (
                      <ProductTotal
                        key={prodId}
                        name={prodName}
                        quantity={quantity}
                        date={date}
                        prodId={prodId}
                      />
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            )),
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
