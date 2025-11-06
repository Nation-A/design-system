import type { Meta, StoryObj } from '@storybook/react-vite'
import Tag from './index'
import { Flex, HStack, VStack } from '../Layout'
import { fn } from 'storybook/test'
const meta = {
  title: 'Components/Tag',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTag: Story = {
  render: () => <Tag text="Tag" onDeleteClick={fn()} />,
}

export const NoCloseTag: Story = {
  render: () => (
    <HStack gap="4" as="ul">
      <Tag text="Neutral No Close Tag" color="neutral" />
      <Tag text="Black No Close Tag" color="black" />
      <Tag text="White No Close Tag" color="white" />
    </HStack>
  ),
}

export const TagWithBackground: Story = {
  render: (args) => (
    <VStack gap="4">
      <HStack gap="4">
        <Tag {...args} text="Neutral sm" color="neutral" />
        <Tag {...args} text="Black sm" color="black" />
        <Tag {...args} text="White sm" color="white" />
      </HStack>
      <HStack gap="4">
        <Tag {...args} text="Neutral full" color="neutral" radius="full" />
        <Tag {...args} text="Black full" color="black" radius="full" />
        <Tag {...args} text="White full" color="white" radius="full" />
      </HStack>
    </VStack>
  ),
}

export const TagWithNoBackground: Story = {
  render: () => (
    <HStack gap="4">
      <Tag background="off" text="Neutral" color="neutral" />
      <Tag background="off" text="Black" color="black" />
      <Tag background="off" text="White" color="white" />
    </HStack>
  ),
}

export const TagWithImage: Story = {
  render: () => (
    <Flex css={{ gap: '1rem' }}>
      <Tag imageSrc="https://placehold.co/32x32" text="Neutral Avatar" color="neutral" />
      <Tag imageSrc="https://placehold.co/32x32" text="Black Avatar" color="black" />
      <Tag imageSrc="https://placehold.co/32x32" text="White Avatar" color="white" />
    </Flex>
  ),
}
