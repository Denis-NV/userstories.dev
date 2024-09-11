import { ChangeEvent } from 'react'
import { Control, FieldValues, Path } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type TProps<T extends FieldValues> = {
  control: Control<T, any>
  name: Path<T>
  label: string
}

const TimeField = <T extends FieldValues>({ control, name, label }: TProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onChange, ...rest } }) => {
        return (
          <FormItem className="flex-1">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder="00:00"
                type="time"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value
                  const time = value ? value.concat(':00') : value
                  const newEvent = { ...e }

                  newEvent.target.value = time

                  onChange(newEvent)
                }}
                className="resize-none"
                {...rest}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
export default TimeField
