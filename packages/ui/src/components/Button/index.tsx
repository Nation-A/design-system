import { Box, Center } from '../Layout'
import Spinner from '../Spinner'
import { HTMLStyledProps, styled } from '@styled-system/jsx'
import { buttonRecipe, ButtonVariantProps } from './button.recipe'
import { ark } from '@ark-ui/react'
export type ButtonProps = HTMLStyledProps<'button'> &
  ButtonVariantProps & {
    /**
     * 버튼이 로딩 중일 때 표시할지 여부 (기본값: false)
     */
    loading?: boolean
    /**
     * 버튼이 로딩 중일 때 표시할 텍스트
     */
    loadingText?: React.ReactNode
    /** 아이콘 컴포넌트의 size prop을 우선시할지 여부 (기본값: false) */
    preserveIconSize?: boolean
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
  preserveIconSize,
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
      data-preserve-icon-size={preserveIconSize}
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

export default Button
