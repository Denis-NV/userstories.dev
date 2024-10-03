import { FC, ReactNode, Fragment, useCallback, useState } from 'react'
import { useQuery } from '@apollo/client'
import { useAccessToken } from '@nhost/react'

import { SelectGroup, SelectLabel } from '@/components/ui/select'
import ComboBox from '@/components/ComboBox'
import ComboItem from '@/components/ComboItem'

import { PRODUCST_BY_DEPARTMENT_QUERY } from './gql'

type TProps<T extends string> = {
  onChange: (value: T) => void
  value?: T
  TriggerWrapperComp?: FC<{ children?: ReactNode }>
  placeholder?: string
  triggerClassName?: string
  excludeIds?: string[]
  onlyActive?: boolean
}

const ProductSelect = <T extends string>({
  value,
  onChange,
  TriggerWrapperComp = Fragment,
  placeholder = 'Select product',
  triggerClassName,
  excludeIds = [],
  onlyActive = true,
}: TProps<T>) => {
  const accessToken = useAccessToken()
  const [open, setOpen] = useState(false)
  const [searchStr, setSearchStr] = useState('')

  const { data } = useQuery(PRODUCST_BY_DEPARTMENT_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    variables: {
      onlyActive: [true, onlyActive],
      search: `%${searchStr}%`,
    },
  })
  const departments = data?.department
  const products = departments?.reduce(
    (prev, cur) => {
      return [...prev, ...cur.products]
    },
    [] as (typeof departments)[0]['products'],
  )
  const selected = products?.find((product) => product.id === value)
  const selectedLabel = selected ? `${selected.name} ${selected.weight}g` : undefined

  let productsNr = 0

  const handleValueChange = useCallback(
    (e: T) => {
      setOpen(false)

      onChange(e)
    },
    [setOpen, onChange],
  )

  const handleSearch = useCallback(
    (str: string) => {
      setSearchStr(str)
    },
    [setSearchStr],
  )

  return (
    <ComboBox
      open={open}
      onOpen={setOpen}
      selected={selectedLabel}
      onSearch={handleSearch}
      TriggerWrapperComp={TriggerWrapperComp}
      placeholder={placeholder}
      notFoundMsg="No products found"
      triggerClassName={triggerClassName}
      noItemsFound={searchStr !== '' && products?.length == 0}
      searchResult={
        <>
          {departments?.map(({ id: depId, name, products }) => {
            const uniqueProducts = excludeIds
              ? products.filter(({ id }) => !excludeIds.includes(id))
              : products

            productsNr += uniqueProducts?.length

            return uniqueProducts?.length > 0 ? (
              <SelectGroup key={depId}>
                <SelectLabel>{name}</SelectLabel>

                {uniqueProducts?.map(({ id: prodId, name, weight }) => (
                  <ComboItem
                    key={prodId}
                    value={prodId}
                    onSelected={handleValueChange}
                    isSelected={prodId === value}
                    className="cursor-pointer"
                  >
                    <p className="... max-w-64 truncate">
                      {name} {weight}g
                    </p>
                  </ComboItem>
                ))}
              </SelectGroup>
            ) : null
          })}

          {productsNr === 0 && searchStr == '' && (
            <p className="py-6 text-center text-sm">All products selected</p>
          )}
        </>
      }
    />
  )
}
export default ProductSelect
