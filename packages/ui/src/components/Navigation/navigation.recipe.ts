import { tabsAnatomy } from '@ark-ui/react'
import { RecipeVariantProps, sva } from '@styled-system/css'

export type NavigationVariantProps = RecipeVariantProps<typeof navigationRecipe>

export const navigationRecipe = sva({
  className: 'navigation',
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      zIndex: 10,
    },
    list: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      bg: 'surface.layer_1',
      py: 2,
    },
    trigger: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      h: '48px',
      w: '64px',
      px: 2,
      textStyle: 'label.sm',
      color: 'content.neutral.subtlest',
      transitionDuration: 'normal',
      transitionProperty: 'background, border-color, color, box-shadow',
      transitionTimingFunction: 'default',
      userSelect: 'none',
      rounded: 'lg',
      cursor: 'pointer',
      _hover: {
        bg: '#00000012',
        _dark: {
          bg: '#FFFFFF12',
        },
      },
      _selected: {
        color: 'content.neutral.default',
        bg: '#00000008',
        _dark: {
          bg: '#FFFFFF08',
        },
      },
    },
  },
})
