import {
  // addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  names,
  readJson,
} from '@nx/devkit'
import * as path from 'path'
import { VitelibGeneratorSchema } from './schema'

export async function vitelibGenerator(tree: Tree, options: VitelibGeneratorSchema) {
  const scopeName = readJson(tree, 'package.json').name

  const resolvedOptions = {
    ...options,
    name: names(options.name).fileName,
    scope: scopeName,
  }

  const projectRoot = `libs/${resolvedOptions.name}`

  // addProjectConfiguration(tree, resolvedOptions.name, {
  //   root: projectRoot,
  //   projectType: 'library',
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // })
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, resolvedOptions)
  await formatFiles(tree)
}

export default vitelibGenerator
