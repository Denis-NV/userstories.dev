import { graphql } from '@/gql'

export const CUSTOMERS_BY_DISTRICT_QUERY = graphql(`
  query CustomersByDistrictQuery {
    district(order_by: { name: asc }) {
      id
      name

      customers(order_by: { name: asc }) {
        id
        name
      }
    }
  }
`)
