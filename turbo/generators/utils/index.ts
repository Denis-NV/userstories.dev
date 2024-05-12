import { parseJson, updateJson } from './json'

export const getScope = (answers: any): string => {
  answers.scope = parseJson('package.json')?.name

  return `Based on the root package.json name, your package scope is : ${answers.scope}`
}

export const appendViteReactDeps = (category: 'apps' | 'libs', nameKey: string) => {
  const reactDeps = {
    react: '^18.2.0',
    'react-dom': '^18.2.0',
  }
  const reactTypsDeps = {
    '@types/react': '^18.2.66',
    '@types/react-dom': '^18.2.22',
  }

  const reactViteDeps = {
    '@vitejs/plugin-react': '^4.2.1',
    vite: '^5.2.0',
    'vite-tsconfig-paths': '^4.2.3',
  }

  return category === 'apps'
    ? function appendAppJSON(answers: any): Promise<string> | string {
        updateJson(`./${category}/${answers[nameKey]}/package.json`, (pkgJson) => {
          pkgJson.dependencies = pkgJson.dependencies ?? {}
          pkgJson.dependencies = { ...pkgJson.dependencies, ...reactDeps }
          pkgJson.devDependencies = pkgJson.devDependencies ?? {}
          pkgJson.devDependencies = {
            ...pkgJson.devDependencies,
            ...reactTypsDeps,
            ...reactViteDeps,
            '@ustrs/typescript-config': 'workspace:*',
          }

          return pkgJson
        })

        return 'JSON Updated'
      }
    : function appendLibJSON(answers: any): Promise<string> | string {
        updateJson(`./${category}/${answers[nameKey]}/package.json`, (pkgJson) => {
          pkgJson.devDependencies = pkgJson.devDependencies ?? {}
          pkgJson.devDependencies = {
            ...pkgJson.devDependencies,
            ...reactDeps,
            ...reactTypsDeps,
            ...reactViteDeps,
            '@ustrs/typescript-config': 'workspace:*',
            'vite-plugin-dts': '^3.7.0',
          }
          pkgJson.peerDependencies = pkgJson.peerDependencies ?? {}
          pkgJson.peerDependencies = { ...pkgJson.peerDependencies, ...reactDeps, ...reactTypsDeps }

          return pkgJson
        })

        return 'JSON Updated'
      }
}
