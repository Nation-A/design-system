import { defineConfig as defineVitestConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { visualizer } from 'rollup-plugin-visualizer'

const isStorybook = process.env.VITE_IS_STORYBOOK === 'true'

export default defineVitestConfig({
  optimizeDeps: {
    exclude: isStorybook ? [] : ['react', 'react-dom'],
    include: ['@pandacss/dev', '@ark-ui/react'],
  },
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
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
    visualizer({
      open: false,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        toast: 'src/toast/index.ts',
        lottie: 'src/lottie/index.ts',
        providers: 'src/providers/index.ts',
      },
      name: '@nation-a/ui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: isStorybook
        ? []
        : [
            'react',
            'react-dom',
            /react-dom\/.*/,
            /^react\/.*/,
            '@nation-a/icons',
            '@nation-a/tokens',
            'react-hot-toast', // toast 진입점에서만 로드되도록 외부 의존성으로 분리
          ],
      output: {
        inlineDynamicImports: false,
        manualChunks: {
          'ark-ui': ['@ark-ui/react'],
          'react-spring': ['@react-spring/web'],
          'react-lottie': ['react-lottie'],
        },
      },
    },
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    target: 'es2018',
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
