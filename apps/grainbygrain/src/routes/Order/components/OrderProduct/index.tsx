import { useCallback } from 'react'
import { useMutation } from '@apollo/client'
import { useAccessToken } from '@nhost/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

import { OrderProduct_On_OrderProductFragment } from '@/gql/graphql'
import { TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { UPDATE_ORDER_PRODUCT_MUTATION } from '../../gql'
import DeleteProduct from '../DeleteOrderProduct'

const FormSchema = z.object({
  quantity: z.coerce.number(),
  comment: z.string(),
})

export type TFormData = z.infer<typeof FormSchema>

type TProps = {
  orderProduct: Omit<OrderProduct_On_OrderProductFragment, 'quantity'>
  values: TFormData
}

const OrderProduct = ({ values, orderProduct }: TProps) => {
  const accessToken = useAccessToken()

  const [updateProduct] = useMutation(UPDATE_ORDER_PRODUCT_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    values,
  })

  const { watch } = form

  const {
    product: { name, weight },
  } = orderProduct

  const handleUpdate = useCallback(
    (data: TFormData) => {
      updateProduct({
        variables: {
          id: orderProduct?.id,
          quantity: data.quantity,
          comment: data.comment,
        },
      })
    },
    [updateProduct, orderProduct?.id],
  )

  const quantity = parseInt(String(watch('quantity')))
  const comment = watch('comment')
  const noQuantity = !quantity
  const newValues = quantity !== values.quantity || comment !== values.comment

  // TODO: add error handling strategy

  return (
    <Form {...form}>
      <TableRow>
        <TableCell className="font-medium">
          {name} {weight}g
        </TableCell>
        <TableCell className="hidden sm:table-cell">
          <form id={`productForm${orderProduct?.id}`} onSubmit={form.handleSubmit(handleUpdate)} />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Comment</FormLabel>
                <FormControl>
                  <Input style={{ margin: 0 }} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </TableCell>
        <TableCell>
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Quantity</FormLabel>
                <FormControl>
                  <Input className="w-16" type="number" min={0} style={{ margin: 0 }} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </TableCell>
        <TableCell className="text-right">
          {noQuantity ? (
            <DeleteProduct orderProdId={orderProduct?.id} />
          ) : (
            <Button
              type="submit"
              size="sm"
              disabled={!newValues}
              form={`productForm${orderProduct?.id}`}
            >
              Update
            </Button>
          )}
        </TableCell>
      </TableRow>
    </Form>
  )
}
export default OrderProduct
