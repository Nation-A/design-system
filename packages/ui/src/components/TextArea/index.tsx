import { memo, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { HTMLStyledProps } from '@styled-system/jsx'
import { Assign } from '@ark-ui/react'
import { cx } from '@styled-system/css'

import { Stack, VStack } from '../Layout'
import { InputVariantProps, inputRecipe } from '../Input/input.recipe'
import { SystemStyleObject } from '@styled-system/types'

export type TextAreaProps = Assign<HTMLStyledProps<'textarea'>, InputVariantProps> & {
  required?: boolean
  disabled?: boolean
  label?: string
  labelPosition?: 'outside' | 'inside'
  description?: string
  textLimit?: number
  showTextCount?: boolean
  containerCss?: SystemStyleObject
}

const Textarea = ({
  value,
  required = false,
  disabled = false,
  label,
  description,
  labelPosition = 'outside',
  textLimit,
  showTextCount = false,
  color,
  radius,
  variant,
  onChange,
  className,
  containerCss,
  removeBorder,
  error,
  ref,
  ...rest
}: TextAreaProps) => {
  const [count, setCount] = useState(value?.toString().length || 0)
  const [text, setText] = useState(value)

  // TextArea의 recipe => Input의 recipe를 상속. 같은 디자인 사용
  const recipe = inputRecipe({
    variant,
    color,
    radius,
    isTextArea: true,
    removeBorder,
    error,
  })

  const innerRef = useRef<HTMLTextAreaElement>(null)

  const inputRef = (ref || innerRef) as React.RefObject<HTMLTextAreaElement>

  const handleTextareaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (disabled) return
      const { value } = e.target
      e.target.value = value.slice(0, textLimit)
      setText(e.target.value)
      onChange?.(e)
    },
    [disabled, onChange, textLimit, showTextCount],
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

  const TextLengthIndicator = ({ count, limit }: { count: number; limit?: number }) => {
    return <span className={recipe.textLengthIndicator}>{`${count}${limit ? ` / ${limit}` : ''}`}</span>
  }

  useEffect(() => {
    const textUpdated = value?.toString().slice(0, textLimit)
    setText(textUpdated)
    setCount(textUpdated?.length || 0)
  }, [value])

  return (
    <VStack gap={1} className={'group'} data-disabled={disabled || undefined} css={{ width: '100%' }}>
      <Label visible={!!(label && labelPosition === 'outside')}>{label}</Label>
      <Stack gap={1} className={cx(recipe.inputContainer, className)} onClick={handleContainerClick} css={containerCss}>
        <Label visible={!!(label && labelPosition === 'inside')}>{label}</Label>
        <textarea ref={inputRef} value={text} disabled={disabled} onChange={handleTextareaChange} {...rest} />
        {showTextCount && <TextLengthIndicator count={count} limit={textLimit} />}
      </Stack>
      {description && <Description>{description}</Description>}
    </VStack>
  )
}
Textarea.displayName = 'Textarea'

export default memo(Textarea)
