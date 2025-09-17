import type { Meta, StoryObj } from '@storybook/react'
import Navigation from '.'
import { AddCircleOutlineIcon, GroupFillIcon, LanguageOutlineIcon, UserOutlineIcon } from '@nation-a/icons'

const meta: Meta<typeof Navigation.Root> = {
  title: 'Components/Navigation',
  component: Navigation.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: 'select', options: ['discover', 'activity', 'create', 'my'] },
    onValueChange: { action: 'onValueChange' },
    value: { control: 'select', options: ['discover', 'activity', 'create', 'my'] },
  },
}

export default meta
type Story = StoryObj<typeof Navigation.Root>

export const Default: Story = {
  args: {
    defaultValue: 'discover',
    style: { position: 'relative', width: '400px' },
  },
  render: (args) => (
    <Navigation.Root lazyMount unmountOnExit {...args}>
      <Navigation.List>
        <Navigation.Item value="discover">
          <LanguageOutlineIcon />
          Discover
        </Navigation.Item>
        <Navigation.Item value="activity">
          <GroupFillIcon />
          Activity
        </Navigation.Item>
        <Navigation.Item value="create">
          <AddCircleOutlineIcon />
          Create
        </Navigation.Item>
        <Navigation.Item value="my">
          <UserOutlineIcon />
          My
        </Navigation.Item>
      </Navigation.List>
    </Navigation.Root>
  ),
}
