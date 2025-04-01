import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Button, { ButtonProps } from './index'
import { ArrowRightOutlineIcon } from '@nation-a/icons'
import { useRef } from 'react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'light'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    radius: { control: 'select', options: ['md', 'lg', 'full'] },
    color: {
      control: 'select',
      options: [
        'neuroid_primary',
        'zoltarina_primary',
        'heyd_primary',
        'heybee_primary',
        'neutral',
        'success',
        'informative',
        'warning',
        'danger',
      ],
    },
    fullWidth: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    loading: { control: 'boolean', defaultValue: false },
    loadingText: { control: 'text', defaultValue: undefined },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const buttonSizes: ButtonProps['size'][] = ['xs', 'sm', 'md', 'lg']

const buttonRadii: ButtonProps['radius'][] = ['md', 'lg', 'full']

export const DefaultButton: Story = {
  render: (args) => {
    const ref = useRef<HTMLButtonElement>(null)
    return (
      <Button ref={ref} {...args}>
        Default Button
      </Button>
    )
  },
}

export const SolidButton: Story = {
  args: {
    variant: 'solid',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {buttonSizes.map((size) => (
        <div key={size} style={{ display: 'flex', gap: '1rem' }}>
          {buttonRadii.map((radius) => (
            <Button key={radius} variant="solid" radius={radius} size={size} {...args}>
              {size} {radius} <ArrowRightOutlineIcon />
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const OutlineButton: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {buttonSizes.map((size) => (
        <div key={size} style={{ display: 'flex', gap: '1rem' }}>
          {buttonRadii.map((radius) => (
            <Button key={radius} variant="outline" radius={radius} size={size} {...args}>
              {size} {radius}
              <ArrowRightOutlineIcon />
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const LightButton: Story = {
  args: {
    variant: 'light',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {buttonSizes.map((size) => (
        <div key={size} style={{ display: 'flex', gap: '1rem' }}>
          {buttonRadii.map((radius) => (
            <Button key={radius} variant="light" radius={radius} size={size} {...args}>
              {size} {radius}
              <ArrowRightOutlineIcon />
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}
