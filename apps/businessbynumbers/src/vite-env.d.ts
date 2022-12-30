/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DOMAIN: string
  readonly VITE_CLIENT_ID: string
  readonly VITE_API_IDENTIFIER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
