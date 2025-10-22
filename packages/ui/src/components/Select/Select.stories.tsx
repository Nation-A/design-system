import type { Meta, StoryObj } from '@storybook/react-vite'
import Select from './index'
import { CollectionItem, createListCollection } from '@ark-ui/react'
import { useState } from 'react'
import { Box } from '@styled-system/jsx'
import { CheckCircleFillIcon, ChevronDownOutlineIcon } from '@nation-a/icons'

const meta = {
  title: 'Components/Select',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Select.Root>

export default meta
type Story = StoryObj<typeof meta>

const items = ['React', 'Solid', 'Vue', 'Svelte']

export const Default: Story = {
  render: () => {
    const [_, setSelectedItems] = useState<string[]>([])

    return (
      <Box
        css={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '90vw', p: 10 }}
      >
        <Select.Root
          collection={createListCollection<string>({ items })}
          positioning={{ sameWidth: true }}
          onValueChange={(e: CollectionItem) => setSelectedItems(e.items)}
        >
          <Select.Label>Framework</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select a framework" />
            </Select.Trigger>
          </Select.Control>
          <Select.Positioner>
            <Select.Content>
              {items.map((item) => (
                <Select.Item key={item} item={item}>
                  {item}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Select.Root>
      </Box>
    )
  },
}

export const WithDescription: Story = {
  render: () => {
    const [_, setSelectedItems] = useState<string[]>([])

    return (
      <Box
        css={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '90vw', p: 10 }}
      >
        <Select.Root
          collection={createListCollection<string>({ items })}
          positioning={{ sameWidth: true }}
          onValueChange={(e: CollectionItem) => setSelectedItems(e.items)}
        >
          <Select.Label>Framework</Select.Label>
          <Select.Control>
            <Select.Trigger description="Description">
              <CheckCircleFillIcon />
              <Select.ValueText placeholder="Select a framework" />
              <CheckCircleFillIcon />
            </Select.Trigger>
          </Select.Control>
          <Select.Positioner>
            <Select.Content>
              {items.map((item) => (
                <Select.Item key={item} item={item}>
                  <CheckCircleFillIcon />
                  {item}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Select.Root>
      </Box>
    )
  },
}
export const WithDescriptionAndCustomIcons: Story = {
  render: () => {
    const [_, setSelectedItems] = useState<string[]>([])

    return (
      <Box
        css={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '90vw', p: 10 }}
      >
        <Select.Root
          collection={createListCollection<string>({ items })}
          positioning={{ sameWidth: true }}
          onValueChange={(e: CollectionItem) => setSelectedItems(e.items)}
        >
          <Select.Label>Framework</Select.Label>
          <Select.Trigger description="Description">
            <CheckCircleFillIcon />
            <Select.ValueText placeholder="Select a framework" />
            <ChevronDownOutlineIcon />
          </Select.Trigger>
          <Select.Content>
            {items.map((item) => (
              <Select.Item key={item} item={item}>
                <CheckCircleFillIcon />
                {item}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Box>
    )
  },
}
