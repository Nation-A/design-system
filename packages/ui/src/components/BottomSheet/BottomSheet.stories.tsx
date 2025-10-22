import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import BottomSheet from '.'
import Button from '../Button'
import Text from '../Text'
import { VStack } from '@styled-system/jsx'
import { css } from '@styled-system/css'
import { LanguageProvider } from '../LanguageProvider'
import { fn } from 'storybook/internal/test'

const meta = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof BottomSheet>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: { isOpen: false, onClose: fn(), children: <></> },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <LanguageProvider defaultLanguage="ko">
        <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Button onClick={() => setIsOpen(true)}>Open BottomSheet</Button>
          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0, max: 0.8 }}>
            <BottomSheet.Backdrop />
            <BottomSheet.Content className={css({ borderTopLeftRadius: 20, borderTopRightRadius: 20 })}>
              <BottomSheet.Handle />
              <Text variant="title.md">기본 BottomSheet</Text>
              <Text variant="body.md">기본 라운딩(20px) 값을 가진 바텀시트입니다.</Text>
            </BottomSheet.Content>
          </BottomSheet>
        </VStack>
      </LanguageProvider>
    )
  },
}

export const WithoutHandle: Story = {
  args: { isOpen: false, onClose: fn(), children: <></> },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <LanguageProvider defaultLanguage="ko">
        <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Button onClick={() => setIsOpen(true)}>Open Without Handle</Button>
          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0, max: 0.8 }}>
            <BottomSheet.Backdrop />
            <BottomSheet.Content>
              <Text variant="title.md">핸들이 없는 BottomSheet</Text>
              <Text variant="body.md">핸들이 숨겨진 바텀시트입니다.</Text>
            </BottomSheet.Content>
          </BottomSheet>
        </VStack>
      </LanguageProvider>
    )
  },
}

export const CustomRounded: Story = {
  args: { isOpen: false, onClose: fn(), children: <></> },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <LanguageProvider defaultLanguage="ko">
        <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 4 }}>
          <Button onClick={() => setIsOpen(true)}>Open Custom Rounded Sheet</Button>
          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0, max: 0.6 }} rounded={40}>
            <BottomSheet.Backdrop />
            <BottomSheet.Content>
              <Text variant="title.md">커스텀 라운딩</Text>
              <Text variant="body.md">라운딩 값이 40px로 설정된 바텀시트입니다.</Text>
            </BottomSheet.Content>
          </BottomSheet>
        </VStack>
      </LanguageProvider>
    )
  },
}

export const WithoutDefaultPadding: Story = {
  args: { isOpen: false, onClose: fn(), children: <></> },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <LanguageProvider defaultLanguage="ko">
        <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 4 }}>
          <Button onClick={() => setIsOpen(true)}>Open Without Default Padding</Button>
          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0, max: 0.6 }}>
            <BottomSheet.Backdrop />
            <BottomSheet.Content css={{ padding: 0 }}>
              <Text variant="title.md">default padding 제거</Text>
              <Text variant="body.md">기본 padding 값을 제거한 바텀시트입니다.</Text>
            </BottomSheet.Content>
          </BottomSheet>
        </VStack>
      </LanguageProvider>
    )
  },
}

export const CustomDesignWithScroller: Story = {
  args: { isOpen: false, onClose: fn(), children: <></> },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <LanguageProvider defaultLanguage="ko">
        <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 4 }}>
          <Button onClick={() => setIsOpen((prev) => !prev)}>Open Custom Design</Button>
          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0, max: 0.3 }}>
            <BottomSheet.Backdrop opacity={0.9} />
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
          </BottomSheet>
        </VStack>
      </LanguageProvider>
    )
  },
}

export const DisableBackdropBlocking: Story = {
  args: { isOpen: false, onClose: fn(), children: <></> },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <LanguageProvider defaultLanguage="ko">
        <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 4 }}>
          <label htmlFor="input-test">input test</label>
          <input type="text" id="input-test" className={css({ border: '1px solid red' })} />
          <Button onClick={() => setIsOpen((prev) => !prev)}>Open Custom Design</Button>

          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0, max: 0.4 }}>
            <BottomSheet.Backdrop disableCloseOnTap />
            <BottomSheet.Content>
              <Text variant="title.md">커스텀 디자인</Text>
            </BottomSheet.Content>
          </BottomSheet>
        </VStack>
      </LanguageProvider>
    )
  },
}

export const SnapPoint: Story = {
  args: { isOpen: false, onClose: fn(), children: <></> },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <LanguageProvider defaultLanguage="ko">
        <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Button onClick={() => setIsOpen(true)}>Open BottomSheet</Button>
          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} maxSnapPoint={300}>
            <BottomSheet.Backdrop />
            <BottomSheet.Content className={css({ borderTopLeftRadius: 20, borderTopRightRadius: 20 })}>
              <BottomSheet.Handle />
              <Text variant="title.md">Snap Point (300px)</Text>
              <Text variant="body.md">maxSnapPoint (px단위) 값을 가진 바텀시트입니다.</Text>
            </BottomSheet.Content>
          </BottomSheet>
        </VStack>
      </LanguageProvider>
    )
  },
}

export const ContentHeight: Story = {
  args: { isOpen: false, onClose: fn(), children: <></> },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <LanguageProvider defaultLanguage="ko">
        <VStack css={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Button onClick={() => setIsOpen(true)}>Open BottomSheet</Button>
          {/* snapPercent 값 undefined 이거나 snapPercent.max 값이 없으면 content-height 유지 */}
          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPercent={{ min: 0 }}>
            <BottomSheet.Backdrop />
            <BottomSheet.Content className={css({ borderTopLeftRadius: 20, borderTopRightRadius: 20 })}>
              <BottomSheet.Handle />
              <Text variant="title.md">Content Height</Text>
              <Text variant="body.md">
                snapPercent 값 undefined 이거나 snapPercent.max 값이 없으면 content-height을 높이로 가집니다.
              </Text>
            </BottomSheet.Content>
          </BottomSheet>
        </VStack>
      </LanguageProvider>
    )
  },
}
