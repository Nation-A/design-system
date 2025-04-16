import { switchAnatomy } from '@ark-ui/react'
import { RecipeVariantProps, sva } from '@styled-system/css'

export type SwitchRecipeVariantProps = RecipeVariantProps<typeof switchRecipe>

export const switchRecipe = sva({
  className: 'switch',
  slots: switchAnatomy.keys(),
  base: {
    root: {
      alignItems: 'center',
      display: 'flex',
      position: 'relative',
      gap: 2,
    },
    control: {
      alignItems: 'center',
      background: 'background.neutral.selected',
      borderRadius: 'full',
      cursor: 'pointer',
      display: 'inline-flex',
      flexShrink: '0',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      _checked: {
        background: 'background.neutralInverse.selected',
      },
      _disabled: {
        background: '!background.neutral.disabled',
        cursor: 'not-allowed',
      },
    },
    label: {
      color: 'content.neutral.bold',
      textStyle: 'label.md',
    },
    thumb: {
      background: 'content.neutral.bold',
      borderRadius: 'full',
      boxShadow: 'xs',
      transitionDuration: 'normal',
      transitionProperty: 'transform, background',
      transitionTimingFunction: 'default',
      _checked: {
        transform: 'translateX(100%)',
        background: 'content.neutral.bold',
      },
      _disabled: {
        background: '!content.neutral.disabled',
        cursor: 'not-allowed',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'neutral',
  },
  variants: {
    size: {
      md: {
        control: {
          width: 10,
          p: 1,
        },
        thumb: {
          width: 4,
          height: 4,
        },
      },
      lg: {
        control: {
          width: 14,
          p: 1,
        },
        thumb: {
          width: 6,
          height: 6,
        },
      },
    },
    color: {
      neutral: {
        thumb: {
          _checked: {
            background: 'content.neutralInverse.bold',
          },
        },
      },
      neuroid: {
        control: {
          _checked: {
            background: 'background.neuroidSecondary.selected',
          },
        },
        thumb: {
          _checked: {
            background: 'content.static.white.bold',
          },
        },
      },
      heyd: {
        control: {
          _checked: {
            background: 'background.heydPrimary.selected',
          },
        },
        thumb: {
          _checked: {
            background: 'content.static.white.bold',
          },
        },
      },
      heybee: {
        control: {
          _checked: {
            background: 'background.heybeePrimary.selected',
          },
        },
        thumb: {
          _checked: {
            background: 'content.static.white.bold',
          },
        },
      },
      zoltarina: {
        control: {
          _checked: {
            background: 'background.zoltarinaPrimary.selected',
          },
        },
        thumb: {
          _checked: {
            background: 'content.static.white.bold',
          },
        },
      },
    },
  },
})
