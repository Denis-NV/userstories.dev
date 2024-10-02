import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Roles, Routes } from '@/const'
import { useAllowedForUser } from '@/utils/isAllowedForUser'
import { OrdersQuery } from '@/gql/graphql'

type TOrderProduct = { id: string; name: string; weight: string; quantity: number }
type TDepRecord = Record<string, { id: string; products: TOrderProduct[] }>
type TProdLists = [string, { id: string; products: TOrderProduct[] }][]

type TProps = { order: OrdersQuery['order'][0] }

const OrderCard = ({ order }: TProps) => {
  const navigate = useNavigate()
  const isAllowed = useAllowedForUser(Roles.order_manager)

  const handleClick = useCallback(() => {
    navigate(`/${Routes.orders}/${order.id}`)
  }, [order.id, navigate])

  const prodStore: TDepRecord = {}

  order.order_products.forEach(({ product, quantity }) => {
    if (product.department) {
      const depKey = product.department.name

      const existingDep = prodStore[depKey] ?? { id: product.department.id, products: [] }

      prodStore[depKey] = {
        ...existingDep,
        products: [
          ...existingDep.products,
          { id: product.id, name: product.name, weight: product.weight, quantity },
        ],
      }
    }
  })

  const departments: TProdLists = Object.entries(prodStore).sort()

  return (
    <button
      key={order.id}
      className="hover:bg-accent flex w-full flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all"
      onClick={handleClick}
      disabled={!isAllowed}
    >
      <div className="mb-1 flex w-full flex-col gap-2">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="font-semibold">
              № {order.order_nr} - {order.customer.name}
            </div>
          </div>
          <div className="text-foreground ml-auto text-xs">{order.delivery_date}</div>
        </div>
        {order.comment && <div className="text-xs font-medium">{order.comment}</div>}
      </div>

      <div className="w-full space-y-2 text-xs">
        {departments.map(([depName, dep]) => {
          return (
            <div key={dep.id}>
              <p className="mb-1 font-semibold">{depName}</p>
              <ul className="text-muted-foreground">
                {dep.products.map((prod) => (
                  <li key={prod.id}>
                    {prod.name} {prod.weight}g - <span className="font-bold">{prod.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </button>
  )
}
export default OrderCard
