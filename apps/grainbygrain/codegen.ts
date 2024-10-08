import 'dotenv/config'
import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      // 'https://aqntrlqfforjhsoobrbn.graphql.eu-west-2.nhost.run/v1': {
      //   headers: {
      //     'x-hasura-admin-secret': process.env.NHOST_SECRET || '',
      //   },
      // },
      'https://local.graphql.local.nhost.run/v1': {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET || '',
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
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
      },
    },
  },
}

export default config
