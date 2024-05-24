import { graphql } from '@/gql'

export const ORDERS_QUERY = graphql(`
  query OrdersQuery($limit: Int, $filters: order_bool_exp) {
    order(limit: $limit, where: $filters) {
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
