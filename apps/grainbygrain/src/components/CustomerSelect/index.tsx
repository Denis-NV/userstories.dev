import { FC, ReactNode, Fragment, useState, useCallback, ChangeEvent } from 'react'
import { useQuery } from '@apollo/client'
import { useAccessToken } from '@nhost/react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import debounce from 'debounce'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { CUSTOMERS_BY_DISTRICT_QUERY } from './gql'

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
  const [nameSearchStr, setNameSearchStr] = useState('')
  const [addressSearchStr, setaddressSearchStr] = useState('')
  const [open, setOpen] = useState(false)

  const { data: customersData } = useQuery(CUSTOMERS_BY_DISTRICT_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    variables: {
      onlyActive: [true, onlyActive],
      name: `%${nameSearchStr}%`,
      address: `%${addressSearchStr}%`,
    },
  })

  const districts = customersData?.district
  const noItemsFound = !districts
    ?.map((dist) => dist.customers?.length !== 0)
    .find((item) => item === true)

  const handleNameSearch = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => setNameSearchStr(target?.value),
    [setNameSearchStr],
  )

  const handleAddressSearch = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => setaddressSearchStr(target?.value),
    [setaddressSearchStr],
  )

  const handleOpen = useCallback(() => {
    setNameSearchStr('')
    setaddressSearchStr('')
  }, [setNameSearchStr, setaddressSearchStr])

  const handleCloseClick = useCallback(() => {
    setOpen(false)
  }, [setOpen])
  const handleOpenClick = useCallback(() => {
    setOpen(true)
  }, [setOpen])
  const handleValueChange = useCallback(
    (e: T) => {
      setOpen(false)

      onChange(e)
    },
    [setOpen, onChange],
  )

  return (
    <Select onValueChange={handleValueChange} value={value} open={open} onOpenChange={handleOpen}>
      <TriggerWrapperComp>
        <SelectTrigger disabled={!districts} className={triggerClassName} onClick={handleOpenClick}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </TriggerWrapperComp>

      <SelectContent onPointerDownOutside={handleCloseClick}>
        <div className="flex items-center space-x-2 py-1 pl-2 pr-1">
          <MagnifyingGlassIcon className="h-4 w-4 opacity-50" />
          <Label htmlFor="name_search" className="sr-only">
            Search by name
          </Label>
          <Input
            id="name_search"
            placeholder="Search by name"
            onChange={debounce(handleNameSearch, 500)}
            onEmptied={debounce(handleNameSearch, 500)}
            onKeyDown={(e) => {
              e.stopPropagation()
            }}
            type="search"
            className="h-8"
          />
        </div>
        <div className="flex items-center space-x-2 py-1 pl-2 pr-1">
          <MagnifyingGlassIcon className="h-4 w-4 opacity-50" />
          <Label htmlFor="address_search" className="sr-only">
            Search by address
          </Label>
          <Input
            id="address_search"
            placeholder="Search by address"
            onChange={debounce(handleAddressSearch, 500)}
            onEmptied={debounce(handleAddressSearch, 500)}
            onKeyDown={(e) => {
              e.stopPropagation()
            }}
            type="search"
            className="h-8"
          />
        </div>

        <div className="max-h-60 overflow-scroll">
          {noItemsFound && <p className="py-6 text-center text-sm">No team found.</p>}

          {districts?.map(({ id: distId, name, customers }) => {
            return customers.length > 0 ? (
              <SelectGroup key={distId}>
                <SelectLabel>{name}</SelectLabel>

                {customers?.map(({ id: custId, name, address }) => (
                  <SelectItem key={custId} value={custId} className="cursor-pointer">
                    <p className="... max-w-64 truncate">
                      {name} - {address}
                    </p>
                  </SelectItem>
                ))}
              </SelectGroup>
            ) : null
          })}
        </div>
      </SelectContent>
    </Select>
  )
}
export default CustomerSelect
