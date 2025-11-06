import { listRecipe, ListVariantProps } from './list.recipe'
import { ComponentProps, HTMLStyledProps } from '@styled-system/types'
import { createStyleContext } from '@styled-system/jsx'
import { Assign } from '@ark-ui/react'
import { styled } from '@styled-system/jsx'
import { HStack, Stack } from '../Layout'
import Text from '../Text'

const { withProvider, withContext } = createStyleContext(listRecipe)

const Root = withProvider(styled.ul, 'root')

export type ListProps = ComponentProps<typeof Root>

export type ListItemProps = Assign<HTMLStyledProps<'li'>, ListVariantProps> & {
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  label?: string
  subLabel?: string
  disabled?: boolean
}
const Item = withContext(({ startAdornment, endAdornment, label, subLabel, disabled, ...rest }) => {
  return (
    <HStack gap={2} justify={'space-between'} as="li" {...rest} disabled={disabled}>
      <HStack>
        {startAdornment}
        <Stack gap={0}>
          <Text variant={'label.md'} className="label">
            {label}
          </Text>
          {subLabel && (
            <Text variant={'label.sm'} className="sub-label">
              {subLabel}
            </Text>
          )}
        </Stack>
      </HStack>
      <HStack>{endAdornment}</HStack>
    </HStack>
  )
}, 'item')

Item.displayName = 'Item'

const List = Object.assign(Root, {
  Root,
  Item,
})

export default List
