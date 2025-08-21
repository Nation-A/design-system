import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import userEvent from '@testing-library/user-event'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  // Add any custom options here if needed in the future
}

/**
 * Custom render function that includes UI providers
 */
const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  // Use your actual UI providers here if needed (theme provider, etc.)
  return {
    user: userEvent.setup(),
    ...render(ui, {
      // Default options
      ...options,
    }),
  }
}

// Re-export everything from testing-library
export * from '@testing-library/react'

// Override render method
export { customRender as render }
