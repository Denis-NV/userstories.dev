import { graphql } from '@/gql'

export const USER_FRAGMENT = graphql(`
  fragment user_on_Users on users {
    id
    email
    displayName
    defaultRole
    disabled
    emailVerified
    roles {
      id
      role
    }
  }
`)

export const USERS_QUERY = graphql(`
  query Users {
    users {
      ...user_on_Users
    }
  }
`)

export const UPDATE_USER_MUTATION = graphql(`
  mutation UpdateUser($id: uuid!, $input: users_set_input) {
    updateUser(pk_columns: { id: $id }, _set: $input) {
      ...user_on_Users
    }
  }
`)
