import React from 'react'
import { UtilityValues } from '../../../styled-system/types/prop-type'
import { css } from '../../../styled-system/css'

type Variant = UtilityValues['textStyle']

interface TextProps {
  variant?: Variant
  as?: React.ElementType
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function Text({ variant = 'body.md', as, children, style, className, ...props }: TextProps) {
  const getElementType = (): React.ElementType => {
    const category = variant?.split('.')[0]

    switch (category) {
      case 'display':
      case 'headline':
        return 'h1'
      case 'title':
        return 'h3'
      case 'body':
        return 'p'
      case 'label':
        return 'span'
      default:
        return 'p'
    }
  }

  const elementType = as || getElementType()
  const textStyle = css({ textStyle: variant })
  const combinedClassName = className ? `${textStyle} ${className}` : textStyle

  return React.createElement(
    elementType,
    {
      style,
      className: combinedClassName,
      ...props,
    },
    children,
  )
}
