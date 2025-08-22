import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../test/utils'
import IconButton from './index'
import { AddOutlineIcon } from '@nation-a/icons'

describe('IconButton', () => {
  it('renders correctly with default props', () => {
    render(
      <IconButton data-testid="icon-button">
        <AddOutlineIcon />
      </IconButton>,
    )
    expect(screen.getByTestId('icon-button')).toBeInTheDocument()
  })

  it('applies different sizes correctly', () => {
    const { rerender } = render(
      <IconButton data-testid="icon-button-sm" size="sm">
        <AddOutlineIcon />
      </IconButton>,
    )
    const smIconButton = screen.getByTestId('icon-button-sm')
    expect(smIconButton).toBeInTheDocument()

    rerender(
      <IconButton data-testid="icon-button-md" size="md">
        <AddOutlineIcon />
      </IconButton>,
    )
    const mdIconButton = screen.getByTestId('icon-button-md')
    expect(mdIconButton).toBeInTheDocument()

    rerender(
      <IconButton data-testid="icon-button-lg" size="lg">
        <AddOutlineIcon />
      </IconButton>,
    )
    const lgIconButton = screen.getByTestId('icon-button-lg')
    expect(lgIconButton).toBeInTheDocument()
  })

  it('applies different variants correctly', () => {
    const { rerender } = render(
      <IconButton data-testid="icon-button-solid" variant="solid">
        <AddOutlineIcon />
      </IconButton>,
    )
    const solidIconButton = screen.getByTestId('icon-button-solid')
    expect(solidIconButton).toBeInTheDocument()

    rerender(
      <IconButton data-testid="icon-button-outline" variant="outline">
        <AddOutlineIcon />
      </IconButton>,
    )
    const outlineIconButton = screen.getByTestId('icon-button-outline')
    expect(outlineIconButton).toBeInTheDocument()

    rerender(
      <IconButton data-testid="icon-button-light" variant="light">
        <AddOutlineIcon />
      </IconButton>,
    )
    const lightIconButton = screen.getByTestId('icon-button-light')
    expect(lightIconButton).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(
      <IconButton data-testid="icon-button-disabled" disabled>
        <AddOutlineIcon />
      </IconButton>,
    )
    const disabledIconButton = screen.getByTestId('icon-button-disabled')
    expect(disabledIconButton).toBeDisabled()
  })

  it('shows loading state when loading is true', () => {
    render(
      <IconButton data-testid="icon-button-loading" loading>
        <AddOutlineIcon />
      </IconButton>,
    )

    // When loading, the text should be visually hidden but still in the DOM
    const buttonText = screen.getByTestId('icon-button-loading')
    expect(buttonText).toBeInTheDocument()

    // The spinner should be visible
    const spinnerElement = document.querySelector('[id="spinner"]')
    expect(spinnerElement).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn()
    const { user } = render(
      <IconButton onClick={handleClick} data-testid="clickable-button">
        <AddOutlineIcon />
      </IconButton>,
    )

    await user.click(screen.getByTestId('clickable-button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn()
    const { user } = render(
      <IconButton disabled onClick={handleClick} data-testid="disabled-button">
        <AddOutlineIcon />
      </IconButton>,
    )

    await user.click(screen.getByTestId('disabled-button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('does not call onClick when loading', async () => {
    const handleClick = vi.fn()
    const { user } = render(
      <IconButton loading onClick={handleClick} data-testid="loading-button">
        <AddOutlineIcon />
      </IconButton>,
    )

    await user.click(screen.getByTestId('loading-button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies different colors correctly', () => {
    const { rerender } = render(
      <IconButton data-testid="icon-button-primary" color="heyd_primary">
        <AddOutlineIcon />
      </IconButton>,
    )
    const primaryIconButton = screen.getByTestId('icon-button-primary')
    expect(primaryIconButton).toHaveClass('bg_background.heydPrimary.default')

    rerender(
      <IconButton variant="outline" data-testid="icon-button-outline-primary" color="heyd_primary">
        <AddOutlineIcon />
      </IconButton>,
    )
    const outlinePrimaryIconButton = screen.getByTestId('icon-button-outline-primary')
    expect(outlinePrimaryIconButton).not.toHaveClass('bg_background.heydPrimary.default')

    rerender(
      <IconButton variant="light" data-testid="icon-button-light-primary" color="heyd_primary">
        <AddOutlineIcon />
      </IconButton>,
    )
    const lightPrimaryIconButton = screen.getByTestId('icon-button-light-primary')
    expect(lightPrimaryIconButton).not.toHaveClass('bg_background.heydPrimary.default')
  })

  it('applies preserveIconSize prop correctly', () => {
    const { rerender } = render(
      <IconButton data-testid="icon-button-default">
        <AddOutlineIcon />
      </IconButton>,
    )
    const defaultIconButton = screen.getByTestId('icon-button-default')
    expect(defaultIconButton).not.toHaveAttribute('data-preserve-icon-size')

    rerender(
      <IconButton data-testid="icon-button-preserve" preserveIconSize>
        <AddOutlineIcon />
      </IconButton>,
    )
    const preserveIconButton = screen.getByTestId('icon-button-preserve')
    expect(preserveIconButton).toHaveAttribute('data-preserve-icon-size', 'true')

    rerender(
      <IconButton data-testid="icon-button-no-preserve" preserveIconSize={false}>
        <AddOutlineIcon />
      </IconButton>,
    )
    const noPreserveIconButton = screen.getByTestId('icon-button-no-preserve')
    expect(noPreserveIconButton).toHaveAttribute('data-preserve-icon-size', 'false')
  })
})
