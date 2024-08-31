import { useCallback } from 'react'
import { useAccessToken } from '@nhost/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@apollo/client'
import { PlusIcon } from '@radix-ui/react-icons'

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
  OrderProduct_On_OrderProductFragment,
  OrderProduct_On_OrderProductFragmentDoc,
  FullOrder_On_OrderFragmentDoc,
} from '@/gql/graphql'

import { ADD_ORDER_PRODUCT_MUTATION, PRODUCST_BY_DEPARTMENT_QUERY } from '../../gql'

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

  // TODO: add error handling strategy

  const addedIds = addedOrderProducts?.map(({ product }) => product.id)

  return (
    <Form {...form}>
      <TableRow>
        <TableCell>
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
                      const uniqueProducts = addedIds
                        ? products.filter(({ id }) => !addedIds.includes(id))
                        : products
                      return (
                        <SelectGroup key={depId}>
                          <SelectLabel>{name}</SelectLabel>

                          {uniqueProducts?.map(({ id: prodId, name, weight }) => (
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
        <TableCell className="hidden sm:table-cell" />
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
            size="sm"
            form="addOrderProductForm"
            disabled={!isValid || addProductMutation.loading}
          >
            <PlusIcon />
          </Button>
        </TableCell>
      </TableRow>
    </Form>
  )
}
export default AddOrderProduct
