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
  '\n  query CustomersByDistrict(\n    $onlyActive: [Boolean!] = [true]\n    $name: String = "%%"\n    $address: String = "%%"\n  ) {\n    district(order_by: { name: asc }) {\n      id\n      name\n      customers(\n        where: {\n          name: { _ilike: $name }\n          address: { _ilike: $address }\n          is_active: { _in: $onlyActive }\n        }\n        order_by: { name: asc }\n      ) {\n        id\n        name\n        address\n      }\n    }\n  }\n':
    types.CustomersByDistrictDocument,
  '\n  mutation DeleteOrder($id: uuid!) {\n    delete_order_by_pk(id: $id) {\n      id\n    }\n  }\n':
    types.DeleteOrderDocument,
  '\n  query Departments {\n    department {\n      id\n      name\n    }\n  }\n':
    types.DepartmentsDocument,
  '\n  query Districts {\n    district {\n      id\n      name\n    }\n  }\n':
    types.DistrictsDocument,
  '\n  fragment fullCustomer_on_Customer on customer {\n    id\n    is_active\n    name\n    address\n\n    delivery_start_time\n    delivery_end_time\n\n    district {\n      id\n      name\n    }\n  }\n':
    types.FullCustomer_On_CustomerFragmentDoc,
  '\n  query Customer($id: uuid!) {\n    customer_by_pk(id: $id) {\n      ...fullCustomer_on_Customer\n    }\n  }\n':
    types.CustomerDocument,
  '\n  mutation UpdateCustomer($id: uuid!, $input: customer_set_input!) {\n    update_customer_by_pk(pk_columns: { id: $id }, _set: $input) {\n      ...fullCustomer_on_Customer\n    }\n  }\n':
    types.UpdateCustomerDocument,
  '\n  fragment orderProduct_on_OrderProduct on order_product {\n    id\n    quantity\n    product {\n      id\n      name\n      weight\n      department {\n        id\n        name\n      }\n    }\n  }\n':
    types.OrderProduct_On_OrderProductFragmentDoc,
  '\n  fragment fullOrder_on_Order on order {\n    id\n    created_at\n    updated_at\n    order_nr\n    comment\n    delivery_date\n    delivery_method {\n      id\n      name\n    }\n    customer {\n      id\n      name\n      district {\n        id\n        name\n      }\n    }\n    order_products(order_by: { created_at: asc }) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n':
    types.FullOrder_On_OrderFragmentDoc,
  '\n  query Order($id: uuid!) {\n    order_by_pk(id: $id) {\n      ...fullOrder_on_Order\n    }\n  }\n':
    types.OrderDocument,
  '\n  query ProductsByDepartment {\n    department(order_by: { name: asc }) {\n      id\n      name\n      products(where: { is_active: { _eq: true } }, order_by: { name: asc }) {\n        id\n        name\n        weight\n      }\n    }\n  }\n':
    types.ProductsByDepartmentDocument,
  '\n  query DeliveryMethods {\n    delivery_method {\n      id\n      name\n    }\n  }\n':
    types.DeliveryMethodsDocument,
  '\n  mutation UpdateOrder($id: uuid!, $input: order_set_input!) {\n    update_order_by_pk(pk_columns: { id: $id }, _set: $input) {\n      ...fullOrder_on_Order\n    }\n  }\n':
    types.UpdateOrderDocument,
  '\n  mutation UpdateOrderProduct($id: uuid!, $quantity: Int!) {\n    update_order_product_by_pk(pk_columns: { id: $id }, _set: { quantity: $quantity }) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n':
    types.UpdateOrderProductDocument,
  '\n  mutation AddOrderProduct($order_id: uuid!, $quantity: Int!, $product_id: uuid!) {\n    insert_order_product_one(\n      object: { order_id: $order_id, quantity: $quantity, product_id: $product_id }\n    ) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n':
    types.AddOrderProductDocument,
  '\n  mutation DeleteOrderProduct($id: uuid!) {\n    delete_order_product_by_pk(id: $id) {\n      id\n    }\n  }\n':
    types.DeleteOrderProductDocument,
  '\n  fragment listOrder_on_Order on order {\n    id\n    created_at\n    order_nr\n    delivery_date\n\n    customer {\n      id\n      name\n      district {\n        id\n        name\n      }\n    }\n  }\n':
    types.ListOrder_On_OrderFragmentDoc,
  '\n  query Orders($limit: Int, $filters: order_bool_exp) {\n    order_aggregate(where: $filters) {\n      aggregate {\n        count\n      }\n    }\n    order(limit: $limit, where: $filters, order_by: [{ created_at: desc }]) {\n      ...listOrder_on_Order\n    }\n  }\n':
    types.OrdersDocument,
  '\n  mutation AddOrder($customer_id: uuid, $delivery_date: date) {\n    insert_order_one(object: { customer_id: $customer_id, delivery_date: $delivery_date }) {\n      ...listOrder_on_Order\n    }\n  }\n':
    types.AddOrderDocument,
  '\n  query ProdusctsByOrderDate($filters: order_product_bool_exp) {\n    order_product(where: $filters, order_by: [{ order: { delivery_date: desc } }]) {\n      id\n\n      order {\n        id\n        delivery_date\n      }\n      product {\n        id\n        name\n        weight\n        department {\n          id\n          name\n        }\n      }\n      quantity\n    }\n  }\n':
    types.ProdusctsByOrderDateDocument,
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
  source: '\n  query CustomersByDistrict(\n    $onlyActive: [Boolean!] = [true]\n    $name: String = "%%"\n    $address: String = "%%"\n  ) {\n    district(order_by: { name: asc }) {\n      id\n      name\n      customers(\n        where: {\n          name: { _ilike: $name }\n          address: { _ilike: $address }\n          is_active: { _in: $onlyActive }\n        }\n        order_by: { name: asc }\n      ) {\n        id\n        name\n        address\n      }\n    }\n  }\n',
): (typeof documents)['\n  query CustomersByDistrict(\n    $onlyActive: [Boolean!] = [true]\n    $name: String = "%%"\n    $address: String = "%%"\n  ) {\n    district(order_by: { name: asc }) {\n      id\n      name\n      customers(\n        where: {\n          name: { _ilike: $name }\n          address: { _ilike: $address }\n          is_active: { _in: $onlyActive }\n        }\n        order_by: { name: asc }\n      ) {\n        id\n        name\n        address\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteOrder($id: uuid!) {\n    delete_order_by_pk(id: $id) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  mutation DeleteOrder($id: uuid!) {\n    delete_order_by_pk(id: $id) {\n      id\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Departments {\n    department {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  query Departments {\n    department {\n      id\n      name\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Districts {\n    district {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  query Districts {\n    district {\n      id\n      name\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment fullCustomer_on_Customer on customer {\n    id\n    is_active\n    name\n    address\n\n    delivery_start_time\n    delivery_end_time\n\n    district {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  fragment fullCustomer_on_Customer on customer {\n    id\n    is_active\n    name\n    address\n\n    delivery_start_time\n    delivery_end_time\n\n    district {\n      id\n      name\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Customer($id: uuid!) {\n    customer_by_pk(id: $id) {\n      ...fullCustomer_on_Customer\n    }\n  }\n',
): (typeof documents)['\n  query Customer($id: uuid!) {\n    customer_by_pk(id: $id) {\n      ...fullCustomer_on_Customer\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateCustomer($id: uuid!, $input: customer_set_input!) {\n    update_customer_by_pk(pk_columns: { id: $id }, _set: $input) {\n      ...fullCustomer_on_Customer\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateCustomer($id: uuid!, $input: customer_set_input!) {\n    update_customer_by_pk(pk_columns: { id: $id }, _set: $input) {\n      ...fullCustomer_on_Customer\n    }\n  }\n']
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
  source: '\n  fragment fullOrder_on_Order on order {\n    id\n    created_at\n    updated_at\n    order_nr\n    comment\n    delivery_date\n    delivery_method {\n      id\n      name\n    }\n    customer {\n      id\n      name\n      district {\n        id\n        name\n      }\n    }\n    order_products(order_by: { created_at: asc }) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n',
): (typeof documents)['\n  fragment fullOrder_on_Order on order {\n    id\n    created_at\n    updated_at\n    order_nr\n    comment\n    delivery_date\n    delivery_method {\n      id\n      name\n    }\n    customer {\n      id\n      name\n      district {\n        id\n        name\n      }\n    }\n    order_products(order_by: { created_at: asc }) {\n      ...orderProduct_on_OrderProduct\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Order($id: uuid!) {\n    order_by_pk(id: $id) {\n      ...fullOrder_on_Order\n    }\n  }\n',
): (typeof documents)['\n  query Order($id: uuid!) {\n    order_by_pk(id: $id) {\n      ...fullOrder_on_Order\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query ProductsByDepartment {\n    department(order_by: { name: asc }) {\n      id\n      name\n      products(where: { is_active: { _eq: true } }, order_by: { name: asc }) {\n        id\n        name\n        weight\n      }\n    }\n  }\n',
): (typeof documents)['\n  query ProductsByDepartment {\n    department(order_by: { name: asc }) {\n      id\n      name\n      products(where: { is_active: { _eq: true } }, order_by: { name: asc }) {\n        id\n        name\n        weight\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query DeliveryMethods {\n    delivery_method {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  query DeliveryMethods {\n    delivery_method {\n      id\n      name\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateOrder($id: uuid!, $input: order_set_input!) {\n    update_order_by_pk(pk_columns: { id: $id }, _set: $input) {\n      ...fullOrder_on_Order\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateOrder($id: uuid!, $input: order_set_input!) {\n    update_order_by_pk(pk_columns: { id: $id }, _set: $input) {\n      ...fullOrder_on_Order\n    }\n  }\n']
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
  source: '\n  fragment listOrder_on_Order on order {\n    id\n    created_at\n    order_nr\n    delivery_date\n\n    customer {\n      id\n      name\n      district {\n        id\n        name\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment listOrder_on_Order on order {\n    id\n    created_at\n    order_nr\n    delivery_date\n\n    customer {\n      id\n      name\n      district {\n        id\n        name\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Orders($limit: Int, $filters: order_bool_exp) {\n    order_aggregate(where: $filters) {\n      aggregate {\n        count\n      }\n    }\n    order(limit: $limit, where: $filters, order_by: [{ created_at: desc }]) {\n      ...listOrder_on_Order\n    }\n  }\n',
): (typeof documents)['\n  query Orders($limit: Int, $filters: order_bool_exp) {\n    order_aggregate(where: $filters) {\n      aggregate {\n        count\n      }\n    }\n    order(limit: $limit, where: $filters, order_by: [{ created_at: desc }]) {\n      ...listOrder_on_Order\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddOrder($customer_id: uuid, $delivery_date: date) {\n    insert_order_one(object: { customer_id: $customer_id, delivery_date: $delivery_date }) {\n      ...listOrder_on_Order\n    }\n  }\n',
): (typeof documents)['\n  mutation AddOrder($customer_id: uuid, $delivery_date: date) {\n    insert_order_one(object: { customer_id: $customer_id, delivery_date: $delivery_date }) {\n      ...listOrder_on_Order\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query ProdusctsByOrderDate($filters: order_product_bool_exp) {\n    order_product(where: $filters, order_by: [{ order: { delivery_date: desc } }]) {\n      id\n\n      order {\n        id\n        delivery_date\n      }\n      product {\n        id\n        name\n        weight\n        department {\n          id\n          name\n        }\n      }\n      quantity\n    }\n  }\n',
): (typeof documents)['\n  query ProdusctsByOrderDate($filters: order_product_bool_exp) {\n    order_product(where: $filters, order_by: [{ order: { delivery_date: desc } }]) {\n      id\n\n      order {\n        id\n        delivery_date\n      }\n      product {\n        id\n        name\n        weight\n        department {\n          id\n          name\n        }\n      }\n      quantity\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
