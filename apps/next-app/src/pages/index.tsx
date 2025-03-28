import { Button, ButtonProps, Dialog, IconButton, IconButtonProps, Portal, Text } from '@nation-a/ui'
import * as Icons from '@nation-a/icons'
const buttonVariants: ButtonProps['variant'][] = ['solid', 'outline', 'light']

const buttonColors: ButtonProps['color'][] = [
  'neuroid_primary',
  'neuroid_secondary',
  'zoltarina_primary',
  'zoltarina_secondary',
  'heyd_primary',
  'heyd_secondary',
  'heybee_primary',
  'neutral',
  'success',
  'informative',
  'warning',
  'danger',
]

const buttonSizes: ButtonProps['size'][] = ['xs', 'sm', 'md', 'lg']

const buttonRadii: ButtonProps['radius'][] = ['md', 'lg', 'full']

const iconButtonColors: IconButtonProps['color'][] = [
  'neuroid_primary',
  'zoltarina_primary',
  'heyd_primary',
  'heybee_primary',
  'neutral',
]
const iconButtonSizes: IconButtonProps['size'][] = ['sm', 'md', 'lg']

const iconButtonVariants: IconButtonProps['variant'][] = ['solid', 'outline', 'light']

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4 dark bg-black">
      <div className="flex flex-wrap gap-4">
        {Object.entries(Icons).map(([key, Icon]) => (
          <IconButton key={key} variant="light">
            <Icon />
          </IconButton>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {iconButtonSizes.map((size) => (
          <div key={size} className="flex flex-col gap-4">
            {iconButtonColors.map((color) => (
              <div key={color} className="flex flex-row gap-4">
                {iconButtonVariants.map((variant) => (
                  <div key={variant} className="flex flex-row gap-4">
                    {[false, true].map((disabled) => (
                      <IconButton key={size} variant={variant} color={color} size={size} disabled={disabled}>
                        <Icons.ArrowRightOutlineIcon />
                      </IconButton>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {buttonVariants.map((variant) => (
        <div key={variant} className="flex flex-col gap-4">
          {buttonColors.map(
            (color) =>
              (variant === 'solid' || !color?.includes('secondary')) && (
                <div key={color} className="flex flex-col gap-4">
                  {buttonSizes.map((size) => (
                    <div key={size} className="flex flex-row gap-4">
                      {buttonRadii.map((radius) => (
                        <div key={radius} className="flex flex-col gap-4">
                          {[false, true].map((disabled) => (
                            <Button
                              key={radius}
                              variant={variant}
                              color={color}
                              size={size}
                              radius={radius}
                              disabled={disabled}
                            >
                              {variant} {color} {size} {radius} <Icons.ArrowRightOutlineIcon />
                            </Button>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ),
          )}
        </div>
      ))}
      <div className="flex flex-col gap-4">
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
    </div>
  )
}
