'use client'
import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { createStyleContext } from '@/utils/create-style-context'
import { navigationRecipe } from './navigation.recipe'
import { Assign } from '@ark-ui/react'
import { ButtonHTMLAttributes, ComponentProps, HTMLAttributes } from 'react'

const { withRootProvider, withContext } = createStyleContext(navigationRecipe)

export type NavigationProps = ComponentProps<typeof Root>

type RootProps = ArkTabs.RootProps
const Root = withRootProvider<RootProps>(ArkTabs.Root)

export type NavigationTriggerProps = Assign<ButtonHTMLAttributes<HTMLButtonElement>, ArkTabs.TriggerBaseProps> & {
  /**
   * The icon to display in the trigger.
   */
  icon: React.ReactNode
  /**
   * The label to display in the trigger.
   */
  label: string
}
const Trigger = withContext<HTMLButtonElement, NavigationTriggerProps>(
  ({ icon, label, ...props }) => (
    <ArkTabs.Trigger {...props}>
      {icon}
      {label}
    </ArkTabs.Trigger>
  ),
  'trigger',
)

type ListProps = Assign<HTMLAttributes<HTMLDivElement>, ArkTabs.ListBaseProps>
const List = withContext<HTMLDivElement, ListProps>(ArkTabs.List, 'list')

const Navigation = {
  Root,
  Item: Trigger,
  List,
}

export default Navigation
