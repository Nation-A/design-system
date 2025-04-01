import { cva } from '@styled-system/css'

export type InputVariantProps = Omit<typeof inputRecipe.__type, 'state'>
export type InputStateType = Pick<typeof inputRecipe.__type, 'state'>['state']

export const labelRecipe = cva({
  base: {
    textStyle: 'label.sm',
    textAlign: 'start',
  },
  variants: {
    state: {
      default: { 
      },
      selected: {
      },
      disabled: {
      },
    },
    color: {
      alpha: {
        color: 'content.static.white.bold'
      },
      neutral: {
        color: 'content.neutral.subtle'
      }
    },
    radius: {
      md: {},
      lg: {},
      full: {},
    },
    position: {
      outside: {},
      inside: {
        position: 'absolute',
        top: 2,
        left: 2,
      }
    }

  },
  compoundVariants: [
    {
      position: 'inside',
      radius: 'full',
      css: {
        left: 4
      }
    },
    { 
      state: 'disabled',
      css: {
        color: 'content.neutral.disabled',
      }
    },
  ]
})

export const inputRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '48px',
    textStyle: 'body.md',
    cursor: 'text',
    color: 'content.neutral.bold',
    gap: 1, 
    borderStyle: 'solid',
    border: 1,
    outline: 'none',
  },
  variants: {
    variant: {
        solid: {
          borderColor: 'transparent'
        },
        line: {
          background: 'transparent',
        }
      },
    color: {
      alpha: {
        '&::placeholder': {
      color: 'content.static.white.subtlest'
    }
      },
      neutral: {
        '&::placeholder': {
      color: 'content.neutral.subtlest'
    }
      }
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
        borderRadius:9999,
        px: 4
      }
    },
    labelPosition: {
      outside: {},
      inside: {
        height: '60px',
        paddingTop: '18px'
      }
    },
    state: {  // state: Input 컴포넌트 내부 로직, 외부 노출 X (외부에선 disabled만 제어)
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
      {color: 'alpha',
        state: 'disabled',
        css: {
          '&::placeholder': {
          color: 'content.static.white.disabled'
      }
        }
      },
      {color: 'neutral',
        state: 'disabled',
        css: {
          '&::placeholder': {
          color: 'content.neutral.disabled'
      }
        }
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
          borderColor: 'border.neutral.default'
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
          borderColor: 'border.neutral.default'
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
                borderColor: 'border.neutral.subtle'
            },
        },
        {
          variant: 'line',
          state: 'selected',
          css: {
              background: 'transparent',
              border: 1,
              borderColor: 'border.neutral.default'
          },
      },
        {
          variant: 'line',
          state: 'disabled',
          css: {
              background: 'transparent',
              border: 1,
              borderColor: 'border.neutral.disabled'
          },
      },
      
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'neutral',
      state: 'default',
      radius: 'md',
      labelPosition: 'outside'
    },
})
