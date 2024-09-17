import { graphql } from '@/gql'

export const PRODUCST_BY_DEPARTMENT_QUERY = graphql(`
  query ProductsByDepartment($onlyActive: [Boolean!] = [true]) {
    department(order_by: { name: asc }) {
      id
      name
      products(where: { is_active: { _in: $onlyActive } }, order_by: { name: asc }) {
        id
        name
        weight
      }
    }
  }
`)
