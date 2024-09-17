import { graphql } from '@/gql'

export const PRODUCT_FRAGMENT = graphql(`
  fragment fullProduct_on_Product on product {
    id
    is_active
    name
    weight
    department {
      id
      name
    }
  }
`)

export const PRODUCT_QUERY = graphql(`
  query Product($id: uuid!) {
    product_by_pk(id: $id) {
      ...fullProduct_on_Product
    }
  }
`)

export const UPDATE_PRODUCT_MUTATION = graphql(`
  mutation UpdateProduct($id: uuid!, $input: product_set_input!) {
    update_product_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...fullProduct_on_Product
    }
  }
`)
