import { RecipeVariantProps, sva } from '@styled-system/css'

export type BottomSheetVariantProps = RecipeVariantProps<typeof bottomSheetRecipe>

export const bottomSheetRecipe = sva({
  className: 'bottomSheet',
  slots: ['root', 'container', 'header', 'content', 'backdrop'],
  base: {
    root: {
      '& [data-rsbs-backdrop]': {
        background: 'rgba(0, 0, 0, 0.6)',
      },
    },
    container: {
      backgroundColor: 'surface.layer_1',
      boxShadow: 'md',
      background: 'surface.layer_1',
      zIndex: 'modal',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4',
      borderBottom: 'none',
      backgroundColor: 'surface.layer_1',
      zIndex: 0,
      touchAction: 'none',
    },
    content: {
      padding: '4',
      backgroundColor: 'surface.layer_1',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      boxShadow: 'overlay',
      zIndex: 'modal',
    },
    backdrop: {
      backgroundColor: 'shadow.overlay',
      opacity: 0.5,
      zIndex: 'overlay',
    },
  },
  variants: {
    fullHeight: {
      true: {
        container: {
          height: '100%',
        },
      },
    },
  },
  defaultVariants: {
    fullHeight: false,
  },
})
