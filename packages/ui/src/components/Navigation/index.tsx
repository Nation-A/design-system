'use client'
import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { createStyleContext } from '@/utils/create-style-context'
import { navigationRecipe } from './navigation.recipe'
import { Assign } from '@ark-ui/react'
import { ComponentProps } from 'react'
import { HTMLStyledProps } from '@styled-system/jsx'
const { withRootProvider, withContext } = createStyleContext(navigationRecipe)

export type NavigationProps = ComponentProps<typeof Root>

type RootProps = Assign<HTMLStyledProps<'div'>, ArkTabs.RootProps>
const Root = withRootProvider<RootProps>(ArkTabs.Root)

export type NavigationTriggerProps = Assign<HTMLStyledProps<'button'>, ArkTabs.TriggerBaseProps>
const Trigger = withContext<HTMLButtonElement, NavigationTriggerProps>(
  ({ ...props }) => <ArkTabs.Trigger {...props}>{props.children}</ArkTabs.Trigger>,
  'trigger',
)

type ListProps = Assign<HTMLStyledProps<'div'>, ArkTabs.ListBaseProps>
const List = withContext<HTMLDivElement, ListProps>(ArkTabs.List, 'list')

const Navigation = {
  Root,
  Item: Trigger,
  List,
}

export default Navigation
