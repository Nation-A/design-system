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
      rollupTypes: true,
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: '@nation-a/ui',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? `esm/index.mjs` : `cjs/index.cjs`),
    },
    rollupOptions: {
      external: ['react', /^react\/.*/, 'react-dom', /react-dom\/.*/], // React는 외부 의존성으로 처리
      output: {
        dir: 'dist',
        exports: 'auto',
        paths: {
          '@nation-a/ui': './src/index.ts',
        },
      },
    },
    outDir: 'dist',
    sourcemap: true,
    minify: true,
  },
})
