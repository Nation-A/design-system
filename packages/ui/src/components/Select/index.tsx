'use client'

import { Select as ArkSelect } from '@ark-ui/react/select'
import { selectRecipe } from './select.recipe'
import Text from '../Text'
import { HTMLStyledProps } from '@styled-system/jsx'
import { Assign } from '@ark-ui/react'
import { createStyleContext } from '@/utils/create-style-context'
import { ComponentProps } from 'react'

const { withRootProvider, withContext } = createStyleContext(selectRecipe)
export type SelectProps = ComponentProps<typeof Root>

type RootProps<T> = Assign<HTMLStyledProps<'div'>, { collection: any } & ArkSelect.RootProps<T>>
const Root = withRootProvider<RootProps<any>>(withContext<HTMLDivElement, RootProps<any>>(ArkSelect.Root, 'root'))

type LabelProps = Assign<HTMLStyledProps<'label'>, ArkSelect.LabelProps>
const Label = withContext<HTMLLabelElement, LabelProps>(ArkSelect.Label, 'label')

type TriggerProps = Assign<HTMLStyledProps<'button'>, ArkSelect.TriggerProps & { description?: string }>
const Trigger = withContext<HTMLButtonElement, TriggerProps>(({ description, ...props }: TriggerProps) => {
  return (
    <>
      <ArkSelect.Trigger {...props} />
      {description && <Description text={description} />}
    </>
  )
}, 'trigger')

type ValueTextProps = Assign<HTMLStyledProps<'span'>, ArkSelect.ValueTextProps>
const ValueText = withContext<HTMLSpanElement, ValueTextProps>(ArkSelect.ValueText, 'valueText')

type DescriptionProps = Assign<HTMLStyledProps<'div'>, { text: string; className?: string }>
const Description = withContext<HTMLDivElement, DescriptionProps>(({ className, text, ...props }: DescriptionProps) => {
  return (
    <Text className={className} {...props}>
      {text}
    </Text>
  )
}, 'description')

type ContentProps = Assign<HTMLStyledProps<'div'>, ArkSelect.ContentProps & { radius?: 'md' | 'lg' }>
const Content = withContext<HTMLDivElement, ContentProps>(ArkSelect.Content, 'content')

type ItemProps = Assign<HTMLStyledProps<'div'>, ArkSelect.ItemProps>
const Item = withContext<HTMLDivElement, ItemProps>(ArkSelect.Item, 'item')

const Select = {
  Root,
  Label,
  Trigger,
  Content,
  Item,
  ValueText,
  Description,
}

export default Select
