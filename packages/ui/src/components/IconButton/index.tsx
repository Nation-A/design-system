import { forwardRef } from 'react'
import { Center, HTMLStyledProps, styled } from '@styled-system/jsx'
import Spinner from '../Spinner'
import { iconButtonRecipe, IconButtonVariantProps } from './icon-button.recipe'
import { ark } from '@ark-ui/react'
import { withPolymorphicComponent } from '@/utils/with-polymorphic-component'

export type IconButtonProps = HTMLStyledProps<'button'> &
  IconButtonVariantProps & {
    loading?: boolean
  }

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ loading, disabled, children, color, variant, size, ...rest }, ref) => {
    const StyledButton = styled(ark.button, iconButtonRecipe)

    return (
      <StyledButton
        disabled={disabled}
        ref={ref}
        color={color}
        variant={variant}
        size={size}
        css={{ pointerEvents: loading ? 'none' : 'auto' }}
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
              <Spinner size={size === 'lg' ? 'md' : 'sm'} />
            </Center>
            <styled.span css={{ opacity: 0 }}>{children}</styled.span>
          </>
        ) : (
          children
        )}
      </StyledButton>
    )
  },
)

IconButton.displayName = 'IconButton'

export default withPolymorphicComponent<typeof IconButton, 'button'>(IconButton)
