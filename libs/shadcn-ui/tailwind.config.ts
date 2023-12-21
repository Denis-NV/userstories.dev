import type { Config } from 'tailwindcss'
import sharedConfig from './tailwind.preset'

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  prefix: 'ui-',
  presets: [sharedConfig],
}

export default config
