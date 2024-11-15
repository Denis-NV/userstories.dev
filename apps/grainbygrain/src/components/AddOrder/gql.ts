import { graphql } from '@/gql'

export const ADD_ORDER_MUTATION = graphql(`
  mutation AddOrder($customer_id: uuid, $delivery_date: date, $delivery_method_id: uuid) {
    insert_order_one(
      object: {
        customer_id: $customer_id
        delivery_date: $delivery_date
        delivery_method_id: $delivery_method_id
      }
    ) {
      id
    }
  }
`)
