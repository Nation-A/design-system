'use client'
import { RadioGroup as ArkRadioGroup, RadioGroupContext, RadioGroupItemHiddenInput } from '@ark-ui/react/radio-group'
import { radioGroupRecipe } from './radio.recipe'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '@styled-system/jsx'
import type { ReactNode } from 'react'

const { withProvider, withContext } = createStyleContext(radioGroupRecipe)

export type RadioGroupProps = ComponentProps<typeof Root>
const Root = withProvider(ArkRadioGroup.Root, 'root')

const ItemControl = withContext(ArkRadioGroup.ItemControl, 'itemControl')

const Item = withContext(ArkRadioGroup.Item, 'item')

const ItemText = withContext(ArkRadioGroup.ItemText, 'itemText')

const Label = withContext(ArkRadioGroup.Label, 'label')

const RadioGroupItem = withContext(
  ({ children, ...props }: ComponentProps<typeof Item> & { children?: ReactNode }) => (
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
