import type { Meta, StoryObj } from '@storybook/react'
import Toast from './index'
import Button from '../Button'
import { CheckCircleFillIcon } from '@nation-a/icons'
import { VStack } from '@styled-system/jsx'
const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toast>

export const DefaultToast: Story = {
  render: () => {
    return (
      <VStack gap={5}>
        <Toast.Toaster />
        <Button onClick={() => Toast.show('This is a toast message')}>Show Toast</Button>
        <Button
          onClick={() =>
            Toast.show('This is a toast message with icon', {
              icon: <CheckCircleFillIcon />,
              duration: 9999999,
            })
          }
        >
          Show Toast With Icon
        </Button>
        <Button
          onClick={() =>
            Toast.show(
              'This is a toast with long text. This is a toast with long text. This is a toast with long text. This is a toast with long text.',
              {
                icon: <CheckCircleFillIcon />,
              },
            )
          }
        >
          Show Toast With Long Text
        </Button>
      </VStack>
    )
  },
}

export const ToastWithTypes: Story = {
  render: () => {
    return (
      <VStack gap={5}>
        <Toast.Toaster />
        <Button onClick={() => Toast.success('This is a success toast message')}>Show Success Toast</Button>
        <Button onClick={() => Toast.error('This is a error toast message')}>Show Error Toast</Button>
        <Button onClick={() => Toast.show('This is a info toast message')}>Show Info Toast</Button>
      </VStack>
    )
  },
}

export const ToastWithAction: Story = {
  render: () => {
    return (
      <VStack gap={5}>
        <Toast.Toaster />
        <Button
          onClick={() =>
            Toast.show('This is a toast message with action', {
              actionLabel: 'Label',
              onActionClick: () => console.log('action clicked'),
            })
          }
        >
          Show Toast With Action
        </Button>
        <Button
          onClick={() =>
            Toast.show('This is a toast message with icon and action', {
              icon: <CheckCircleFillIcon />,
              actionLabel: 'Label',
              onActionClick: () => console.log('action clicked'),
              duration: 10000,
            })
          }
        >
          Show Toast With Icon And Action
        </Button>
      </VStack>
    )
  },
}

export const ToastWithLink: Story = {
  render: () => {
    return (
      <>
        <Toast.Toaster />
        <Button
          onClick={() =>
            Toast.show('This is a toast message', {
              icon: <CheckCircleFillIcon />,
              actionLabel: 'Label',
              onActionClick: () => console.log('action clicked'),
              asLink: true,
              //   duration: 99999999,
            })
          }
        >
          Show Toast With Link
        </Button>
      </>
    )
  },
}

export const ToastWithCustomDuration: Story = {
  render: () => {
    return (
      <VStack gap={5}>
        <Toast.Toaster />
        <Button onClick={() => Toast.show('This is a toast message', {})}>
          Show Toast With Default Duration (3000ms)
        </Button>
        <Button
          onClick={() =>
            Toast.show('Toast With Custom Duration (10000ms)', {
              duration: 10000,
            })
          }
        >
          Show Toast With Custom Duration (10000ms)
        </Button>
        <Button
          onClick={() =>
            Toast.show('Toast With Custom Duration (1000ms)', {
              duration: 1000,
            })
          }
        >
          Show Toast With Custom Duration (1000ms)
        </Button>
      </VStack>
    )
  },
}
