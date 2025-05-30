import { selectAnatomy } from '@ark-ui/react/select'
import { sva } from '@styled-system/css'

export type SelectVariantProps = keyof typeof selectRecipe.variantMap

export const selectRecipe = sva({
  className: 'select',
  slots: [...selectAnatomy.keys(), 'description'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      width: '100%',
    },
    trigger: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      width: '100%',
      height: '40px',
      padding: '0 16px',
      backgroundColor: 'background.neutral.default',
      borderRadius: 8,
      color: 'content.neutral.bold',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    content: {
      backgroundColor: 'background.neutral.default',
      padding: 2,
      borderRadius: 16,
      overflowY: 'auto',
      zIndex: 'dropdown',
      display: 'flex',
      flexDirection: 'column',

      _open: {
        animation: 'fadeIn 0.2s ease-in',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-out',
      },
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      p: 2,
      cursor: 'pointer',
      color: 'content.neutral.default',
      textStyle: 'label.md',
      rounded: 'sm',
      transition: 'all 0.2s ease',
      _hover: {
        backgroundColor: 'background.neutral.selected',
      },
    },
    label: {
      color: 'content.neutral.default',
      textStyle: 'label.sm',
    },
    // 선택된 값 디자인
    valueText: {
      flex: 1,
      textAlign: 'left',
      color: 'content.neutral.bold',
      textStyle: 'body.md',
      '&[data-placeholder]': {
        color: 'content.neutral.subtlest',
      },
    },
    description: {
      color: 'content.neutral.subtle',
      textStyle: 'label.sm',
      fontSize: '12px',
      px: 1,
    },
  },
  variants: {
    radius: {
      md: {
        trigger: {
          borderRadius: 8,
        },
        content: {
          borderRadius: 8,
        },
      },
      lg: {
        trigger: {
          borderRadius: 16,
        },
        content: {
          borderRadius: 16,
        },
      },
    },
    disabled: {
      true: {
        trigger: {
          opacity: 0.5,
          cursor: 'not-allowed',
          '&:hover': {
            backgroundColor: 'background.neutral.default',
          },
        },
      },
    },
  },
  defaultVariants: {
    radius: 'md',
    disabled: false,
  },
})
