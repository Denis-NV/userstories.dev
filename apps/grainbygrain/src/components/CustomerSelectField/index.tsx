import { Control, FieldValues, Path } from 'react-hook-form'
import { useQuery } from '@apollo/client'
import { useAccessToken } from '@nhost/react'

import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
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

interface TProps<T extends FieldValues> {
  control: Control<T, any>
  name: Path<T>
}

const CustomerSelectField = <T extends FieldValues>({ control, name }: TProps<T>) => {
  const accessToken = useAccessToken()

  const { data: customersData } = useQuery(CUSTOMERS_BY_DISTRICT_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })
  const districts = customersData?.district

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Customer</FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger disabled={!districts} className="max-w-96">
                <SelectValue placeholder="Select customer" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="max-h-60 max-w-96">
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
        </FormItem>
      )}
    />
  )
}
export default CustomerSelectField
