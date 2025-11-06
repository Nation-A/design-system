import { motion } from 'motion/react'

import { type SheetDraggableProps } from './types'
import { useSheetScrollerContext, useSheetContext } from './context'
import { useDragConstraints } from './hooks'
import { mergeRefs } from './utils'
import { styles } from './styles'

export const SheetContent = ({
  children,
  style,
  disableDrag,
  className = '',
  ref,
  ...rest
}: SheetDraggableProps & { ref?: React.Ref<HTMLDivElement> }) => {
  const sheetContext = useSheetContext()
  const sheetScrollerContext = useSheetScrollerContext()
  const { constraintsRef, onMeasureDragConstraints } = useDragConstraints()

  const dragProps = disableDrag || sheetScrollerContext.disableDrag ? undefined : sheetContext.dragProps

  return (
    <motion.div
      {...rest}
      ref={mergeRefs([ref ?? null, constraintsRef])}
      className={`react-modal-sheet-content ${className}`}
      style={{ ...styles.content, ...style }}
      {...dragProps}
      dragConstraints={constraintsRef}
      onMeasureDragConstraints={onMeasureDragConstraints}
    >
      {children}
    </motion.div>
  )
}

SheetContent.displayName = 'SheetContent'
