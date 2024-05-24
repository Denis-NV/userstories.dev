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
  '\n  query OrderQuery($id: uuid!) {\n    order_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      order_nr\n      comment\n      delivery_date\n      delivery_method {\n        id\n        name\n      }\n      customer {\n        id\n        name\n        district {\n          id\n          name\n        }\n      }\n      order_products {\n        id\n        product {\n          id\n          name\n        }\n      }\n    }\n  }\n':
    types.OrderQueryDocument,
  '\n  query OrdersQuery($limit: Int, $filters: order_bool_exp) {\n    order(limit: $limit, where: $filters) {\n      id\n      created_at\n      order_nr\n      delivery_date\n\n      customer {\n        id\n        name\n      }\n    }\n  }\n':
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
  source: '\n  query OrderQuery($id: uuid!) {\n    order_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      order_nr\n      comment\n      delivery_date\n      delivery_method {\n        id\n        name\n      }\n      customer {\n        id\n        name\n        district {\n          id\n          name\n        }\n      }\n      order_products {\n        id\n        product {\n          id\n          name\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query OrderQuery($id: uuid!) {\n    order_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      order_nr\n      comment\n      delivery_date\n      delivery_method {\n        id\n        name\n      }\n      customer {\n        id\n        name\n        district {\n          id\n          name\n        }\n      }\n      order_products {\n        id\n        product {\n          id\n          name\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query OrdersQuery($limit: Int, $filters: order_bool_exp) {\n    order(limit: $limit, where: $filters) {\n      id\n      created_at\n      order_nr\n      delivery_date\n\n      customer {\n        id\n        name\n      }\n    }\n  }\n',
): (typeof documents)['\n  query OrdersQuery($limit: Int, $filters: order_bool_exp) {\n    order(limit: $limit, where: $filters) {\n      id\n      created_at\n      order_nr\n      delivery_date\n\n      customer {\n        id\n        name\n      }\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
