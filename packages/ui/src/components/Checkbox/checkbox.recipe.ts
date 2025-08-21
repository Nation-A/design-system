import { checkboxAnatomy } from '@ark-ui/react'
import { RecipeVariantProps, sva } from '@styled-system/css'

export type CheckboxVariantProps = RecipeVariantProps<typeof checkboxRecipe>

export const checkboxRecipe = sva({
  className: 'checkbox',
  slots: checkboxAnatomy.keys(),
  base: {
    root: {
      alignItems: 'center',
      display: 'flex',
      gap: 2,
    },
    label: {
      color: 'content.neutral.bold',
      textStyle: 'label.md',
      _disabled: {
        color: 'content.neutral.disabled',
        cursor: 'not-allowed',
      },
    },
    control: {
      alignItems: 'center',
      borderColor: 'content.neutral.bold',
      borderWidth: '1px',
      color: 'content.neutralInverse.bold',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'border-color, background',
      transitionTimingFunction: 'default',
      width: 4.5,
      height: 4.5,
      '& svg': {
        width: 2.5,
        height: 2.5,
      },

      _hover: {
        borderColor: 'content.neutral.subtle',
      },
      _checked: {
        bg: 'content.neutral.bold',
        _hover: {
          bg: 'content.neutral.subtle',
        },
        _disabled: {
          bg: '!content.neutral.disabled',
        },
      },
      _indeterminate: {
        bg: 'content.neutral.bold',
        borderColor: 'content.neutral.bold',
        _hover: {
          bg: 'content.neutral.subtle',
        },
        _disabled: {
          bg: '!content.neutral.disabled',
        },
      },
      _disabled: {
        borderColor: '!content.neutral.disabled',
        cursor: 'not-allowed',
        touchAction: 'none',
      },

      '&:has(+ :focus-visible)': {
        outlineOffset: '2px',
        outline: '2px solid',
        outlineColor: 'border.neutral.default',
        _checked: {
          outlineColor: 'border.neutral.default',
        },
      },
    },
  },
  variants: {
    variant: {
      square: {
        control: {
          borderRadius: 'sm',
        },
      },
      round: {
        control: {
          borderRadius: 'full',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'square',
  },
})
