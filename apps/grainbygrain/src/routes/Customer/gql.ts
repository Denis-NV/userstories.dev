import { graphql } from '@/gql'

export const CUSTOMER_QUERY = graphql(`
  query CustomerQuery($id: uuid!) {
    customer_by_pk(id: $id) {
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
