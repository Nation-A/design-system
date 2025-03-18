import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'src/components',
      tsconfigPath: './tsconfig.json',
      insertTypesEntry: true,
      outDir: 'dist/types',
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@nation-a/icons',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : format}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', /^react\/.*/, 'react-dom', /react-dom\/.*/], // React는 외부 의존성으로 처리
    },
    outDir: 'dist',
    sourcemap: true,
    minify: true,
  },
})
