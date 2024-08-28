import { TypePolicies } from '@apollo/client'

type RefObjectType = {
  __ref: string
}

const policies: TypePolicies = {
  Query: {
    fields: {
      order: {
        keyArgs: ['where', ['order_nr', 'delivery_date', 'order_products', 'delivery_method']],
        merge(existing = [], incoming = []) {
          const refs = existing.map((item: RefObjectType) => item.__ref)
          const insertion = incoming.filter((item: RefObjectType) => !refs.includes(item.__ref))

          return [...insertion, ...existing]
        },
      },
    },
  },
  order: {
    fields: {
      order_products: {
        merge: false,
      },
    },
  },
}

export default policies
