import { useCallback, useState } from 'react'
import { useChangePassword } from '@nhost/react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { TypographyH2 } from '@/components/typography'
import MainContainer from '@/components/MainContainer'

const FormSchema = z
  .object({
    password: z.string().min(1),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'], // path of error
  })

type TFormData = z.infer<typeof FormSchema>

const Profile = () => {
  const { changePassword, isError, error } = useChangePassword()
  const [success, setSuccess] = useState(false)

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: '',
      confirm: '',
    },
  })

  const {
    formState: { isDirty },
  } = form

  const handleChange = useCallback(
    async ({ password }: TFormData) => {
      const result = await changePassword(password)
      if (!result.isError) setSuccess(true)
    },
    [changePassword, setSuccess],
  )

  const handleSubmit = useCallback(
    (values: TFormData) => {
      handleChange(values)
    },
    [handleChange],
  )
  return (
    <div className="flex h-full flex-col">
      <MainContainer>
        <div className="mb-2  flex justify-between">
          <TypographyH2 text="Profile" />
        </div>

        <div className="flex justify-between pb-4">
          <div className="flex align-middle">Update your passsword</div>
        </div>

        <div className="h-1 w-full shadow-sm" />
      </MainContainer>
      <div className="w-full overflow-scroll pb-12 pt-6">
        <MainContainer>
          {success ? (
            <div>
              <p className="mb-4">You&apos;ve successfully changed your password!</p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="max-w-lg space-y-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Password</Label>
                      <FormControl>
                        <Input placeholder="Your password" type="password" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirm"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Confirm password</Label>
                      <FormControl>
                        <Input placeholder="Your password" type="password" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  {isError && (
                    <span className="text-destructive text-sm">
                      Error signing up: {error?.message}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2 pt-8">
                  <Button size="sm" type="submit" disabled={!isDirty}>
                    Change
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </MainContainer>
      </div>
    </div>
  )
}
export default Profile
