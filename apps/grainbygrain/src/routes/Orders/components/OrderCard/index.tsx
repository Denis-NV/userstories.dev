import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { OrdersQuery } from '@/gql/graphql'
import { Routes } from '@/const'

type TProps = { order: OrdersQuery['order'][0] }

const OrderCard = ({ order }: TProps) => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(`/${Routes.orders}/${order.id}`)
  }, [order.id, navigate])

  return (
    <button
      key={order.id}
      className="hover:bg-accent flex w-full flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all"
      onClick={handleClick}
    >
      <div className="flex w-full flex-col gap-1">
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

      <ul className="text-muted-foreground w-full text-xs">
        {order.order_products.map((item) => (
          <li key={item.id}>
            {item.product.name} {item.product.weight}g -{' '}
            <span className="font-bold">{item.quantity}</span>
          </li>
        ))}
      </ul>
    </button>
  )
}
export default OrderCard
