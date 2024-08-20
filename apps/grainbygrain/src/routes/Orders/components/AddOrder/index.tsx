import { useCallback } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

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

const FormSchema = z.object({
  customer_id: z.string(),
  delivery_date: z.date().optional(),
})

type TFormData = z.infer<typeof FormSchema>

const AddOrder = () => {
  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      delivery_date: new Date(),
    },
  })

  const handleSubmit = useCallback(({ customer_id, delivery_date }: TFormData) => {
    console.log(customer_id, delivery_date)
  }, [])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add order</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-6">
            <DialogHeader>
              <DialogTitle>New order</DialogTitle>
              <DialogDescription>
                Add minumum information to create an order and then edit its details
              </DialogDescription>
            </DialogHeader>

            <CustomerSelectField<TFormData> control={form.control} name="customer_id" />

            <DeliveryDateSelectField<TFormData> control={form.control} name="delivery_date" />

            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
export default AddOrder
