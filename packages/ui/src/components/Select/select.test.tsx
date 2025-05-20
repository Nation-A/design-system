import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Select, { createListCollection } from '.'

interface Item {
  label: string
  value: string
}

const items: Item[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

const collection = createListCollection({
  items,
  itemToString: (item) => item.label,
  itemToValue: (item) => item.value,
})

describe('Select', () => {
  it('renders select with label', () => {
    render(
      <Select.Root collection={collection}>
        <Select.Label>Test Label</Select.Label>
        <Select.Control>
          <Select.Trigger>Select an option</Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            {items.map((item) => (
              <Select.Item key={item.value} item={item}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>,
    )

    expect(screen.getByText('Test Label')).toBeInTheDocument()
    expect(screen.getByText('Select an option')).toBeInTheDocument()
  })

  it('opens dropdown on click', () => {
    render(
      <Select.Root collection={collection}>
        <Select.Control>
          <Select.Trigger>Select an option</Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            {items.map((item) => (
              <Select.Item key={item.value} item={item}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>,
    )

    const trigger = screen.getByText('Select an option')
    fireEvent.click(trigger)

    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
    expect(screen.getByText('Option 3')).toBeInTheDocument()
  })

  it('renders with description', () => {
    render(
      <Select.Root collection={collection}>
        <Select.Control>
          <Select.Trigger description="Helper text">Select an option</Select.Trigger>
        </Select.Control>
      </Select.Root>,
    )

    expect(screen.getByText('Helper text')).toBeInTheDocument()
  })
})
