import { defineConfig } from '@pandacss/dev'
import { pandaTokens } from '@nation-a/tokens'

export default defineConfig({
  preflight: true,
  syntax: 'object-literal',
  jsxFramework: 'react',
  jsxFactory: 'styled',
  jsxStyleProps: 'all',

  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  exclude: [],

  presets: [],
  theme: {
    extend: {
      tokens: pandaTokens.primitive,
      semanticTokens: pandaTokens.semantic,
      textStyles: pandaTokens.textStyles,
    },
  },

  outdir: 'styled-system',
})
