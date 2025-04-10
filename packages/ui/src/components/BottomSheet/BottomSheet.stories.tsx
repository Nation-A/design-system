import type { Meta, StoryObj } from '@storybook/react'
import BottomSheet, { BottomSheetProps } from '.'
import { Box } from '../..'
import { VStack } from '../Layout'
import Button from '../Button'
import { useState } from 'react'

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
}

export default meta

type Story = StoryObj<BottomSheetProps>

export const Basic: Story = {
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <BottomSheet
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          snapPercent={{ min: 0, max: 0.8 }}
          hideHandle
        >
          <Box>Hello</Box>
        </BottomSheet>
      </VStack>
    )
  },
}
