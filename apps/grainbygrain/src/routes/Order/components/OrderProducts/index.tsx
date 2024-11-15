import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { OrderProduct_On_OrderProductFragment } from '@/gql/graphql'
import {
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import OrderProduct from '../OrderProduct'
import AddOrderProduct from '../AddOrderProduct'

type TProps = {
  products?: OrderProduct_On_OrderProductFragment[]
  orderId?: string
}

const OrderProducts = ({ products, orderId }: TProps) => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const initProducts = state as OrderProduct_On_OrderProductFragment[]

  const handleAdded = useCallback(
    (id: string) => {
      navigate('.', { state: initProducts?.filter((p) => p.id !== id), replace: true })
    },
    [navigate, JSON.stringify(initProducts)],
  )

  return (
    <Table className="table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead className="hidden sm:table-cell">Comment</TableHead>
          <TableHead className="w-16">Quantity</TableHead>
          <TableHead className="w-24 text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {initProducts?.map(({ id, product }) => (
          <AddOrderProduct
            key={id}
            orderId={orderId}
            orderProductId={id}
            productId={product.id}
            addedOrderProducts={products}
            onAdded={handleAdded}
          />
        ))}
        {products?.map((product) => (
          <OrderProduct
            key={product.id}
            values={{ quantity: product.quantity, comment: product.comment ?? '' }}
            orderProduct={product}
          />
        ))}
      </TableBody>
      <TableFooter>
        <AddOrderProduct orderId={orderId} addedOrderProducts={products} />
      </TableFooter>
    </Table>
  )
}
export default OrderProducts
