import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Center, styled } from '@styled-system/jsx'
import Spinner from '../Spinner'

import { buttonRecipe, ButtonVariantProps } from './button.recipe'
import { ark } from '@ark-ui/react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    loading?: boolean
    loadingText?: React.ReactNode
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, disabled, loadingText, children, color, variant, size, radius, ...rest }, ref) => {
    const StyledButton = styled(ark.button, buttonRecipe)

    return (
      <StyledButton
        disabled={disabled}
        ref={ref}
        color={color}
        variant={variant}
        size={size}
        radius={radius}
        pointerEvents={loading ? 'none' : 'auto'}
        {...rest}
      >
        {loading
          ? loadingText || (
              <>
                <Center inline position="absolute" transform="translate(-50%, -50%)" top="50%" insetStart="50%">
                  <Spinner size={size === 'xs' || size === 'sm' ? 'sm' : 'md'} />
                </Center>
                <styled.span opacity={0}>{children}</styled.span>
              </>
            )
          : children}
      </StyledButton>
    )
  },
)

Button.displayName = 'Button'

export default Button
