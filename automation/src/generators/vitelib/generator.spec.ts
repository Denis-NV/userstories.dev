import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { Tree, readProjectConfiguration } from '@nx/devkit'

import { vitelibGenerator } from './generator'
import { VitelibGeneratorSchema } from './schema'

describe('vitelib generator', () => {
  let tree: Tree
  const options: VitelibGeneratorSchema = { name: 'test' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await vitelibGenerator(tree, options)
    const config = readProjectConfiguration(tree, 'test')
    expect(config).toBeDefined()
  })
})
