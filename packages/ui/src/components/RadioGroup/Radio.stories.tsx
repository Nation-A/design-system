import type { Meta, StoryObj } from '@storybook/react-vite'

import RadioGroup from './index'

const meta = {
  title: 'Components/Radio',
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup.Root>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { id: 'react', label: 'React' },
  { id: 'solid', label: 'Solid' },
  { id: 'svelte', label: 'Svelte' },
  { id: 'vue', label: 'Vue' },
]

export const DefaultRadioGroup: Story = {
  render: (args) => (
    <RadioGroup.Root defaultValue="react" {...args}>
      {options.map((option) => (
        <RadioGroup.Item key={option.id} value={option.id} disabled={option.id === 'svelte'}>
          {option.label}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  ),
}

export const DisabledRadioGroup: Story = {
  render: (args) => (
    <RadioGroup.Root defaultValue="react" {...args} disabled>
      {options.map((option) => (
        <RadioGroup.Item key={option.id} value={option.id} disabled={option.id === 'svelte'}>
          {option.label}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  ),
}
