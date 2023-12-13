# userstories.dev (ustrs)
Main mono-repo for all of my projects and code base

## Package generation
## Generate a new package genrator
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

