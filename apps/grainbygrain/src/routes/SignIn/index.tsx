import { useCallback } from 'react'
import { useSignInEmailPassword } from '@nhost/react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { TypographyH2 } from '@/components/typography'

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type TFormData = z.infer<typeof FormSchema>

const SignIn = () => {
  const { signInEmailPassword, needsEmailVerification, isLoading, isError, error } =
    useSignInEmailPassword()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const {
    formState: { isDirty, isValid },
  } = form

  const handleSignIn = useCallback(
    async ({ email, password }: TFormData) => {
      await signInEmailPassword(email, password)

      navigate(from, { replace: true })
    },
    [from, signInEmailPassword, navigate],
  )

  const handleSubmit = useCallback(
    (values: TFormData) => {
      handleSignIn(values)
    },
    [handleSignIn],
  )

  return (
    <div className="flex h-screen items-center justify-center px-4">
      <div className="w-full max-w-lg space-y-8">
        <TypographyH2 text="Sign In" />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label>Email</Label>
                  <FormControl>
                    <Input placeholder="Your email" type="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

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

            <div>
              {isError && (
                <span className="text-destructive text-sm">Error signing in: {error?.message}</span>
              )}
              {needsEmailVerification && (
                <span className="text-destructive text-sm">Email varification is needed</span>
              )}
            </div>

            <div>
              <Button size="sm" type="submit" disabled={!isDirty || !isValid}>
                {isLoading ? 'Logging in...' : 'Log in'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default SignIn
