import { dialogAnatomy } from '@ark-ui/react'
import { sva } from '@styled-system/css'

export type DialogVariantProps = keyof typeof dialogRecipe.variantMap

export const dialogRecipe = sva({
  className: 'dialog',
  slots: dialogAnatomy.keys(),
  base: {
    backdrop: {
      backdropFilter: 'blur(4px)',
      background: {
        _light: 'white.100A',
        _dark: 'black.100A',
      },
      height: '100vh',
      left: '0',
      position: 'fixed',
      top: '0',
      width: '100vw',
      zIndex: 'overlay',
      _open: {
        animation: 'backdrop-in',
      },
      _closed: {
        animation: 'backdrop-out',
      },
    },
    positioner: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      left: '0',
      overflow: 'auto',
      position: 'fixed',
      top: '0',
      width: 'full',
      height: 'full',
      zIndex: 'modal',
    },
    content: {
      background: 'white',
      borderRadius: 'sm',
      boxShadow: 'overlay',
      minW: 'sm',
      position: 'relative',
      p: '3',
      _open: {
        animation: 'dialog-in',
      },
      _closed: {
        animation: 'dialog-out',
      },
    },
    title: {
      textStyle: 'title.lg',
    },
    description: {
      color: 'content.neutral.default_inverse',
      textStyle: 'body.md',
    },
  },
})
