import { ComponentProps, forwardRef } from 'react'
import { Text as StyledText } from './text.styled'
import { styled } from '@styled-system/jsx'
import { UtilityValues } from '@styled-system/types/prop-type'

type TextStyles = UtilityValues['textStyle']
type TextComponentProps = ComponentProps<typeof StyledText>

export interface TextProps extends TextComponentProps {}

export const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { textStyle = 'body.md', children, ...rest } = props

  const textType = (textStyle as TextStyles)?.split('.')[0] || 'body'

  if (textType === 'display') {
    return (
      <styled.h1 ref={ref} textStyle={textStyle} {...rest}>
        {children}
      </styled.h1>
    )
  } else if (textType === 'headline') {
    return (
      <styled.h2 ref={ref} textStyle={textStyle} {...rest}>
        {children}
      </styled.h2>
    )
  } else if (textType === 'title') {
    return (
      <styled.h3 ref={ref} textStyle={textStyle} {...rest}>
        {children}
      </styled.h3>
    )
  } else if (textType === 'label') {
    return (
      <styled.span ref={ref} textStyle={textStyle} {...rest}>
        {children}
      </styled.span>
    )
  }
  return (
    <styled.p ref={ref} textStyle={textStyle} {...rest}>
      {children}
    </styled.p>
  )
})

Text.displayName = 'Text'
