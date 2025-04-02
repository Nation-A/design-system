import { cva, sva } from '@styled-system/css'

export type InputVariantProps = Omit<typeof inputRecipe.__type, 'state'>
export type InputStateType = Pick<typeof inputRecipe.__type, 'state'>['state']

export const inputSlotRecipe = sva({
  className: 'input',
  slots: ['requiredStar', 'description', 'textLengthIndicator'],
  base: {
    requiredStar: {
      color: 'content.danger.default',
      paddingLeft: 1,
    },
    description: {
      textStyle: 'label.sm',
      color: 'content.neutral.subtle',
      paddingLeft: 1,
      width: '100%',
      textAlign: 'start',
    },
    textLengthIndicator: {
      display: 'inline-block',
      width: '100%',
      textAlign: 'end',
      paddingRight: 1,
      marginTop: -0.5,
      textStyle: 'label.sm',
    },
  },
})

export const inputRecipe = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textStyle: 'body.md',
    cursor: 'text',
    color: 'content.neutral.bold',
    gap: 1,
    borderStyle: 'solid',
    border: 1,
    outline: 'none',
    p: 2,
    '& textarea, & input': {
      outline: 'none',
      width: '100%',
      height: '100%',
    },
  },
  variants: {
    isTextArea: {
      true: {
        minHeight: '56px',
        '& textarea': {
          background: 'transparent',
          height: '100%',
          resize: 'none',
          overflowY: 'auto',
        },
      },
      false: {
        minHeight: '48px',
        maxHeight: '60px',
      },
    },
    variant: {
      solid: {
        borderColor: 'transparent',
      },
      line: {
        background: 'transparent',
      },
    },
    color: {
      alpha: {
        '&::placeholder': {
          color: 'content.static.white.subtlest',
        },
      },
      neutral: {
        '&::placeholder': {
          color: 'content.neutral.subtlest',
        },
      },
    },
    radius: {
      md: {
        borderRadius: 8,
        px: 2,
      },
      lg: {
        borderRadius: 16,
        px: 2,
      },
      full: {
        borderRadius: 9999,
        px: 4,
      },
    },
    state: {
      // state: Input 컴포넌트 내부 로직, 외부 노출 X (외부에선 disabled만 제어)
      default: {
        color: 'content.neutral.bold',
      },
      selected: {
        color: 'content.neutral.bold',
      },
      disabled: {
        color: 'content.neutral.disabled',
      },
    },
  },
  compoundVariants: [
    {
      color: 'alpha',
      state: 'disabled',
      css: {
        '&::placeholder': {
          color: 'content.static.white.disabled',
        },
      },
    },
    {
      color: 'neutral',
      state: 'disabled',
      css: {
        '&::placeholder': {
          color: 'content.neutral.disabled',
        },
      },
    },
    {
      variant: 'solid',
      color: 'alpha',
      state: 'default',
      css: {
        background: 'black.500A',
      },
    },
    {
      variant: 'solid',
      color: 'alpha',
      state: 'selected',
      css: {
        background: 'black.500A',
        border: 1,
        borderColor: 'border.neutral.default',
      },
    },
    {
      variant: 'solid',
      color: 'alpha',
      state: 'disabled',
      css: {
        background: 'black.500A',
      },
    },
    {
      variant: 'solid',
      color: 'neutral',
      state: 'default',
      css: {
        background: 'background.neutral.default',
      },
    },
    {
      variant: 'solid',
      color: 'neutral',
      state: 'selected',
      css: {
        background: 'background.neutral.default',
        border: 1,
        borderColor: 'border.neutral.default',
      },
    },
    {
      variant: 'solid',
      color: 'neutral',
      state: 'disabled',
      css: {
        background: 'background.neutral.disabled',
      },
    },
    {
      variant: 'line',
      state: 'default',
      css: {
        background: 'transparent',
        border: 1,
        borderColor: 'border.neutral.subtle',
      },
    },
    {
      variant: 'line',
      state: 'selected',
      css: {
        background: 'transparent',
        border: 1,
        borderColor: 'border.neutral.default',
      },
    },
    {
      variant: 'line',
      state: 'disabled',
      css: {
        background: 'transparent',
        border: 1,
        borderColor: 'border.neutral.disabled',
      },
    },
  ],
  defaultVariants: {
    isTextArea: false,
    variant: 'solid',
    color: 'neutral',
    state: 'default',
    radius: 'md',
  },
})

export const labelRecipe = cva({
  base: {
    textStyle: 'label.sm',
    textAlign: 'start',
    width: '100%',
    display: 'inline-block',
  },
  variants: {
    state: {
      default: {},
      selected: {},
      disabled: {},
    },
    color: {
      alpha: {
        color: 'content.static.white.bold',
      },
      neutral: {
        color: 'content.neutral.subtle',
      },
    },
    radius: {
      md: {},
      lg: {},
      full: {},
    },
  },
  compoundVariants: [
    {
      state: 'disabled',
      css: {
        color: 'content.neutral.disabled',
      },
    },
  ],
  defaultVariants: {
    color: 'neutral',
    state: 'default',
    radius: 'md',
  },
})
