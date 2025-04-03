import type { Meta, StoryObj } from '@storybook/react'
import BottomSheet, { BottomSheetProps } from '.'
import { Box } from '@styled-system/jsx'

import { VStack } from '../Layout'
import Button from '../Button'
import { useState } from 'react'
const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
}

export default meta

type Story = StoryObj<BottomSheetProps>

const tabs = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    value: `tab${i + 1}`,
    label: `Tab ${i + 1}`,
    content: `Content for Tab ${i + 1}`,
  }))
}

export const Basic: Story = {
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <VStack>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <BottomSheet isOpen={isOpen}>
          <Box>Hello</Box>
        </BottomSheet>
      </VStack>
    )
  },
}
