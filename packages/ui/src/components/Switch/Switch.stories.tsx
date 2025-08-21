import type { Meta, StoryObj } from '@storybook/react'

import Switch from './index'
import { Flex } from '../Layout'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    size: { control: 'select', options: ['md', 'lg'] },
    color: { control: 'select', options: ['neutral', 'neuroid', 'heyd', 'heybee', 'zoltarina'] },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSwitch: Story = {
  args: {
    size: 'md',
  },
}
export const DisabledSwitches: Story = {
  args: {
    size: 'md',
    disabled: true,
  },
  render: (args) => (
    <Flex css={{ gap: '2rem', alignItems: 'center' }}>
      <Switch size="md" {...args} />
      <Switch defaultChecked size="md" {...args} />
    </Flex>
  ),
}

export const SwitchSizes: Story = {
  render: (args) => (
    <Flex css={{ gap: '2rem', alignItems: 'center' }}>
      <Switch size="md" {...args} />
      <Switch size="lg" {...args} />
    </Flex>
  ),
}

export const SwitchColors: Story = {
  args: {
    size: 'md',
    defaultChecked: true,
  },
  render: (args) => (
    <Flex css={{ gap: '2rem', alignItems: 'center' }}>
      <Switch color="neutral" {...args} />
      <Switch color="neuroid" {...args} />
      <Switch color="heyd" {...args} />
      <Switch color="heybee" {...args} />
      <Switch color="zoltarina" {...args} />
    </Flex>
  ),
}
