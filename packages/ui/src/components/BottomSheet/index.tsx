import { ComponentProps, ReactNode, forwardRef, createContext, useContext } from 'react'
import { Sheet } from './react-modal-sheet'
import { bottomSheetRecipe, BottomSheetVariantProps } from './bottomsheet.recipe'
import { css, cx } from '@styled-system/css'
import { HTMLStyledProps } from '@styled-system/jsx'
import { HStack } from '@styled-system/jsx'

interface BottomSheetContextType {
  rounded: number
  onClose?: () => void
}

const BottomSheetContext = createContext<BottomSheetContextType>({ rounded: 20 })

export type BottomSheetProps = Omit<ComponentProps<typeof Sheet>, 'children'> &
  BottomSheetVariantProps & {
    children: ReactNode
    snapPercent?: { min: number; max: number }
    rounded?: number
    onClose?: () => void
  }

interface BottomSheetComponent
  extends React.ForwardRefExoticComponent<BottomSheetProps & React.RefAttributes<HTMLDivElement>> {
  Header: typeof Header
  Content: typeof Content
  Backdrop: typeof Backdrop
  Handle: typeof Handle
  Scroller: typeof Sheet.Scroller
}

const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
  ({ children, snapPercent, fullHeight, className, rounded = 20, disableDrag, onClose, ...props }, ref) => {
    const snapPoints = snapPercent
      ? [snapPercent.max * window.innerHeight, snapPercent.min * window.innerHeight]
      : undefined

    const styles = bottomSheetRecipe({ fullHeight })

    return (
      <BottomSheetContext.Provider value={{ rounded, onClose }}>
        <Sheet
          ref={ref}
          snapPoints={snapPoints}
          initialSnap={0}
          className={cx(styles.root, className)}
          onClose={onClose}
          {...props}
        >
          {children}
        </Sheet>
      </BottomSheetContext.Provider>
    )
  },
) as BottomSheetComponent

BottomSheet.displayName = 'BottomSheet'

// Compound components
const Header = forwardRef<HTMLDivElement, BottomSheetVariantProps & { children: ReactNode; className?: string }>(
  ({ children, className, ...props }, ref) => {
    const styles = bottomSheetRecipe()

    return (
      <HStack ref={ref} className={cx(styles.header, className)} {...props}>
        {children}
      </HStack>
    )
  },
)
Header.displayName = 'BottomSheet.Header'

type ContentProps = ComponentProps<typeof Sheet.Content> & HTMLStyledProps<'div'>

const Content = forwardRef<HTMLStyledProps<'div'>, ContentProps>(
  ({ className, children, css: cssProp, ...props }, ref) => {
    const styles = bottomSheetRecipe.raw()
    const { rounded } = useContext(BottomSheetContext)
    const contentClass = cx(css(styles.content, cssProp), className)

    return (
      <Sheet.Container
        style={{ backgroundColor: 'transparent', borderTopLeftRadius: rounded, borderTopRightRadius: rounded }}
      >
        <Sheet.Content
          ref={ref}
          className={contentClass}
          style={{
            borderTopLeftRadius: rounded,
            borderTopRightRadius: rounded,
          }}
          {...props}
        >
          {children}
        </Sheet.Content>
      </Sheet.Container>
    )
  },
)
Content.displayName = 'BottomSheet.Content'

type BackdropProps = ComponentProps<typeof Sheet.Backdrop> & {
  opacity?: number
  disableCloseOnTap?: boolean
}

// Compound components
const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ className, children, opacity = 0.5, disableCloseOnTap, style, ...props }, ref) => {
    const styles = bottomSheetRecipe()
    const { onClose } = useContext(BottomSheetContext)
    const backdropClass = cx(styles.backdrop, className)
    return (
      <Sheet.Backdrop
        ref={ref}
        className={backdropClass}
        style={{ background: `rgba(0, 0, 0, ${opacity})`, ...style }}
        onTap={() => {
          if (!disableCloseOnTap) {
            onClose?.()
          }
        }}
        {...props}
      />
    )
  },
)
Backdrop.displayName = 'BottomSheet.Backdrop'

const Handle = () => (
  <div
    className={css({
      margin: '15px auto',
      height: 1.5,
      minHeight: 1.5,
      width: '45px',
      borderRadius: 999,
      background: '#bebebe',
      zIndex: 0,
      touchAction: 'none',
      userSelect: 'none',
    })}
  />
)

// Attach compound components
BottomSheet.Header = Header
BottomSheet.Content = Content
BottomSheet.Backdrop = Backdrop as any
BottomSheet.Handle = Handle
BottomSheet.Scroller = Sheet.Scroller

export default BottomSheet
