import { graphql } from '@/gql'

export const ORDER_PRODUCT_FRAGMENT = graphql(`
  fragment orderProduct_on_OrderProduct on order_product {
    id
    quantity
    product {
      id
      name
      weight
      department {
        id
        name
      }
    }
  }
`)

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
      ...orderProduct_on_OrderProduct
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
  mutation UpdateOrder($id: uuid!, $input: order_set_input) {
    update_order_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...Order_OrderFragment
    }
  }
`)

export const UPDATE_ORDER_PRODUCT_MUTATION = graphql(`
  mutation UpdateOrderProduct($id: uuid!, $quantity: Int!) {
    update_order_product_by_pk(pk_columns: { id: $id }, _set: { quantity: $quantity }) {
      ...orderProduct_on_OrderProduct
    }
  }
`)

export const ADD_ORDER_PRODUCT_MUTATION = graphql(`
  mutation AddOrderProduct($order_id: uuid!, $quantity: Int!, $product_id: uuid!) {
    insert_order_product_one(
      object: { order_id: $order_id, quantity: $quantity, product_id: $product_id }
    ) {
      ...orderProduct_on_OrderProduct
    }
  }
`)

export const DELETE_ORDER_PRODUCT_MUTATION = graphql(`
  mutation DeleteOrderProduct($id: uuid!) {
    delete_order_product_by_pk(id: $id) {
      id
    }
  }
`)
