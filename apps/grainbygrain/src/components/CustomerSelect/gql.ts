import { graphql } from '@/gql'

export const CUSTOMERS_BY_DISTRICT_QUERY = graphql(`
  query CustomersByDistrict {
    district(order_by: { name: asc }) {
      id
      name

      customers(where: { is_active: { _eq: true } }, order_by: { name: asc }) {
        id
        name
      }
    }
  }
`)
