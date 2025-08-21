import { RecipeVariantProps, cva } from '@styled-system/css'

export type FabVariantProps = RecipeVariantProps<typeof fabRecipe>

export const fabRecipe = cva({
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
    h: 14,
    w: 14,
    shadow: 'overlay',
    '& :where(svg)': {
      width: '24px',
      height: '24px',
    },

    _hidden: {
      display: 'none',
    },
    _disabled: {
      background: 'background.neutral.disabled',
      color: 'content.neutral.disabled',
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
  variants: {
    color: {
      neuroid_primary: {
        background: 'background.neuroidPrimary.default',
        color: 'content.neutral.bold',
        _hover: { background: 'background.neuroidPrimary.selected' },
      },
      zoltarina_primary: {
        background: 'background.zoltarinaPrimary.default',
        color: 'content.static.black.bold',
        _hover: { background: 'background.zoltarinaPrimary.selected' },
      },
      heyd_primary: {
        background: 'background.heydPrimary.default',
        color: 'content.static.black.bold',
        _hover: { background: 'background.heydPrimary.selected' },
      },
      heybee_primary: {
        background: 'background.heybeePrimary.default',
        color: 'content.static.black.bold',
        _hover: { background: 'background.heybeePrimary.selected' },
      },
      blackAlpha: {
        background: 'background.static.blackAlpha.default',
        color: 'content.neutral.default',
        _hover: { background: 'background.static.blackAlpha.selected' },
      },
      whiteAlpha: {
        background: 'background.static.whiteAlpha.default',
        color: 'content.neutral.default',
        _hover: { background: 'background.static.whiteAlpha.selected' },
      },
      neutral: {
        background: 'background.neutral.default',
        color: 'content.neutral.bold',
        _hover: { background: 'background.neutral.selected' },
      },
    },
  },
})
