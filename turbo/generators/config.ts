import { PlopTypes } from '@turbo/gen'
import { getScope } from './utils'

// Promts docs: https://github.com/SBoudrias/Inquirer.js/#question

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('vitelib', {
    description:
      'Vite based library package that exports transpiled umd and cjs files and can be optionally published on NPM',
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
}
