import { useCallback, useState } from 'react'
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
  FormMessage,
} from '@/components/ui/form'

import { CustomerQuery } from '@/gql/graphql'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import DistrictSelect from '@/components/DistrictSelect'

import { UPDATE_CUSTOMER_MUTATION } from '../gql'
import TimeField from '../TimeField'

const FormSchema = z.object({
  name: z.string(),
  address: z.string(),
  delivery_start_time: z.string().time().optional(),
  delivery_end_time: z.string().time().optional(),
  district_id: z.string().optional(),
  is_active: z.boolean().optional(),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  customer: NonNullable<CustomerQuery['customer_by_pk']>
}

const DetailsForm = ({ customer }: TProps) => {
  const accessToken = useAccessToken()
  const [editMode, setEditMode] = useState(false)

  const [updateCustomer, { loading: updating, error }] = useMutation(UPDATE_CUSTOMER_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    values: {
      name: customer.name ?? '',
      address: customer.address ?? '',
      delivery_start_time: customer.delivery_start_time ?? '',
      delivery_end_time: customer.delivery_end_time ?? '',
      district_id: customer.district?.id ?? '',
      is_active: customer.is_active ?? false,
    },
  })

  const {
    formState: { isDirty },
  } = form

  const handleSubmit = useCallback(
    ({
      name,
      address,
      delivery_start_time,
      delivery_end_time,
      district_id,
      is_active,
    }: TFormData) => {
      if (customer.id) {
        const start_time = delivery_start_time ? { delivery_start_time } : {}
        const end_time = delivery_end_time ? { delivery_end_time } : {}
        const district = district_id ? { district_id } : {}

        updateCustomer({
          variables: {
            id: customer.id,
            input: {
              name,
              address,
              is_active,
              ...start_time,
              ...end_time,
              ...district,
            },
          },
        })
      }
    },
    [updateCustomer, customer.id],
  )

  const handleEditClick = useCallback(() => {
    setEditMode(true)
  }, [setEditMode])

  const handleCancelClick = useCallback(() => {
    setEditMode(false)
  }, [setEditMode])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full max-w-lg space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Customer name" className="resize-none" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Customer address" className="resize-none" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

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

        <div className="flex w-full flex-row space-x-3">
          <TimeField
            control={form.control}
            name="delivery_start_time"
            label="Delivery start time"
          />
          <TimeField control={form.control} name="delivery_end_time" label="Delivery end time" />
        </div>

        <div className="pt-6">
          <FormField
            control={form.control}
            name="is_active"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>Is active</FormLabel>
                  <FormDescription>
                    Inactive customers won&apos;t show in new order options
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {editMode && (
          <div className="flex w-full space-x-6 py-2">
            <div className="flex flex-row space-x-3">
              <Button size="sm" type="submit" disabled={!isDirty}>
                Save
              </Button>

              <Button size="sm" variant="outline" onClick={handleCancelClick}>
                Cancel
              </Button>
            </div>
            <div className="flex flex-1 flex-row items-center">
              {updating ? 'Saving changes...' : error && 'Problem saving changes. Please try again'}
            </div>
          </div>
        )}
      </form>

      {!editMode && (
        <div className="pt-8">
          <Button size="sm" onClick={handleEditClick}>
            Edit
          </Button>
        </div>
      )}
    </Form>
  )
}
export default DetailsForm
