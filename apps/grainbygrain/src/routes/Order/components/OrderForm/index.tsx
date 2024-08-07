import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
// import { toast } from '@/components/ui/use-toast'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const FormSchema = z.object({
  comment: z.string().optional(),
})

export type TFormData = z.infer<typeof FormSchema>

type TProps = {
  values: TFormData
  onUpdate: (valuUs: TFormData) => void
}

const OrderForm = ({ values, onUpdate }: TProps) => {
  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    values,
  })

  const {
    formState: { isDirty },
  } = form

  const handleSubmit = useCallback(
    (data: TFormData) => {
      // toast({
      //   title: 'You submitted the following values:',
      //   description: (
      //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      //     </pre>
      //   ),
      // })

      onUpdate(data)
    },
    [onUpdate],
  )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-2/3 space-y-6">
        <Button type="submit" disabled={!isDirty}>
          {isDirty ? 'Save changes' : 'No changes to save'}
        </Button>
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Input placeholder="Short comment about the order" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
export default OrderForm
