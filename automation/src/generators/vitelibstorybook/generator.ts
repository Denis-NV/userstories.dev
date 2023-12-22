import { formatFiles, generateFiles, Tree, names, updateJson } from '@nx/devkit'
import * as path from 'path'
import { vitelibGenerator } from '../vitelib/generator'
import { VitelibGeneratorSchema } from '../vitelib/schema'

export async function vitelibstorybookGenerator(tree: Tree, options: VitelibGeneratorSchema) {
  await vitelibGenerator(tree, options)

  const resolvedOptions = {
    ...options,
    name: names(options.name).fileName,
  }

  const projectRoot = `libs/${resolvedOptions.name}`

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, resolvedOptions)

  updateJson(tree, `libs/${resolvedOptions.name}/package.json`, (pkgJson) => {
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

  await formatFiles(tree)
}

export default vitelibstorybookGenerator
