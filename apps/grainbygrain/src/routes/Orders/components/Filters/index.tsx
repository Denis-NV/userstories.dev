import { useCallback, useState } from 'react'
import { format } from 'date-fns'
import { useSearchParams } from 'react-router-dom'
import { CalendarIcon, Cross2Icon } from '@radix-ui/react-icons'

import { cn } from '@/utils'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'

const Filters = () => {
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const delivery_date_param = searchParams.get('delivery_date')

  const delivery_date = delivery_date_param ? new Date(delivery_date_param) : undefined

  const handleDeliveryDateSelect = useCallback(
    (date?: Date) => {
      setSearchParams((prev: URLSearchParams) => {
        if (date) prev.set('delivery_date', format(date, 'yyyy-MM-dd'))

        return prev
      })

      setCalendarOpen(false)
    },
    [setSearchParams, setCalendarOpen],
  )

  const handleClearDate = useCallback(() => {
    setSearchParams((prev: URLSearchParams) => {
      prev.delete('delivery_date')

      return prev
    })
  }, [setSearchParams])

  return (
    <div>
      <div>
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'pl-3 text-left font-normal',
                !delivery_date && 'text-muted-foreground',
              )}
            >
              {delivery_date ? format(delivery_date, 'yyyy-MM-dd') : <span>Delivery date</span>}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={delivery_date}
              onSelect={handleDeliveryDateSelect}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button variant="ghost" onClick={handleClearDate}>
          <Cross2Icon />
        </Button>
      </div>
    </div>
  )
}
export default Filters
