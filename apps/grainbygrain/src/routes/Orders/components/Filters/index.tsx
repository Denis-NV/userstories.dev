import { useCallback, useState } from 'react'
import { format } from 'date-fns'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CalendarIcon, Cross2Icon } from '@radix-ui/react-icons'

import { cn, removeNulls } from '@/utils'
import { Routes } from '@/const'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import CustomerSelect from '@/components/CustomerSelect'

const deliveryDateKey = 'delivery_date'
const customerKey = 'customer'

const Filters = () => {
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const delivery_date_param = searchParams.get(deliveryDateKey)
  const customer_param = searchParams.get(customerKey)

  const delivery_date = delivery_date_param ? new Date(delivery_date_param) : undefined
  const customer = removeNulls(customer_param) ?? ''

  const handleDeliveryDateSelect = useCallback(
    (date?: Date) => {
      setSearchParams((prev: URLSearchParams) => {
        if (date) prev.set(deliveryDateKey, format(date, 'yyyy-MM-dd'))

        return prev
      })

      setCalendarOpen(false)
    },
    [setSearchParams, setCalendarOpen],
  )

  const handleCustomerSelect = useCallback(
    (value?: string) => {
      setSearchParams((prev: URLSearchParams) => {
        if (value) prev.set(customerKey, value)

        return prev
      })
    },
    [setSearchParams],
  )

  const handleClearDate = useCallback(() => {
    setSearchParams((prev: URLSearchParams) => {
      prev.delete(deliveryDateKey)

      return prev
    })
  }, [setSearchParams])

  const handleClearCustomer = useCallback(() => {
    setSearchParams((prev: URLSearchParams) => {
      prev.delete(customerKey)

      return prev
    })
  }, [setSearchParams])

  const handleClear = useCallback(() => {
    navigate(`/${Routes.orders}`)
  }, [navigate])

  return (
    <div className="mb-6 flex justify-between">
      <div className="flex">
        <div className="flex align-middle">
          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
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
                onSelect={handleDeliveryDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button variant="link" onClick={handleClearDate}>
            <Cross2Icon />
          </Button>
        </div>

        <div className="flex align-middle">
          <CustomerSelect
            value={customer}
            onChange={handleCustomerSelect}
            placeholder="customer"
            triggerClassName="w-28"
          />

          <Button variant="link" onClick={handleClearCustomer}>
            <Cross2Icon />
          </Button>
        </div>
      </div>

      <Button variant="ghost" onClick={handleClear}>
        <strong>clear</strong>
      </Button>
    </div>
  )
}
export default Filters
