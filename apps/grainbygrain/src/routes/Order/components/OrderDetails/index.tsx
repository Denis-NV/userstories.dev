import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAccessToken } from '@nhost/react'
import { useMutation, useQuery } from '@apollo/client'
import { format } from 'date-fns'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormLabel } from '@/components/ui/form'
import { removeNulls } from '@/utils'
import { FullOrder_On_OrderFragment } from '@/gql/graphql'

import { DELIVERY_METHODS_QUERY, UPDATE_ORDER_MUTATION } from '../../gql'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import DeliveryDateSelectField from '@/components/DeliveryDateSelectField'
import CustomerSelect from '@/components/CustomerSelect'

const FormSchema = z.object({
  comment: z.string().optional(),
  delivery_date: z.date().optional(),
  delivery_method_id: z.string().optional(),
  customer_id: z.string(),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  order: FullOrder_On_OrderFragment
}

const OrderDetails = ({ order }: TProps) => {
  const accessToken = useAccessToken()

  const { data: methodsData } = useQuery(DELIVERY_METHODS_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })
  const methods = methodsData?.delivery_method

  const [updateOrder, { loading, error }] = useMutation(UPDATE_ORDER_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    update: (cache, { data }) => {
      if (!data?.update_order_by_pk) return

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

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    values: {
      comment: removeNulls(order.comment),
      delivery_date: new Date(order.delivery_date),
      delivery_method_id: order.delivery_method?.id,
      customer_id: order.customer?.id,
    },
  })

  const {
    formState: { isDirty },
  } = form

  const orderId = order.id

  const handleSubmit = useCallback(
    ({ comment, delivery_date, delivery_method_id, customer_id }: TFormData) => {
      if (orderId) {
        updateOrder({
          variables: {
            id: orderId,
            input: {
              comment,
              delivery_date: delivery_date ? format(delivery_date, 'yyyy-MM-dd') : undefined,
              delivery_method_id,
              customer_id,
            },
          },
        })
      }
    },
    [updateOrder, orderId],
  )

  return (
    <Form {...form}>
      <form id="orderDetailsForm" onSubmit={form.handleSubmit(handleSubmit)} />

      <table className="mb-3 w-full table-fixed caption-bottom border-separate border-spacing-1 text-sm">
        <thead>
          <tr>
            <th className="w-32" />
            <th />
          </tr>
        </thead>
        <tbody>
          <DeliveryDateSelectField control={form.control} name="delivery_date" table />

          <FormField
            control={form.control}
            name="customer_id"
            render={({ field }) => (
              <tr>
                <td>
                  <FormLabel>Customer: </FormLabel>
                </td>
                <td>
                  <CustomerSelect
                    value={field.value}
                    onChange={field.onChange}
                    TriggerWrapperComp={FormControl}
                  />
                </td>
              </tr>
            )}
          />

          <FormField
            control={form.control}
            name="delivery_method_id"
            render={({ field }) => (
              <tr>
                <td>
                  <FormLabel>Delivery method:</FormLabel>
                </td>
                <td>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger disabled={!methods}>
                        <SelectValue placeholder="Select delivery method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-60">
                      {methods?.map(({ id, name }) => (
                        <SelectItem key={id} value={id}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
              </tr>
            )}
          />

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <tr>
                <td>
                  <FormLabel>Comment:</FormLabel>
                </td>
                <td>
                  <FormControl>
                    <Textarea
                      placeholder="Short comment about the order"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                </td>
              </tr>
            )}
          />
        </tbody>
      </table>

      <div className="mb-6 flex w-full py-2">
        <div className="flex flex-1 flex-row items-center">
          {loading ? 'Saving changes...' : error && 'Problem saving changes. Please try again'}
        </div>
        <div className="flex-1 text-right">
          <Button size="sm" type="submit" disabled={!isDirty} form="orderDetailsForm">
            Update details
          </Button>
        </div>
      </div>
    </Form>
  )
}
export default OrderDetails
