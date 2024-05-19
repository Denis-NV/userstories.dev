import { graphql } from '@/gql'

export const ORDERS_QUERY = graphql(`
  query OrdersQuery($filters: order_bool_exp) {
    order(limit: 2, where: $filters) {
      id
      created_at
      order_nr
      delivery_date

      customer {
        id
        name
      }
    }
  }
`)
