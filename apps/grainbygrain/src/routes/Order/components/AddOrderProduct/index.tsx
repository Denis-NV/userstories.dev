import { useCallback } from 'react'
import { useAccessToken } from '@nhost/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@apollo/client'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  OrderProduct_On_OrderProductFragmentDoc,
  Order_OrderFragmentFragmentDoc,
} from '@/gql/graphql'

import { ADD_ORDER_PRODUCT_MUTATION, PRODUCST_BY_DEPARTMENT_QUERY } from '../../gql'

const orderFragmentOptions = {
  fragment: {
    ...Order_OrderFragmentFragmentDoc,
    definitions: [
      ...Order_OrderFragmentFragmentDoc.definitions,
      ...OrderProduct_On_OrderProductFragmentDoc.definitions,
    ],
  },
  fragmentName: 'Order_OrderFragment',
}

const FormSchema = z.object({
  productId: z.string().min(1),
  quantity: z.coerce.number(),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  orderId?: string
}

const AddOrderProduct = ({ orderId }: TProps) => {
  const accessToken = useAccessToken()

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: { quantity: 1, productId: '' },
  })

  const {
    formState: { isValid },
    reset,
  } = form

  const productsQuery = useQuery(PRODUCST_BY_DEPARTMENT_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const departments = productsQuery.data?.department

  const [addProduct, addProductMutation] = useMutation(ADD_ORDER_PRODUCT_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    onCompleted: () => reset(),
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

  return (
    <Form {...form}>
      <TableRow>
        <TableCell colSpan={2}>
          <form id="addOrderProductForm" onSubmit={form.handleSubmit(handleAdd)} />
          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Product</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger disabled={!productsQuery.data} style={{ margin: 0 }}>
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-60">
                    {departments?.map(({ id: depId, name, products }) => {
                      return (
                        <SelectGroup key={depId}>
                          <SelectLabel>{name}</SelectLabel>

                          {products?.map(({ id: prodId, name, weight }) => (
                            <SelectItem key={prodId} value={prodId} className="ml-3">
                              {name} {weight}g
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      )
                    })}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </TableCell>
        <TableCell className="min-w-44">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Quantity</FormLabel>
                <FormControl>
                  <Input className="w-16" type="number" min={1} style={{ margin: 0 }} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </TableCell>
        <TableCell className="text-right">
          <Button
            type="submit"
            form="addOrderProductForm"
            disabled={!isValid || addProductMutation.loading}
          >
            Add
          </Button>
        </TableCell>
      </TableRow>
    </Form>
  )
}
export default AddOrderProduct
