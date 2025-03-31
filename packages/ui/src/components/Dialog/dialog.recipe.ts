import { dialogAnatomy } from '@ark-ui/react'
import { sva } from '@styled-system/css'

export type DialogVariantProps = keyof typeof dialogRecipe.variantMap

export const dialogRecipe = sva({
  className: 'dialog',
  slots: [...dialogAnatomy.keys(), 'header', 'footer', 'body'],
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
      width: '100vw',
      height: '100vh',
      zIndex: 'modal',
      p: '4',
    },
    content: {
      position: 'relative',
      backgroundColor: 'surface.layer_1',
      borderRadius: 'lg',
      width: 'full',
      minW: 'xs',
      maxW: 'md',
      display: 'flex',
      flexDirection: 'column',
      gap: '6',
      py: '4',

      _open: {
        animation: 'dialog-in',
      },
      _closed: {
        animation: 'dialog-out',
      },
    },
    closeTrigger: {
      position: 'absolute',
      top: '4',
      right: '4',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      gap: '1',
      color: 'content.neutral.default',
      textStyle: 'headline.sm',
    },
    description: {
      color: 'content.neutral.default',
      textStyle: 'body.md',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
      px: '6',
    },
    footer: {
      display: 'flex',
      gap: '2',
      px: '4',
      justifyContent: 'flex-end',
    },
    body: {
      px: '4',
    },
  },
})
