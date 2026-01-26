export type ToastVariantProps = keyof typeof toastRecipe.variantMap

import { sva } from '@styled-system/css'

export const toastRecipe = sva({
  className: 'toast',
  slots: ['root', 'content', 'description', 'actionTrigger', 'icon'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'background.neutralInverse.default',
      rounded: 'md',
      height: 'fit-content',
      minHeight: '48px',
      width: 'fit-content',
      maxWidth: '350px',
      overflowWrap: 'anywhere',
      zIndex: 'overlay',
      textStyle: 'body.md',
      color: 'content.neutralInverse.bold',
      px: 3,
      py: 2,
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      shadow: 'overlay',
    },
    content: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
    },
    actionTrigger: {
      height: '100%',
      width: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      px: 4,
      pr: 1,
      whiteSpace: 'nowrap',
      transition: 'opacity 0.2s ease',
      color: 'content.neutralInverse.bold',
      '&:hover': {
        opacity: 0.8,
      },
    },
    icon: {
      width: 6,
      height: 6,
      minWidth: 6,
      minHeight: 6,
      ml: -1,
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
    language: {
      en: {
        description: {
          textStyle: 'en.text.body.14.bold',
        },
        actionTrigger: {
          textStyle: 'en.text.body.14.bold',
        },
      },
      ko: {
        description: {
          textStyle: 'kr.text.body.14.bold',
        },
        actionTrigger: {
          textStyle: 'kr.text.body.14.bold',
        },
      },
    },
    asLink: {
      true: {
        actionTrigger: {
          textDecoration: 'underline',
          cursor: 'pointer',
        },
      },
    },
  },
  defaultVariants: {
    width: 'full',
    asLink: false,
    language: 'en',
  },
})
