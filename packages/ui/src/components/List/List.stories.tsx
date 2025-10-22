import type { Meta, StoryObj } from '@storybook/react-vite'
import List from '.'
import { HStack } from '../Layout'
import { CheckCircleOutlineIcon, ChevronRightOutlineIcon, GroupCircleFillIcon } from '@nation-a/icons'

const meta = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof List>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
  render: () => (
    <HStack css={{ w: '500px' }}>
      <List.Root size="lg">
        {[1, 2, 3].map((i) => (
          <List.Item
            key={i}
            label={`List Item ${i}`}
            subLabel={`Sub Label ${i}`}
            startAdornment={<CheckCircleOutlineIcon />}
            endAdornment={<ChevronRightOutlineIcon />}
          />
        ))}
        <List.Root size="sm" density={2}>
          {[1, 2, 3].map((i) => (
            <List.Item
              key={i}
              label={`List Item ${i}`}
              subLabel={`Sub Label ${i}`}
              startAdornment={<GroupCircleFillIcon />}
              endAdornment={<ChevronRightOutlineIcon />}
              disabled
            />
          ))}
        </List.Root>
      </List.Root>
    </HStack>
  ),
}
