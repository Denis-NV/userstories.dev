import { useCallback } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { TypographyH2 } from '@/components/typography'
import { Button } from '@/components/ui/button'

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
  const navigate = useNavigate()

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
    }
  })

  const prodsByDate: TProdLists = Object.entries(prodStore).sort(
    (a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime(),
  )

  const handleBackClick = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <div className="flex h-full flex-col">
      <div className="mb-2 flex w-full justify-between">
        <TypographyH2 text="Production List" />

        <div className="pt-1">
          <Button variant="outline" onClick={handleBackClick} size="sm">
            Back
          </Button>
        </div>
      </div>

      <Filters />

      <div className="h-1 w-full shadow-sm" />

      <div className="w-full space-y-1 overflow-auto pb-8">
        {prodsByDate.map(([date, departments], index) => {
          return (
            <div
              key={index}
              className="hover:bg-accent flex w-full flex-row items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all"
            >
              <div className="flex flex-col items-start gap-4">
                {Object.entries(departments).map(([depName, { id: depId, products }]) => (
                  <div key={depId} className="flex w-full flex-col gap-2">
                    <div className="font-semibold">{depName}</div>

                    <ul className="text-muted-foreground w-full text-xs">
                      {Object.entries(products).map(([prodName, { id: prodId, quantity }]) => (
                        <ProductTotal
                          key={prodId}
                          name={prodName}
                          quantity={quantity}
                          date={date}
                          prodId={prodId}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="text-foreground ml-auto text-xs">{date}</div>
            </div>
          )
        })}

        {loading && (
          <div className="flex w-full justify-center pt-6">
            <span>loading...</span>
          </div>
        )}
      </div>
    </div>
  )
}
export default Production
