import { useCallback, useState } from 'react'
import { useSignUpEmailPassword } from '@nhost/react'
import { Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Routes } from '@/const'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { TypographyH2 } from '@/components/typography'

const FormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'], // path of error
  })

type TFormData = z.infer<typeof FormSchema>

const Register = () => {
  const { signUpEmailPassword, isError, error } = useSignUpEmailPassword()
  const [success, setSuccess] = useState(false)

  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm: '',
    },
  })

  const {
    formState: { isDirty, isValid },
  } = form

  const handleSignup = useCallback(
    async ({ email, password }: TFormData) => {
      const result = await signUpEmailPassword(email, password, {
        allowedRoles: ['user'],
        defaultRole: 'user',
      })

      if (!result.isError) setSuccess(true)
    },
    [signUpEmailPassword, setSuccess],
  )

  const handleSubmit = useCallback(
    (values: TFormData) => {
      handleSignup(values)
    },
    [handleSignup],
  )

  return (
    <div className="flex h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg space-y-8">
        <TypographyH2 text="Register" />
        <span className="text-muted-foreground">a new account</span>

        {success ? (
          <div>
            <p className="mb-4">You&apos;ve successfully registered!</p>
            <p className="text-muted-foreground mb-8 text-sm">
              Please check your email in order to verify your account.
            </p>

            <Link to="/" reloadDocument>
              Sign in
            </Link>
          </div>
        ) : (
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
                <Button size="sm" type="submit" disabled={!isDirty || !isValid}>
                  Register
                </Button>

                <Link to={`/${Routes.signin}`}>
                  <Button variant="link">Sign In</Button>
                </Link>
              </div>
            </form>
          </Form>
        )}
      </div>
    </div>
  )
}

export default Register
