/* eslint-disable */
import * as types from './graphql'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query CustomerQuery($id: uuid!) {\n    customer_by_pk(id: $id) {\n      __typename\n      id\n      name\n      address\n\n      delivery_start_time\n      delivery_end_time\n\n      district {\n        id\n        name\n      }\n    }\n  }\n':
    types.CustomerQueryDocument,
  '\n  query CustomersQuery {\n    customer {\n      __typename\n      id\n      name\n      address\n\n      delivery_start_time\n      delivery_end_time\n\n      district {\n        id\n        name\n      }\n    }\n  }\n':
    types.CustomersQueryDocument,
  '\n  fragment orderProduct_on_OrderProduct on order_product {\n    id\n    quantity\n    product {\n      id\n      name\n      weight\n      department {\n        id\n        name\n      }\n    }\n  }\n':
    types.OrderProduct_On_OrderProductFragmentDoc,
  '\n  fragment Order_OrderFragment on order {\n    id\n    created_at\n    updated_at\n    order_nr\n    comment\n    delivery_date\n    delivery_method {\n      id\n      name\n    }\n    customer {\n      id\n      name\n      district {\n        id\n        name\n      }\n    }\n    order_products(order_by: { created_at: asc }) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n':
    types.Order_OrderFragmentFragmentDoc,
  '\n  query OrderQuery($id: uuid!) {\n    order_by_pk(id: $id) {\n      ...Order_OrderFragment\n    }\n  }\n':
    types.OrderQueryDocument,
  '\n  query ProductsByDepartmentQuery {\n    department(order_by: { name: asc }) {\n      id\n      name\n      products(order_by: { name: asc }) {\n        id\n        name\n        weight\n      }\n    }\n  }\n':
    types.ProductsByDepartmentQueryDocument,
  '\n  query DeliveryMethodsQuery {\n    delivery_method {\n      id\n      name\n    }\n  }\n':
    types.DeliveryMethodsQueryDocument,
  '\n  query CustomersByDistrictQuery {\n    district(order_by: { name: asc }) {\n      id\n      name\n\n      customers(order_by: { name: asc }) {\n        id\n        name\n      }\n    }\n  }\n':
    types.CustomersByDistrictQueryDocument,
  '\n  mutation UpdateOrder($id: uuid!, $input: order_set_input) {\n    update_order_by_pk(pk_columns: { id: $id }, _set: $input) {\n      ...Order_OrderFragment\n    }\n  }\n':
    types.UpdateOrderDocument,
  '\n  mutation UpdateOrderProduct($id: uuid!, $quantity: Int!) {\n    update_order_product_by_pk(pk_columns: { id: $id }, _set: { quantity: $quantity }) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n':
    types.UpdateOrderProductDocument,
  '\n  mutation AddOrderProduct($order_id: uuid!, $quantity: Int!, $product_id: uuid!) {\n    insert_order_product_one(\n      object: { order_id: $order_id, quantity: $quantity, product_id: $product_id }\n    ) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n':
    types.AddOrderProductDocument,
  '\n  mutation DeleteOrderProduct($id: uuid!) {\n    delete_order_product_by_pk(id: $id) {\n      id\n    }\n  }\n':
    types.DeleteOrderProductDocument,
  '\n  query OrdersQuery($limit: Int, $filters: order_bool_exp) {\n    order_aggregate {\n      aggregate {\n        count\n      }\n    }\n    order(limit: $limit, where: $filters, order_by: [{ created_at: asc }]) {\n      id\n      created_at\n      order_nr\n      delivery_date\n\n      customer {\n        id\n        name\n      }\n    }\n  }\n':
    types.OrdersQueryDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query CustomerQuery($id: uuid!) {\n    customer_by_pk(id: $id) {\n      __typename\n      id\n      name\n      address\n\n      delivery_start_time\n      delivery_end_time\n\n      district {\n        id\n        name\n      }\n    }\n  }\n',
): (typeof documents)['\n  query CustomerQuery($id: uuid!) {\n    customer_by_pk(id: $id) {\n      __typename\n      id\n      name\n      address\n\n      delivery_start_time\n      delivery_end_time\n\n      district {\n        id\n        name\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query CustomersQuery {\n    customer {\n      __typename\n      id\n      name\n      address\n\n      delivery_start_time\n      delivery_end_time\n\n      district {\n        id\n        name\n      }\n    }\n  }\n',
): (typeof documents)['\n  query CustomersQuery {\n    customer {\n      __typename\n      id\n      name\n      address\n\n      delivery_start_time\n      delivery_end_time\n\n      district {\n        id\n        name\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment orderProduct_on_OrderProduct on order_product {\n    id\n    quantity\n    product {\n      id\n      name\n      weight\n      department {\n        id\n        name\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment orderProduct_on_OrderProduct on order_product {\n    id\n    quantity\n    product {\n      id\n      name\n      weight\n      department {\n        id\n        name\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment Order_OrderFragment on order {\n    id\n    created_at\n    updated_at\n    order_nr\n    comment\n    delivery_date\n    delivery_method {\n      id\n      name\n    }\n    customer {\n      id\n      name\n      district {\n        id\n        name\n      }\n    }\n    order_products(order_by: { created_at: asc }) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n',
): (typeof documents)['\n  fragment Order_OrderFragment on order {\n    id\n    created_at\n    updated_at\n    order_nr\n    comment\n    delivery_date\n    delivery_method {\n      id\n      name\n    }\n    customer {\n      id\n      name\n      district {\n        id\n        name\n      }\n    }\n    order_products(order_by: { created_at: asc }) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query OrderQuery($id: uuid!) {\n    order_by_pk(id: $id) {\n      ...Order_OrderFragment\n    }\n  }\n',
): (typeof documents)['\n  query OrderQuery($id: uuid!) {\n    order_by_pk(id: $id) {\n      ...Order_OrderFragment\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query ProductsByDepartmentQuery {\n    department(order_by: { name: asc }) {\n      id\n      name\n      products(order_by: { name: asc }) {\n        id\n        name\n        weight\n      }\n    }\n  }\n',
): (typeof documents)['\n  query ProductsByDepartmentQuery {\n    department(order_by: { name: asc }) {\n      id\n      name\n      products(order_by: { name: asc }) {\n        id\n        name\n        weight\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query DeliveryMethodsQuery {\n    delivery_method {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  query DeliveryMethodsQuery {\n    delivery_method {\n      id\n      name\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query CustomersByDistrictQuery {\n    district(order_by: { name: asc }) {\n      id\n      name\n\n      customers(order_by: { name: asc }) {\n        id\n        name\n      }\n    }\n  }\n',
): (typeof documents)['\n  query CustomersByDistrictQuery {\n    district(order_by: { name: asc }) {\n      id\n      name\n\n      customers(order_by: { name: asc }) {\n        id\n        name\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateOrder($id: uuid!, $input: order_set_input) {\n    update_order_by_pk(pk_columns: { id: $id }, _set: $input) {\n      ...Order_OrderFragment\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateOrder($id: uuid!, $input: order_set_input) {\n    update_order_by_pk(pk_columns: { id: $id }, _set: $input) {\n      ...Order_OrderFragment\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateOrderProduct($id: uuid!, $quantity: Int!) {\n    update_order_product_by_pk(pk_columns: { id: $id }, _set: { quantity: $quantity }) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateOrderProduct($id: uuid!, $quantity: Int!) {\n    update_order_product_by_pk(pk_columns: { id: $id }, _set: { quantity: $quantity }) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddOrderProduct($order_id: uuid!, $quantity: Int!, $product_id: uuid!) {\n    insert_order_product_one(\n      object: { order_id: $order_id, quantity: $quantity, product_id: $product_id }\n    ) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n',
): (typeof documents)['\n  mutation AddOrderProduct($order_id: uuid!, $quantity: Int!, $product_id: uuid!) {\n    insert_order_product_one(\n      object: { order_id: $order_id, quantity: $quantity, product_id: $product_id }\n    ) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteOrderProduct($id: uuid!) {\n    delete_order_product_by_pk(id: $id) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  mutation DeleteOrderProduct($id: uuid!) {\n    delete_order_product_by_pk(id: $id) {\n      id\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query OrdersQuery($limit: Int, $filters: order_bool_exp) {\n    order_aggregate {\n      aggregate {\n        count\n      }\n    }\n    order(limit: $limit, where: $filters, order_by: [{ created_at: asc }]) {\n      id\n      created_at\n      order_nr\n      delivery_date\n\n      customer {\n        id\n        name\n      }\n    }\n  }\n',
): (typeof documents)['\n  query OrdersQuery($limit: Int, $filters: order_bool_exp) {\n    order_aggregate {\n      aggregate {\n        count\n      }\n    }\n    order(limit: $limit, where: $filters, order_by: [{ created_at: asc }]) {\n      id\n      created_at\n      order_nr\n      delivery_date\n\n      customer {\n        id\n        name\n      }\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
