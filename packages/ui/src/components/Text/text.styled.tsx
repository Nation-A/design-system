import { styled } from '@styled-system/jsx'
import type { ComponentProps } from '@styled-system/types'
import { textRecipe } from './text.recipe'

export type TextProps = ComponentProps<typeof Text>
export const Text = styled('p', textRecipe)
