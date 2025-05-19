import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../test/utils'
import Button from './index'

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Button size="xs">XSmall Button</Button>)
    const xsButton = screen.getByText('XSmall Button')
    expect(xsButton).toBeInTheDocument()

    rerender(<Button size="sm">Small Button</Button>)
    const smButton = screen.getByText('Small Button')
    expect(smButton).toBeInTheDocument()

    rerender(<Button size="md">Medium Button</Button>)
    const mdButton = screen.getByText('Medium Button')
    expect(mdButton).toBeInTheDocument()

    rerender(<Button size="lg">Large Button</Button>)
    const lgButton = screen.getByText('Large Button')
    expect(lgButton).toBeInTheDocument()
  })

  it('applies different variants correctly', () => {
    const { rerender } = render(<Button variant="solid">Solid Button</Button>)
    const solidButton = screen.getByText('Solid Button')
    expect(solidButton).toBeInTheDocument()

    rerender(<Button variant="outline">Outline Button</Button>)
    const outlineButton = screen.getByText('Outline Button')
    expect(outlineButton).toBeInTheDocument()

    rerender(<Button variant="light">Light Button</Button>)
    const lightButton = screen.getByText('Light Button')
    expect(lightButton).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    expect(screen.getByText('Disabled Button')).toBeDisabled()
  })

  it('shows loading state when loading is true', () => {
    render(<Button loading>Button Text</Button>)

    // When loading, the text should be visually hidden but still in the DOM
    const buttonText = screen.getByText('Button Text')
    expect(buttonText).toBeInTheDocument()

    // The spinner should be visible
    const spinnerElement = document.querySelector('[id="spinner"]')
    expect(spinnerElement).toBeInTheDocument()
  })

  it('shows loading text when both loading and loadingText props are provided', () => {
    render(
      <Button loading loadingText="Loading...">
        Button Text
      </Button>,
    )
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.queryByText('Button Text')).not.toBeInTheDocument()
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn()
    const { user } = render(
      <Button onClick={handleClick} data-testid="clickable-button">
        Clickable
      </Button>,
    )

    await user.click(screen.getByTestId('clickable-button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn()
    const { user } = render(
      <Button disabled onClick={handleClick} data-testid="disabled-button">
        Disabled
      </Button>,
    )

    await user.click(screen.getByTestId('disabled-button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('does not call onClick when loading', async () => {
    const handleClick = vi.fn()
    const { user } = render(
      <Button loading onClick={handleClick} data-testid="loading-button">
        Loading
      </Button>,
    )

    await user.click(screen.getByTestId('loading-button'))
    expect(handleClick).not.toHaveBeenCalled()
  })
})
