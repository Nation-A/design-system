export type ToastVariantProps = keyof typeof toastRecipe.variantMap

// export const toastRecipe = cva({
//   base: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 1,
//     px: 3,
//     py: 2,
//     height: 'fit-content',
//     minHeight: '48px',
//     width: 'fit-content',
//     cursor: 'default',
//     outline: 'none',
//     backgroundColor: 'background.neutral.default',
//     borderRadius: 4,
//     textStyle: 'body.md',
//     color: 'text.neutral.default',
//   },
//   variants: {},
//   compoundVariants: [],
// })

import { toastAnatomy } from '@ark-ui/react'
import { sva } from '@styled-system/css'

export const toastRecipe = sva({
  className: 'toast',
  slots: toastAnatomy.keys(),
  base: {
    root: {
      backgroundColor: 'background.neutral.default',
      borderRadius: 4,
      height: 'fit-content',
      minHeight: '48px',
      overflowWrap: 'anywhere',
      px: 3,
      py: 2,
      zIndex: 'overlay',
      transitionDuration: 'slow',
      transitionProperty: 'translate, scale, opacity, height',
      transitionTimingFunction: 'default',
    },
    title: {
      color: 'fg.default',
      fontWeight: 'semibold',
      textStyle: 'sm',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
    actionTrigger: {
      mt: 2,
    },
    closeTrigger: {
      position: 'absolute',
      top: 3,
      right: 3,
    },
  },
})
