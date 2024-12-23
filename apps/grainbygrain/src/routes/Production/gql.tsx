import { graphql } from '@/gql'

export const PRODUCTS_BY_ORDER_DATE_QUERY = graphql(`
  query ProdusctsByOrderDate($limit: Int = 100, $filters: order_product_bool_exp) {
    order_product(limit: $limit, where: $filters, order_by: [{ order: { delivery_date: desc } }]) {
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
