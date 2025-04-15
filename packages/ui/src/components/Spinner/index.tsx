'use client'
import { forwardRef, useEffect, useState } from 'react'

import { spinnerRecipe, SpinnerVariantProps } from './spinner.recipe'
import { HTMLStyledProps } from '@styled-system/jsx'
import SpinnerLottie from '@/assets/lotties/spinner.json'
import Lottie from 'react-lottie'
import { Box } from '../Layout'
import { css, cx } from '@styled-system/css'
import { UtilityValues } from '@styled-system/types/prop-type'

export type SpinnerProps = HTMLStyledProps<'div'> &
  SpinnerVariantProps & {
    color?: UtilityValues['color']
  }

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({ className, size, color, ...props }, ref) => {
  const [ready, setReady] = useState(false)

  // Hydration 에러 방지
  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <Box ref={ref} {...props} className={cx(spinnerRecipe({ size }), css({ color }), className)}>
      {ready && (
        <Lottie
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
