import type { Meta, StoryObj } from '@storybook/react'
import Toast from './index'
import Button from '../Button'
import toast from '@/utils/toast'
import { CheckCircleFillIcon } from '@nation-a/icons'
import { ToastProvider } from '@/contexts'
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
      <ToastProvider>
        <VStack gap={5}>
          <Button onClick={() => toast.show('This is a toast message')}>Show Toast</Button>
          <Button
            onClick={() =>
              toast.show('This is a toast message with icon', {
                icon: <CheckCircleFillIcon />,
              })
            }
          >
            Show Toast With Icon
          </Button>
          <Button
            onClick={() =>
              toast.show(
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
      </ToastProvider>
    )
  },
}

export const ToastWithAction: Story = {
  render: () => {
    return (
      <ToastProvider>
        <VStack gap={5}>
          <Button
            onClick={() =>
              toast.show('This is a toast message with action', {
                actionLabel: 'Label',
                onActionClick: () => console.log('action clicked'),
              })
            }
          >
            Show Toast With Action
          </Button>
          <Button
            onClick={() =>
              toast.show('This is a toast message with icon and action', {
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
      </ToastProvider>
    )
  },
}

export const ToastWithLink: Story = {
  render: () => {
    return (
      <ToastProvider>
        <Button
          onClick={() =>
            toast.show('This is a toast message', {
              icon: <CheckCircleFillIcon />,
              actionLabel: 'Label',
              onActionClick: () => console.log('action clicked'),
              asLink: true,
            })
          }
        >
          Show Toast With Link
        </Button>
      </ToastProvider>
    )
  },
}

export const ToastWithCustomDuration: Story = {
  render: () => {
    return (
      <ToastProvider>
        <VStack gap={5}>
          <Button onClick={() => toast.show('This is a toast message', {})}>
            Show Toast With Default Duration (3000ms)
          </Button>
          <Button
            onClick={() =>
              toast.show('Toast With Custom Duration (10000ms)', {
                duration: 10000,
              })
            }
          >
            Show Toast With Custom Duration (10000ms)
          </Button>
          <Button
            onClick={() =>
              toast.show('Toast With Custom Duration (1000ms)', {
                duration: 1000,
              })
            }
          >
            Show Toast With Custom Duration (1000ms)
          </Button>
        </VStack>
      </ToastProvider>
    )
  },
}
