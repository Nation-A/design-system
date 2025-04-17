import { RecipeVariantProps, cva } from '@styled-system/css'

export type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>

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
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    radius: 'full',
    color: 'neutral',
  },
  variants: {
    variant: {
      solid: {
        _disabled: {
          background: 'background.neutral.disabled',
          color: 'content.neutral.disabled',
          cursor: 'not-allowed',
          pointerEvents: 'none',
        },
      },
      outline: {
        background: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border.neutral.default',
        _disabled: {
          background: 'transparent',
          color: 'content.neutral.disabled',
          borderColor: 'border.neutral.disabled',
          cursor: 'not-allowed',
          pointerEvents: 'none',
        },
      },
      light: {
        background: 'transparent',
        _disabled: {
          background: 'transparent',
          color: 'content.neutral.disabled',
          cursor: 'not-allowed',
          pointerEvents: 'none',
        },
      },
    },
    color: {
      neuroid_primary: {},
      neuroid_secondary: {},
      zoltarina_primary: {},
      zoltarina_secondary: {},
      heyd_primary: {},
      heyd_secondary: {},
      heybee_primary: {},
      blackAlpha: {},
      whiteAlpha: {},
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
        '& :where(svg)': {
          width: '20px',
          height: '20px',
        },
      },
      sm: {
        h: 8,
        textStyle: 'label.sm',
        px: '16px',
        gap: 1,
        '& :where(svg)': {
          width: '20px',
          height: '20px',
        },
      },
      md: {
        h: 10,
        textStyle: 'label.md',
        px: '20px',
        gap: 1,
        '& :where(svg)': {
          width: '24px',
          height: '24px',
        },
      },
      lg: {
        h: 12,
        textStyle: 'body.lg',
        px: '28px',
        gap: 1,
        '& :where(svg)': {
          width: '24px',
          height: '24px',
        },
      },
    },
    radius: {
      full: { borderRadius: 'full' },
      lg: { borderRadius: 'lg' },
      md: { borderRadius: 'md' },
    },
    fullWidth: {
      true: {
        width: 'full',
        flexBasis: 'auto',
        flexGrow: 1,
      },
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'neuroid_primary',
      css: {
        background: 'background.neuroidPrimary.default',
        color: 'content.neutral.bold',
        _hover: { background: 'background.neuroidPrimary.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'neuroid_secondary',
      css: {
        background: 'background.neuroidSecondary.default',
        color: 'content.static.black.bold',
        _hover: { background: 'background.neuroidSecondary.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'zoltarina_primary',
      css: {
        background: 'background.zoltarinaPrimary.default',
        color: 'content.static.black.bold',
        _hover: { background: 'background.zoltarinaPrimary.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'zoltarina_secondary',
      css: {
        background: 'background.zoltarinaSecondary.default',
        color: 'content.static.black.bold',
        _hover: { background: 'background.zoltarinaSecondary.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'heyd_primary',
      css: {
        background: 'background.heydPrimary.default',
        color: 'content.static.black.bold',
        _hover: { background: 'background.heydPrimary.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'heyd_secondary',
      css: {
        background: 'background.heydSecondary.default',
        color: 'content.static.black.bold',
        _hover: { background: 'background.heydSecondary.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'heybee_primary',
      css: {
        background: 'background.heybeePrimary.default',
        color: 'content.static.black.bold',
        _hover: { background: 'background.heybeePrimary.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'blackAlpha',
      css: {
        background: 'background.static.blackAlpha.default',
        color: 'content.neutral.default',
        _hover: { background: 'background.static.blackAlpha.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'whiteAlpha',
      css: {
        background: 'background.static.whiteAlpha.default',
        color: 'content.neutral.default',
        _hover: { background: 'background.static.whiteAlpha.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'neutral',
      css: {
        background: 'background.neutral.default',
        color: 'content.neutral.bold',
        _hover: { background: 'background.neutral.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'danger',
      css: {
        background: 'background.danger.default',
        color: 'content.neutral.bold',
        _hover: { background: 'background.danger.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'warning',
      css: {
        background: 'background.warning.default',
        color: 'content.neutral.bold',
        _hover: { background: 'background.warning.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'success',
      css: {
        background: 'background.success.default',
        color: 'content.neutral.bold',
        _hover: { background: 'background.success.selected' },
      },
    },
    {
      variant: 'solid',
      color: 'informative',
      css: {
        background: 'background.informative.default',
        color: 'content.neutral.bold',
        _hover: { background: 'background.informative.selected' },
      },
    },
    {
      variant: 'outline',
      color: 'neuroid_primary',
      css: {
        color: 'content.neuroidPrimary.default',
        borderColor: 'border.neuroidPrimary.default',
        _hover: {
          background: 'background.neuroidPrimary.selected',
          color: 'content.neutral.bold',
        },
      },
    },
    {
      variant: 'outline',
      color: 'zoltarina_primary',
      css: {
        color: 'content.zoltarinaPrimary.default',
        borderColor: 'border.zoltarinaPrimary.default',
        _hover: {
          background: 'background.zoltarinaPrimary.selected',
          color: 'content.neutral.bold',
        },
      },
    },
    {
      variant: 'outline',
      color: 'heyd_primary',
      css: {
        color: 'content.heydPrimary.default',
        borderColor: 'border.heydPrimary.default',
        _hover: {
          background: 'background.heydPrimary.selected',
          color: 'content.neutral.bold',
        },
      },
    },
    {
      variant: 'outline',
      color: 'heybee_primary',
      css: {
        color: 'content.heybeePrimary.default',
        borderColor: 'border.heybeePrimary.default',
        _hover: {
          background: 'background.heybeePrimary.selected',
          color: 'content.neutral.bold',
        },
      },
    },
    {
      variant: 'outline',
      color: 'neutral',
      css: {
        color: 'content.neutral.default',
        borderColor: 'border.neutral.default',
        _hover: {
          background: 'background.neutral.selected',
          color: 'content.neutral.bold',
        },
      },
    },
    {
      variant: 'outline',
      color: 'danger',
      css: {
        color: 'content.danger.default',
        borderColor: 'border.danger.default',
        _hover: {
          background: 'background.danger.selected',
          color: 'content.neutral.bold',
        },
      },
    },
    {
      variant: 'outline',
      color: 'warning',
      css: {
        color: 'content.warning.default',
        borderColor: 'border.warning.default',
        _hover: {
          background: 'background.warning.selected',
          color: 'content.neutral.bold',
        },
      },
    },
    {
      variant: 'outline',
      color: 'success',
      css: {
        color: 'content.success.default',
        borderColor: 'border.success.default',
        _hover: {
          background: 'background.success.selected',
          color: 'content.neutral.bold',
        },
      },
    },
    {
      variant: 'outline',
      color: 'informative',
      css: {
        color: 'content.informative.default',
        borderColor: 'border.informative.default',
        _hover: {
          background: 'background.informative.selected',
          color: 'content.neutral.bold',
        },
      },
    },
    {
      variant: 'light',
      color: 'neuroid_primary',
      css: {
        background: 'transparent',
        color: 'content.neuroidPrimary.default',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    {
      variant: 'light',
      color: 'zoltarina_primary',
      css: {
        background: 'transparent',
        color: 'content.zoltarinaPrimary.default',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    {
      variant: 'light',
      color: 'heyd_primary',
      css: {
        background: 'transparent',
        color: 'content.heydPrimary.default',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    {
      variant: 'light',
      color: 'heybee_primary',
      css: {
        background: 'transparent',
        color: 'content.heybeePrimary.default',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    {
      variant: 'light',
      color: 'neutral',
      css: {
        background: 'transparent',
        color: 'content.neutral.bold',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    {
      variant: 'light',
      color: 'danger',
      css: {
        background: 'transparent',
        color: 'content.danger.default',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    {
      variant: 'light',
      color: 'warning',
      css: {
        background: 'transparent',
        color: 'content.warning.default',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    {
      variant: 'light',
      color: 'success',
      css: {
        background: 'transparent',
        color: 'content.success.default',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    {
      variant: 'light',
      color: 'informative',
      css: {
        background: 'transparent',
        color: 'content.informative.default',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  ],
})
