# UI Component Testing

This directory contains the testing setup for the UI component library.

## Setup

The testing environment uses:

- Vitest - Test runner
- React Testing Library - For testing React components
- Happy DOM - For DOM simulation
- Jest DOM - For additional DOM matchers

## Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## Test Structure

Each component should have a corresponding `.test.tsx` file that tests:

- Basic rendering
- Props functionality
- User interactions
- Accessibility features

## Known Issues

### Ark UI Components

Components using Ark UI (Checkbox, Switch, etc.) may have issues with:

- aria-checked attributes
- Event handlers
- Focus management

This is because Ark UI uses a different approach to state management and DOM interaction.

### Styling Tests

Components using Panda CSS may have different class names than expected in tests.
Instead of testing specific class names, test the rendered output or component behavior.

### Canvas Rendering

Components that use canvas rendering (like Button's Spinner component in loading state)
may have issues in the test environment. These should be mocked or tested differently.

## Tips for Writing Tests

1. Focus on testing behavior, not implementation details
2. Use `screen.getByRole` where possible for better accessibility
3. For event testing, use `userEvent` over `fireEvent`
4. Write descriptive test names that explain what the test is checking
5. Mock complex external dependencies
