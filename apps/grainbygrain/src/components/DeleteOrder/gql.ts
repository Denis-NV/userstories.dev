import { graphql } from '@/gql'

export const DELETE_ORDER_MUTATION = graphql(`
  mutation DeleteOrder($id: uuid!) {
    delete_order_by_pk(id: $id) {
      id
    }
  }
`)
