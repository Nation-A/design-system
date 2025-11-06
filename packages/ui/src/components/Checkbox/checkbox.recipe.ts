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
      color: 'white.900A',
      textStyle: 'label.md',
      _disabled: {
        color: 'white.500A',
        cursor: 'not-allowed',
      },
    },
    control: {
      alignItems: 'center',
      borderColor: 'white.900A',
      borderWidth: '1.5px',
      color: 'content.neutralInverse.bold',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'border-color, background',
      transitionTimingFunction: 'default',
      width: 3.5,
      height: 3.5,
      '& svg': {
        width: 2.5,
        height: 2.5,
      },

      _hover: {
        borderColor: 'white.800A',
      },
      _checked: {
        bg: 'white.900A',
        _hover: {
          bg: 'white.800A',
        },
        _disabled: {
          bg: '!white.500A',
        },
      },
      _indeterminate: {
        bg: 'white.900A',
        borderColor: 'white.900A',
        _hover: {
          bg: 'white.800A',
        },
        _disabled: {
          bg: '!white.500A',
        },
      },
      _disabled: {
        borderColor: '!white.500A',
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
          //   borderRadius: 'sm',
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
