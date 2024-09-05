import { graphql } from '@/gql'

export const PRODUCTS_BY_ORDER_DATE_QUERY = graphql(`
  query ProdusctsByOrderDate($filters: order_bool_exp) {
    order_product(where: { order: $filters }, order_by: [{ order: { delivery_date: desc } }]) {
      id
      order {
        id
        delivery_date
      }
      product {
        id
        name
        weight

        department {
          id
          name
        }
      }
      quantity
    }
  }
`)
