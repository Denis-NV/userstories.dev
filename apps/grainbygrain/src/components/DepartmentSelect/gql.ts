import { graphql } from '@/gql'

export const DEPARTMENTS_QUERY = graphql(`
  query Departments {
    department {
      id
      name
    }
  }
`)
