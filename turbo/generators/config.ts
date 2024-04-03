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
      {
        type: 'addMany',
        destination: '{{ turbo.paths.root }}/libs/{{ name }}',
        base: `templates/vitelib`,
        templateFiles: `templates/vitelib/**/*`,
      },
      {
        type: 'addMany',
        destination: '{{ turbo.paths.root }}/libs/{{ name }}',
        base: `templates/vitelibstorybook`,
        templateFiles: `templates/vitelibstorybook/**/*`,
      },
      function appendJSON(answers: any): Promise<string> | string {
        updateJson(`./libs/${answers.name}/package.json`, (pkgJson) => {
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

  plop.setGenerator('add-vitest-rtl', {
    description: 'Add Vitest-based and RTL testing setup to an existing Vite-based lib or app',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: 'Package name:',
        validate: (input: string) => {
          if (input.includes('.')) {
            return 'name cannot include an extension'
          }
          if (input.includes(' ')) {
            return 'name cannot include spaces'
          }
          if (!input) {
            return 'Package name is required'
          }
          return true
        },
      },
    ],
    actions: [
      getScope,
      {
        type: 'addMany',
        destination: '{{ turbo.paths.root }}/{{ packageName }}',
        base: `templates/vitestrtl`,
        templateFiles: `templates/vitestrtl/**/*`,
      },
      function appendJSON(answers: any): Promise<string> | string {
        updateJson(`./${answers.name}/package.json`, (pkgJson) => {
          // if scripts is undefined, set it to an empty object
          pkgJson.scripts = pkgJson.scripts ?? {}
          pkgJson.scripts.test = 'vitest run'
          pkgJson.scripts['test:watch'] = 'vitest'

          pkgJson.devDependencies = pkgJson.devDependencies ?? {}
          pkgJson.devDependencies['vitest'] = '^1.3.1'
          pkgJson.devDependencies['jsdom'] = '^24.0.0'
          pkgJson.devDependencies['@testing-library/dom'] = '^9.3.4'
          pkgJson.devDependencies['@testing-library/jest-dom'] = '^6.2.0'
          pkgJson.devDependencies['@testing-library/react'] = '^14.1.2'
          pkgJson.devDependencies['@testing-library/user-event'] = '^14.5.2'

          // return modified JSON object
          return pkgJson
        })

        return 'JSON Updated'
      },
    ],
  })
}
