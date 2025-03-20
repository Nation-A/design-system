import { ark } from '@ark-ui/react/factory'
import { styled } from '@styled-system/jsx'

import type { ComponentProps } from '@styled-system/types'
import { spinnerRecipe } from './spinner.recipe'

export type SpinnerProps = ComponentProps<typeof Spinner>
export const Spinner = styled(ark.div, spinnerRecipe)
