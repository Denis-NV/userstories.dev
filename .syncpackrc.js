// @ts-check

// TODO: consider using GH Action
// https://github.com/marketplace/actions/syncpack-synchronise-monorepo-dependency-versions

/** @type {import("syncpack").RcFile} */
const config = {
  semverGroups: [
    {
      label: 'use caret ranges',
      packages: ['**'],
      dependencyTypes: ['prod', 'dev', 'peer'],
      dependencies: ['**'],
      range: '^',
    },
  ],
  versionGroups: [
    {
      label: 'Use workspace protocol when developing local packages',
      dependencies: ['$LOCAL'],
      dependencyTypes: ['prod', 'dev'],
      pinVersion: 'workspace:*',
    },
    // {
    //   label: 'Ensure some packages are ignored',
    //   dependencies: ['**'],
    //   packages: ['@ustrs/template-lib'],
    //   dependencyTypes: ['prod', 'dev', 'peer'],
    //   isIgnored: true,
    // },
    // {
    //   label: 'Ensure semver are within the same range for specific packages',
    //   dependencies: ['**'],
    //   packages: ['@ustrs/template-lib'],
    //   dependencyTypes: ['prod', 'dev', 'peer'],
    //   policy: 'sameRange',
    // },
    // {
    //   label: 'Ensure semver are within the same range for all (remaining) packages',
    //   dependencies: ['**'],
    //   packages: ['**'],
    //   dependencyTypes: ['prod', 'dev', 'peer'],
    //   policy: 'sameRange',
    // },
  ],
}

module.exports = config
