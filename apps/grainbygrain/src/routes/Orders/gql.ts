import { graphql } from '@/gql'

export const ORDERS_QUERY = graphql(`
  query OrdersQuery($limit: Int, $filters: order_bool_exp) {
    order_aggregate {
      aggregate {
        count
      }
    }
    order(limit: $limit, where: $filters, order_by: [{ created_at: asc }]) {
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
