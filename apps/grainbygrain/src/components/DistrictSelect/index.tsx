import { FC, ReactNode, Fragment } from 'react'
import { useQuery } from '@apollo/client'
import { useAccessToken } from '@nhost/react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { DISTRICTS_QUERY } from './gql'

type TProps<T extends string> = {
  onChange: (value: T) => void
  value?: T
  TriggerWrapperComp?: FC<{ children?: ReactNode }>
  placeholder?: string
  triggerClassName?: string
}

const DistrictSelect = <T extends string>({
  value,
  onChange,
  TriggerWrapperComp = Fragment,
  placeholder = 'Select district',
  triggerClassName,
}: TProps<T>) => {
  const accessToken = useAccessToken()

  const { data } = useQuery(DISTRICTS_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const districts = data?.district

  return (
    <Select onValueChange={onChange} value={value}>
      <TriggerWrapperComp>
        <SelectTrigger disabled={!districts} className={triggerClassName}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </TriggerWrapperComp>

      <SelectContent className="max-h-60 overflow-scroll">
        {districts?.map(({ id, name }) => {
          return districts.length > 0 ? (
            <SelectItem key={id} value={id} className="cursor-pointer">
              {name}
            </SelectItem>
          ) : null
        })}
      </SelectContent>
    </Select>
  )
}
export default DistrictSelect
