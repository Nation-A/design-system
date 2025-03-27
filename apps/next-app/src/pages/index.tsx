import { Button, Dialog, Portal, Text } from '@nation-a/ui'

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="solid" color="zoltarina_primary" size="lg">
        Click me
      </Button>
      <Button variant="solid" color="zoltarina_primary" size="lg" disabled loading>
        Click me
      </Button>
      <Text variant="display.lg">Hello</Text>
      <Text variant="display.md">Hello</Text>

      <Text variant="headline.md">Hello</Text>
      <Text variant="headline.sm">Hello</Text>

      <Text variant="title.lg">Hello</Text>
      <Text variant="title.md">Hello</Text>

      <Text variant="body.lg">Hello</Text>
      <Text variant="body.md">Hello</Text>

      <Text variant="label.md">Hello</Text>
      <Text variant="label.sm">Hello</Text>
      <Dialog.Root lazyMount unmountOnExit>
        <Dialog.Trigger asChild>
          <Button variant="solid" size="lg" color="neuroid_primary">
            Open
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Title>Title</Dialog.Title>
              <Dialog.Description>Description</Dialog.Description>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  )
}
