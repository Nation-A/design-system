import type { Meta, StoryObj } from '@storybook/react-vite'
import Navigation from '.'
import { AddCircleOutlineIcon, GroupFillIcon, LanguageOutlineIcon, UserOutlineIcon } from '@nation-a/icons'

const meta = {
  title: 'Components/Navigation',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Navigation.Root lazyMount unmountOnExit defaultValue="discover" style={{ position: 'relative', width: '400px' }}>
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
