'use client'
import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { navigationRecipe } from './navigation.recipe'
import { ComponentProps } from 'react'
import { createStyleContext } from '@styled-system/jsx'
const { withProvider, withContext } = createStyleContext(navigationRecipe)

export type NavigationProps = ComponentProps<typeof Root>
const Root = withProvider(ArkTabs.Root, 'root')

export type NavigationTriggerProps = ComponentProps<typeof Trigger>
const Trigger = withContext(({ ...props }) => <ArkTabs.Trigger {...props}>{props.children}</ArkTabs.Trigger>, 'trigger')

const List = withContext(ArkTabs.List, 'list')

const Navigation = {
  Root,
  Item: Trigger,
  List,
}

export default Navigation
