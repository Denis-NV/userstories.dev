import { graphql } from '@/gql'

export const DISTRICT_FRAGMENT = graphql(`
  fragment fullDistrict_on_District on district {
    id
    name
  }
`)

export const DISTRICT_QUERY = graphql(`
  query District($id: uuid!) {
    district_by_pk(id: $id) {
      ...fullDistrict_on_District
    }
  }
`)

export const UPDATE_DISTRICT_MUTATION = graphql(`
  mutation UpdateDistrict($id: uuid!, $input: district_set_input!) {
    update_district_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...fullDistrict_on_District
    }
  }
`)
