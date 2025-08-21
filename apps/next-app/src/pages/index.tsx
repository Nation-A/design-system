import { Button, ButtonProps, Dialog, IconButton, IconButtonProps, Portal, Text, Tag, Flex, Toast } from '@nation-a/ui'

import * as Icons from '@nation-a/icons'
import { useState } from 'react'
import { TagProps } from '@nation-a/ui'
import { Sheet } from 'react-modal-sheet'
import { css } from '@nation-a/ui/css'
import { DM_Sans, Freeman, Inter, Noto_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const freeman = Freeman({
  subsets: ['latin'],
  weight: ['400'],
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const fontClasses = [notoSans.className, inter.className, dmSans.className, freeman.className].join(' ')
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

const tagBackground: TagProps['background'][] = ['off', 'on']
const tagColor: TagProps['color'][] = ['neutral', 'black', 'white']
const tagRadius: TagProps['radius'][] = ['sm', 'full']
const imageSrc = [undefined, '/avatar.png']

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const changeTheme = (theme: 'light' | 'dark') => {
    setTheme(theme)
    if (theme === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }

  const aa = () => {
    Toast.show('This is a toast message')
  }
  return (
    <div className={`flex flex-col gap-4 p-4 light dark bg-black ${fontClasses}`}>
      <Flex>
        <Button onClick={aa}>Show Toast</Button>
      </Flex>
      <Button onClick={() => setOpen(true)}>Open sheet</Button>

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        className={css({
          backgroundColor: 'red',
        })}
      >
        <Sheet.Container
          className={css({
            backgroundColor: 'red',
            borderRadius: '100px',
          })}
        >
          <Sheet.Header
            className={css({
              backgroundColor: 'red',
              borderRadius: '100px',
            })}
          />
          <Sheet.Content
            style={{
              backgroundColor: 'red',
            }}
          >
            <Text>Hello</Text>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
      <div className="flex flex-wrap gap-4">
        {tagRadius.map((radius) => (
          <div className="flex flex-wrap gap-4">
            {tagBackground.map((bg) => (
              <div className="flex flex-wrap gap-4">
                {imageSrc.map((img) => (
                  <div className="flex flex-wrap gap-4">
                    {tagColor.map((color) => (
                      <div className="flex flex-wrap gap-4">
                        <Tag
                          background={bg}
                          color={color}
                          radius={radius}
                          text={'Text'}
                          imageSrc={img}
                          onDeleteClick={() => console.log('delete clicked!')}
                        ></Tag>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Toast.Toaster />

      <Flex wrap="wrap">
        {Object.entries(Icons).map(([key, Icon]) => (
          <IconButton key={key} variant="light">
            <Icon />
          </IconButton>
        ))}
      </Flex>

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
      <div className="flex flex-col gap-4" style={{ color: 'white' }}>
        <Text variant="en.title.main.56.bold">Hello</Text>

        <Text variant="kr.title.main.24.bold">Hello</Text>

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

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props: { data },
  }
}
