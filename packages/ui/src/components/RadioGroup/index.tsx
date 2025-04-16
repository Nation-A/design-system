'use client'
import type { Assign } from '@ark-ui/react'
import { RadioGroup as ArkRadioGroup, RadioGroupContext, RadioGroupItemHiddenInput } from '@ark-ui/react/radio-group'
import { type RadioGroupRecipeVariantProps, radioGroupRecipe } from './radio.recipe'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '@/utils/create-style-context'

const { withProvider, withContext } = createStyleContext(radioGroupRecipe)

export type RootProviderProps = ComponentProps<typeof RootProvider>
const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, ArkRadioGroup.RootProviderBaseProps>, RadioGroupRecipeVariantProps>
>(ArkRadioGroup.RootProvider, 'root')

export type RadioGroupProps = ComponentProps<typeof Root>
const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, ArkRadioGroup.RootBaseProps>, RadioGroupRecipeVariantProps>
>(ArkRadioGroup.Root, 'root')

const ItemControl = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, ArkRadioGroup.ItemControlBaseProps>>(
  ArkRadioGroup.ItemControl,
  'itemControl',
)

const Item = withContext<HTMLLabelElement, Assign<HTMLStyledProps<'label'>, ArkRadioGroup.ItemBaseProps>>(
  ArkRadioGroup.Item,
  'item',
)

const ItemText = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'span'>, ArkRadioGroup.ItemTextBaseProps>>(
  ArkRadioGroup.ItemText,
  'itemText',
)

const Label = withContext<HTMLLabelElement, Assign<HTMLStyledProps<'label'>, ArkRadioGroup.LabelBaseProps>>(
  ArkRadioGroup.Label,
  'label',
)

const RadioGroupItem = withContext<HTMLLabelElement, Assign<HTMLStyledProps<'label'>, ArkRadioGroup.ItemBaseProps>>(
  ({ children, ...props }) => (
    <Item {...props}>
      <ItemControl />
      {children && <ItemText>{children}</ItemText>}
      <RadioGroupItemHiddenInput />
    </Item>
  ),
  'item',
)

const RadioGroup = {
  Root,
  Item: RadioGroupItem,
  Label,
  Context: RadioGroupContext,
}

export default RadioGroup
