import { pandaTokens } from '@nation-a/tokens'
import { createSystem, defineConfig } from '@chakra-ui/react'

const { primitive, semantic, textStyles } = pandaTokens

export const theme = {
  semantic,
  primitive,
  textStyles,
}

export const config = defineConfig({
  theme: {
    tokens: primitive,
    semanticTokens: semantic,
    textStyles: textStyles,
  },
})

export const system = createSystem(config)
