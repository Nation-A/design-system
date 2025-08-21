import { defineConfig } from '@pandacss/dev'
import { preset } from '@nation-a/ui'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  syntax: 'object-literal',
  jsxFramework: 'react',
  jsxStyleProps: 'all',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@nation-a/ui/dist/**/*.{js,jsx,ts,tsx}'],

  presets: [preset],

  // The output directory for your css system
  outdir: 'styled-system',
})
