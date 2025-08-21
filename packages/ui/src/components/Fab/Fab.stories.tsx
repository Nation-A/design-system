import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Fab from './index'
import { ChevronRightOutlineIcon } from '@nation-a/icons'

const meta: Meta<typeof Fab> = {
  title: 'Components/Fab',
  component: Fab,
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
  args: {
    loading: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Fab variant="solid" {...args}>
        <ChevronRightOutlineIcon />
      </Fab>
    </div>
  ),
}
