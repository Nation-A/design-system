export type ToastVariantProps = keyof typeof toastRecipe.variantMap

import { toastAnatomy } from '@ark-ui/react'
import { sva } from 'dist/styled-system/css'

export const toastRecipe = sva({
  className: 'toast',
  slots: [...toastAnatomy.keys(), 'content', 'icon'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'background.neutral.default',
      borderRadius: 16,
      height: 'fit-content',
      minHeight: '48px',
      width: 'fit-content',
      maxWidth: '328px',
      overflowWrap: 'anywhere',
      zIndex: 'overlay',
      fontStyle: 'body.md',
      color: 'content.neutral.default_inverse.bold',
      pr: 4,
      pl: 3,
      py: 2,
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      animation: 'fadeIn 0.25s ease-out',
      transform: 'translateY(0)',
      shadow: 'overlay',
      '&[data-state="open"]': {
        animation: 'fadeIn 0.25s ease-out',
        transform: 'translateY(0)',
      },
      '&[data-state="closed"]': {
        animation: 'fadeOut 0.25s ease-out',
        transform: 'translateY(20px)',
      },
    },
    content: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    description: {
      textStyle: 'body.md',
      marginLeft: 2,
    },
    actionTrigger: {
      height: '100%',
      width: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textStyle: 'title.sm',
      cursor: 'pointer',
      px: 4,
      pr: 1,
      whiteSpace: 'nowrap',
      transition: 'opacity 0.2s ease',
      '&:hover': {
        opacity: 0.8,
      },
    },
    icon: {
      width: 6,
      height: 6,
      minWidth: 6,
      minHeight: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  variants: {
    width: {
      full: {
        root: {
          width: '100%',
          justifyContent: 'space-between',
        },
      },
      fit: {
        root: {
          width: 'fit-content',
        },
      },
    },
    asLink: {
      true: {
        actionTrigger: {
          textDecoration: 'underline',
          cursor: 'pointer',
          color: 'content.neutral.default_inverse.bold',
        },
      },
    },
  },
})
