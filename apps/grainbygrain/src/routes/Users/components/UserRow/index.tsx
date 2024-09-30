import { useCallback } from 'react'
import { useMutation } from '@apollo/client'
import { useAccessToken } from '@nhost/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

import { User_On_UsersFragment } from '@/gql/graphql'
import { TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'

import { UPDATE_USER_MUTATION } from '../../gql'
import { Switch } from '@/components/ui/switch'

const FormSchema = z.object({
  role: z.string(),
  verified: z.boolean(),
  disabled: z.boolean(),
})

export type TFormData = z.infer<typeof FormSchema>

type TProps = {
  user: Omit<User_On_UsersFragment, 'disabled' | 'roles' | 'emailVerified' | 'defaultRole'>
  values: TFormData
}

const USerRow = ({ user, values }: TProps) => {
  const accessToken = useAccessToken()

  const [updateProduct] = useMutation(UPDATE_USER_MUTATION, {
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

  const { id, displayName } = user

  const handleUpdate = useCallback(
    ({ role, verified, disabled }: TFormData) => {
      updateProduct({
        variables: {
          id,
          input: {
            defaultRole: role,
            emailVerified: verified,
            disabled,
          },
        },
      })
    },
    [updateProduct, id],
  )

  return (
    <Form {...form}>
      <TableRow>
        <TableCell className="font-medium">{displayName}</TableCell>
        <TableCell className="">user</TableCell>
        <TableCell className="text-center">
          <FormField
            control={form.control}
            name="verified"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Email verified</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    style={{ margin: 0 }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </TableCell>
        <TableCell className="text-center">
          <FormField
            control={form.control}
            name="disabled"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Disabled</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    style={{ margin: 0 }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </TableCell>
        <TableCell className="text-right">
          <form id={`userForm${id}`} onSubmit={form.handleSubmit(handleUpdate)} />
          <Button type="submit" size="sm" disabled={!isDirty} form={`userForm${id}`}>
            Update
          </Button>
        </TableCell>
      </TableRow>
    </Form>
  )
}
export default USerRow
