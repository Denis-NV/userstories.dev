import { graphql } from '@/gql'

export const CUSTOMER_FRAGMENT = graphql(`
  fragment fullCustomer_on_Customer on customer {
    id
    is_active
    name
    address

    delivery_start_time
    delivery_end_time

    district {
      id
      name
    }
  }
`)

export const CUSTOMER_QUERY = graphql(`
  query Customer($id: uuid!) {
    customer_by_pk(id: $id) {
      ...fullCustomer_on_Customer
    }
  }
`)
