import type { Meta, StoryObj } from '@storybook/react-vite'

import Button, { ButtonProps } from './index'
import { ArrowRightOutlineIcon } from '@nation-a/icons'
import { useRef } from 'react'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const buttonSizes: ButtonProps['size'][] = ['xs', 'sm', 'md', 'lg']

const buttonRadii: ButtonProps['radius'][] = ['md', 'lg', 'full']

const buttonVariants: ButtonProps['variant'][] = ['solid', 'outline', 'light']

const buttonColors: ButtonProps['color'][] = [
  'neuroid_primary',
  'neuroid_secondary',
  'zoltarina_primary',
  'zoltarina_secondary',
  'heyd_primary',
  'heyd_secondary',
  'heybee_primary',
  'blackAlpha',
  'whiteAlpha',
  'neutral',
  'danger',
  'warning',
  'success',
  'informative',
]

export const DefaultButton: Story = {
  argTypes: {
    size: {
      control: 'select',
      options: buttonSizes,
    },
    radius: {
      control: 'select',
      options: buttonRadii,
    },
    variant: {
      control: 'select',
      options: buttonVariants,
    },
    color: {
      control: 'select',
      options: buttonColors,
    },
    fullWidth: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    loadingText: {
      control: 'text',
    },
    preserveIconSize: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },

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
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {buttonSizes.map((size) => (
        <div key={size} style={{ display: 'flex', gap: '1rem' }}>
          {buttonRadii.map((radius) => (
            <Button key={radius} variant="solid" radius={radius} size={size}>
              {size} {radius} <ArrowRightOutlineIcon />
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const OutlineButton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {buttonSizes.map((size) => (
        <div key={size} style={{ display: 'flex', gap: '1rem' }}>
          {buttonRadii.map((radius) => (
            <Button key={radius} variant="outline" radius={radius} size={size}>
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
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {buttonSizes.map((size) => (
        <div key={size} style={{ display: 'flex', gap: '1rem' }}>
          {buttonRadii.map((radius) => (
            <Button key={radius} variant="light" radius={radius} size={size}>
              {size} {radius}
              <ArrowRightOutlineIcon />
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const PreserveIconSizeExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
          기본 동작 (preserveIconSize=false)
        </h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="xs">
            <ArrowRightOutlineIcon size={16} />
            XS
          </Button>
          <Button size="sm">
            <ArrowRightOutlineIcon size={32} />
            SM
          </Button>
          <Button size="md">
            <ArrowRightOutlineIcon size={48} />
            MD
          </Button>
          <Button size="lg">
            <ArrowRightOutlineIcon size={64} />
            LG
          </Button>
          <span style={{ fontSize: '0.875rem', color: '#666' }}>아이콘 size prop이 무시되고 버튼 크기에 맞춰짐</span>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
          아이콘 크기 우선 (preserveIconSize=true)
        </h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="xs" preserveIconSize>
            <ArrowRightOutlineIcon size={16} />
            XS
          </Button>
          <Button size="sm" preserveIconSize>
            <ArrowRightOutlineIcon size={32} />
            SM
          </Button>
          <Button size="md" preserveIconSize>
            <ArrowRightOutlineIcon size={48} />
            MD
          </Button>
          <Button size="lg" preserveIconSize>
            <ArrowRightOutlineIcon size={64} />
            LG
          </Button>
          <span style={{ fontSize: '0.875rem', color: '#666' }}>아이콘 size prop이 우선적으로 적용됨</span>
        </div>
      </div>
    </div>
  ),
}
