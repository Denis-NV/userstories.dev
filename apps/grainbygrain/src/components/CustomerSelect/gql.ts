import { graphql } from '@/gql'

export const CUSTOMERS_BY_DISTRICT_QUERY = graphql(`
  query CustomersByDistrict($onlyActive: [Boolean!] = [true], $search: String = "%%") {
    district(order_by: { name: asc }) {
      id
      name
      customers(
        where: {
          _and: [
            { is_active: { _in: $onlyActive } }
            { _or: [{ name: { _ilike: $search } }, { address: { _ilike: $search } }] }
          ]
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
