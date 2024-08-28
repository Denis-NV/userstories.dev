import { useCallback, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@apollo/client'
import { useAccessToken } from '@nhost/react'
import { format } from 'date-fns'

import CustomerSelectField from '@/components/CustomerSelectField'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import DeliveryDateSelectField from '@/components/DeliveryDateSelectField'

import { ADD_ORDER_MUTATION } from '../../gql'

const FormSchema = z.object({
  customer_id: z.string(),
  delivery_date: z.date().optional(),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  onAdded?: (orderId: string) => void
}

const AddOrder = ({ onAdded }: TProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const accessToken = useAccessToken()

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      delivery_date: new Date(),
    },
  })

  const {
    formState: { isValid },
    reset,
  } = form

  const [addOrder, addOrderMutation] = useMutation(ADD_ORDER_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    onCompleted: ({ insert_order_one }) => {
      reset()

      setIsOpen(false)

      if (onAdded && insert_order_one) onAdded(insert_order_one.id)
    },
    update: (cache, { data }) => {
      if (!data?.insert_order_one) return

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
    ({ customer_id, delivery_date }: TFormData) => {
      addOrder({
        variables: {
          customer_id,
          delivery_date: delivery_date ? format(delivery_date, 'yyyy-MM-dd') : undefined,
        },
      })
    },
    [addOrder],
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add order</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAdd)} className="w-full space-y-6">
            <DialogHeader>
              <DialogTitle>New order</DialogTitle>
              <DialogDescription>
                Add minumum information to create an order and then edit its details
              </DialogDescription>
            </DialogHeader>

            <CustomerSelectField<TFormData> control={form.control} name="customer_id" />

            <DeliveryDateSelectField<TFormData> control={form.control} name="delivery_date" />

            <DialogFooter>
              <Button type="submit" disabled={!isValid || addOrderMutation.loading}>
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
export default AddOrder
