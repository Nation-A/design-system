import type { Meta, StoryObj } from '@storybook/react'
import Textarea from './index'
import { HStack, VStack } from '@styled-system/jsx'

const meta: Meta<typeof Textarea> = {
  title: 'Components/TextArea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Solid Variant - Alpha Color */}
      <h3>Variant: Solid - Color: Alpha</h3>
      <HStack>
        <Textarea placeholder="Default" color="alpha" />
        <Textarea
          //   value="Selected"
          //   onFocus={() => console.log('focus')}
          //   onBlur={() => console.log('blur')}
          placeholder="Selected State"
          color="alpha"
        />
        <Textarea value="Disabled" disabled placeholder="Disabled State" color="alpha" />
      </HStack>

      {/* Solid Variant - Neutral Color */}
      <h3>Variant: Solid - Color: Neutral</h3>
      <HStack>
        <Textarea placeholder="Default" color="neutral" variant="solid" />
        <Textarea
          value="Selected"
          onFocus={() => console.log('focus')}
          onBlur={() => console.log('blur')}
          placeholder="Selected State"
          color="neutral"
          variant="solid"
        />
        <Textarea value="Disabled" disabled placeholder="Disabled State" color="neutral" variant="solid" />
      </HStack>

      {/* Line Variant - Neutral Color */}
      <h3>Variant: Line - Color: Neutral</h3>
      <HStack>
        <Textarea placeholder="Default" color="neutral" variant="line" />
        <Textarea
          value="Selected"
          onFocus={() => console.log('focus')}
          onBlur={() => console.log('blur')}
          placeholder="Selected State"
          color="neutral"
          variant="line"
        />
        <Textarea value="Disabled" disabled placeholder="Disabled State" color="neutral" variant="line" />
      </HStack>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Basic TextArea component showing different states (default, selected, disabled) for each style (variant and color).',
      },
    },
  },
}

export const WithDescription: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Textarea placeholder={`Solid Alpha`} label="Label" description="description" color={'alpha'} />
      <Textarea placeholder={`Solid Alpha`} label="Label" description="description" color={'neutral'} />
      <Textarea placeholder={`Line Neutral`} label="Label" description="description" color={'neutral'} variant="line" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of TextArea component with description. Shows all color variations.',
      },
    },
  },
}

export const WithRemoveBorder: Story = {
  render: () => <Textarea placeholder={`Placeholder`} color={'alpha'} variant={'solid'} removeBorder />,
}

export const UIVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h3>{`Variant: Solid`}</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}
      >
        <Textarea placeholder={`Placeholder`} color={'alpha'} variant={'solid'} />
        <Textarea placeholder={`Placeholder`} color={'neutral'} variant={'solid'} />
      </div>
      <h3>{`Variant: Line`}</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}
      >
        <Textarea placeholder={`Placeholder`} color={'neutral'} variant={'line'} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows UI variants of the TextArea component. All color variations for each variant are displayed.',
      },
    },
  },
}

export const DisabledStates: Story = {
  render: () => (
    <HStack>
      <VStack>
        <h3>{`Variant: Solid`}</h3>
        <Textarea placeholder={`Placeholder`} color={'alpha'} variant={'solid'} />
        <Textarea placeholder={`Placeholder`} color={'neutral'} variant={'solid'} />
        <h3>{`Variant: Line`}</h3>
        <Textarea placeholder={`Placeholder`} color={'neutral'} variant={'line'} />
      </VStack>
      <VStack>
        <h3>{`Variant: Solid`}</h3>
        <Textarea placeholder={`Disabled`} color={'alpha'} variant={'solid'} disabled />
        <Textarea placeholder={`Disabled`} color={'neutral'} variant={'solid'} disabled />
        <h3>{`Variant: Line`}</h3>
        <Textarea placeholder={`Disabled`} color={'neutral'} variant={'line'} disabled />
      </VStack>
    </HStack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Displays the disabled state of the TextArea component. All color variations for each variant are shown.',
      },
    },
  },
}

export const LabelVariations: Story = {
  render: () => (
    <HStack>
      <VStack>
        <Textarea
          label="Outside Label"
          labelPosition="outside"
          placeholder={`Outside Label`}
          color={'alpha'}
          variant={'solid'}
        />
        <Textarea
          label="Outside Label"
          labelPosition="outside"
          placeholder={`Outside Label`}
          color={'neutral'}
          variant={'solid'}
        />
        <Textarea
          label="Outside Label"
          labelPosition="outside"
          placeholder={`Outside Label`}
          color={'neutral'}
          variant={'line'}
        />
      </VStack>
      <VStack>
        <Textarea
          label="Required Field"
          labelPosition="outside"
          required
          placeholder={`Required`}
          color={'alpha'}
          variant={'solid'}
        />
        <Textarea
          label="Required Field"
          labelPosition="outside"
          required
          placeholder={`Required`}
          color={'neutral'}
          variant={'solid'}
        />
        <Textarea
          label="Required Field"
          labelPosition="outside"
          required
          placeholder={`Required`}
          color={'neutral'}
          variant={'line'}
        />
      </VStack>
      <VStack>
        <Textarea
          label="Inside Label"
          labelPosition="inside"
          placeholder={`Inside Label`}
          color={'alpha'}
          variant={'solid'}
        />
        <Textarea
          label="Inside Label"
          labelPosition="inside"
          placeholder={`Inside Label`}
          color={'neutral'}
          variant={'solid'}
        />
        <Textarea
          label="Inside Label"
          labelPosition="inside"
          placeholder={`Inside Label`}
          color={'neutral'}
          variant={'line'}
        />
      </VStack>
      <VStack>
        <Textarea
          label="Required Field"
          labelPosition="inside"
          required
          placeholder={`Required`}
          color={'alpha'}
          variant={'solid'}
        />
        <Textarea
          label="Required Field"
          labelPosition="inside"
          required
          placeholder={`Required`}
          color={'neutral'}
          variant={'solid'}
        />
        <Textarea
          label="Required Field"
          labelPosition="inside"
          required
          placeholder={`Required`}
          color={'neutral'}
          variant={'line'}
        />
      </VStack>
    </HStack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows label variations of the TextArea component. All color variations for each variant are displayed.',
      },
    },
  },
}

export const TextLimitExample: Story = {
  args: {
    label: 'Label',
    textLimit: 100,
    showTextCount: true,
    placeholder: 'Maximum 100 characters allowed',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Example of setting a character limit on the TextArea component and displaying the current character count.',
      },
    },
  },
}
