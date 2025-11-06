import { memo } from 'react'
import { Center, HTMLStyledProps, styled } from '@styled-system/jsx'
import Spinner from '../Spinner'
import { fabRecipe, FabVariantProps } from './fab.recipe'
import { ark } from '@ark-ui/react'
import { withPolymorphicComponent } from '@/utils/with-polymorphic-component'

export type FabProps = HTMLStyledProps<'button'> &
  FabVariantProps & {
    loading?: boolean
  }

const Fab = ({ loading, disabled, children, color, onClick, ref, ...rest }: FabProps) => {
  const StyledButton = styled(ark.button, fabRecipe)

  return (
    <StyledButton
      disabled={disabled}
      ref={ref}
      color={color}
      css={{ pointerEvents: loading ? 'none' : 'auto' }}
      onClick={(e) => {
        if (!loading && !disabled) onClick?.(e)
      }}
      {...rest}
    >
      {loading ? (
        <>
          <Center
            inline
            css={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              top: '50%',
              insetStart: '50%',
            }}
          >
            <Spinner size="md" />
          </Center>
          <styled.span css={{ opacity: 0 }}>{children}</styled.span>
        </>
      ) : (
        children
      )}
    </StyledButton>
  )
}

Fab.displayName = 'Fab'

export default memo(withPolymorphicComponent<typeof Fab, 'button'>(Fab))
