import { FC, ReactNode, Fragment, useState, useCallback } from 'react'
import { useQuery } from '@apollo/client'
import { useAccessToken } from '@nhost/react'

import ComboBox from '@/components/ComboBox'
import ComboItem from '@/components/ComboItem'

import { CUSTOMERS_BY_DISTRICT_QUERY } from './gql'

type TProps<T extends string> = {
  onChange: (value: T) => void
  value?: T
  TriggerWrapperComp?: FC<{ children?: ReactNode }>
  placeholder?: string
  triggerClassName?: string
  onlyActive?: boolean
  disabled?: boolean
}

const CustomerSelect = <T extends string>({
  value,
  onChange,
  TriggerWrapperComp = Fragment,
  placeholder = 'Select customer',
  triggerClassName,
  onlyActive = true,
  disabled,
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

  const selectedLabel =
    value && customers ? customers?.find((customer) => customer.id === value)?.name : placeholder

  const handleSearch = useCallback((str: string) => setSearchStr(str), [setSearchStr])

  const handleValueChange = useCallback(
    (e: T) => {
      setOpen(false)

      onChange(e)
    },
    [setOpen, onChange],
  )

  return (
    <ComboBox
      disabled={disabled}
      open={open}
      onOpen={setOpen}
      selected={selectedLabel}
      onSearch={handleSearch}
      TriggerWrapperComp={TriggerWrapperComp}
      placeholder={placeholder}
      notFoundMsg="No customers found"
      triggerClassName={triggerClassName}
      noItemsFound={noItemsFound}
      searchResult={districts?.map(({ id: distId, name, customers }) => {
        return customers.length > 0 ? (
          <div key={distId} role="group">
            <div className="px-2 py-1.5 text-sm font-semibold">{name}</div>

            {customers?.map(({ id: custId, name, address }) => (
              <ComboItem
                key={custId}
                value={custId}
                onSelected={handleValueChange}
                isSelected={custId === value}
                className="cursor-pointer"
              >
                <p className="... max-w-64 truncate">
                  {name} - {address}
                </p>
              </ComboItem>
            ))}
          </div>
        ) : null
      })}
    />
  )
}
export default CustomerSelect
