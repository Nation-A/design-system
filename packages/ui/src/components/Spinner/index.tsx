import { forwardRef } from 'react'
import { styled } from '@styled-system/jsx'
import { ark } from '@ark-ui/react'
import { spinnerRecipe, SpinnerVariantProps } from './spinner.recipe'
import { HTMLStyledProps } from '@styled-system/jsx'

export type SpinnerProps = HTMLStyledProps<'div'> & SpinnerVariantProps

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const StyledSpinner = styled(ark.div, spinnerRecipe)

  return (
    <StyledSpinner
      ref={ref}
      {...props}
      css={{
        borderColor: 'inherit',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        ...props.css,
      }}
    />
  )
})

Spinner.displayName = 'Spinner'

export default Spinner
