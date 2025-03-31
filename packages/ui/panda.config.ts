import { defineConfig } from '@pandacss/dev'
import { preset } from '@/theme'

export default defineConfig({
  preflight: true,
  syntax: 'object-literal',
  jsxFramework: 'react',
  jsxFactory: 'styled',
  jsxStyleProps: 'all',

  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],

  exclude: [],

  presets: [preset],

  outdir: 'styled-system',
  clean: true,
})
