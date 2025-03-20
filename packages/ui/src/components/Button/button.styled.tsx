import { ark } from '@ark-ui/react/factory'
import { styled } from '@styled-system/jsx'

import type { ComponentProps } from '@styled-system/types'
import { buttonRecipe } from './button.recipe'

export type ButtonProps = ComponentProps<typeof Button>
export const Button = styled(ark.button, buttonRecipe)
