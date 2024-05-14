import { gql } from '@apollo/client'

export const LANDING_QUERY = gql`
  query {
    customer {
      id
      name

      delivery_start_time
      delivery_end_time

      district {
        id
        name
      }

      orders {
        id
        comment

        delivery_date
        delivery_method {
          id
          name
        }

        order_products {
          product {
            id
            name
          }
        }
      }
    }
  }
`
