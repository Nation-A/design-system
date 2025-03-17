import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      entryRoot: 'src/components',
      tsconfigPath: './tsconfig.app.json',
      insertTypesEntry: true,
      outDir: 'dist/types',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NationaUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', /^react\/.*/, 'react-dom', /react-dom\/.*/], // React는 외부 의존성으로 처리
    },
  },
})
