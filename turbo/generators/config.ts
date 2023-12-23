import { PlopTypes } from '@turbo/gen'

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
        type: 'list',
        name: 'type',
        message: 'What type of file should be created?',
        choices: ['.md', '.txt'],
      },
      {
        type: 'input',
        name: 'title',
        message: 'What should be the title of the new file?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/libs/{{ dashCase name }}/testFile{{ type }}',
        templateFile: 'templates/vitelib/turborepo-generators.hbs',
      },
    ],
  })
}
