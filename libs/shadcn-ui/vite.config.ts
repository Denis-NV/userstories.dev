import { resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

import tsConfigPaths from 'vite-tsconfig-paths'

import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths({ ignoreConfigErrors: true }),
    dts({
      include: ['src/'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: '@ustrs/shadcn-ui',
      formats: ['es', 'umd'],
      fileName: (format) => `lib.${format}.cjs`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        // https://rollupjs.org/configuration-options/#output-globals
        globals: {
          ...Object.keys(packageJson.peerDependencies).reduce(
            (obj, item) => ({ ...obj, [item]: item }),
            {},
          ),
        },
      },
    },
  },
})
