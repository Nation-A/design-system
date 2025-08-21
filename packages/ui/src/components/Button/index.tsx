import { Box, Center } from '../Layout'
import Spinner from '../Spinner'
import { HTMLStyledProps, styled } from '@styled-system/jsx'
import { buttonRecipe, ButtonVariantProps } from './button.recipe'
import { ark } from '@ark-ui/react'
import { withPolymorphicComponent } from '@/utils/with-polymorphic-component'
import { memo } from 'react'
export type ButtonProps = HTMLStyledProps<'button'> &
  ButtonVariantProps & {
    loading?: boolean
    loadingText?: React.ReactNode
  }

const Button = ({
  loading,
  disabled,
  loadingText,
  children,
  color,
  variant,
  size,
  radius,
  onClick,
  ...rest
}: ButtonProps) => {
  const StyledButton = styled(ark.button, buttonRecipe)

  return (
    <StyledButton
      disabled={disabled}
      color={color}
      variant={variant}
      size={size}
      radius={radius}
      css={{ pointerEvents: loading ? 'none' : 'auto' }}
      onClick={disabled || loading ? undefined : onClick}
      {...rest}
    >
      {loading
        ? loadingText || (
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
                <Spinner size={size === 'xs' || size === 'sm' ? 'sm' : 'md'} />
              </Center>
              <Box as="span" css={{ opacity: 0 }}>
                {children}
              </Box>
            </>
          )
        : children}
    </StyledButton>
  )
}

export default memo(withPolymorphicComponent<typeof Button, 'button'>(Button))
