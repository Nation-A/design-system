import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outputDir: 'dist/types',
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Icons',
      fileName: (format) => `icons.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // React는 외부 의존성으로 처리
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    outDir: 'dist',
    sourcemap: true,
    minify: true
  },
});