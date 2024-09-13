import { graphql } from '@/gql'

export const ADD_DISTRICT_MUTATION = graphql(`
  mutation AddDistrict($name: String!) {
    insert_district_one(object: { name: $name }) {
      id
    }
  }
`)
