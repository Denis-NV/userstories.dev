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
import DeleteProduct from '../DeleteProduct'

const FormSchema = z.object({
  quantity: z.coerce.number(),
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

  const {
    formState: { isDirty },
    watch,
  } = form

  const {
    product: { name, weight, department },
  } = orderProduct

  const handleUpdate = useCallback(
    (data: TFormData) => {
      updateProduct({
        variables: {
          id: orderProduct?.id,
          quantity: data.quantity,
        },
      })
    },
    [updateProduct, orderProduct?.id],
  )

  const noQuantity = !parseInt(String(watch('quantity')))

  // TODO: add error handling strategy

  return (
    <TableRow>
      <TableCell className="font-medium">
        {name} {weight}g
      </TableCell>
      <TableCell className="hidden sm:table-cell">{department?.name}</TableCell>
      <TableCell>
        <Form {...form}>
          <form id={`productForm${orderProduct?.id}`} onSubmit={form.handleSubmit(handleUpdate)} />
          <div className="flex flex-row">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="hidden">Quantity</FormLabel>
                  <FormControl>
                    <Input
                      className="w-16"
                      type="number"
                      min={0}
                      style={{ margin: 0 }}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </Form>
      </TableCell>
      <TableCell className="text-right">
        {noQuantity ? (
          <DeleteProduct orderProdId={orderProduct?.id} />
        ) : (
          <Button
            type="submit"
            size="sm"
            disabled={!isDirty}
            form={`productForm${orderProduct?.id}`}
          >
            Update
          </Button>
        )}
      </TableCell>
    </TableRow>
  )
}
export default OrderProduct
