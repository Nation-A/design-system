import { defineConfig } from '@pandacss/dev'
import { preset } from '@/theme'

export default defineConfig({
  preflight: true,
  syntax: 'object-literal',
  jsxFramework: 'react',
  jsxFactory: 'styled',
  jsxStyleProps: 'minimal',
  staticCss: {
    css: [
      {
        properties: {
          alignItems: [
            'center',
            'end',
            'flex-end',
            'flex-start',
            'self-end',
            'self-start',
            'start',
            'baseline',
            'normal',
            'stretch',
          ],
          justifyContent: [
            'center',
            'end',
            'flex-end',
            'flex-start',
            'start',
            'space-around',
            'space-between',
            'space-evenly',
            'stretch',
            'left',
            'normal',
            'right',
          ],
          flexDirection: ['column', 'column-reverse', 'row', 'row-reverse'],
          flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
          flexFlow: ['column', 'column-reverse', 'row', 'row-reverse'],
          flexBasis: ['auto', 'content', 'fit-content', 'max-content', 'min-content', 'fill', 'fit', 'max', 'min'],
          flexGrow: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          flexShrink: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          gap: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          columnGap: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          rowGap: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        },
        conditions: ['light', 'dark'],
      },
    ],
  },

  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],

  exclude: [],

  presets: [preset],

  outdir: 'styled-system',
  polyfill: true,
  clean: true,
})
