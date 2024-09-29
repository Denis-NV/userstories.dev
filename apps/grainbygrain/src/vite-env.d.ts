/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GBG_NHOST_SUBDOMAIN: string
  readonly VITE_GBG_NHOST_REGION: string
  readonly HASURA_GRAPHQL_ADMIN_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
