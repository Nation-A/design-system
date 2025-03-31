import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import IconButton, { IconButtonProps } from './index'
import { ArrowRightOutlineIcon } from '@nation-a/icons'

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'light'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: {
      control: 'select',
      options: ['neuroid_primary', 'zoltarina_primary', 'heyd_primary', 'heybee_primary', 'neutral'],
    },
    disabled: { control: 'boolean', defaultValue: false },
    loading: { control: 'boolean', defaultValue: false },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

const buttonSizes: IconButtonProps['size'][] = ['sm', 'md', 'lg']

export const DefaultIconButton: Story = {
  render: (args) => (
    <IconButton {...args}>
      <ArrowRightOutlineIcon />
    </IconButton>
  ),
}

export const SolidIconButton: Story = {
  args: {
    variant: 'solid',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {buttonSizes.map((size) => (
        <IconButton key={size} variant="solid" size={size} {...args}>
          <ArrowRightOutlineIcon />
        </IconButton>
      ))}
    </div>
  ),
}

export const OutlineIconButton: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {buttonSizes.map((size) => (
        <IconButton key={size} variant="outline" size={size} {...args}>
          <ArrowRightOutlineIcon />
        </IconButton>
      ))}
    </div>
  ),
}

export const LightIconButton: Story = {
  args: {
    variant: 'light',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {buttonSizes.map((size) => (
        <IconButton key={size} variant="light" size={size} {...args}>
          <ArrowRightOutlineIcon />
        </IconButton>
      ))}
    </div>
  ),
}

export const LoadingIconButton: Story = {
  args: {
    loading: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <IconButton variant="solid" size="md" {...args}>
        <ArrowRightOutlineIcon />
      </IconButton>
      <IconButton variant="outline" size="md" {...args}>
        <ArrowRightOutlineIcon />
      </IconButton>
      <IconButton variant="light" size="md" {...args}>
        <ArrowRightOutlineIcon />
      </IconButton>
    </div>
  ),
}
