import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAccessToken } from '@nhost/react'
import { useMutation } from '@apollo/client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

import { ProductQuery } from '@/gql/graphql'
import { Switch } from '@/components/ui/switch'
import DepartmentSelect from '@/components/DepartmentSelect'
import TextInputField from '@/components/TextInputField'

import { UPDATE_PRODUCT_MUTATION } from '../gql'

const FormSchema = z.object({
  name: z.string(),
  weight: z.string(),
  department_id: z.string(),
  is_active: z.boolean().optional(),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  product: NonNullable<ProductQuery['product_by_pk']>
}

const DetailsForm = ({ product }: TProps) => {
  const accessToken = useAccessToken()

  const [updateProduct, { loading: updating, error }] = useMutation(UPDATE_PRODUCT_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    update: (cache, { data }) => {
      if (!data?.update_product_by_pk) return

      cache.modify({
        fields: {
          department: (_, { DELETE }) => {
            return DELETE
          },
        },
      })
    },
  })

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    values: {
      name: product.name ?? '',
      weight: String(product.weight) ?? '',
      department_id: product.department?.id ?? '',
      is_active: product.is_active ?? false,
    },
  })

  const {
    formState: { isDirty },
  } = form

  const handleSubmit = useCallback(
    ({ name, weight, department_id, is_active }: TFormData) => {
      if (product.id) {
        const department = department_id ? { department_id } : {}

        updateProduct({
          variables: {
            id: product.id,
            input: {
              name,
              weight,
              is_active,
              ...department,
            },
          },
        })
      }
    },
    [updateProduct, product.id],
  )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full max-w-lg space-y-6">
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

        <TextInputField control={form.control} name="weight" type="number" label="Product weight" />

        <div className="pt-6">
          <FormField
            control={form.control}
            name="is_active"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>Is active</FormLabel>
                  <FormDescription>
                    Inactive products won&apos;t show in new order options
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex w-full space-x-6 py-2">
          <div className="flex flex-row space-x-3">
            <Button size="sm" type="submit" disabled={!isDirty}>
              Save
            </Button>
          </div>
          <div className="flex flex-1 flex-row items-center">
            {updating ? 'Saving changes...' : error && 'Problem saving changes. Please try again'}
          </div>
        </div>
      </form>
    </Form>
  )
}
export default DetailsForm
