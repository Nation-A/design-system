import { forwardRef } from 'react'
import * as StyledSwitch from './switch.styled'

export type SwitchProps = StyledSwitch.RootProps

const Switch = forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  return (
    <StyledSwitch.Root ref={ref} {...props}>
      <StyledSwitch.Control>
        <StyledSwitch.Thumb />
      </StyledSwitch.Control>
      <StyledSwitch.HiddenInput />
    </StyledSwitch.Root>
  )
})

Switch.displayName = 'Switch'

export default Switch
