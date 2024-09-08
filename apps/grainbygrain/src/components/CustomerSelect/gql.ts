import { graphql } from '@/gql'

export const CUSTOMERS_BY_DISTRICT_QUERY = graphql(`
  query CustomersByDistrict(
    $onlyActive: [Boolean!] = [true]
    $name: String = "%%"
    $address: String = "%%"
  ) {
    district(order_by: { name: asc }) {
      id
      name
      customers(
        where: {
          name: { _ilike: $name }
          address: { _ilike: $address }
          is_active: { _in: $onlyActive }
        }
        order_by: { name: asc }
      ) {
        id
        name
        address
      }
    }
  }
`)
