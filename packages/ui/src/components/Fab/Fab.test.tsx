import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../test/utils'
import Fab from './index'

describe('Fab', () => {
  it('renders correctly with default props', () => {
    render(<Fab>Click me</Fab>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Fab size="xs">XSmall Fab</Fab>)
    const xsFab = screen.getByText('XSmall Fab')
    expect(xsFab).toBeInTheDocument()

    rerender(<Fab size="sm">Small Fab</Fab>)
    const smFab = screen.getByText('Small Fab')
    expect(smFab).toBeInTheDocument()

    rerender(<Fab size="md">Medium Fab</Fab>)
    const mdFab = screen.getByText('Medium Fab')
    expect(mdFab).toBeInTheDocument()

    rerender(<Fab size="lg">Large Fab</Fab>)
    const lgFab = screen.getByText('Large Fab')
    expect(lgFab).toBeInTheDocument()
  })

  it('applies different variants correctly', () => {
    const { rerender } = render(<Fab variant="solid">Solid Fab</Fab>)
    const solidFab = screen.getByText('Solid Fab')
    expect(solidFab).toBeInTheDocument()

    rerender(<Fab variant="outline">Outline Fab</Fab>)
    const outlineFab = screen.getByText('Outline Fab')
    expect(outlineFab).toBeInTheDocument()

    rerender(<Fab variant="light">Light Fab</Fab>)
    const lightFab = screen.getByText('Light Fab')
    expect(lightFab).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(<Fab disabled>Disabled Fab</Fab>)
    expect(screen.getByText('Disabled Fab')).toBeDisabled()
  })

  it('shows loading state when loading is true', () => {
    render(<Fab loading>Fab Text</Fab>)

    // When loading, the text should be visually hidden but still in the DOM
    const buttonText = screen.getByText('Fab Text')
    expect(buttonText).toBeInTheDocument()

    // The spinner should be visible
    const spinnerElement = document.querySelector('[id="spinner"]')
    expect(spinnerElement).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn()
    const { user } = render(
      <Fab onClick={handleClick} data-testid="clickable-button">
        Clickable
      </Fab>,
    )

    await user.click(screen.getByTestId('clickable-button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn()
    const { user } = render(
      <Fab disabled onClick={handleClick} data-testid="disabled-button">
        Disabled
      </Fab>,
    )

    await user.click(screen.getByTestId('disabled-button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('does not call onClick when loading', async () => {
    const handleClick = vi.fn()
    const { user } = render(
      <Fab loading onClick={handleClick} data-testid="loading-button">
        Loading
      </Fab>,
    )

    await user.click(screen.getByTestId('loading-button'))
    expect(handleClick).not.toHaveBeenCalled()
  })
})
