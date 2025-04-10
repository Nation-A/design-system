import React from 'react'
import { tabsRecipe } from './tabs.recipe'
import { ComponentProps } from '@styled-system/types'
import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { createStyleContext } from '@/utils/create-style-context'
import { Assign } from '@ark-ui/react'

const { withRootProvider, withContext } = createStyleContext(tabsRecipe)

export interface TabsVariantProps {
  variant?: 'line' | 'enclosed'
  fitted?: boolean
  bottomLine?: boolean
  shadow?: boolean
}

type RootProps = Assign<ArkTabs.RootProps, TabsVariantProps>
const Root = withRootProvider<RootProps>(ArkTabs.Root)

export type TabsProps = ComponentProps<typeof Root>

export type TabsListProps = Assign<React.HTMLAttributes<HTMLDivElement>, ArkTabs.ListBaseProps>
const List = withContext<HTMLDivElement, TabsListProps>(ArkTabs.List, 'list')

export type TabsTriggerProps = Assign<React.HTMLAttributes<HTMLButtonElement>, ArkTabs.TriggerBaseProps>
const Trigger = withContext<HTMLButtonElement, TabsTriggerProps>(ArkTabs.Trigger, 'trigger')

export type TabsContentProps = Assign<React.HTMLAttributes<HTMLDivElement>, ArkTabs.ContentBaseProps>
const Content = withContext<HTMLDivElement, TabsContentProps>(ArkTabs.Content, 'content')

export type TabsIndicatorProps = Assign<React.HTMLAttributes<HTMLDivElement>, ArkTabs.IndicatorBaseProps>
const Indicator = withContext<HTMLDivElement, TabsIndicatorProps>(ArkTabs.Indicator, 'indicator')

const Tabs = Object.assign(Root, {
  Root,
  List,
  Trigger,
  Content,
  Indicator,
})

export const TabsContext = ArkTabs.Context

export default Tabs
