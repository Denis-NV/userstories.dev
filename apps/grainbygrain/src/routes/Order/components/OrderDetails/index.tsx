import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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

import { UPDATE_ORDER_MUTATION } from '../../gql'

const FormSchema = z.object({
  comment: z.string().optional(),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  values: TFormData
  orderId?: string
}

const OrderForm = ({ values, orderId }: TProps) => {
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
    (data: TFormData) => {
      // TODO: Do validation here

      if (orderId) {
        updateOrder({
          variables: {
            id: orderId,
            input: {
              comment: data?.comment,
            },
          },
        })
      }
    },
    [updateOrder, orderId],
  )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-6">
        <div className="flex w-full py-2">
          <div className="flex-1">
            <Button type="submit" disabled={!isDirty}>
              {isDirty ? 'Save changes' : 'No changes to save'}
            </Button>
          </div>
          <div className="flex-1 text-right">
            {loading ? 'Saving changes...' : error && 'Problem saving changes. Please try again'}
          </div>
        </div>
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
      </form>
    </Form>
  )
}
export default OrderForm
