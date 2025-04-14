import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import BottomSheet, { BottomSheetProps } from '.'
import Button from '../Button'
import Text from '../Text'
import { VStack } from '@styled-system/jsx'
import { css } from '@styled-system/css'

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet2',
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
        <Button onClick={() => setIsOpen(true)}>Open BottomSheet</Button>
        <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0, max: 0.8 }}>
          <BottomSheet.Content className={css({ borderTopLeftRadius: 20, borderTopRightRadius: 20 })}>
            <BottomSheet.Handle />
            <Text variant="title.md">기본 BottomSheet</Text>
            <Text variant="body.md">기본 라운딩(20px) 값을 가진 바텀시트입니다.</Text>
          </BottomSheet.Content>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </VStack>
    )
  },
}

export const WithoutHandle: Story = {
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Button onClick={() => setIsOpen(true)}>Open Without Handle</Button>
        <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0, max: 0.8 }}>
          <BottomSheet.Content>
            <Text variant="title.md">핸들이 없는 BottomSheet</Text>
            <Text variant="body.md">핸들이 숨겨진 바텀시트입니다.</Text>
          </BottomSheet.Content>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </VStack>
    )
  },
}

export const CustomRounded: Story = {
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 4 }}>
        <Button onClick={() => setIsOpen(true)}>Open Custom Rounded Sheet</Button>
        <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0, max: 0.6 }} rounded={40}>
          <BottomSheet.Content>
            <Text variant="title.md">커스텀 라운딩</Text>
            <Text variant="body.md">라운딩 값이 40px로 설정된 바텀시트입니다.</Text>
          </BottomSheet.Content>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </VStack>
    )
  },
}

export const WithoutDefaultPadding: Story = {
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 4 }}>
        <Button onClick={() => setIsOpen(true)}>Open Without Default Padding</Button>
        <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0, max: 0.6 }}>
          <BottomSheet.Content css={{ padding: 0 }}>
            <Text variant="title.md">default padding 제거</Text>
            <Text variant="body.md">기본 padding 값을 제거한 바텀시트입니다.</Text>
          </BottomSheet.Content>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </VStack>
    )
  },
}

export const CustomDesignWithScroller: Story = {
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 4 }}>
        <Button onClick={() => setIsOpen((prev) => !prev)}>Open Custom Design</Button>
        <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0, max: 0.3 }}>
          <BottomSheet.Content
            css={{
              padding: 5,
              backgroundColor: 'skyblue',
              border: '5px solid red',
              display: 'flex',
              flexDirection: 'column',
              gap: 15,
            }}
          >
            <BottomSheet.Scroller>
              <Text variant="title.md">커스텀 디자인</Text>
              <Text variant="title.md">커스텀 디자인</Text>
              <Text variant="title.md">커스텀 디자인</Text>
              <Text variant="title.md">커스텀 디자인</Text>
              <Text variant="title.md">커스텀 디자인</Text>
              <Text variant="title.md">커스텀 디자인</Text>
              <Text variant="title.md">커스텀 디자인</Text>
              <Text variant="title.md">커스텀 디자인</Text>
              <Text variant="title.md">커스텀 디자인</Text>
              <Text variant="title.md">커스텀 디자인</Text>
              <Text variant="title.md">커스텀 디자인</Text>
              <Text variant="body.md" css={{ color: 'white', fontWeight: 'bold' }}>
                커스텀 디자인을 적용한 바텀시트입니다. (custom design, opacity 0.9)
              </Text>
              <Button>버튼</Button>
            </BottomSheet.Scroller>
          </BottomSheet.Content>
          <BottomSheet.Backdrop opacity={0.9} />
        </BottomSheet>
      </VStack>
    )
  },
}

export const DisableBackdropBlocking: Story = {
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 4 }}>
        <label htmlFor="input-test">input test</label>
        <input type="text" id="input-test" className={css({ border: '1px solid red' })} />
        <Button onClick={() => setIsOpen((prev) => !prev)}>Open Custom Design</Button>

        <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0, max: 0.4 }}>
          <BottomSheet.Content>
            <Text variant="title.md">커스텀 디자인</Text>
          </BottomSheet.Content>
          <BottomSheet.Backdrop disableCloseOnTap />
        </BottomSheet>
      </VStack>
    )
  },
}
