import { definePreset } from '@pandacss/dev'
import { globalCss } from './global-css'
import { keyframes } from './keyframes'
import { pandaTokens } from '@nation-a/tokens/pandacss'
import { conditions } from './conditions'
import { breakpoints } from './breakpoints'
import { tokens } from './tokens'

export const preset = definePreset({
  name: '@nation-a/theme',
  conditions,
  globalCss,
  theme: {
    extend: {
      breakpoints,
      keyframes,
      tokens,
      semanticTokens: pandaTokens.semantic,
      textStyles: pandaTokens.textStyles,
    },
  },
})
