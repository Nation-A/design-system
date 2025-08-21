import { RecipeVariantProps, cva } from '@styled-system/css'

export type SpinnerVariantProps = RecipeVariantProps<typeof spinnerRecipe>

export const spinnerRecipe = cva({
  base: {
    '& path': {
      stroke: 'currentColor',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: { width: 4, height: 4 },
      md: { width: 6, height: 6 },
      lg: { width: 12, height: 12 },
      xl: { width: 24, height: 24 },
    },
  },
})
