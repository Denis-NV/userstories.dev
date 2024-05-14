import { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  schema: [
    {
      'https://aqntrlqfforjhsoobrbn.graphql.eu-west-2.nhost.run/v1': {
        headers: {
          'x-hasura-admin-secret': process.env.NHOST_SECRET || '',
        },
      },
    },
  ],

  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      documents: ['src/**/*.tsx', 'src/**/*.ts'],
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
