import { forwardRef, useState, useEffect, TextareaHTMLAttributes, ReactNode } from 'react'
import { styled, VStack } from '@styled-system/jsx'
import { ark } from '@ark-ui/react'
import { inputRecipe, InputStateType, InputVariantProps, labelRecipe } from '../Input/input.recipe'
import { css } from '@styled-system/css/css'
import { Description, RequiredStar } from '../Input'
import { cx } from '@styled-system/css'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  InputVariantProps & {
    value: string
    required?: boolean
    disabled?: boolean
    label?: string
    labelPosition?: 'outside' | 'inside'
    description?: string
    textLimit?: number
    showTextCount?: boolean
  }

// StyledTextAreaWrapper의 스타일은 Input의 스타일(inputRecipe)을 따름
const StyledTextAreaWrapper = styled(ark.div, inputRecipe)
const StyledLabel = styled(ark.label, labelRecipe)

const TextLengthIndicator = ({ count, limit, disabled }: { count: number; limit?: number; disabled?: boolean }) => {
  return (
    <ark.span
      className={css({
        display: 'inline-block',
        width: '100%',
        textAlign: 'end',
        paddingRight: 1,
        marginTop: -0.5,
        textStyle: 'label.sm',
        color: disabled ? 'content.neutral.disabled' : 'content.neutral.subtlest',
      })}
    >{`${count}${limit ? ` / ${limit}` : ''}`}</ark.span>
  )
}

const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      value,
      required = false,
      disabled = false,
      label,
      description,
      labelPosition = 'outside',
      textLimit,
      showTextCount = false,
      isTextArea,
      color,
      radius,
      variant,
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

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (disabled) return
      const value = e.target.value

      // 글자 수 제한
      if (textLimit && value.length > textLimit) return

      // 입력값이 있을 때는 selected 상태 유지
      setState(value ? 'selected' : 'default')

      // 외부 onChange 핸들러가 있다면 실행
      onChange?.(e)

      // 스크롤을 맨 아래로 이동
      e.target.scrollTop = e.target.scrollHeight
    }

    const Label = ({ visible, children }: { visible: boolean; children: ReactNode }) => {
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
        <StyledTextAreaWrapper
          isTextArea={true}
          state={state}
          color={color}
          radius={radius}
          variant={variant}
          className={cx(css({ position: 'relative', display: 'flex', flexDirection: 'column', gap: 1 }), className)}
        >
          <Label visible={!!(label && labelPosition === 'inside')}>{label}</Label>
          <textarea
            value={value}
            disabled={disabled}
            onChange={handleTextareaChange}
            onFocus={() => !disabled && setState('selected')}
            onBlur={() => !disabled && setState('default')}
            ref={ref}
            {...rest}
          />
          {showTextCount && <TextLengthIndicator count={value.length} limit={textLimit} disabled={disabled} />}
        </StyledTextAreaWrapper>
        {description && <Description>{description}</Description>}
      </VStack>
    )
  },
)
Textarea.displayName = 'Textarea'

export default Textarea
