import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAccessToken } from '@nhost/react'
import { useMutation } from '@apollo/client'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

import { DistrictQuery } from '@/gql/graphql'

import { UPDATE_DISTRICT_MUTATION } from '../gql'
import TextInputField from '@/components/TextInputField'

const FormSchema = z.object({
  name: z.string(),
})

type TFormData = z.infer<typeof FormSchema>

type TProps = {
  district: NonNullable<DistrictQuery['district_by_pk']>
}

const DetailsForm = ({ district }: TProps) => {
  const accessToken = useAccessToken()

  const [updateDistrict, { loading: updating, error }] = useMutation(UPDATE_DISTRICT_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    update: (cache, { data }) => {
      if (!data?.update_district_by_pk) return

      cache.modify({
        fields: {
          district: (_, { DELETE }) => {
            return DELETE
          },
        },
      })
    },
  })

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    values: {
      name: district.name ?? '',
    },
  })

  const {
    formState: { isDirty },
  } = form

  const handleSubmit = useCallback(
    ({ name }: TFormData) => {
      if (district.id) {
        updateDistrict({
          variables: {
            id: district.id,
            input: {
              name,
            },
          },
        })
      }
    },
    [updateDistrict, district.id],
  )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full max-w-lg space-y-6">
        <TextInputField control={form.control} name="name" label="District name" />

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
