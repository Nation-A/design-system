import React from 'react'
import { Text as ChakraText, TextProps as ChakraTextProps } from '@chakra-ui/react'

interface TextProps extends Omit<ChakraTextProps, 'textStyle' | 'children'> {
  variant?: string
  as?: React.ElementType
  children?: React.ReactNode
  style?: React.CSSProperties
}

export default function Text({ variant = 'body.md', as, children, style, ...props }: TextProps) {
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

  return (
    <ChakraText as={as || getElementType()} textStyle={variant} style={style} {...props}>
      {children}
    </ChakraText>
  )
}
