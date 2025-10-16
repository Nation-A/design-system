import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Text from './index'
import { LanguageProvider, useLanguage } from '../LanguageProvider'
import Button from '../Button'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display.lg',
        'display.md',
        'headline.md',
        'headline.sm',
        'title.lg',
        'title.md',
        'title.sm',
        'body.lg',
        'body.md',
        'body.sm',
        'label.sm',
        'label.md',
      ],
    },
    font: {
      control: 'select',
      options: ['inter', 'notoSans'],
    },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Typography: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text variant="display.lg" font="inter" {...args}>
        Display Large Text
      </Text>
      <Text variant="display.md" font="inter" {...args}>
        Display Medium Text
      </Text>
      <Text variant="headline.md" font="inter" {...args}>
        Headline Medium Text
      </Text>
      <Text variant="headline.sm" font="inter" {...args}>
        Headline Small Text
      </Text>
      <Text variant="title.lg" {...args}>
        Title Large Text
      </Text>
      <Text variant="title.md" {...args}>
        Title Medium Text
      </Text>
      <Text variant="title.sm" {...args}>
        Title Small Text
      </Text>
      <Text variant="body.lg" {...args}>
        Body Large Text
      </Text>
      <Text variant="body.md" {...args}>
        Body Medium Text
      </Text>
      <Text variant="body.sm" {...args}>
        Body Small Text
      </Text>
      <Text variant="label.md" {...args}>
        Label Medium Text
      </Text>
      <Text variant="label.sm" {...args}>
        Label Small Text
      </Text>
    </div>
  ),
}

const LanguageToggleExample = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <Button variant={language === 'en' ? 'solid' : 'outline'} onClick={() => setLanguage?.('en')}>
          English
        </Button>
        <Button variant={language === 'ko' ? 'solid' : 'outline'} onClick={() => setLanguage?.('ko')}>
          한국어
        </Button>
      </div>

      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          padding: '24px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          maxWidth: '600px',
        }}
      >
        <Text variant="title.main.24.bold">
          {language === 'en' ? 'Welcome to Design System' : '디자인 시스템에 오신 것을 환영합니다'}
        </Text>
        <Text variant="text.body.16.regular">
          {language === 'en'
            ? 'Text automatically adapts to the selected language and uses appropriate fonts.'
            : '텍스트가 선택된 언어에 자동으로 적응하며 적절한 폰트를 사용합니다.'}
        </Text>
        <Text variant="label.caption.12.regular">Current language: {language}</Text>
      </div>
    </div>
  )
}

export const WithLanguageProvider: Story = {
  render: () => (
    <LanguageProvider defaultLanguage="en">
      <LanguageToggleExample />
    </LanguageProvider>
  ),
}

export const KoreanLanguage: Story = {
  render: () => (
    <LanguageProvider defaultLanguage="ko">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
        <Text variant="title.main.24.bold">한국어 타이틀</Text>
        <Text variant="text.body.16.regular">한국어 본문 텍스트입니다. Pretendard 폰트가 자동으로 적용됩니다.</Text>
        <Text variant="label.caption.12.regular">한국어 캡션</Text>
      </div>
    </LanguageProvider>
  ),
}

export const EnglishLanguage: Story = {
  render: () => (
    <LanguageProvider defaultLanguage="en">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
        <Text variant="title.main.24.bold">English Title</Text>
        <Text variant="text.body.16.regular">
          English body text. Freeman and DM Sans fonts are automatically applied.
        </Text>
        <Text variant="label.caption.12.regular">English caption</Text>
      </div>
    </LanguageProvider>
  ),
}
