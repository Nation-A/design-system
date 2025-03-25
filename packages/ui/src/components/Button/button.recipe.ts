import { cva } from '@styled-system/css'

export type ButtonVariantProps = typeof buttonRecipe.__type

export const buttonRecipe = cva({
  base: {
    alignItems: 'center',
    appearance: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'semibold',
    isolation: 'isolate',
    minWidth: '0',
    justifyContent: 'center',
    outline: 'none',
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'background, border-color, color, box-shadow',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    _hidden: {
      display: 'none',
    },
    '& :where(svg)': {
      fontSize: '1.1em',
      width: '1.1em',
      height: '1.1em',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    radius: 'full',
    color: 'neutral',
  },
  variants: {
    variant: {
      solid: {},
      outline: {},
      light: {},
    },
    color: {
      neuroid_primary: {},
      neuroid_secondary: {},
      zoltarina_primary: {},
      zoltarina_secondary: {},
      heyd_primary: {},
      heyd_secondary: {},
      neutral: {},
      danger: {},
      warning: {},
      success: {},
      informative: {},
    },
    size: {
      xs: {
        h: 7,
        textStyle: 'label.sm',
        px: '8px',
        gap: 1,
      },
      sm: {
        h: 8,
        textStyle: 'label.sm',
        px: '16px',
        gap: 1,
      },
      md: {
        h: 10,
        textStyle: 'label.md',
        px: '20px',
        gap: 1,
      },
      lg: {
        h: 12,
        textStyle: 'body.lg',
        px: '28px',
        gap: 1,
      },
    },
    radius: {
      full: { borderRadius: 'full' },
      lg: { borderRadius: 'lg' },
      md: { borderRadius: 'md' },
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'neuroid_primary',
      css: { background: 'background.neuroidPrimary.default', color: 'content.neutral.bold' },
    },
    {
      variant: 'solid',
      color: 'neuroid_secondary',
      css: { background: 'background.neuroidSecondary.default', color: 'content.neuroidPrimary.default_inverse' },
    },
    {
      variant: 'solid',
      color: 'zoltarina_primary',
      css: { background: 'background.zoltarinaPrimary.default', color: 'content.neutral.default_inverse' },
    },
    {
      variant: 'solid',
      color: 'zoltarina_secondary',
      css: { background: 'background.zoltarinaSecondary.default', color: 'content.zoltarinaPrimary.defult_inverse' },
    },
    {
      variant: 'solid',
      color: 'heyd_primary',
      css: { background: 'background.heydPrimary.default', color: 'content.neutral.default_inverse' },
    },
    {
      variant: 'solid',
      color: 'heyd_secondary',
      css: { background: 'background.heydSecondary.default', color: 'content.heydPrimary.defult_inverse' },
    },
    {
      variant: 'solid',
      color: 'neutral',
      css: { background: 'background.neutral.default', color: 'content.neutral.bold' },
    },
    {
      variant: 'solid',
      color: 'danger',
      css: { background: 'background.danger.default', color: 'content.neutral.bold' },
    },
    {
      variant: 'solid',
      color: 'warning',
      css: { background: 'background.warning.default', color: 'content.neutral.default_inverse' },
    },
    {
      variant: 'solid',
      color: 'success',
      css: { background: 'background.success.default', color: 'content.neutral.bold' },
    },
    {
      variant: 'solid',
      color: 'informative',
      css: { background: 'background.informative.default', color: 'content.neutral.bold' },
    },
  ],
})
