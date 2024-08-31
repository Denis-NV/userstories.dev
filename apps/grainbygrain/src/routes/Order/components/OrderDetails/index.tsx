import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAccessToken } from '@nhost/react'
import { useMutation, useQuery } from '@apollo/client'
import { format } from 'date-fns'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
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
import CustomerSelectField from '@/components/CustomerSelectField'
import DeliveryDateSelectField from '@/components/DeliveryDateSelectField'

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
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mx-auto w-full max-w-xl space-y-6"
      >
        <CustomerSelectField<TFormData> control={form.control} name="customer_id" />

        <DeliveryDateSelectField<TFormData> control={form.control} name="delivery_date" />

        <FormField
          control={form.control}
          name="delivery_method_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery method</FormLabel>
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
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Short comment about the order"
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full py-2">
          <div className="flex flex-1 flex-row items-center">
            {loading ? 'Saving changes...' : error && 'Problem saving changes. Please try again'}
          </div>
          <div className="flex-1 text-right">
            <Button size="sm" type="submit" disabled={!isDirty}>
              {isDirty ? 'Save changes' : 'No changes to save'}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
export default OrderDetails
