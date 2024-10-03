import { useCallback, useState } from 'react'
import { useAccessToken } from '@nhost/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import ProductSelect from '@/components/ProductSelect'
import {
  OrderProduct_On_OrderProductFragment,
  OrderProduct_On_OrderProductFragmentDoc,
  FullOrder_On_OrderFragmentDoc,
} from '@/gql/graphql'

import { ADD_ORDER_PRODUCT_MUTATION } from '../../gql'

const orderFragmentOptions = {
  fragment: {
    ...FullOrder_On_OrderFragmentDoc,
    definitions: [
      ...FullOrder_On_OrderFragmentDoc.definitions,
      ...OrderProduct_On_OrderProductFragmentDoc.definitions,
    ],
  },
  fragmentName: 'fullOrder_on_Order',
}

const FormSchema = z.object({
  productId: z.string().min(1),
  quantity: z.coerce.number(),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  orderId?: string
  addedOrderProducts?: OrderProduct_On_OrderProductFragment[]
}

const AddOrderProduct = ({ orderId, addedOrderProducts }: TProps) => {
  const accessToken = useAccessToken()
  const [showAdd, setShowAddd] = useState(false)

  const handleAddProduct = useCallback(() => {
    setShowAddd(true)
  }, [setShowAddd])

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: { productId: '' },
  })

  const {
    formState: { isValid },
    reset,
    register,
  } = form

  const [addProduct, addProductMutation] = useMutation(ADD_ORDER_PRODUCT_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    onCompleted: () => {
      reset()
      setShowAddd(false)
    },
    update: (cache, { data }) => {
      if (!data?.insert_order_product_one) return

      const id = `order:${orderId}`
      const prev = cache.readFragment({
        id,
        ...orderFragmentOptions,
      })

      const updatedOrder = {
        ...prev,
        order_products: [...(prev?.order_products ?? []), { ...data?.insert_order_product_one }],
      }

      cache.writeFragment({
        id,
        data: updatedOrder,
        ...orderFragmentOptions,
      })

      cache.modify({
        fields: {
          order_aggregate: (_, { DELETE }) => {
            return DELETE
          },
          order: (_, { DELETE }) => {
            return DELETE
          },
        },
      })
    },
  })

  const handleAdd = useCallback(
    (data: TFormData) => {
      addProduct({
        variables: {
          order_id: orderId,
          product_id: data.productId,
          quantity: data.quantity,
        },
      })
    },
    [orderId, addProduct],
  )

  // TODO: add error handling strategy

  const addedIds = addedOrderProducts?.map(({ product }) => product.id)

  return (
    <Form {...form}>
      {showAdd ? (
        <TableRow>
          <TableCell>
            <form id="addOrderProductForm" onSubmit={form.handleSubmit(handleAdd)} />
            <FormField
              control={form.control}
              name="productId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="hidden">Product</FormLabel>
                  <ProductSelect
                    onChange={field.onChange}
                    value={field.value}
                    TriggerWrapperComp={FormControl}
                    excludeIds={addedIds}
                  />
                </FormItem>
              )}
            />
          </TableCell>
          <TableCell className="hidden sm:table-cell" />
          <TableCell className="min-w-44">
            <FormItem>
              <FormLabel className="hidden">Quantity</FormLabel>
              <FormControl>
                <Input
                  className="w-16"
                  type="number"
                  style={{ margin: 0 }}
                  min={0}
                  {...register('quantity')}
                />
              </FormControl>
            </FormItem>
          </TableCell>
          <TableCell className="text-right">
            <Button
              type="submit"
              size="sm"
              form="addOrderProductForm"
              disabled={!isValid || addProductMutation.loading}
            >
              Add
            </Button>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell colSpan={4} align="center" className="hidden sm:table-cell">
            <Button onClick={handleAddProduct} size="sm">
              Add product
            </Button>
          </TableCell>
          <TableCell colSpan={3} align="center" className="table-cell sm:hidden">
            <Button onClick={handleAddProduct} size="sm">
              Add product
            </Button>
          </TableCell>
        </TableRow>
      )}
    </Form>
  )
}
export default AddOrderProduct
