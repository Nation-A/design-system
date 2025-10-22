import * as StyledSwitch from './switch.styled'

export type SwitchProps = StyledSwitch.SwitchProps

const Switch = (props: SwitchProps) => {
  const { ref, ...rest } = props
  return (
    <StyledSwitch.Root ref={ref} {...rest}>
      <StyledSwitch.Control>
        <StyledSwitch.Thumb />
      </StyledSwitch.Control>
      <StyledSwitch.HiddenInput />
    </StyledSwitch.Root>
  )
}

Switch.displayName = 'Switch'

export default Switch
