import Lottie from 'lottie-react'
import { spinnerRecipe, SpinnerVariantProps } from './spinner.recipe'
import { HTMLStyledProps } from '@styled-system/jsx'
import SpinnerLottie from '@/assets/lotties/spinner.json'
import { Box } from '../Layout'
import { css, cx } from '@styled-system/css'
import { UtilityValues } from '@styled-system/types/prop-type'

export type SpinnerProps = HTMLStyledProps<'div'> &
  SpinnerVariantProps & {
    color?: UtilityValues['color']
  }

const Spinner = ({ className, size, color, ref, ...props }: SpinnerProps) => {
  return (
    <Box ref={ref} id={'spinner'} {...props} className={cx(spinnerRecipe({ size }), css({ color }), className)}>
      <Lottie
        animationData={SpinnerLottie}
        loop
        autoplay
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  )
}

Spinner.displayName = 'Spinner'
export default Spinner
