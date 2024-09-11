import { useCallback, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@apollo/client'
import { useAccessToken } from '@nhost/react'

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
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import TextInputField from '@/components/TextInputField'
import DistrictSelect from '@/components/DistrictSelect'

import { ADD_CUSTOMER_MUTATION } from '../gql'

const FormSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  district_id: z.string().min(1),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  onAdded?: (orderId: string) => void
}

const AddCustomer = ({ onAdded }: TProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const accessToken = useAccessToken()

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    values: {
      name: '',
      address: '',
      district_id: '',
    },
  })

  const {
    formState: { isValid },
    reset,
  } = form

  const [addCustomer, addCustomerMutation] = useMutation(ADD_CUSTOMER_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    onCompleted: ({ insert_customer_one }) => {
      reset()

      setIsOpen(false)

      if (onAdded && insert_customer_one) onAdded(insert_customer_one.id)
    },
    update: (cache, { data }) => {
      if (!data?.insert_customer_one) return

      cache.modify({
        fields: {
          district: (_, { DELETE }) => {
            return DELETE
          },
        },
      })
    },
  })

  const handleAdd = useCallback(
    ({ name, address, district_id }: TFormData) => {
      addCustomer({
        variables: {
          name,
          address,
          district_id,
        },
      })
    },
    [addCustomer],
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Add customer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAdd)} className="w-full space-y-6">
            <DialogHeader>
              <DialogTitle>New customer</DialogTitle>
              <DialogDescription>
                Add minumum information to create an customer and then edit its details
              </DialogDescription>
            </DialogHeader>

            <TextInputField control={form.control} name="name" label="Customer name" />

            <TextInputField control={form.control} name="address" label="Customer address" />

            <FormField
              control={form.control}
              name="district_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>District</FormLabel>
                  <DistrictSelect
                    value={field.value}
                    onChange={field.onChange}
                    TriggerWrapperComp={FormControl}
                  />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={!isValid || addCustomerMutation.loading}>
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
export default AddCustomer
