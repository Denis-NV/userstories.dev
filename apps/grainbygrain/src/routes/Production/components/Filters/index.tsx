import { useCallback, useState } from 'react'
import { format } from 'date-fns'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CalendarIcon, Cross2Icon } from '@radix-ui/react-icons'

import { cn, removeNulls } from '@/utils'
import { Routes, UrlParams } from '@/const'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import DepartmentSelect from '@/components/DepartmentSelect'

const Filters = () => {
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const delivery_date_param = searchParams.get(UrlParams.delivery_date)
  const departmentParam = searchParams.get(UrlParams.department)

  const delivery_date = delivery_date_param ? new Date(delivery_date_param) : undefined

  const department = removeNulls(departmentParam) ?? ''

  const handleDeliveryDateSelect = useCallback(
    (date?: Date) => {
      setSearchParams((prev: URLSearchParams) => {
        if (date) prev.set(UrlParams.delivery_date, format(date, 'yyyy-MM-dd'))

        return prev
      })

      setCalendarOpen(false)
    },
    [setSearchParams, setCalendarOpen],
  )

  const handleDepartmentSelect = useCallback(
    (value?: string) => {
      setSearchParams((prev: URLSearchParams) => {
        if (value) prev.set(UrlParams.department, value)

        return prev
      })
    },
    [setSearchParams],
  )

  const handleClearDate = useCallback(() => {
    setSearchParams((prev: URLSearchParams) => {
      prev.delete(UrlParams.delivery_date)

      return prev
    })
  }, [setSearchParams])

  const handleClearDepartment = useCallback(() => {
    setSearchParams((prev: URLSearchParams) => {
      prev.delete(UrlParams.department)

      return prev
    })
  }, [setSearchParams])

  const handleClear = useCallback(() => {
    navigate(`/${Routes.production}`)
  }, [navigate])

  return (
    <div className="mb-6 flex justify-between">
      <div className="flex space-x-2">
        <div className="flex align-middle">
          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'pl-3 text-left font-normal',
                  !delivery_date && 'text-muted-foreground',
                )}
              >
                <span className="mr-1 min-w-12">
                  {delivery_date ? format(delivery_date, 'dd LLL') : 'date'}
                </span>
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={delivery_date}
                initialFocus
                onSelect={handleDeliveryDateSelect}
              />
            </PopoverContent>
          </Popover>
          <Button size="icon" variant="ghost" onClick={handleClearDate}>
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

          <Button size="icon" variant="ghost" onClick={handleClearDepartment}>
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
