import { gql } from '@apollo/client'

export const TEST_QUERY = gql`
  query TestQuery {
    organisation {
      id
      name
      organisation_users {
        id
        user {
          id
          nickname
        }
        roles {
          id
          role_option {
            id
          }
        }
      }
    }
  }
`
