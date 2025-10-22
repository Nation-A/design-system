import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import Fab from './index'
import { ChevronRightOutlineIcon } from '@nation-a/icons'

const meta = {
  title: 'Components/Fab',
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    color: {
      control: 'select',
      options: [
        'neuroid_primary',
        'zoltarina_primary',
        'heyd_primary',
        'heybee_primary',
        'neutral',
        'blackAlpha',
        'whiteAlpha',
      ],
    },
    disabled: { control: 'boolean', defaultValue: false },
    loading: { control: 'boolean', defaultValue: false },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Fab>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultIconButton: Story = {
  render: (args) => (
    <Fab {...args}>
      <ChevronRightOutlineIcon />
    </Fab>
  ),
}

export const LoadingIconButton: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Fab variant="solid" loading>
        <ChevronRightOutlineIcon />
      </Fab>
    </div>
  ),
}
