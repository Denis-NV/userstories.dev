import { graphql } from '@/gql'

export const CUSTOMERS_QUERY = graphql(`
  query Customers {
    customer {
      __typename
      id
      name
      address

      delivery_start_time
      delivery_end_time

      district {
        id
        name
      }
    }
  }
`)
