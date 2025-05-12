import { describe, it, expect } from 'vitest'
import { render, screen } from '../../test/utils'
import Text from './index'
import { createRef } from 'react'

describe('Text', () => {
  it('renders correctly with default props', () => {
    render(<Text>Hello world</Text>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()

    // Default should be a paragraph
    const element = screen.getByText('Hello world')
    expect(element.tagName).toBe('P')
  })

  it('renders different typography variants with correct HTML tags', () => {
    const { rerender } = render(<Text variant="display.lg">Display</Text>)
    let element = screen.getByText('Display')
    expect(element.tagName).toBe('H1')

    rerender(<Text variant="headline.md">Headline</Text>)
    element = screen.getByText('Headline')
    expect(element.tagName).toBe('H2')

    rerender(<Text variant="title.md">Title</Text>)
    element = screen.getByText('Title')
    expect(element.tagName).toBe('H3')

    rerender(<Text variant="body.md">Body</Text>)
    element = screen.getByText('Body')
    expect(element.tagName).toBe('P')

    rerender(<Text variant="label.md">Label</Text>)
    element = screen.getByText('Label')
    expect(element.tagName).toBe('SPAN')
  })

  it('applies font variants correctly', () => {
    const { rerender } = render(
      <Text data-testid="inter-font" font="inter">
        Inter font
      </Text>,
    )
    let element = screen.getByTestId('inter-font')
    expect(element).toHaveClass('ff_inter')

    rerender(
      <Text data-testid="noto-sans-font" font="notoSans">
        Noto Sans font
      </Text>,
    )
    element = screen.getByTestId('noto-sans-font')
    expect(element).toHaveClass('ff_notoSans')
  })

  it('forwards ref to the underlying DOM element', () => {
    const ref = createRef<HTMLParagraphElement>()
    render(<Text ref={ref}>Ref forwarding</Text>)
    expect(ref.current).not.toBeNull()
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement)
  })

  it('passes additional props to the DOM element', () => {
    render(
      <Text data-testid="custom-text" title="tooltip">
        Custom attributes
      </Text>,
    )
    const element = screen.getByTestId('custom-text')
    expect(element).toHaveAttribute('title', 'tooltip')
  })
})
