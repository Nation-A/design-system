import { radioGroupAnatomy } from '@ark-ui/react'
import { RecipeVariantProps, sva } from '@styled-system/css'

export type RadioGroupRecipeVariantProps = RecipeVariantProps<typeof radioGroupRecipe>

export const radioGroupRecipe = sva({
  className: 'radioGroup',
  slots: radioGroupAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: {
        _vertical: 'column',
        _horizontal: 'row',
      },
      gap: {
        _vertical: '4',
        _horizontal: '6',
      },
    },
    itemControl: {
      background: 'transparent',
      borderColor: 'content.neutral.bold',
      borderRadius: 'full',
      borderWidth: '2px',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      _hover: {
        borderColor: 'content.neutral.subtle',
      },
      _checked: {
        background: 'content.neutral.bold',
        borderColor: 'content.neutral.bold',
        outlineColor: 'content.neutral.default_inverse',
        outlineStyle: 'solid',
        outlineWidth: '2px',
        outlineOffset: '-4px',
        _hover: {
          background: 'content.neutral.subtle',
        },
        _disabled: {
          background: 'content.neutral.disabled',
        },
      },
      _disabled: {
        borderColor: '!content.neutral.disabled',
        _hover: {
          bg: 'initial',
        },
      },
      width: 4.5,
      height: 4.5,
    },
    item: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      _disabled: {
        cursor: 'not-allowed',
      },
      gap: '2',
    },
    itemText: {
      color: 'content.neutral.default',
      textStyle: 'label.md',
      _disabled: {
        color: 'content.neutral.disabled',
      },
    },
  },
})
