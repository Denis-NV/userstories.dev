import { graphql } from '@/gql'

export const LIST_ORDER_FRAGMENT = graphql(`
  fragment listOrder_on_Order on order {
    id
    created_at
    order_nr
    delivery_date

    customer {
      id
      name
      district {
        id
        name
      }
    }
  }
`)

export const ORDERS_QUERY = graphql(`
  query OrdersQuery($limit: Int, $filters: order_bool_exp) {
    order_aggregate(where: $filters) {
      aggregate {
        count
      }
    }
    order(limit: $limit, where: $filters, order_by: [{ created_at: asc }]) {
      ...listOrder_on_Order
    }
  }
`)

export const ADD_ORDER_MUTATION = graphql(`
  mutation AddOrder($customer_id: uuid, $delivery_date: date) {
    insert_order_one(object: { customer_id: $customer_id, delivery_date: $delivery_date }) {
      ...listOrder_on_Order
    }
  }
`)
