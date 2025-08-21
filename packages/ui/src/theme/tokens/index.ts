import { defineTokens } from '@pandacss/dev'
import { animations } from './animations'
import { blurs } from './blurs'
import { borders } from './borders'
import { durations } from './durations'
import { easings } from './easings'
import { sizes } from './sizes'
import { spacing } from './spacing'
import { zIndex } from './z-index'
import { pandaTokens } from '@nation-a/tokens'

export const tokens = defineTokens({
  //   colors,
  //   fonts,
  //   fontSizes,
  //   fontWeights,
  //   letterSpacings,
  //   lineHeights,
  //   radii,
  animations,
  blurs,
  borders,

  durations,
  easings,

  sizes,
  zIndex,
  ...pandaTokens.primitive,
  spacing: {
    ...spacing,
    ...pandaTokens.primitive.spacing,
  },
})
