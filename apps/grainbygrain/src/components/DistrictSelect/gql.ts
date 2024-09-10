import { graphql } from '@/gql'

export const DISTRICTS_QUERY = graphql(`
  query Districts {
    district {
      id
      name
    }
  }
`)
