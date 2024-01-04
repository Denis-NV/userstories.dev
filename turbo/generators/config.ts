import { PlopTypes } from '@turbo/gen'
import { getScope } from './utils'
import { updateJson } from './utils/json'

// Promts docs: https://github.com/SBoudrias/Inquirer.js/#question

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('vite-lib', {
    description: 'Buildable Vite library',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Library name:',
        validate: (input: string) => {
          if (input.includes('.')) {
            return 'name cannot include an extension'
          }
          if (input.includes(' ')) {
            return 'name cannot include spaces'
          }
          if (!input) {
            return 'name is required'
          }
          return true
        },
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        default: 'Denis Nemytov',
      },
    ],
    actions: [
      getScope,
      {
        type: 'addMany',
        destination: '{{ turbo.paths.root }}/libs/{{ name }}',
        base: `templates/vitelib`,
        templateFiles: `templates/vitelib/**/*`,
      },
    ],
  })

  plop.setGenerator('vite-lib-storybook', {
    description: 'Buildable Vite library with Storybook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Library name:',
        validate: (input: string) => {
          if (input.includes('.')) {
            return 'name cannot include an extension'
          }
          if (input.includes(' ')) {
            return 'name cannot include spaces'
          }
          if (!input) {
            return 'name is required'
          }
          return true
        },
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        default: 'Denis Nemytov',
      },
    ],
    actions: [
      getScope,
      // {
      //   type: 'addMany',
      //   destination: '{{ turbo.paths.root }}/libs/{{ name }}',
      //   base: `templates/vitelib`,
      //   templateFiles: `templates/vitelib/**/*`,
      // },
      // {
      //   type: 'addMany',
      //   destination: '{{ turbo.paths.root }}/libs/{{ name }}',
      //   base: `templates/vitelibstorybook`,
      //   templateFiles: `templates/vitelibstorybook/**/*`,
      // },
      function appendJSON(): Promise<string> | string {
        // updateJson(`libs/${answers.name}/package.json`, (pkgJson) => {
        updateJson(`./package.json`, (pkgJson) => {
          // if scripts is undefined, set it to an empty object
          pkgJson.scripts = pkgJson.scripts ?? {}
          pkgJson.scripts.storybook = 'storybook dev -p 6006'
          pkgJson.scripts['build-storybook'] = 'storybook build'

          pkgJson.devDependencies = pkgJson.devDependencies ?? {}
          pkgJson.devDependencies['storybook'] = '^7.6.5'
          pkgJson.devDependencies['@storybook/addon-essentials'] = '^7.6.5'
          pkgJson.devDependencies['@storybook/addon-interactions'] = '^7.6.5'
          pkgJson.devDependencies['@storybook/addon-links'] = '^7.6.5'
          pkgJson.devDependencies['@storybook/react'] = '^7.6.5'
          pkgJson.devDependencies['@storybook/react-vite'] = '^7.6.5'
          // return modified JSON object
          return pkgJson
        })

        return 'JSON Updated'
      },
    ],
  })
}
