import { forwardRef, HTMLAttributes } from 'react'
import { styled } from '@styled-system/jsx'
import { ark } from '@ark-ui/react'
import { spinnerRecipe, SpinnerVariantProps } from './spinner.recipe'
import { ColorToken } from '@styled-system/tokens'

export type SpinnerProps = HTMLAttributes<HTMLDivElement> &
  SpinnerVariantProps & {
    /**
     * For accessibility, it is important to add a fallback loading text.
     * This text will be visible to screen readers.
     * @default "Loading..."
     */
    label?: string
    color?: ColorToken
  }

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const { label = 'Loading...', color, ...rest } = props

  const StyledSpinner = styled(ark.div, spinnerRecipe)

  return (
    <StyledSpinner
      ref={ref}
      {...rest}
      borderColor={'inherit'}
      borderBottomColor="transparent"
      borderLeftColor="transparent"
    >
      {label && <styled.span srOnly>{label}</styled.span>}
    </StyledSpinner>
  )
})

Spinner.displayName = 'Spinner'

export default Spinner
