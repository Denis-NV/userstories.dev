import { graphql } from '@/gql'

export const ORDER_FRAGMENT = graphql(`
  fragment Order_OrderFragment on order {
    id
    created_at
    updated_at
    order_nr
    comment
    delivery_date
    delivery_method {
      id
      name
    }
    customer {
      id
      name
      district {
        id
        name
      }
    }
    order_products {
      id
      product {
        id
        name
      }
    }
  }
`)

export const ORDER_QUERY = graphql(`
  query OrderQuery($id: uuid!) {
    order_by_pk(id: $id) {
      ...Order_OrderFragment
    }
  }
`)

export const UPDATE_ORDER_MUTATION = graphql(`
  mutation UpdateOrder($id: uuid!, $comment: String) {
    update_order(where: { id: { _eq: $id } }, _set: { comment: $comment }) {
      returning {
        ...Order_OrderFragment
      }
    }
  }
`)
