import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import IconButton, { IconButtonProps } from './index'
import { ArrowRightOutlineIcon } from '@nation-a/icons'

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
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
    preserveIconSize: {
      control: 'boolean',
      defaultValue: false,
      description: '아이콘 컴포넌트의 size prop을 우선시할지 여부',
    },
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

export const PreserveIconSizeExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
          기본 동작 (preserveIconSize=false)
        </h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <IconButton size="sm">
            <ArrowRightOutlineIcon size={16} />
          </IconButton>
          <IconButton size="md">
            <ArrowRightOutlineIcon size={32} />
          </IconButton>
          <IconButton size="lg">
            <ArrowRightOutlineIcon size={48} />
          </IconButton>
          <span style={{ fontSize: '0.875rem', color: '#666' }}>아이콘 size prop이 무시되고 버튼 크기에 맞춰짐</span>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
          아이콘 크기 우선 (preserveIconSize=true)
        </h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <IconButton size="sm" preserveIconSize>
            <ArrowRightOutlineIcon size={16} />
          </IconButton>
          <IconButton size="md" preserveIconSize>
            <ArrowRightOutlineIcon size={32} />
          </IconButton>
          <IconButton size="lg" preserveIconSize>
            <ArrowRightOutlineIcon size={48} />
          </IconButton>
          <span style={{ fontSize: '0.875rem', color: '#666' }}>아이콘 size prop이 우선적으로 적용됨</span>
        </div>
      </div>
    </div>
  ),
}
