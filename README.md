# userstories.dev (ustrs)
Main mono-repo for all of my projects and code base

## package.json
### exports
All the packages inside "lib" folder encapsulated all the subpaths by specifying "exports" field. More on this here:
https://nodejs.org/api/packages.html#main-entry-point-export

Conditional exports are being used to provide different ES module exports for require() and import. More on this here:
https://nodejs.org/api/packages.html#conditional-exports

### overrides

### husky

## ESlint configuration

## Package generation
### Generate a new package genrator
```
pnpm nx g @nx/plugin:generator [package_name] --directory automation/src/generators/[package_folder]
```

### Generate a new vite-based react lib run
Dry run first to see what is going to happen
```
pnpm nx g automation:vitelib --dryRun
```
Then generate
```
pnpm nx g automation:vitelib
```

### Generate a new vite-based react lib with storybook run
Dry run first to see what is going to happen
```
pnpm nx g automation:vitelibstorybook --dryRun
```
Then generate
```
pnpm nx g automation:vitelibstorybook
```

## Storybook

## @ustrs/shadcn-ui package

This is a vite-based react component package that uses Tailwind CSS to style its components. A `ui-` prefix is being used for the package's Tailwind classes to separate them from the main app's classes.

### Importing and using the package

In addition to the trinspiles JS components code @ustrs/shadcn-ui package has two more exports:
1. `styles` - these are tailwind-processed final styles that must be imported inside the entry point of the consumer app.
2. `tailwind.preset` - this is a preset that can be used inside the `tailwind.config.ts` of the consumer app to share the theme and the rest of the config with the lib.


