'use client'
import { Switch } from '@ark-ui/react/switch'
import { switchRecipe } from './switch.recipe'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '@styled-system/jsx'

const { withProvider, withContext } = createStyleContext(switchRecipe)

export type SwitchProps = ComponentProps<typeof Root>
export const Root = withProvider(Switch.Root, 'root')

export type SwitchControlProps = ComponentProps<typeof Control>
export const Control = withContext(Switch.Control, 'control')

export type SwitchLabelProps = ComponentProps<typeof Label>
export const Label = withContext(Switch.Label, 'label')

export type SwitchThumbProps = ComponentProps<typeof Thumb>
export const Thumb = withContext(Switch.Thumb, 'thumb')

export { SwitchContext as Context, SwitchHiddenInput as HiddenInput } from '@ark-ui/react/switch'
