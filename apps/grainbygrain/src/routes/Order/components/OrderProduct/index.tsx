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

import { DELETE_ORDER_PRODUCT_MUTATION, UPDATE_ORDER_PRODUCT_MUTATION } from '../../gql'

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

  const [updateProduct, updateMutation] = useMutation(UPDATE_ORDER_PRODUCT_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const [deleteProduct, deleteMutation] = useMutation(DELETE_ORDER_PRODUCT_MUTATION, {
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
  } = form

  const {
    product: { name, weight, department },
  } = orderProduct

  const handleUpdate = useCallback(
    (data: TFormData) => {
      // TODO: Do validation here

      updateProduct({
        variables: {
          id: orderProduct?.id,
          quantity: data.quantity,
        },
      })
    },
    [updateProduct, orderProduct?.id],
  )

  const handleDelete = useCallback(() => {
    deleteProduct({
      variables: {
        id: orderProduct?.id,
      },
    })
  }, [deleteProduct, orderProduct?.id])

  return (
    <TableRow>
      <TableCell className="font-medium">
        {name} {weight}g
      </TableCell>
      <TableCell>{department?.name}</TableCell>
      <TableCell>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdate)} className="w-full">
            <div className="flex flex-row">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="hidden">Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" min={1} style={{ margin: 0 }} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              {isDirty && (
                <Button type="submit" disabled={!isDirty}>
                  {updateMutation.loading ? 'Saving...' : 'Save'}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </TableCell>
      <TableCell className="text-right">
        <Button onClick={handleDelete}>{deleteMutation.loading ? 'Deleting...' : 'Delete'}</Button>
      </TableCell>
    </TableRow>
  )
}
export default OrderProduct
