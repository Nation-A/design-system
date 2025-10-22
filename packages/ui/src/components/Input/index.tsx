import { memo, ReactNode, useCallback, useRef } from 'react'
import { Box, HStack, HTMLStyledProps, styled } from '@styled-system/jsx'
import { Assign } from '@ark-ui/react'
import { InputVariantProps, inputRecipe } from './input.recipe'
import { cx } from '@styled-system/css'
import { Stack, VStack } from '../Layout'
import { SystemStyleObject } from '@styled-system/types'

export type InputProps = Assign<HTMLStyledProps<'input'>, InputVariantProps> & {
  required?: boolean
  label?: string
  labelPosition?: 'outside' | 'inside'
  description?: string
  textLimit?: number
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  removeBorder?: boolean
  fontSize?: number
  containerCss?: SystemStyleObject
}

const Input = ({
  required,
  disabled,
  label,
  description,
  labelPosition = 'outside',
  textLimit,
  variant,
  color,
  radius,
  onChange,
  className,
  containerCss,
  startAdornment,
  endAdornment,
  removeBorder,
  error,
  fontSize,
  ref,
  ...rest
}: InputProps) => {
  const recipe = inputRecipe({
    variant,
    color,
    radius,
    removeBorder,
    error,
  })

  const innerRef = useRef<HTMLInputElement>(null)

  const inputRef = (ref || innerRef) as React.RefObject<HTMLInputElement>

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return
      const { value } = e.target
      e.target.value = value.slice(0, textLimit)
      onChange?.(e)
    },
    [disabled, onChange, textLimit],
  )

  const handleContainerClick = useCallback(() => {
    if (disabled) return
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [disabled, inputRef])

  const RequiredStar = useCallback(
    () => (
      <span className={recipe.requiredStar} aria-hidden="true">
        *
      </span>
    ),
    [recipe.requiredStar],
  )

  const Description = useCallback(
    ({ children }: { children: ReactNode }) => <span className={recipe.description}>{children}</span>,
    [recipe.description],
  )

  const Label = useCallback(
    ({ visible, children }: { visible: boolean; children: ReactNode }) => {
      return visible ? (
        <label className={recipe.label}>
          {children}
          {required && <RequiredStar />}
        </label>
      ) : null
    },
    [recipe.label, required, RequiredStar],
  )

  return (
    <VStack gap={1} className={'group'} data-disabled={disabled || undefined} css={{ width: '100%' }}>
      <Label visible={!!(label && labelPosition === 'outside')}>{label}</Label>{' '}
      <HStack className={cx(recipe.inputContainer, className)} onClick={handleContainerClick} css={containerCss}>
        {startAdornment && <Box className={recipe.adornment}>{startAdornment}</Box>}
        <Stack gap={1} css={{ width: '100%' }}>
          <Label visible={!!(label && labelPosition === 'inside')}>{label}</Label>
          <styled.input
            ref={inputRef}
            disabled={disabled}
            onChange={handleInputChange}
            style={{ ...rest?.style, fontSize: `${fontSize}px` }}
            {...rest}
          />
        </Stack>
        {endAdornment && <Box className={recipe.adornment}>{endAdornment}</Box>}
      </HStack>
      {description && <Description>{description}</Description>}
    </VStack>
  )
}
Input.displayName = 'Input'

export default memo(Input)
