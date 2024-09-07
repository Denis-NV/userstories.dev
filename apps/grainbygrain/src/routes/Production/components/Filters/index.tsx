import { useCallback, useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-day-picker'
import { useSearchParams } from 'react-router-dom'
import { CalendarIcon, Cross2Icon } from '@radix-ui/react-icons'

import { cn, removeNulls } from '@/utils'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import DepartmentSelect from '@/components/DepartmentSelect'

const dateFromKey = 'from'
const dateToKey = 'to'
const departmentKey = 'department'

const Filters = () => {
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const dateFromParam = searchParams.get(dateFromKey)
  const dateToParam = searchParams.get(dateToKey)
  const departmentParam = searchParams.get(departmentKey)

  const date: DateRange = {
    from: dateFromParam ? new Date(dateFromParam) : undefined,
    to: dateToParam ? new Date(dateToParam) : undefined,
  }

  const department = removeNulls(departmentParam) ?? ''

  const handleDateSelect = useCallback(
    (newDate?: DateRange) => {
      console.log(newDate)

      setSearchParams((prev: URLSearchParams) => {
        if (newDate?.from) prev.set(dateFromKey, format(newDate?.from, 'yyyy-MM-dd'))
        if (newDate?.to) prev.set(dateToKey, format(newDate?.to, 'yyyy-MM-dd'))

        return prev
      })
    },
    [setSearchParams],
  )

  const handleDepartmentSelect = useCallback(
    (value?: string) => {
      setSearchParams((prev: URLSearchParams) => {
        if (value) prev.set(departmentKey, value)

        return prev
      })
    },
    [setSearchParams],
  )

  const handleClearDate = useCallback(() => {
    setSearchParams((prev: URLSearchParams) => {
      prev.delete(dateFromKey)

      return prev
    })
  }, [setSearchParams])

  const handleClearDepartment = useCallback(() => {
    setSearchParams((prev: URLSearchParams) => {
      prev.delete(departmentKey)

      return prev
    })
  }, [setSearchParams])

  const handleClear = useCallback(() => {
    handleClearDate()
    handleClearDepartment()
  }, [handleClearDate, handleClearDepartment])

  return (
    <div className="mb-6 flex justify-between">
      <div className="flex">
        <div className="flex align-middle">
          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn('pl-3 text-left font-normal', !date?.from && 'text-muted-foreground')}
              >
                <span className="mr-1 min-w-24">
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, 'dd LLL')} - {format(date.to, 'dd LLL')}
                      </>
                    ) : (
                      format(date.from, 'dd LLL')
                    )
                  ) : (
                    'date'
                  )}
                </span>
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={handleDateSelect}
              />
            </PopoverContent>
          </Popover>
          <Button variant="link" onClick={handleClearDate}>
            <Cross2Icon />
          </Button>
        </div>

        <div className="flex align-middle">
          <DepartmentSelect
            value={department}
            onChange={handleDepartmentSelect}
            placeholder="department"
            triggerClassName="w-30"
          />

          <Button variant="link" onClick={handleClearDepartment}>
            <Cross2Icon />
          </Button>
        </div>
      </div>

      <Button variant="ghost" className="hidden sm:block" onClick={handleClear}>
        <strong>clear</strong>
      </Button>
    </div>
  )
}
export default Filters
