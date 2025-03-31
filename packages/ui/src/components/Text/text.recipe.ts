import { cva } from '@styled-system/css'

export type TextVariantProps = typeof textRecipe.__type

export const textRecipe = cva({
  base: {
    color: 'content.neutral.default',
  },
  defaultVariants: {
    variant: 'body.md',
  },
  variants: {
    font: {
      inter: {
        fontFamily: 'inter',
      },
      notoSans: {
        fontFamily: 'notoSans',
      },
    },
    variant: {
      'display.lg': {
        textStyle: 'display.lg',
        fontFamily: 'inter',
      },
      'display.md': {
        textStyle: 'display.md',
        fontFamily: 'inter',
      },
      'headline.md': {
        textStyle: 'headline.md',
        fontFamily: 'inter',
      },
      'headline.sm': {
        textStyle: 'headline.sm',
        fontFamily: 'inter',
      },
      'title.lg': {
        textStyle: 'title.lg',
        fontFamily: 'notoSans',
      },
      'title.md': {
        textStyle: 'title.md',
        fontFamily: 'notoSans',
      },
      'title.sm': {
        textStyle: 'title.sm',
        fontFamily: 'notoSans',
      },
      'body.lg': {
        textStyle: 'body.lg',
        fontFamily: 'notoSans',
      },
      'body.md': {
        textStyle: 'body.md',
        fontFamily: 'notoSans',
      },
      'body.sm': {
        textStyle: 'body.sm',
        fontFamily: 'notoSans',
      },
      'label.sm': {
        textStyle: 'label.sm',
        fontFamily: 'notoSans',
      },
      'label.md': {
        textStyle: 'label.md',
        fontFamily: 'notoSans',
      },
    },
  },
})
