import { forwardRef, useState, useEffect } from 'react'
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

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({ className, size, color, ...props }, ref) => {
  const [LottieComponent, setLottieComponent] = useState<null | React.ComponentType<any>>(null)

  useEffect(() => {
    import('react-lottie').then((mod) => {
      setLottieComponent(() => mod.default)
    })
  }, [])

  return (
    <Box ref={ref} id={'spinner'} {...props} className={cx(spinnerRecipe({ size }), css({ color }), className)}>
      {LottieComponent && (
        <LottieComponent
          options={{
            loop: true,
            autoplay: true,
            animationData: SpinnerLottie,
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
          isClickToPauseDisabled
        />
      )}
    </Box>
  )
})

Spinner.displayName = 'Spinner'
export default Spinner
