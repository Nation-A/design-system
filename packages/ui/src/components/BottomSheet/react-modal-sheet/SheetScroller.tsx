import { type TouchEvent, type UIEvent } from 'react'

import { useSheetScrollerContext } from './context'
import { type SheetScrollerProps } from './types'
import { isTouchDevice } from './utils'
import { styles } from './styles'

export const SheetScroller = ({
  draggableAt = 'top',
  children,
  style,
  className = '',
  ref,
  ...rest
}: SheetScrollerProps & { ref?: React.Ref<HTMLDivElement> }) => {
  const sheetScrollerContext = useSheetScrollerContext()

  function determineDragState(element: HTMLDivElement) {
    const { scrollTop, scrollHeight, clientHeight } = element
    const isScrollable = scrollHeight > clientHeight

    if (!isScrollable) return

    const isAtTop = scrollTop <= 0
    const isAtBottom = scrollHeight - scrollTop === clientHeight

    const shouldEnable =
      (draggableAt === 'top' && isAtTop) ||
      (draggableAt === 'bottom' && isAtBottom) ||
      (draggableAt === 'both' && (isAtTop || isAtBottom))

    if (shouldEnable) {
      sheetScrollerContext.setDragEnabled()
    } else {
      sheetScrollerContext.setDragDisabled()
    }
  }

  function onScroll(e: UIEvent<HTMLDivElement>) {
    determineDragState(e.currentTarget)
    if (rest.onScroll) {
      rest.onScroll(e)
    }
  }

  function onTouchStart(e: TouchEvent<HTMLDivElement>) {
    determineDragState(e.currentTarget)
    if (rest.onTouchStart) {
      rest.onTouchStart(e)
    }
  }

  const scrollProps = isTouchDevice() ? { onScroll, onTouchStart } : undefined

  return (
    <div
      {...rest}
      ref={ref}
      className={`react-modal-sheet-scroller ${className}`}
      style={{ ...styles.scroller, ...style }}
      {...scrollProps}
    >
      {children}
    </div>
  )
}

SheetScroller.displayName = 'SheetScroller'
