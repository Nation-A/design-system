import { Center, HTMLStyledProps, styled } from '@styled-system/jsx'
import Spinner from '../Spinner'
import { iconButtonRecipe, IconButtonVariantProps } from './icon-button.recipe'
import { ark } from '@ark-ui/react'

export type IconButtonProps = HTMLStyledProps<'button'> &
  IconButtonVariantProps & {
    loading?: boolean
    /** 아이콘 컴포넌트의 size prop을 우선시할지 여부 (기본값: false) */
    preserveIconSize?: boolean
  }

const IconButton = ({
  loading,
  disabled,
  children,
  color,
  variant,
  size,
  onClick,
  preserveIconSize,
  ref,
  ...rest
}: IconButtonProps) => {
  const StyledButton = styled(ark.button, iconButtonRecipe)

  const content: React.ReactNode = loading ? (
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
  )

  return (
    <StyledButton
      disabled={disabled}
      ref={ref}
      color={color}
      variant={variant}
      size={size}
      data-preserve-icon-size={preserveIconSize}
      css={{ pointerEvents: loading ? 'none' : 'auto' }}
      onClick={(e) => {
        if (!loading && !disabled) onClick?.(e)
      }}
      {...rest}
    >
      {content}
    </StyledButton>
  )
}

IconButton.displayName = 'IconButton'

export default IconButton
