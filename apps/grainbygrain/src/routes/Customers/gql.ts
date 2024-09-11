import { graphql } from '@/gql'

export const ADD_CUSTOMER_MUTATION = graphql(`
  mutation AddCustomer($name: String!, $address: String!, $district_id: uuid!) {
    insert_customer_one(object: { name: $name, address: $address, district_id: $district_id }) {
      id
    }
  }
`)
