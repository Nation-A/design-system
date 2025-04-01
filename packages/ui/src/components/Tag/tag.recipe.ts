import { cva } from '@styled-system/css'

export type TagVariantProps = typeof tagRecipe.__type

export const tagRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    px: 2,
    py: 1,
    textStyle: 'label.md',
    height: 'fit-content',
    width: 'fit-content',
    cursor: 'default',
  },
  variants: {
    color: {
      neutral: {},
      black: {},
      white: {},
    },
    background: {
      on: {},
      off: {},
    },
    radius: {
      sm: { borderRadius: 'sm' },
      full: { borderRadius: 'full' },
    },
    avatar: {
      true: {
        borderRadius: 'full',
        pl: 1,
      },
      false: {},
    },
  },

  compoundVariants: [
    {
      avatar: true,
      color: 'white',
      css: {
        background: 'background.static.whiteAlpha.bold',
        color: 'content.static.black.default',
      },
    },
    {
      avatar: true,
      color: 'neutral',
      css: {
        background: 'background.neutral.selected',
        color: 'content.neutral.default',
      },
    },
    {
      avatar: true,
      color: 'black',
      css: {
        background: 'background.static.blackAlpha.default',
        color: 'content.static.white.default',
      },
    },
    {
      avatar: false,
      background: 'on',
      color: 'neutral',
      css: {
        background: 'background.neutral.selected',
        color: 'content.neutral.default',
      },
    },
    {
      avatar: false,
      background: 'on',
      color: 'black',
      css: {
        background: 'background.static.blackAlpha.default',
        color: 'content.static.white.default',
      },
    },
    {
      avatar: false,
      background: 'on',
      color: 'white',
      css: {
        background: 'background.static.whiteAlpha.selected',
        color: 'content.static.black.default',
      },
    },
    {
      avatar: false,
      background: 'off',
      color: 'neutral',
      css: {
        background: 'transparent',
        color: 'content.neutral.default',
      },
    },
    {
      avatar: false,
      background: 'off',
      color: 'black',
      css: {
        background: 'transparent',
        color: 'content.static.black.default',
      },
    },
    {
      avatar: false,
      background: 'off',
      color: 'white',
      css: {
        background: 'transparent',
        color: 'content.static.white.default',
      },
    },
  ],
  defaultVariants: {
    background: 'on',
    radius: 'sm',
    color: 'neutral',
    avatar: false,
  },
})
