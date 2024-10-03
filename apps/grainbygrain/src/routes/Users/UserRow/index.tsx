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
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { UPDATE_USER_MUTATION } from '../gql'

const FormSchema = z.object({
  role: z.string(),
  verified: z.boolean(),
  disabled: z.boolean(),
})

export type TFormData = z.infer<typeof FormSchema>

type TProps = {
  user: Omit<User_On_UsersFragment, 'disabled' | 'emailVerified' | 'defaultRole'>
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

  const { id, displayName, roles } = user

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
        <TableCell className="font-medium">
          <p className="... w-full truncate">{displayName}</p>
        </TableCell>
        <TableCell>
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {roles.map(({ id, role }) => (
                      <SelectItem key={id} value={role} className="cursor-pointer">
                        {role.replace('_', ' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </TableCell>
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
