import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Tag from '.'

describe('Tag', () => {
  it('renders tag with text', () => {
    render(<Tag text="Test Tag" />)
    expect(screen.getByText('Test Tag')).toBeInTheDocument()
  })

  it('renders tag with image', () => {
    const imageSrc = 'https://example.com/image.jpg'
    render(<Tag text="Test Tag" imageSrc={imageSrc} />)

    const image = screen.getByAltText('avatar thumbnail')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', imageSrc)
  })

  it('handles delete click', () => {
    const onDeleteClick = vi.fn()
    render(<Tag text="Test Tag" onDeleteClick={onDeleteClick} />)

    const closeIcon = screen.getByText('Test Tag').nextElementSibling as HTMLElement
    fireEvent.click(closeIcon)

    expect(onDeleteClick).toHaveBeenCalled()
  })

  it('renders with different colors and backgrounds', () => {
    const { rerender } = render(<Tag text="Test Tag" color="neutral" background="on" />)
    const tag = screen.getByText('Test Tag').closest('div')
    expect(tag).toHaveClass('bg_background.neutral.selected')
    expect(tag).toHaveClass('c_content.neutral.default')

    rerender(<Tag text="Test Tag" color="black" background="off" />)
    expect(tag).toHaveClass('bg_transparent')
    expect(tag).toHaveClass('c_content.static.black.default')
  })

  it('renders with different radius', () => {
    const { rerender } = render(<Tag text="Test Tag" radius="sm" />)
    const tag = screen.getByText('Test Tag').closest('div')
    expect(tag).toHaveClass('bdr_sm')

    rerender(<Tag text="Test Tag" radius="full" />)
    expect(tag).toHaveClass('bdr_full')
  })
})
