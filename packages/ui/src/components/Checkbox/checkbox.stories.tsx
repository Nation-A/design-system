import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import Checkbox from '.'
import { Stack } from '../Layout'

const meta = {
  title: 'Components/CheckBox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: (args) => {
    return <Checkbox {...args}>Label</Checkbox>
  },
}

export const Variant: Story = {
  render: (args) => {
    return (
      <Stack gap="4">
        <Checkbox {...args} variant="square">
          Square
        </Checkbox>
        <Checkbox {...args} variant="round">
          Round
        </Checkbox>
      </Stack>
    )
  },
}

export const Checked: Story = {
  args: { children: 'Label', defaultChecked: true },
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => {
    return (
      <Stack gap="4">
        <Checkbox {...args}>Label</Checkbox>
        <Checkbox checked {...args}>
          Disabled
        </Checkbox>
      </Stack>
    )
  },
}

export const Indeterminate: Story = {
  args: { children: 'Label', checked: 'indeterminate' },
}
