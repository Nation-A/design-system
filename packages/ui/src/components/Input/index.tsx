import { forwardRef, memo, ReactNode, useCallback, useRef } from 'react'
import { HTMLStyledProps, styled } from '@styled-system/jsx'
import { Assign } from '@ark-ui/react'
import { InputVariantProps, inputRecipe } from './input.recipe'
import { cx } from '@styled-system/css'
import { Stack, VStack } from '../Layout'

export type InputProps = Assign<HTMLStyledProps<'input'>, InputVariantProps> & {
  required?: boolean
  label?: string
  labelPosition?: 'outside' | 'inside'
  description?: string
  textLimit?: number
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
      css,
      ...rest
    },
    ref,
  ) => {
    const recipe = inputRecipe({
      variant,
      color,
      radius,
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
        <Label visible={!!(label && labelPosition === 'outside')}>{label}</Label>
        <Stack gap={1} className={cx(recipe.inputContainer, className)} onClick={handleContainerClick} css={css}>
          <Label visible={!!(label && labelPosition === 'inside')}>{label}</Label>
          <styled.input ref={inputRef} disabled={disabled} onChange={handleInputChange} {...rest} />
        </Stack>
        {description && <Description>{description}</Description>}
      </VStack>
    )
  },
)
Input.displayName = 'Input'

export default memo(Input)
