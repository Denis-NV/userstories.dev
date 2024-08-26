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
import { CUSTOMERS_BY_DISTRICT_QUERY } from './gql'

type TProps<T extends string> = {
  onChange: (value: T) => void
  value?: T
  TriggerWrapperComp?: FC<{ children?: ReactNode }>
  placeholder?: string
  triggerClassName?: string
}

const CustomerSelect = <T extends string>({
  value,
  onChange,
  TriggerWrapperComp = Fragment,
  placeholder = 'Select customer',
  triggerClassName,
}: TProps<T>) => {
  const accessToken = useAccessToken()

  const { data: customersData } = useQuery(CUSTOMERS_BY_DISTRICT_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })
  const districts = customersData?.district

  return (
    <Select onValueChange={onChange} value={value}>
      <TriggerWrapperComp>
        <SelectTrigger disabled={!districts} className={triggerClassName}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </TriggerWrapperComp>

      <SelectContent className="max-h-60">
        {districts?.map(({ id: distId, name, customers }) => {
          return (
            <SelectGroup key={distId}>
              <SelectLabel>{name}</SelectLabel>

              {customers?.map(({ id: custId, name }) => (
                <SelectItem key={custId} value={custId} className="ml-3">
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          )
        })}
      </SelectContent>
    </Select>
  )
}
export default CustomerSelect
