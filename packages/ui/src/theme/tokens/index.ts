import { defineTokens } from '@pandacss/dev'
import { animations } from './animations'
import { blurs } from './blurs'
import { borders } from './borders'
import { durations } from './durations'
import { easings } from './easings'
import { sizes } from './sizes'
import { zIndex } from './z-index'
import { pandaTokens } from '@nation-a/tokens'

export const tokens = defineTokens({
  animations,
  blurs,
  borders,
  //   colors,
  durations,
  easings,
  //   fonts,
  //   fontSizes,
  //   fontWeights,
  //   letterSpacings,
  //   lineHeights,
  //   radii,
  sizes,
  // spacing,
  zIndex,
  ...pandaTokens.primitive,
})
