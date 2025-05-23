import { forwardRef } from 'react'
import { HTMLStyledProps, styled } from '@styled-system/jsx'
import { textRecipe, TextVariantProps } from './text.recipe'

export type TextProps = HTMLStyledProps<'p'> & TextVariantProps

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { variant = 'body.md', font, children, ...rest } = props

  const textType = variant?.split('.')[0] || 'body'

  const componentMap = {
    display: styled('h1', textRecipe),
    headline: styled('h2', textRecipe),
    title: styled('h3', textRecipe),
    body: styled('p', textRecipe),
    label: styled('span', textRecipe),
  }
  const TextComponent = componentMap[textType as keyof typeof componentMap]

  return (
    <TextComponent ref={ref} variant={variant} font={font} {...rest}>
      {children}
    </TextComponent>
  )
})

Text.displayName = 'Text'

export default Text
