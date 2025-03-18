import { defineConfig } from '@pandacss/dev'
import { theme } from './src/theme'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  syntax: 'object-literal',
  jsxFramework: 'react',
  jsxFactory: 'styled',
  jsxStyleProps: 'all',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  presets: [],
  theme: {
    extend: {
      tokens: theme.primitive,
      semanticTokens: theme.semantic,
      textStyles: theme.textStyles,
    },
  },

  // The output directory for your css system
  outdir: 'src/styles/pandacss',
})
