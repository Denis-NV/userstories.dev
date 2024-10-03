import { FC, ReactNode, Fragment, useState, useCallback, ChangeEvent } from 'react'
import { useQuery } from '@apollo/client'
import { useAccessToken } from '@nhost/react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import debounce from 'debounce'
import { ChevronsUpDown } from 'lucide-react'

import { cn } from '@/utils'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { CUSTOMERS_BY_DISTRICT_QUERY } from './gql'
import SelectItem from './SelectItem'

type TProps<T extends string> = {
  onChange: (value: T) => void
  value?: T
  TriggerWrapperComp?: FC<{ children?: ReactNode }>
  placeholder?: string
  triggerClassName?: string
  onlyActive?: boolean
}

const CustomerSelect = <T extends string>({
  value,
  onChange,
  TriggerWrapperComp = Fragment,
  placeholder = 'Select customer',
  triggerClassName,
  onlyActive = true,
}: TProps<T>) => {
  const accessToken = useAccessToken()
  const [searchStr, setSearchStr] = useState('')
  const [open, setOpen] = useState(false)

  const { data: customersData } = useQuery(CUSTOMERS_BY_DISTRICT_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    variables: {
      onlyActive: [true, onlyActive],
      search: `%${searchStr}%`,
    },
  })

  const districts = customersData?.district
  const noItemsFound = !districts
    ?.map((dist) => dist.customers?.length !== 0)
    .find((item) => item === true)
  const customers = districts?.reduce(
    (prev, cur) => {
      return [...prev, ...cur.customers]
    },
    [] as (typeof districts)[0]['customers'],
  )

  const handleSearch = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => setSearchStr(target?.value),
    [setSearchStr],
  )

  const handleOpen = useCallback(() => {
    setSearchStr('')
    setOpen((prev) => !prev)
  }, [setSearchStr, setOpen])

  const handleValueChange = useCallback(
    (e: T) => {
      setOpen(false)

      onChange(e)
    },
    [setOpen, onChange],
  )

  return (
    <Popover open={open} onOpenChange={handleOpen} modal>
      <TriggerWrapperComp>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn('w-full justify-between', triggerClassName)}
          >
            <p className={cn(value && '... truncate')}>
              {value && customers
                ? customers?.find((customer) => customer.id === value)?.name
                : placeholder}
            </p>
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
      </TriggerWrapperComp>
      <PopoverContent align="start" className="p-0">
        <div className="flex items-center space-x-2 border-b-[1px] py-1 pl-2 pr-1">
          <MagnifyingGlassIcon className="h-4 w-4 opacity-50" />
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <input
            type="search"
            className="h-8 w-full bg-transparent px-3 py-1 text-sm transition-colors placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
            placeholder="Search by name or address"
            onChange={debounce(handleSearch, 500)}
            onEmptied={debounce(handleSearch, 500)}
            onKeyDown={(e) => {
              e.stopPropagation()
            }}
          />
        </div>

        <div className="max-h-60 overflow-scroll">
          {noItemsFound && <p className="py-6 text-center text-sm">No customer found</p>}

          {districts?.map(({ id: distId, name, customers }) => {
            return customers.length > 0 ? (
              <div key={distId} role="group">
                <div className="px-2 py-1.5 text-sm font-semibold">{name}</div>

                {customers?.map(({ id: custId, name, address }) => (
                  <SelectItem
                    key={custId}
                    value={custId}
                    onValueChange={handleValueChange}
                    isSelected={custId === value}
                    className="cursor-pointer"
                  >
                    <p className="... max-w-64 truncate">
                      {name} - {address}
                    </p>
                  </SelectItem>
                ))}
              </div>
            ) : null
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
export default CustomerSelect
