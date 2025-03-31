import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import Dialog from './index'
import { Button, IconButton } from '../..'
import { ArrowRightOutlineIcon, CloseOutlineIcon } from '@nation-a/icons'

const meta: Meta<typeof Dialog.Root> = {
  title: 'Components/Dialog',
  component: Dialog.Root,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof Dialog.Root>

export default meta
type Story = StoryObj<typeof meta>

export const BasicDialog: Story = {
  render: (args) => {
    return (
      <Dialog.Root {...args}>
        <Dialog.Trigger>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>This is basic dialog content.</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    )
  },
}

export const DialogWithDescription: Story = {
  render: (args) => {
    return (
      <Dialog.Root {...args}>
        <Dialog.Trigger>
          <Button>Open Dialog with Description</Button>
        </Dialog.Trigger>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog with Description</Dialog.Title>
              <Dialog.Description>This is a more detailed description of what this dialog is about.</Dialog.Description>
            </Dialog.Header>

            <Dialog.Body>
              <p>Dialog with additional description text above the main content.</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>
                Confirm <ArrowRightOutlineIcon />
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <IconButton>
                <CloseOutlineIcon />
              </IconButton>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    )
  },
}

export const DialogWithVerticalFooter: Story = {
  render: (args) => {
    return (
      <Dialog.Root {...args}>
        <Dialog.Trigger>
          <Button>Dialog with Vertical Footer</Button>
        </Dialog.Trigger>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Vertical Footer</Dialog.Title>
              <Dialog.CloseTrigger />
            </Dialog.Header>
            <Dialog.Body>
              <p>This dialog has buttons arranged vertically in the footer.</p>
            </Dialog.Body>
            <Dialog.Footer orientation="vertical">
              <Button>Primary Action</Button>
              <Button variant="outline">Secondary Action</Button>
              <Button variant="light">Tertiary Action</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    )
  },
}

export const ControlledDialog: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Controlled Dialog</Button>

        <Dialog.Root open={open} onOpenChange={({ open }) => setOpen(open)} {...args}>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Controlled Dialog</Dialog.Title>
                <Dialog.CloseTrigger />
              </Dialog.Header>
              <Dialog.Body>
                <p>This dialog's state is controlled externally through React state.</p>
              </Dialog.Body>
              <Dialog.Footer>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => setOpen(false)}>Confirm</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Dialog.Root>
      </>
    )
  },
}
