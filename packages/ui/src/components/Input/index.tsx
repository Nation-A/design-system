import { forwardRef, useState, useEffect, ReactNode } from 'react'
import { HTMLStyledProps, styled, VStack } from '@styled-system/jsx'
import { ark } from '@ark-ui/react'
import { inputRecipe, InputStateType, InputVariantProps, labelRecipe, inputSlotRecipe } from './input.recipe'
import { css, cx } from '@styled-system/css'

export type InputProps = HTMLStyledProps<'input'> &
  InputVariantProps & {
    value?: string
    required?: boolean
    disabled?: boolean
    label?: string
    labelPosition?: 'outside' | 'inside'
    description?: string
    textLimit?: number
    className?: string
  }

const StyledInputWrapper = styled(ark.div, inputRecipe)
const StyledLabel = styled(ark.label, labelRecipe)
export const RequiredStar = () => (
  <ark.span className={inputSlotRecipe().requiredStar} aria-hidden="true">
    *
  </ark.span>
)
export const Description = ({ children }: { children: ReactNode }) => (
  <ark.span className={inputSlotRecipe().description}>{children}</ark.span>
)

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
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
      ...rest
    },
    ref,
  ) => {
    const [state, setState] = useState<InputStateType>(disabled ? 'disabled' : 'default')

    useEffect(() => {
      setState(disabled ? 'disabled' : 'default')
    }, [disabled])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return

      const value = e.target.value

      // 글자 수 제한
      if (textLimit && value.length > textLimit) return

      // 입력값이 있을 때는 selected 상태 유지
      setState(value ? 'selected' : 'default')
      // 외부 onChange 핸들러가 있다면 실행
      onChange?.(e)
    }

    const Label = ({ visible, children }: { visible: boolean; children: ReactNode }) => {
      console.log('color', color)
      return visible ? (
        <StyledLabel state={state} color={color} radius={radius}>
          {children}
          {required && <RequiredStar />}
        </StyledLabel>
      ) : null
    }

    return (
      <VStack gap={1}>
        <Label visible={!!(label && labelPosition === 'outside')}>{label}</Label>
        <StyledInputWrapper
          state={state}
          variant={variant}
          color={color}
          radius={radius}
          className={cx(css({ display: 'flex', flexDirection: 'column', gap: 1 }), className)}
        >
          <Label visible={!!(label && labelPosition === 'inside')}>{label}</Label>
          <input
            value={value}
            disabled={disabled}
            onFocus={() => !disabled && setState('selected')}
            onBlur={() => !disabled && setState('default')}
            onChange={handleInputChange}
            ref={ref}
            {...rest}
          />
        </StyledInputWrapper>
        {description && <Description>{description}</Description>}
      </VStack>
    )
  },
)
Input.displayName = 'Input'

export default Input
