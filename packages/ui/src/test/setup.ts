import '@testing-library/jest-dom'
import { expect, afterEach, vi, beforeAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Extend Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

// Initialize DOM global mocks before any tests run
beforeAll(() => {
  // Prevent focus-related errors by defining these early
  Object.defineProperty(HTMLElement.prototype, 'focus', {
    value: vi.fn(),
    configurable: true,
    writable: true,
  })

  Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
    value: vi.fn(),
    configurable: true,
    writable: true,
  })

  // Mock document.elementFromPoint to prevent focus issues in tests
  document.elementFromPoint = vi.fn()
})

// Completely disable the problematic focus-visible module
vi.mock('@zag-js/focus-visible', () => {
  return {
    trackFocusVisible: vi.fn(),
    setupGlobalFocusEvents: vi.fn(),
    focusVisible: {
      subscribe: vi.fn(),
      setup: vi.fn(),
      teardown: vi.fn(),
    },
    defaults: {},
  }
})

vi.mock('@zag-js/dialog', () => ({
  machine: vi.fn().mockReturnValue({
    initial: 'closed',
    states: {
      open: { id: 'open' },
      closed: { id: 'closed' },
    },
  }),
  connect: vi.fn().mockImplementation(() => ({
    open: vi.fn(),
    close: vi.fn(),
    isOpen: false,
    backdropProps: {},
    contentProps: {},
    triggerProps: {},
    closeTriggerProps: {},
    titleProps: {},
    descriptionProps: {},
  })),
}))

vi.mock('@zag-js/checkbox', () => ({
  machine: vi.fn().mockReturnValue({
    initial: 'unchecked',
    states: {
      checked: { id: 'checked' },
      unchecked: { id: 'unchecked' },
      indeterminate: { id: 'indeterminate' },
    },
  }),
  connect: vi.fn().mockImplementation(() => ({
    isChecked: false,
    isIndeterminate: false,
    isDisabled: false,
    rootProps: {},
    inputProps: { 'aria-checked': false },
    controlProps: {},
    labelProps: {},
    getInputProps: vi.fn().mockReturnValue({}),
    setChecked: vi.fn(),
    setIndeterminate: vi.fn(),
    focus: vi.fn(),
  })),
}))

vi.mock('@zag-js/switch', () => ({
  machine: vi.fn().mockReturnValue({
    initial: 'unchecked',
    states: {
      checked: { id: 'checked' },
      unchecked: { id: 'unchecked' },
    },
  }),
  connect: vi.fn().mockImplementation(() => ({
    isChecked: false,
    isDisabled: false,
    rootProps: {},
    inputProps: { 'aria-checked': false },
    controlProps: {},
    thumbProps: {},
    labelProps: {},
    getInputProps: vi.fn().mockReturnValue({}),
    setChecked: vi.fn(),
    focus: vi.fn(),
  })),
}))

// Mock react-lottie to avoid canvas issues
vi.mock('react-lottie', () => ({
  default: vi.fn(() => null),
}))

// Clean up after each test case (e.g., clearing jsdom)
afterEach(() => {
  cleanup()
  vi.clearAllMocks() // vi.clearAllMocks() is used rather than vi.restoreAllMocks() to avoid removing mocks
})
