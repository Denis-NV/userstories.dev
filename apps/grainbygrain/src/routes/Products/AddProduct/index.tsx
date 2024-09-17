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
import DepartmentSelect from '@/components/DepartmentSelect'

import { ADD_PRODUCT_MUTATION } from '../gql'

const FormSchema = z.object({
  name: z.string().min(1),
  weight: z.string().min(1),
  department_id: z.string().min(1),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  onAdded?: (orderId: string) => void
}

const AddProduct = ({ onAdded }: TProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const accessToken = useAccessToken()

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    values: {
      name: '',
      weight: '',
      department_id: '',
    },
  })

  const {
    formState: { isValid },
    reset,
  } = form

  const [addProduct, addProductMutation] = useMutation(ADD_PRODUCT_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    onCompleted: ({ insert_product_one }) => {
      reset()

      setIsOpen(false)

      if (onAdded && insert_product_one) onAdded(insert_product_one.id)
    },
    update: (cache, { data }) => {
      if (!data?.insert_product_one) return

      cache.modify({
        fields: {
          department: (_, { DELETE }) => {
            return DELETE
          },
        },
      })
    },
  })

  const handleAdd = useCallback(
    ({ name, weight, department_id }: TFormData) => {
      addProduct({
        variables: {
          name,
          weight: parseInt(weight),
          department_id,
        },
      })
    },
    [addProduct],
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Add product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAdd)} className="w-full space-y-6">
            <DialogHeader>
              <DialogTitle>New product</DialogTitle>
              <DialogDescription>Add minumum information to create a product</DialogDescription>
            </DialogHeader>

            <TextInputField control={form.control} name="name" label="Product name" />

            <FormField
              control={form.control}
              name="department_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <DepartmentSelect
                    value={field.value}
                    onChange={field.onChange}
                    TriggerWrapperComp={FormControl}
                  />
                </FormItem>
              )}
            />

            <TextInputField
              control={form.control}
              name="weight"
              label="Product weight"
              type="number"
            />

            <DialogFooter>
              <Button type="submit" disabled={!isValid || addProductMutation.loading}>
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
export default AddProduct
