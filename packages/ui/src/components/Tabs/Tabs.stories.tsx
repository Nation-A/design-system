import type { Meta, StoryObj } from '@storybook/react-vite'
import Tabs from '.'
import { Box } from '@styled-system/jsx'
import { css } from '@styled-system/css'

const meta = {
  title: 'Components/Tabs',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

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
  render: () => (
    <Box className={css({ maxWidth: '500px' })}>
      <Tabs defaultValue="tab1" variant="line">
        <TabContent count={TAB_COUNT_FITTED_MAX} />
      </Tabs>
      <Tabs defaultValue="tab1" variant="line">
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={TAB_COUNT_FITTED_MIN} />
      </Tabs>
      <Tabs defaultValue="tab1" variant="line" fitted>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={TAB_COUNT_FITTED_MIN} />
      </Tabs>
    </Box>
  ),
}

export const Enclosed: Story = {
  render: () => (
    <Box className={css({ maxWidth: '500px' })}>
      <Tabs defaultValue="tab1" variant="enclosed">
        <TabContent count={TAB_COUNT_FITTED_MAX} />
      </Tabs>
      <Tabs defaultValue="tab1" variant="enclosed">
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={3} />
      </Tabs>
      <Tabs defaultValue="tab1" variant="enclosed" fitted>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={TAB_COUNT_FITTED_MIN} />
      </Tabs>
    </Box>
  ),
}

export const Fitted: Story = {
  render: () => (
    <Box className={css({ width: '500px', display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <Tabs defaultValue="tab1" fitted>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={5} />
      </Tabs>
      <Tabs defaultValue="tab1" variant="enclosed" fitted>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={5} />
      </Tabs>
    </Box>
  ),
}

export const BottomLine: Story = {
  render: () => (
    <Box className={css({ width: '500px', display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <Tabs defaultValue="tab1" variant="line" bottomLine={false}>
        <TabContent count={TAB_COUNT_FITTED_MAX} />
      </Tabs>
      <Tabs defaultValue="tab1" variant="line" bottomLine={false}>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={5} />
      </Tabs>
      <Tabs defaultValue="tab1" variant="line" bottomLine={false} fitted>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={5} />
      </Tabs>
    </Box>
  ),
}

export const Shadow: Story = {
  render: () => (
    <Box className={css({ width: '500px', display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <Tabs defaultValue="tab1" variant="line" shadow>
        <TabContent count={TAB_COUNT_FITTED_MAX} />
      </Tabs>
      <Tabs defaultValue="tab1" variant="line" shadow>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={5} />
      </Tabs>
      <Tabs defaultValue="tab1" variant="line" shadow fitted>
        <TabContent count={TAB_COUNT_FITTED_MAX} slice={5} />
      </Tabs>
    </Box>
  ),
}
