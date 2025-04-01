import type { Meta, StoryObj } from '@storybook/react'

import Spinner from './index'
import { Flex } from '../Layout'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSpinner: Story = {
  args: {
    size: 'md',
  },
}

export const SpinnerSizes: Story = {
  render: (args) => (
    <Flex css={{ gap: '2rem', alignItems: 'center' }}>
      <Spinner size="sm" {...args} />
      <Spinner size="md" {...args} />
      <Spinner size="lg" {...args} />
      <Spinner size="xl" {...args} />
    </Flex>
  ),
}
