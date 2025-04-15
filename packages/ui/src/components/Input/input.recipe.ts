import { RecipeVariantProps, sva } from '@styled-system/css'

export type InputVariantProps = RecipeVariantProps<typeof inputRecipe>

export const inputRecipe = sva({
  className: 'input',
  slots: ['inputContainer', 'requiredStar', 'description', 'label', 'textLengthIndicator', 'adornment'],
  base: {
    inputContainer: {
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
      '& input, & textarea': {
        outline: 'none',
        width: '100%',
        height: '100%',
      },
      _groupDisabled: {
        cursor: 'not-allowed',
        color: 'content.neutral.disabled',
      },
    },
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
    label: {
      textStyle: 'label.sm',
      textAlign: 'start',
      width: '100%',
      display: 'inline-block',
    },
    textLengthIndicator: {
      display: 'inline-block',
      width: '100%',
      textAlign: 'end',
      paddingRight: 1,
      marginTop: -0.5,
      textStyle: 'label.sm',
      color: 'content.neutral.subtlest',
      _groupDisabled: { color: 'content.neutral.disabled' },
    },
    adornment: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  variants: {
    isTextArea: {
      true: {
        inputContainer: {
          minHeight: '56px',
          '& textarea': {
            background: 'transparent',
            resize: 'none',
            overflowY: 'auto',
          },
        },
      },
      false: {
        inputContainer: {
          minHeight: '48px',
          maxHeight: '60px',
        },
      },
    },
    removeBorder: {
      true: {
        inputContainer: {
          border: '0',
        },
      },
    },
    variant: {
      solid: {
        inputContainer: {
          borderColor: 'transparent',
          _focusWithin: {
            borderColor: 'border.neutral.default',
          },
        },
      },
      line: {
        inputContainer: {
          background: 'transparent',
          border: 1,
          borderColor: 'border.neutral.subtle',
          _focusWithin: {
            borderColor: 'border.neutral.default',
          },
          _groupDisabled: {
            borderColor: 'border.neutral.disabled',
          },
        },
      },
    },
    color: {
      alpha: {
        inputContainer: {
          _placeholder: {
            color: 'content.static.white.subtlest',
            _groupDisabled: {
              color: 'content.static.white.disabled',
            },
          },
        },
        label: {
          color: 'content.neutral.default',
          _groupDisabled: {
            color: 'content.neutral.disabled',
          },
        },
      },
      neutral: {
        inputContainer: {
          _placeholder: {
            color: 'content.neutral.subtlest',
            _groupDisabled: {
              color: 'content.neutral.disabled',
            },
          },
        },
        label: {
          color: 'content.neutral.subtle',
          _groupDisabled: {
            color: 'content.neutral.disabled',
          },
        },
      },
    },
    radius: {
      md: {
        inputContainer: {
          borderRadius: 8,
          px: 2,
        },
      },
      lg: {
        inputContainer: {
          borderRadius: 16,
          px: 2,
        },
      },
      full: {
        inputContainer: {
          borderRadius: 9999,
          px: 4,
        },
      },
    },
    disabled: {
      true: {
        inputContainer: {
          _groupDisabled: {},
        },
      },
    },
  },

  compoundVariants: [
    {
      variant: 'solid',
      color: 'alpha',
      css: {
        inputContainer: {
          background: 'black.500A',
        },
      },
    },
    {
      variant: 'solid',
      color: 'neutral',
      css: {
        inputContainer: {
          background: 'background.neutral.default',
          _groupDisabled: {
            background: 'background.neutral.disabled',
          },
        },
      },
    },
  ],
  defaultVariants: {
    isTextArea: false,
    variant: 'solid',
    color: 'neutral',
    radius: 'md',
    removeBorder: false,
  },
})
