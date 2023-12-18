import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { Tree, readProjectConfiguration } from '@nx/devkit'

import { vitelibstorybookGenerator } from './generator'
import { VitelibstorybookGeneratorSchema } from './schema'

describe('vitelibstorybook generator', () => {
  let tree: Tree
  const options: VitelibstorybookGeneratorSchema = { name: 'test' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await vitelibstorybookGenerator(tree, options)
    const config = readProjectConfiguration(tree, 'test')
    expect(config).toBeDefined()
  })
})
