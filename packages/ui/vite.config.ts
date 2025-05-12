import { defineConfig as defineVitestConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const isStorybook = process.env.VITE_IS_STORYBOOK === 'true'

export default defineVitestConfig({
  optimizeDeps: {
    exclude: isStorybook ? [] : ['react', 'react-dom'],
    include: ['@pandacss/dev', '@ark-ui/react'],
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: './tsconfig.json',
      insertTypesEntry: true,
      outDir: 'dist/types',
      copyDtsFiles: true,
      include: ['src/**/*', 'styled-system/**/*'],
      bundledPackages: ['@pandacss/dev', '@ark-ui/react'],

      compilerOptions: {
        preserveSymlinks: true,
        skipLibCheck: true,
      },
    }),
    !isStorybook &&
      viteStaticCopy({
        targets: [{ src: 'styled-system', dest: '' }],
      }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@nation-a/ui',
      fileName: (format) => `index.${format === 'es' ? 'js' : format}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: isStorybook ? [] : ['react', 'react-dom', /react-dom\/.*/, /^react\/.*/],
      output: {
        inlineDynamicImports: false,
      },
    },
    outDir: 'dist',
    sourcemap: true,
    minify: false,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/test/'],
    },
  },
})
