'use client'
import { Checkbox } from '@ark-ui/react/checkbox'
import { checkboxRecipe } from './checkbox.recipe'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '@styled-system/jsx'

const { withProvider, withContext } = createStyleContext(checkboxRecipe)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider(Checkbox.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Checkbox.Root, 'root')

export const Control = withContext(Checkbox.Control, 'control')

export const Group = withContext(Checkbox.Group, 'group')

export const Indicator = withContext(Checkbox.Indicator, 'indicator')

export const Label = withContext(Checkbox.Label, 'label')

export { CheckboxContext as Context, CheckboxHiddenInput as HiddenInput } from '@ark-ui/react/checkbox'
