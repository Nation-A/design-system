import type { Meta, StoryObj } from '@storybook/react'
import Input from './index'
import { HStack } from '@styled-system/jsx'
import { CloseOutlineIcon, SearchOutlineIcon } from '@nation-a/icons'
import IconButton from '../IconButton'
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    onFocus: () => console.log('focus'),
    onBlur: () => console.log(''),
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Solid Variant - Alpha Color */}
      <h3>Variant: Solid - Color: Alpha</h3>
      <HStack>
        <Input placeholder="Default State" color="alpha" variant="solid" />
        <Input {...args} value="Selected State" placeholder="Selected State" color="alpha" variant="solid" />
        <Input value="Disabled State" disabled placeholder="Disabled State" color="alpha" variant="solid" />
      </HStack>

      {/* Solid Variant - Neutral Color */}
      <h3>Variant: Solid - Color: Neutral</h3>
      <HStack>
        <Input placeholder="Default State" color="neutral" variant="solid" />
        <Input {...args} value="Selected State" placeholder="Selected State" color="neutral" variant="solid" />
        <Input value="Disabled State" disabled placeholder="Disabled State" color="neutral" variant="solid" />
      </HStack>

      {/* Line Variant - Neutral Color */}
      <h3>Variant: Line - Color: Neutral</h3>
      <HStack>
        <Input placeholder="Default State" color="neutral" variant="line" />
        <Input {...args} value="Selected State" placeholder="Selected State" color="neutral" variant="line" />
        <Input value="Disabled State" disabled placeholder="Disabled State" color="neutral" variant="line" />
      </HStack>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Basic Input component showing different states (default, selected, disabled) for each style (variant and color).',
      },
    },
  },
}

export const WithDescription: Story = {
  args: {
    value: '',
    placeholder: 'Text Here',
    label: '이메일',
    description: '이메일 주소를 입력해주세요.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Input 컴포넌트에 description을 추가한 예시입니다. description은 입력창 아래에 안내 메시지를 표시합니다.',
      },
    },
  },
}

export const UIVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Alpha Color */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Alpha Color</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <Input color="alpha" radius="md" placeholder="Medium radius" />
          <Input color="alpha" radius="lg" placeholder="Large radius" />
          <Input color="alpha" radius="full" placeholder="Full radius" />
        </div>
      </div>

      {/* Neutral Color */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Neutral Color</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <Input color="neutral" radius="md" placeholder="Medium radius" />
          <Input color="neutral" radius="lg" placeholder="Large radius" />
          <Input color="neutral" radius="full" placeholder="Full radius" />
        </div>
      </div>

      {/* Line Variant */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Line Variant</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <Input variant="line" radius="md" placeholder="Medium radius" />
          <Input variant="line" radius="lg" placeholder="Large radius" />
          <Input variant="line" radius="full" placeholder="Full radius" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Input 컴포넌트의 UI 변형을 보여줍니다. 색상(Alpha/Neutral)과 모서리 둥글기(md/lg/full)의 조합을 확인할 수 있습니다.',
      },
    },
  },
}

export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Alpha Color */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Alpha Color</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <Input value="value" color="alpha" placeholder="placeholder" />
          <Input value="disabled" color="alpha" disabled placeholder="disabled" />
        </div>
      </div>

      {/* Neutral Color */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Neutral Color</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <Input value="value" color="neutral" placeholder="placeholder" />
          <Input value="disabled" color="neutral" disabled placeholder="disabled" />
        </div>
      </div>

      {/* Line Variant */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Line Variant</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <Input value="value" variant="line" placeholder="placeholder" />
          <Input value="disabled" variant="line" disabled placeholder="disabled" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Input 컴포넌트의 비활성화 상태를 보여줍니다. 각 색상과 스타일 변형별로 활성화/비활성화 상태를 비교할 수 있습니다.',
      },
    },
  },
}

export const LabelVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Outside Label */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Outside Label</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <Input label="Alpha Color" labelPosition="outside" color="alpha" placeholder="Alpha Color" />
          <Input label="Neutral Color" labelPosition="outside" color="neutral" placeholder="Neutral Color" />
          <Input label="Line Variant" labelPosition="outside" variant="line" placeholder="Line Variant" />
        </div>
      </div>

      {/* Inside Label */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Inside Label</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <Input label="Alpha Color" labelPosition="inside" color="alpha" placeholder="Alpha Color" />
          <Input label="Neutral Color" labelPosition="inside" color="neutral" placeholder="Neutral Color" />
          <Input label="Line Variant" labelPosition="inside" variant="line" placeholder="Line Variant" />
        </div>
      </div>

      {/* Required Label */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Required Label</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {/* Outside Required */}
          <div>
            <h4 style={{ marginBottom: '8px' }}>Outside Position</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <Input label="Alpha Color" labelPosition="outside" color="alpha" required placeholder="Alpha Color" />
              <Input
                label="Neutral Color"
                labelPosition="outside"
                color="neutral"
                required
                placeholder="Neutral Color"
              />
              <Input label="Line Variant" labelPosition="outside" variant="line" required placeholder="Line Variant" />
            </div>
          </div>
          {/* Inside Required */}
          <div>
            <h4 style={{ marginBottom: '8px' }}>Inside Position</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <Input label="Alpha Color" labelPosition="inside" color="alpha" required placeholder="Alpha Color" />
              <Input
                label="Neutral Color"
                labelPosition="inside"
                color="neutral"
                required
                placeholder="Neutral Color"
              />
              <Input label="Line Variant" labelPosition="inside" variant="line" required placeholder="Line Variant" />
            </div>
          </div>
        </div>
      </div>

      {/* Disabled Label */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Disabled Label</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {/* Outside Disabled */}
          <div>
            <h4 style={{ marginBottom: '8px' }}>Outside Position</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <Input label="Alpha Color" labelPosition="outside" color="alpha" disabled placeholder="Alpha Color" />
              <Input
                label="Neutral Color"
                labelPosition="outside"
                color="neutral"
                disabled
                placeholder="Neutral Color"
              />
              <Input label="Line Variant" labelPosition="outside" variant="line" disabled placeholder="Line Variant" />
            </div>
          </div>
          {/* Inside Disabled */}
          <div>
            <h4 style={{ marginBottom: '8px' }}>Inside Position</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <Input label="Alpha Color" labelPosition="inside" color="alpha" disabled placeholder="Alpha Color" />
              <Input
                label="Neutral Color"
                labelPosition="inside"
                color="neutral"
                disabled
                placeholder="Neutral Color"
              />
              <Input label="Line Variant" labelPosition="inside" variant="line" disabled placeholder="Line Variant" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Input 컴포넌트의 라벨 변형을 보여줍니다. 라벨의 위치(외부/내부), 필수 입력 표시, 비활성화 상태와 각각의 색상/스타일 변형을 확인할 수 있습니다.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Input
        label="With Icons"
        startAdornment={<SearchOutlineIcon />}
        endAdornment={
          <IconButton>
            <CloseOutlineIcon />
          </IconButton>
        }
      />
    </div>
  ),
}
