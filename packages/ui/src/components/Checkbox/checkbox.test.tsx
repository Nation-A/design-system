import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Checkbox from '.'

describe('Checkbox', () => {
  it('renders checkbox with label', () => {
    render(<Checkbox>Test Label</Checkbox>)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('handles checked state', () => {
    const onChange = vi.fn()
    render(<Checkbox onChange={onChange}>Test Label</Checkbox>)

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(onChange).toHaveBeenCalled()
    expect(checkbox).toBeChecked()
  })

  it('renders in indeterminate state', () => {
    render(<Checkbox checked="indeterminate">Indeterminate</Checkbox>)
    const control = screen.getByText('Indeterminate').previousElementSibling
    expect(control).toHaveClass('checkbox__control')
    expect(control).toHaveClass('_indeterminate')
  })

  it('renders in disabled state', () => {
    render(<Checkbox disabled>Disabled</Checkbox>)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
  })
})
