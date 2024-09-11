import { Control, FieldValues, Path } from 'react-hook-form'

import { cn } from '@/utils'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type TProps<T extends FieldValues> = {
  control: Control<T, any>
  name: Path<T>
  label: string
  placeholder?: string
}

const TextInputField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: TProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} className={cn('resize-none')} {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
export default TextInputField
