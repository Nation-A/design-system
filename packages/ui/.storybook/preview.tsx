import type { Preview, ReactRenderer } from '@storybook/react-vite'
import { withThemeByClassName } from '@storybook/addon-themes'
import './index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],

  tags: ['autodocs']
}

export default preview
