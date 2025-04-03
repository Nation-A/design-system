import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsProps } from '.'
import { Box } from '@styled-system/jsx'
import { css } from '@styled-system/css'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['line', 'enclosed'],
      description: '탭 스타일 변형',
      table: {
        type: { summary: 'line | enclosed' },
        defaultValue: { summary: 'line' },
      },
    },
    fitted: {
      control: { type: 'boolean' },
      description: '탭 스타일 변형',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    bottomLine: {
      control: { type: 'boolean' },
      description: '탭 스타일 변형',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    shadow: {
      control: { type: 'boolean' },
      description: '탭 스타일 변형',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultValue: {
      control: 'text',
      description: '기본 선택 탭',
    },
  },
}

export default meta

type Story = StoryObj<TabsProps>

const TAB_COUNT_FITTED_MAX = 15
const TAB_COUNT_FITTED_MIN = 3

const tabs = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    value: `tab${i + 1}`,
    label: `Tab ${i + 1}`,
    content: `Content for Tab ${i + 1}`,
  }))
}

const TabContent = ({ count, slice }: { count: number; slice?: number }) => {
  const tabItems = slice ? tabs(count).slice(0, slice) : tabs(count)

  return (
    <>
      <Tabs.List>
        {tabItems.map((tab) => (
          <Tabs.Trigger key={tab.value} value={tab.value}>
            {tab.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
      {tabItems.map((tab) => (
        <Tabs.Content key={tab.value} value={tab.value}>
          {tab.content}
        </Tabs.Content>
      ))}
    </>
  )
}

export const Basic: Story = {
  args: {
    defaultValue: 'tab1',
    variant: 'line',
  },
  render: (args) => (
    <Box className={css({ maxWidth: '500px' })}>
      <Tabs {...args}>
        <TabContent count={TAB_COUNT_FITTED_MAX} />
      </Tabs>
      <Tabs {...args}>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={TAB_COUNT_FITTED_MIN} />
      </Tabs>
      <Tabs {...args} fitted>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={TAB_COUNT_FITTED_MIN} />
      </Tabs>
    </Box>
  ),
}

export const Enclosed: Story = {
  args: {
    defaultValue: 'tab1',
    variant: 'enclosed',
  },
  render: (args) => (
    <Box className={css({ maxWidth: '500px' })}>
      <Tabs {...args}>
        <TabContent count={TAB_COUNT_FITTED_MAX} />
      </Tabs>
      <Tabs {...args}>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={3} />
      </Tabs>
      <Tabs {...args} fitted>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={TAB_COUNT_FITTED_MIN} />
      </Tabs>
    </Box>
  ),
}

export const Fitted: Story = {
  args: {
    defaultValue: 'tab1',
    fitted: true,
  },
  render: (args) => (
    <Box className={css({ width: '500px', display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <Tabs {...args}>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={5} />
      </Tabs>
      <Tabs {...args} variant="enclosed">
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={5} />
      </Tabs>
    </Box>
  ),
}

export const BottomLine: Story = {
  args: {
    defaultValue: 'tab1',
    variant: 'line',
    bottomLine: false,
  },
  render: (args) => (
    <Box className={css({ width: '500px', display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <Tabs {...args}>
        <TabContent count={TAB_COUNT_FITTED_MAX} />
      </Tabs>
      <Tabs {...args}>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={5} />
      </Tabs>
      <Tabs {...args} fitted>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={5} />
      </Tabs>
    </Box>
  ),
}

export const Shadow: Story = {
  args: {
    defaultValue: 'tab1',
    variant: 'line',
    shadow: true,
  },
  render: (args) => (
    <Box className={css({ width: '500px', display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <Tabs {...args}>
        <TabContent count={TAB_COUNT_FITTED_MAX} />
      </Tabs>
      <Tabs {...args}>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={5} />
      </Tabs>
      <Tabs {...args} fitted>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={5} />
      </Tabs>
    </Box>
  ),
}
