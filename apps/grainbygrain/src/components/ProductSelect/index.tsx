import { FC, ReactNode, Fragment } from 'react'
import { useQuery } from '@apollo/client'
import { useAccessToken } from '@nhost/react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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

  const { data } = useQuery(PRODUCST_BY_DEPARTMENT_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    variables: {
      onlyActive: [true, onlyActive],
    },
  })
  const departments = data?.department
  let productsNr = 0

  return (
    <Select onValueChange={onChange} value={value}>
      <TriggerWrapperComp>
        <SelectTrigger disabled={!departments} style={{ margin: 0 }} className={triggerClassName}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </TriggerWrapperComp>
      <SelectContent className="max-h-60">
        {departments?.map(({ id: depId, name, products }) => {
          const uniqueProducts = excludeIds
            ? products.filter(({ id }) => !excludeIds.includes(id))
            : products

          productsNr = +uniqueProducts?.length

          return uniqueProducts?.length > 0 ? (
            <SelectGroup key={depId}>
              <SelectLabel>{name}</SelectLabel>

              {uniqueProducts?.map(({ id: prodId, name, weight }) => (
                <SelectItem key={prodId} value={prodId}>
                  {name} {weight}g
                </SelectItem>
              ))}
            </SelectGroup>
          ) : null
        })}

        {productsNr === 0 && <p className="px-3 py-2">All products selected</p>}
      </SelectContent>
    </Select>
  )
}
export default ProductSelect
