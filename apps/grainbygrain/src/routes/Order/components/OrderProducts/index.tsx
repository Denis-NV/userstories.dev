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
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Department</TableHead>
          <TableHead className="min-w-44">Quantity</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product) => (
          <OrderProduct
            key={product.id}
            values={{ quantity: product.quantity }}
            orderProduct={product}
          />
        ))}
      </TableBody>
      <TableFooter>
        <AddOrderProduct orderId={orderId} />
      </TableFooter>
    </Table>
  )
}
export default OrderProducts
