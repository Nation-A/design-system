import { motion } from 'motion/react'

import { type SheetContainerProps } from './types'
import { useSheetContext } from './context'
import { useEventCallbacks } from './hooks'
import { MAX_HEIGHT } from './constants'
import { mergeRefs } from './utils'
import { styles } from './styles'

export const SheetContainer = ({
  children,
  style = {},
  className = '',
  ref,
  ...rest
}: SheetContainerProps & { ref?: React.Ref<HTMLDivElement> }) => {
  const {
    y,
    isOpen,
    callbacks,
    snapPoints,
    initialSnap = 0,
    sheetRef,
    windowHeight,
    detent,
    animationOptions,
    reduceMotion,
  } = useSheetContext()

  const { handleAnimationComplete } = useEventCallbacks(isOpen, callbacks)
  const initialY = snapPoints ? snapPoints[0] - snapPoints[initialSnap] : 0
  const maxSnapHeight = snapPoints ? snapPoints[0] : null

  const height = maxSnapHeight !== null ? `min(${maxSnapHeight}px, ${MAX_HEIGHT})` : MAX_HEIGHT

  return (
    <motion.div
      {...rest}
      ref={mergeRefs([sheetRef, ref ?? null])}
      className={`react-modal-sheet-container ${className}`}
      style={{
        ...styles.container,
        ...style,
        ...(detent === 'full-height' && { height }),
        ...(detent === 'content-height' && { maxHeight: height }),
        y,
      }}
      initial={reduceMotion ? false : { y: windowHeight }}
      animate={{ y: initialY, transition: animationOptions }}
      exit={{ y: windowHeight, transition: animationOptions }}
      onAnimationComplete={handleAnimationComplete}
    >
      {children}
    </motion.div>
  )
}

SheetContainer.displayName = 'SheetContainer'
