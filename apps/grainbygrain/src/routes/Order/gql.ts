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
  fragment fullOrder_on_Order on order {
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
    order_products(order_by: { created_at: asc }) {
      ...orderProduct_on_OrderProduct
    }
  }
`)

export const ORDER_QUERY = graphql(`
  query Order($id: uuid!) {
    order_by_pk(id: $id) {
      ...fullOrder_on_Order
    }
  }
`)

export const PRODUCST_BY_DEPARTMENT_QUERY = graphql(`
  query ProductsByDepartment {
    department(order_by: { name: asc }) {
      id
      name
      products(where: { is_active: { _eq: true } }, order_by: { name: asc }) {
        id
        name
        weight
      }
    }
  }
`)

export const DELIVERY_METHODS_QUERY = graphql(`
  query DeliveryMethods {
    delivery_method {
      id
      name
    }
  }
`)

export const UPDATE_ORDER_MUTATION = graphql(`
  mutation UpdateOrder($id: uuid!, $input: order_set_input!) {
    update_order_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...fullOrder_on_Order
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
