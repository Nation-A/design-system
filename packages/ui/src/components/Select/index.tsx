'use client'

import { Select as ArkSelect, CollectionItem, SelectRootComponentProps } from '@ark-ui/react/select'
import { selectRecipe } from './select.recipe'
import Text from '../Text'
import { HTMLStyledProps } from '@styled-system/jsx'
import { Assign } from '@ark-ui/react'
import { createStyleContext } from '@styled-system/jsx'
import { ComponentProps } from 'react'

export { createListCollection } from '@ark-ui/react/select'

const { withProvider, withContext } = createStyleContext(selectRecipe)

export type SelectProps = ComponentProps<typeof Root>
const Root = withProvider(
  (props: SelectRootComponentProps<CollectionItem>) => <ArkSelect.Root<CollectionItem> {...props} />,
  'root',
)

const Label = withContext(ArkSelect.Label, 'label')

const Trigger = withContext(
  ({ description, ...props }: Assign<HTMLStyledProps<'button'>, ArkSelect.TriggerProps & { description?: string }>) => {
    return (
      <>
        <ArkSelect.Trigger {...props} />
        {description && <Description text={description} />}
      </>
    )
  },
  'trigger',
)

const Control = withContext(ArkSelect.Control, 'control')

const ValueText = withContext(ArkSelect.ValueText, 'valueText')

const Description = withContext(
  ({ className, text, ...props }: Assign<HTMLStyledProps<'div'>, { text: string; className?: string }>) => {
    return (
      <Text className={className} {...props}>
        {text}
      </Text>
    )
  },
  'description',
)

const Content = withContext(ArkSelect.Content, 'content')

const Item = withContext(ArkSelect.Item, 'item')

const Positioner = withContext(ArkSelect.Positioner, 'positioner')

const Select = {
  Root,
  Label,
  Trigger,
  Content,
  Item,
  ValueText,
  Description,
  Positioner,
  Control,
}

export default Select
