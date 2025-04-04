import type { Meta, StoryObj } from '@storybook/react'
import Tag from './index'
import { Flex, HStack, VStack } from '../Layout'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tag>

export const DefaultTag: Story = {
  args: {
    text: 'Tag',
    onDeleteClick: () => console.log('Delete clicked'),
  },
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
  args: {
    onDeleteClick: () => console.log('Delete clicked'),
  },
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
  args: {
    background: 'off',
    onDeleteClick: () => console.log('Delete clicked'),
  },
  render: (args) => (
    <HStack gap="4">
      <Tag {...args} text="Neutral" color="neutral" />
      <Tag {...args} text="Black" color="black" />
      <Tag {...args} text="White" color="white" />
    </HStack>
  ),
}

export const TagWithImage: Story = {
  args: {
    imageSrc: 'https://placehold.co/32x32',
    onDeleteClick: () => console.log('Delete clicked'),
  },
  render: (args) => (
    <Flex css={{ gap: '1rem' }}>
      <Tag {...args} text="Neutral Avatar" color="neutral" />
      <Tag {...args} text="Black Avatar" color="black" />
      <Tag {...args} text="White Avatar" color="white" />
    </Flex>
  ),
}
