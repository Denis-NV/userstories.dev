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
import { Form } from '@/components/ui/form'
import TextInputField from '@/components/TextInputField'

import { ADD_DISTRICT_MUTATION } from '../gql'

const FormSchema = z.object({
  name: z.string().min(1),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  onAdded?: (orderId: string) => void
}

const AddDistrict = ({ onAdded }: TProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const accessToken = useAccessToken()

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    values: {
      name: '',
    },
  })

  const {
    formState: { isValid },
    reset,
  } = form

  const [addCustomer, addCustomerMutation] = useMutation(ADD_DISTRICT_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    onCompleted: ({ insert_district_one }) => {
      reset()

      setIsOpen(false)

      if (onAdded && insert_district_one) onAdded(insert_district_one.id)
    },
    update: (cache, { data }) => {
      if (!data?.insert_district_one) return

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
    ({ name }: TFormData) => {
      addCustomer({
        variables: {
          name,
        },
      })
    },
    [addCustomer],
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Add district</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAdd)} className="w-full space-y-6">
            <DialogHeader>
              <DialogTitle>New district</DialogTitle>
              <DialogDescription>
                Add minumum information to create a district and then edit its details
              </DialogDescription>
            </DialogHeader>

            <TextInputField control={form.control} name="name" label="Customer name" />

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
export default AddDistrict
