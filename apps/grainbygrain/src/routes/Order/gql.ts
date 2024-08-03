import { graphql } from '@/gql'

export const ORDER_QUERY = graphql(`
  query OrderQuery($id: uuid!) {
    order_by_pk(id: $id) {
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
  }
`)
