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
        'blackAlpha',
        'whiteAlpha',
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
    preserveIconSize: {
      control: 'boolean',
      defaultValue: false,
      description: '아이콘 컴포넌트의 size prop을 우선시할지 여부',
    },
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
