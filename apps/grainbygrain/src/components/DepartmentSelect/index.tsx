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
import { DEPARTMENTS_QUERY } from './gql'

type TProps<T extends string> = {
  onChange: (value: T) => void
  value?: T
  TriggerWrapperComp?: FC<{ children?: ReactNode }>
  placeholder?: string
  triggerClassName?: string
}

const DepartmentSelect = <T extends string>({
  value,
  onChange,
  TriggerWrapperComp = Fragment,
  placeholder = 'Select department',
  triggerClassName,
}: TProps<T>) => {
  const accessToken = useAccessToken()

  const { data } = useQuery(DEPARTMENTS_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })
  const departments = data?.department

  return (
    <Select onValueChange={onChange} value={value}>
      <TriggerWrapperComp>
        <SelectTrigger disabled={!departments} className={triggerClassName}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </TriggerWrapperComp>

      <SelectContent className="max-h-60">
        {departments?.map(({ id, name }) => {
          return (
            <SelectItem key={id} value={id} className="ml-3">
              {name}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
export default DepartmentSelect
