import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Text from './index'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display.lg',
        'display.md',
        'headline.md',
        'headline.sm',
        'title.lg',
        'title.md',
        'title.sm',
        'body.lg',
        'body.md',
        'body.sm',
        'label.sm',
        'label.md',
      ],
    },
    font: {
      control: 'select',
      options: ['inter', 'notoSans'],
    },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Typography: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text variant="display.lg" font="inter" {...args}>
        Display Large Text
      </Text>
      <Text variant="display.md" font="inter" {...args}>
        Display Medium Text
      </Text>
      <Text variant="headline.md" font="inter" {...args}>
        Headline Medium Text
      </Text>
      <Text variant="headline.sm" font="inter" {...args}>
        Headline Small Text
      </Text>
      <Text variant="title.lg" {...args}>
        Title Large Text
      </Text>
      <Text variant="title.md" {...args}>
        Title Medium Text
      </Text>
      <Text variant="title.sm" {...args}>
        Title Small Text
      </Text>
      <Text variant="body.lg" {...args}>
        Body Large Text
      </Text>
      <Text variant="body.md" {...args}>
        Body Medium Text
      </Text>
      <Text variant="body.sm" {...args}>
        Body Small Text
      </Text>
      <Text variant="label.md" {...args}>
        Label Medium Text
      </Text>
      <Text variant="label.sm" {...args}>
        Label Small Text
      </Text>
    </div>
  ),
}
