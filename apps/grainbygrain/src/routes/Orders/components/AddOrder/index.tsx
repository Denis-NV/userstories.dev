import { useCallback, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@apollo/client'
import { useAccessToken } from '@nhost/react'

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

import { ADD_ORDER_MUTATION, LIST_ORDER_FRAGMENT } from '../../gql'

const FormSchema = z.object({
  customer_id: z.string(),
  delivery_date: z.date().optional(),
})

type TFormData = z.infer<typeof FormSchema>

const AddOrder = () => {
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
    onCompleted: () => {
      reset()

      setIsOpen(false)
    },
    update: (cache, { data }) => {
      if (!data?.insert_order_one) return

      cache.modify({
        fields: {
          order: (existing = []) => {
            const newOrder = cache.writeFragment({
              data: data?.insert_order_one,
              fragment: LIST_ORDER_FRAGMENT,
            })

            return [...existing, newOrder]
          },
          order_aggregate: (existing) => ({
            ...existing,
            aggregate: { ...existing?.aggregate, count: existing?.aggregate?.count + 1 },
          }),
        },
      })
    },
  })

  const handleAdd = useCallback(
    ({ customer_id, delivery_date }: TFormData) => {
      addOrder({
        variables: {
          customer_id,
          delivery_date,
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
