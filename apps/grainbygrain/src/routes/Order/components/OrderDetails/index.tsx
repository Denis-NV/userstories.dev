import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { useAccessToken } from '@nhost/react'
import { useMutation, useQuery } from '@apollo/client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { CalendarIcon } from '@radix-ui/react-icons'
import { cn, removeNulls } from '@/utils'
import { Order_OrderFragmentFragment } from '@/gql/graphql'

import {
  CUSTOMERS_BY_DISTRICT_QUERY,
  DELIVERY_METHODS_QUERY,
  UPDATE_ORDER_MUTATION,
} from '../../gql'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const FormSchema = z.object({
  comment: z.string().optional(),
  delivery_date: z.date().optional(),
  delivery_method_id: z.string().optional(),
  customer_id: z.string(),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  order: Order_OrderFragmentFragment
}

const OrderDetails = ({ order }: TProps) => {
  const accessToken = useAccessToken()

  const { data: methodsData } = useQuery(DELIVERY_METHODS_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })
  const methods = methodsData?.delivery_method

  const { data: customersData } = useQuery(CUSTOMERS_BY_DISTRICT_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })
  const districts = customersData?.district

  const [updateOrder, { loading, error }] = useMutation(UPDATE_ORDER_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
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
    ({ comment, delivery_date, delivery_method_id }: TFormData) => {
      if (orderId) {
        updateOrder({
          variables: {
            id: orderId,
            input: {
              comment,
              delivery_date,
              delivery_method_id,
            },
          },
        })
      }
    },
    [updateOrder, orderId],
  )

  const [calendarOpen, setCalendarOpen] = useState(false)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="customer_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger disabled={!districts} className="max-w-96">
                    <SelectValue placeholder="Select customer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="max-h-60 max-w-96">
                  {districts?.map(({ id: distId, name, customers }) => {
                    return (
                      <SelectGroup key={distId}>
                        <SelectLabel>{name}</SelectLabel>

                        {customers?.map(({ id: custId, name }) => (
                          <SelectItem key={custId} value={custId} className="ml-3">
                            {name}
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

        <FormField
          control={form.control}
          name="delivery_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Delivery date</FormLabel>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'max-w-96 pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(e) => {
                      field.onChange(e)
                      setCalendarOpen(false)
                    }}
                    disabled={{ before: new Date() }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="delivery_method_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery method</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="max-w-96" disabled={!methods}>
                    <SelectValue placeholder="Select delivery method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="max-h-60 max-w-96">
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
                  className="max-w-96 resize-none"
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
            <Button type="submit" disabled={!isDirty}>
              {isDirty ? 'Save changes' : 'No changes to save'}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
export default OrderDetails
