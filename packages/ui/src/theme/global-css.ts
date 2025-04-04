import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  'html, body': {
    margin: 0,
    padding: 0,
    maxWidth: '100vw',
    color: 'content.neutral.default',
    backgroundColor: 'surface.base',
  },
})
