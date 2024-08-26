import { Control, FieldValues, Path } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'

import CustomerSelect from '../CustomerSelect'

type TProps<T extends FieldValues> = {
  control: Control<T, any>
  name: Path<T>
}

const CustomerSelectField = <T extends FieldValues>({ control, name }: TProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Customer</FormLabel>
          <CustomerSelect
            value={field.value}
            onChange={field.onChange}
            TriggerWrapperComp={FormControl}
          />
        </FormItem>
      )}
    />
  )
}
export default CustomerSelectField
