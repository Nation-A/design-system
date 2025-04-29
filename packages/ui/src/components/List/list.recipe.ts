import { RecipeVariantProps, sva } from '@styled-system/css'

export type ListVariantProps = RecipeVariantProps<typeof listRecipe>

export const listRecipe = sva({
  className: 'list',
  slots: ['item', 'root'],
  base: {
    root: {
      display: 'flex',
      flexDir: 'column',
      w: 'full',
    },
    item: {
      gap: 2,
      py: 2,
      w: 'full',
      rounded: 'sm',
      transition: 'background-color 0.1s ease-in-out',
      cursor: 'pointer',
      '& .label': {
        color: 'content.neutral.default',
      },
      '& .sub-label': {
        color: 'content.neutral.subtlest',
      },
      _hover: {
        bg: 'background.neutral.selected',
      },
      _disabled: {
        _hover: {
          bg: 'transparent',
        },
        '& .label': {
          color: 'content.neutral.disabled',
        },
        '& .sub-label': {
          color: 'content.neutral.disabled',
        },
        cursor: 'not-allowed',
      },
    },
  },
  variants: {
    size: {
      sm: {
        item: {
          h: '52px',
        },
      },
      lg: {
        item: { h: '68px' },
      },
    },
    density: {
      1: { item: { px: 2 } },
      2: { item: { pl: 12, pr: 2 } },
    },
  },
  defaultVariants: {
    size: 'sm',
    density: 1,
  },
})
