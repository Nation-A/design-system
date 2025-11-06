import { HTMLStyledProps, styled } from '@styled-system/jsx'
import { textRecipe, TextVariantProps } from './text.recipe'
import { useLanguage } from '../LanguageProvider'

export type TextProps = HTMLStyledProps<'p'> & TextVariantProps

const Text = (props: TextProps) => {
  const { variant = 'text.body.16.regular', font, language, children, ref, ...rest } = props
  const { language: languageContext } = useLanguage()

  const componentMap = {
    display: styled('h1', textRecipe),
    headline: styled('h2', textRecipe),
    title: styled('h3', textRecipe),
    body: styled('p', textRecipe),
    text: styled('p', textRecipe),
    label: styled('span', textRecipe),
  }

  const variantParts = variant?.split('.') || ['body']
  const textType = variantParts.find((part) => part in componentMap) || 'body'
  const TextComponent = componentMap[textType as keyof typeof componentMap]

  return (
    <TextComponent ref={ref} variant={variant} font={font} language={language || languageContext} {...rest}>
      {children}
    </TextComponent>
  )
}

Text.displayName = 'Text'

export default Text
