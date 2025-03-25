import { cva } from '@styled-system/css'

export type SpinnerVariantProps = typeof spinnerRecipe.__type

export const spinnerRecipe = cva({
  base: {
    display: 'inline-block',
    borderWidth: 'md',
    // borderColor: 'colorPalette.default',
    borderStyle: 'solid',
    borderRadius: 'full',
    // borderBottomColor: 'transparent',
    // borderLeftColor: 'transparent',
    width: 'var(--size)',
    height: 'var(--size)',
    animation: 'spin',
    animationDuration: 'slowest',
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      xs: { '--size': 'sizes.3' },
      sm: { '--size': 'sizes.4' },
      md: { '--size': 'sizes.6' },
      lg: { '--size': 'sizes.8' },
      xl: { '--size': 'sizes.12' },
    },
  },
})
