import { graphql } from '@/gql'

export const ADD_PRODUCT_MUTATION = graphql(`
  mutation AddProduct($name: String!, $weight: numeric!, $department_id: uuid!) {
    insert_product_one(object: { name: $name, weight: $weight, department_id: $department_id }) {
      id
    }
  }
`)
