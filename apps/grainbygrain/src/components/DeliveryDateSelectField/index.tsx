import { ReactNode, useState } from 'react'
import { format } from 'date-fns'
import { Control, FieldValues, Path } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from '@radix-ui/react-icons'
import { cn } from '@/utils'

type TWrapper = { t?: boolean; children: ReactNode }

const Wrapper = ({ t, children }: TWrapper) => (t ? <td>{children}</td> : <>{children}</>)

type TProps<T extends FieldValues> = {
  control: Control<T, any>
  name: Path<T>
  table?: boolean
}

const DeliveryDateSelectField = <T extends FieldValues>({ control, name, table }: TProps<T>) => {
  const [calendarOpen, setCalendarOpen] = useState(false)

  const WrapperComp = table ? `tr` : FormItem

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <WrapperComp className={cn(!table && 'flex flex-col')}>
          <Wrapper t={table}>
            <FormLabel>Delivery date{table ? ':' : ''}</FormLabel>
          </Wrapper>

          <Wrapper t={table}>
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full pl-3 text-left font-normal',
                      !field.value && 'text-muted-foreground',
                    )}
                  >
                    {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={(value) => {
                    if (value) field.onChange(value)

                    setCalendarOpen(false)
                  }}
                  disabled={{ before: new Date() }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </Wrapper>
        </WrapperComp>
      )}
    />
  )
}
export default DeliveryDateSelectField
