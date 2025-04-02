import { tabsAnatomy } from '@ark-ui/react'
import { sva } from '@styled-system/css'

export type TabsVariantProps = keyof typeof tabsRecipe.variantMap

export const tabsRecipe = sva({
  className: 'tabs',
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      width: 'full',
      flexDirection: 'column',
    },
    list: {
      display: 'flex',
      flexShrink: '0',
      flexDirection: 'row',
      overflowX: 'auto',
      position: 'relative',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    trigger: {
      alignItems: 'center',
      color: 'content.neutral.subtlest',
      cursor: 'pointer',
      display: 'inline-flex',
      flexShrink: '0',
      gap: '2',
      justifyContent: 'center',
      px: '4',
      py: '2',
      textStyle: 'label.md',
      transition: 'all',
      transitionDuration: 'normal',
      transitionTimingFunction: 'default',
      whiteSpace: 'nowrap',
      _disabled: {
        color: 'content.neutral.disabled',
        cursor: 'not-allowed',
      },
      _hover: {
        color: 'content.neutral.hovered',
      },
      _selected: {
        color: 'content.neutral.bold',
      },
    },
    content: {
      pt: '4',
    },
    indicator: {
      width: 'var(--width)',
      height: '2px',
      borderRadius: 'xs',
      background: 'content.neutral.bold',
      zIndex: -1,
      bottom: '0px',
    },
  },
  variants: {
    variant: {
      line: {
        list: {
          borderBottomWidth: '1px',
          borderColor: 'background.neutral.selected',
        },
      },
      enclosed: {
        list: {
          p: '16px 0 0 16px',
          borderRadius: 'md',
          gap: '16',
        },
        trigger: {
          borderRadius: 'full',
          _selected: {
            background: 'background.neutral.selected',
          },
        },
        indicator: {
          display: 'none',
        },
      },
    },
    fitted: {
      true: {
        root: {
          width: '100%',
        },
        list: {
          width: '100%',
          p: 1,
          overflowX: 'visible',
        },
        trigger: {
          flex: 1,
          justifyContent: 'center',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },
      },
    },
    bottomLine: {
      true: {
        list: {
          borderBottomWidth: '1px',
          borderColor: 'background.neutral.selected',
        },
      },
      false: {
        list: {
          borderBottomWidth: '0px',
        },
      },
    },
    shadow: {
      true: {
        list: {
          boxShadow: '0px 8px 12px 0px var(--colors-semantic-shadow-overlay, rgba(0, 0, 0, 0.08))',
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'enclosed',
      fitted: true,
      css: {
        list: {
          background: 'background.neutral.default',
          borderRadius: 'full',
        },
      },
    },
    {
      variant: 'enclosed',
      bottomLine: true,
      css: {
        list: {
          borderBottomWidth: '0px',
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'line',
    fitted: false,
    bottomLine: true,
    shadow: false,
  },
})
