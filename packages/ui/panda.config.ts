import { defineConfig } from '@pandacss/dev'
import { pandaTokens } from '@nation-a/tokens'

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
      tokens: pandaTokens.primitive,
      semanticTokens: pandaTokens.semantic,
      textStyles: pandaTokens.textStyles,
    },
  },

  // The output directory for your css system
  outdir: 'src/styles/pandacss',
})
