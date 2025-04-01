import { forwardRef } from 'react'
import { styled } from '@styled-system/jsx'
import { ark } from '@ark-ui/react'
import { spinnerRecipe, SpinnerVariantProps } from './spinner.recipe'
import { ColorToken } from '@styled-system/tokens'
import { HTMLStyledProps } from '@styled-system/jsx'

export type SpinnerProps = HTMLStyledProps<'div'> &
  SpinnerVariantProps & {
    color?: ColorToken
  }

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const { color, ...rest } = props

  const StyledSpinner = styled(ark.div, spinnerRecipe)

  return (
    <StyledSpinner
      ref={ref}
      {...rest}
      css={{
        borderColor: 'inherit',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
      }}
    />
  )
})

Spinner.displayName = 'Spinner'

export default Spinner
