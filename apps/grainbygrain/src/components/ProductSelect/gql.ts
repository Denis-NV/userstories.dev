import { graphql } from '@/gql'

export const PRODUCST_BY_DEPARTMENT_QUERY = graphql(`
  query ProductsByDepartment($onlyActive: [Boolean!] = [true], $search: String = "%%") {
    department(order_by: { name: asc }) {
      id
      name
      products(
        where: { _and: [{ is_active: { _in: $onlyActive } }, { name: { _ilike: $search } }] }
        order_by: { name: asc }
      ) {
        id
        name
        weight
      }
    }
  }
`)
