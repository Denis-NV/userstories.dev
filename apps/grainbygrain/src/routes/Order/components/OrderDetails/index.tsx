import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { Input } from '@/components/ui/input'
import { useAccessToken } from '@nhost/react'
import { useMutation } from '@apollo/client'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/utils'
import { CalendarIcon } from '@radix-ui/react-icons'

import { UPDATE_ORDER_MUTATION } from '../../gql'
import { Calendar } from '@/components/ui/calendar'

const FormSchema = z.object({
  comment: z.string().optional(),
  delivery_date: z.date({
    required_error: 'Delivery date is required.',
  }),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  values: TFormData
  orderId?: string
}

const OrderDetails = ({ values, orderId }: TProps) => {
  const accessToken = useAccessToken()

  const [updateOrder, { loading, error }] = useMutation(UPDATE_ORDER_MUTATION, {
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

  const handleSubmit = useCallback(
    ({ comment, delivery_date }: TFormData) => {
      console.log()

      if (orderId) {
        updateOrder({
          variables: {
            id: orderId,
            input: {
              comment,
              delivery_date: format(delivery_date, 'yyyy-MM-dd'),
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
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Input placeholder="Short comment about the order" {...field} />
              </FormControl>
              <FormMessage />
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
                        'w-[240px] pl-3 text-left font-normal',
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
