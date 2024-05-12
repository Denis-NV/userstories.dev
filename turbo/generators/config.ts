import { PlopTypes } from '@turbo/gen'
import { getScope } from './utils'
import { updateJson } from './utils/json'

import autocompletePrompt from 'inquirer-autocomplete-prompt'
import { readdirSync } from 'fs'
import path from 'path'

// Promts docs: https://github.com/SBoudrias/Inquirer.js/#question

type TCategoryAnswer = { category: string }

type TPromptQuestion =
  | PlopTypes.PromptQuestion
  | {
      type: 'getPackageName'
      name: string
      message: string
      source: (answersSoFar: TCategoryAnswer) => string
    }

type TPrompts = PlopTypes.DynamicPromptsFunction | TPromptQuestion[]

type TPlopGeneratorConfig = PlopTypes.PlopGeneratorConfig & {
  prompts: TPrompts
}

type TPlop = PlopTypes.NodePlopAPI & {
  setGenerator(name: string, config: TPlopGeneratorConfig): PlopTypes.PlopGenerator
}

export default function generator(plop: TPlop): void {
  plop.setPrompt('getPackageName', autocompletePrompt as any)

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
          pkgJson.devDependencies['@babel/core'] = '^7.24.5'
          pkgJson.devDependencies['storybook'] = '^8.0.10'
          pkgJson.devDependencies['@storybook/addon-essentials'] = '^8.0.10'
          pkgJson.devDependencies['@storybook/addon-interactions'] = '^8.0.10'
          pkgJson.devDependencies['@storybook/addon-links'] = '^8.0.10'
          pkgJson.devDependencies['@storybook/react'] = '^8.0.10'
          pkgJson.devDependencies['@storybook/react-vite'] = '^8.0.10'
          // return modified JSON object
          return pkgJson
        })

        return 'JSON Updated'
      },
    ],
  })

  plop.setGenerator('add-vitest-rtl', {
    description: 'Add Vitest and RTL testing setup to an existing Vite-based lib or app',
    prompts: [
      {
        type: 'list',
        name: 'category',
        message: 'Choose the package category',
        choices: ['libs', 'apps'],
        default: 0,
      },
      {
        type: 'getPackageName',
        name: 'packageName',
        message: 'Choose the package name',
        source: function (answersSoFar) {
          const packagePath = path.resolve('./', answersSoFar.category)

          return readdirSync(packagePath, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name)
        },
      },
    ],
    actions: [
      getScope,
      {
        type: 'addMany',
        destination: '{{ turbo.paths.root }}/{{ category }}/{{ packageName }}',
        base: `templates/vitestrtl`,
        templateFiles: `templates/vitestrtl/**/*`,
      },
      function appendJSON(answers: any): Promise<string> | string {
        updateJson(`./${answers.category}/${answers.packageName}/package.json`, (pkgJson) => {
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
      function appendTsconfig(answers: any): Promise<string> | string {
        updateJson(`./${answers.category}/${answers.packageName}/tsconfig.json`, (tsJson) => {
          tsJson.compilerOptions = tsJson.compilerOptions ?? {}
          tsJson.compilerOptions.types = tsJson.compilerOptions.types ?? []
          tsJson.compilerOptions.types = [...tsJson.compilerOptions.types, 'vitest/globals']

          return tsJson
        })

        return 'JSON Updated'
      },
    ],
  })
}
