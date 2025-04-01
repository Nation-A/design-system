import {  forwardRef, InputHTMLAttributes, useState, useEffect } from 'react'
import { styled } from '@styled-system/jsx'
import { ark } from '@ark-ui/react'
import { inputRecipe, InputStateType, InputVariantProps, labelRecipe } from './input.recipe'
import { css } from '@styled-system/css'


export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  InputVariantProps & {
    value: string
    required?: boolean
    disabled?: boolean
    label?: string
    labelPosition?: 'outside' | 'inside',
    description?: string
  }

const StyledInput = styled(ark.input, inputRecipe)
const StyledLabel = styled(ark.label, labelRecipe)

const Input = forwardRef<HTMLInputElement, InputProps>(({ value, required, disabled, label, description, labelPosition = 'outside', ...rest }, ref) => {
  const [state, setState] = useState<InputStateType>(disabled ? 'disabled': 'default');


  useEffect(() => {
    setState(disabled ? 'disabled' : 'default');
  }, [disabled]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      // 입력값이 있을 때는 selected 상태 유지
      setState(e.target.value ? 'selected' : 'default');
    }
  }

  return (
    <ark.div className={css({position: 'relative', display: 'flex', flexDirection:'column', gap: 1})}>
    {label && <StyledLabel state={state} color={rest.color} radius={rest.radius} position={labelPosition}>{label}{required && <ark.span className={css({color: 'content.danger.default', paddingLeft: 1 })}>*</ark.span>}</StyledLabel>}
    <StyledInput 
      value={value} 
      disabled={disabled} 
      state={state}  
      onFocus={()=> !disabled && setState('selected')} 
      onBlur={()=> !disabled && setState('default')}
      onChange={handleInputChange}
      labelPosition={labelPosition}
      ref={ref} 
      {...rest}
    />
    {description && <ark.span className={css({textStyle: 'label.sm', color: 'content.neutral.subtle', paddingLeft: 1})}>{description}</ark.span>}
    </ark.div>
  )
})
Input.displayName = 'Input'

export default Input
