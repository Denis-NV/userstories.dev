// tailwind config is required for editor support

import type { Config } from 'tailwindcss'
import sharedConfig from '@ustrs/shadcn-ui/tailwind.preset'

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [sharedConfig],
}

export default config
