# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A **pnpm + Turborepo monorepo** (`ustrs`) containing two React apps and shared libraries. Package manager is `pnpm@9.9.0`. Node version is `20.17.0` (managed via Volta).

## Repository Structure

```
apps/
  businessbynumbers/  (package: "bbn") — React app with Auth0 + Apollo/GraphQL
  grainbygrain/       (package: "grain-by-grain") — React app with Nhost + Apollo/GraphQL + react-router-dom
libs/
  shadcn-ui/          (package: "@ustrs/shadcn-ui") — Shared Vite-built React component library using Tailwind
  utils/              (package: "@ustrs/utils") — Shared TypeScript utility types
  typescript-config/  (package: "@ustrs/typescript-config") — Shared tsconfig base configs
turbo/generators/     — Turborepo plop generators for scaffolding new apps/libs
```

## Common Commands

All commands are run from the monorepo root unless noted.

### Development
```bash
pnpm dev:bbn          # Dev server for businessbynumbers (+ its lib deps)
```

### Building
```bash
pnpm build:all        # Build everything
pnpm build:bbn        # Build businessbynumbers only
```

### Testing
```bash
pnpm test:bbn         # Run bbn tests once
pnpm test:ui          # Run @ustrs/shadcn-ui tests once
pnpm test:watch:bbn   # Watch mode for bbn
pnpm test:watch:ui    # Watch mode for @ustrs/shadcn-ui
```

To run a single test file, use the package's test runner directly:
```bash
pnpm --filter=bbn exec vitest run src/components/App/index.test.tsx
```

### Linting & Formatting
```bash
pnpm lint             # ESLint across all apps and libs
pnpm lint:fix         # Auto-fix lint issues
pnpm format           # Prettier format all source files
```

### Storybook
```bash
pnpm storybook:ui     # Run Storybook for @ustrs/shadcn-ui on port 6006
```

### Scaffolding
```bash
pnpm gen              # Interactive Turborepo generator to scaffold new app or lib
```

### GraphQL Codegen (grain-by-grain only)
```bash
pnpm --filter=grain-by-grain codegen   # Regenerate types from GraphQL schema into src/gql/
```

## Architecture

### Turborepo Pipeline
Build tasks run in dependency order (`^build`). Libraries must be built before apps consume them. The `dev` task for `bbn` also builds `@ustrs/utils` and `@ustrs/shadcn-ui` in watch mode.

### @ustrs/shadcn-ui Library
- Vite-built, exports components + two additional exports:
  - `@ustrs/shadcn-ui/styles` — processed Tailwind CSS, must be imported in consumer app entry point
  - `@ustrs/shadcn-ui/tailwind.preset` — shared Tailwind config preset for consumer apps
- Uses a `ui-` prefix for Tailwind classes to avoid collisions with consuming app classes
- Components live in `libs/shadcn-ui/src/components/ui/`

### businessbynumbers (bbn)
- Auth: Auth0 via `@auth0/auth0-react`
- Data: Apollo Client + GraphQL
- Path alias `@/` maps to `src/` (via `vite-tsconfig-paths`)
- Tests: Vitest + jsdom + `@testing-library/react`; custom render wrapper in `src/test/utils.ts`

### grain-by-grain
- Auth: Nhost via `@nhost/react`
- Data: Apollo Client with Nhost integration (`@nhost/apollo`)
- Routing: `react-router-dom` with routes in `src/routes/` (one folder per route)
- GraphQL types auto-generated into `src/gql/` via `@graphql-codegen/client-preset`
- No test setup (no vitest config)
- shadcn/ui components are **vendored directly** into `src/components/ui/` (not from the shared lib)

### Code Style
- Prettier: single quotes, no semicolons, 100 char print width, trailing commas, Tailwind plugin
- ESLint: TypeScript + React + import ordering; `no-alert` is an error; `react-hooks/exhaustive-deps` is off
- Pre-commit hook runs `lint`, `format`, and `syncpack lint` on staged files via lint-staged
