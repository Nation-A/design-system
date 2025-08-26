import { RecipeVariantProps, cva } from '@styled-system/css'

export type IconButtonVariantProps = RecipeVariantProps<typeof iconButtonRecipe>

export const iconButtonRecipe = cva({
  base: {
    alignItems: 'center',
    appearance: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
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
    borderRadius: 'full',
    color: 'content.neutral.bold',
    _hidden: {
      display: 'none',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
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
        color: 'content.neutral.bold',
        _disabled: {
          background: 'transparent',
          color: 'content.neutral.disabled',
          borderColor: 'border.neutral.disabled',
          cursor: 'not-allowed',
          pointerEvents: 'none',
        },
        _hover: {
          background: 'black.100A',
          _dark: {
            background: 'white.100A',
          },
        },
      },
      light: {
        background: 'transparent',
        color: 'content.neutral.bold',
        _disabled: {
          background: 'transparent',
          color: 'content.neutral.disabled',
          cursor: 'not-allowed',
          pointerEvents: 'none',
        },
        _hover: {
          background: 'black.100A',
          _dark: {
            background: 'white.100A',
          },
        },
      },
    },
    color: {
      neuroid_primary: {},
      zoltarina_primary: {},
      heyd_primary: {},
      heybee_primary: {},
      blackAlpha: {},
      whiteAlpha: {},
      neutral: {},
    },
    size: {
      sm: {
        h: 7,
        w: 7,
        p: '4px',
        // preserveIconSize가 false일 때만 아이콘 크기 강제 적용
        '&:not([data-preserve-icon-size="true"]) svg': {
          width: '20px',
          height: '20px',
        },
      },
      md: {
        h: 8,
        w: 8,
        p: '4px',
        // preserveIconSize가 false일 때만 아이콘 크기 강제 적용
        '&:not([data-preserve-icon-size="true"]) svg': {
          width: '24px',
          height: '24px',
        },
      },
      lg: {
        h: 10,
        w: 10,
        p: '8px',
        // preserveIconSize가 false일 때만 아이콘 크기 강제 적용
        '&:not([data-preserve-icon-size="true"]) svg': {
          width: '24px',
          height: '24px',
        },
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
      color: 'zoltarina_primary',
      css: {
        background: 'background.zoltarinaPrimary.default',
        color: 'content.static.black.bold',
        _hover: { background: 'background.zoltarinaPrimary.selected' },
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
  ],
})
