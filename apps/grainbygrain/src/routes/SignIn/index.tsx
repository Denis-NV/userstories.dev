import { useCallback } from 'react'
import { useSignInEmailPassword } from '@nhost/react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Routes } from '@/const'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { TypographyH2 } from '@/components/typography'

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

type TFormData = z.infer<typeof FormSchema>

const SignIn = () => {
  const { signInEmailPassword, needsEmailVerification, isError, error } = useSignInEmailPassword()
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
    <div className="flex h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg space-y-8">
        <TypographyH2 text="Sign in" />
        <span className="text-muted-foreground">with your existing account</span>

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

            <div className="flex items-center space-x-2 pt-8">
              <Button size="sm" type="submit" disabled={!isDirty || !isValid}>
                Sign in
              </Button>

              <Link to={`/${Routes.register}`}>
                <Button variant="link">Register</Button>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default SignIn
