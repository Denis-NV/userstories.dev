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
    <Table className="table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead className="hidden w-40 sm:table-cell">Department</TableHead>
          <TableHead className="w-16">Quantity</TableHead>
          <TableHead className="w-24 text-right">Action</TableHead>
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
        <AddOrderProduct orderId={orderId} addedOrderProducts={products} />
      </TableFooter>
    </Table>
  )
}
export default OrderProducts
