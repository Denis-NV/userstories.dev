## Consider ejecting local dependencies

If you don't want pnpm to symlink local dependencies source code, but instead have them act as normal remote dependencies, consider adding this injection directive to package.json

https://pnpm.io/package_json#dependenciesmetainjected

```
{
  "dependenciesMeta": {
    "@ustrs/react-components": {
      "injected": true
    }
  },
}
```