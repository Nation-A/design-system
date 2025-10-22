import { tabsRecipe } from './tabs.recipe'
import { ComponentProps } from '@styled-system/types'
import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { createStyleContext } from '@styled-system/jsx'

const { withProvider, withContext } = createStyleContext(tabsRecipe)

const Root = withProvider(ArkTabs.Root, 'root')
export type TabsProps = ComponentProps<typeof Root>

export type TabsListProps = ComponentProps<typeof List>
const List = withContext(ArkTabs.List, 'list')

export type TabsTriggerProps = ComponentProps<typeof Trigger>
const Trigger = withContext(ArkTabs.Trigger, 'trigger')

export type TabsContentProps = ComponentProps<typeof Content>
const Content = withContext(ArkTabs.Content, 'content')

export type TabsIndicatorProps = ComponentProps<typeof Indicator>
const Indicator = withContext(ArkTabs.Indicator, 'indicator')

const Tabs = Object.assign(Root, {
  Root,
  List,
  Trigger,
  Content,
  Indicator,
})

export const TabsContext = ArkTabs.Context

export default Tabs
