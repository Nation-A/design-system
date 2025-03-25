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
    variant: {
      'display.lg': {
        textStyle: 'display.lg',
      },
      'display.md': {
        textStyle: 'display.md',
      },
      'headline.md': {
        textStyle: 'headline.md',
      },
      'headline.sm': {
        textStyle: 'headline.sm',
      },
      'title.lg': {
        textStyle: 'title.lg',
      },
      'title.md': {
        textStyle: 'title.md',
      },
      'body.lg': {
        textStyle: 'body.lg',
      },
      'body.md': {
        textStyle: 'body.md',
      },
      'body.sm': {
        textStyle: 'body.sm',
      },
      'label.sm': {
        textStyle: 'label.sm',
      },
      'label.md': {
        textStyle: 'label.md',
      },
    },
  },
})
