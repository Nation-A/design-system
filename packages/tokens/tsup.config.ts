import { defineConfig } from 'tsup'

export default defineConfig({
  name: '@nation-a/tokens',
  entry: ['src/pandacss.ts', 'src/emotion.ts', 'src/index.ts'],
  tsconfig: 'tsconfig.json',
  format: ['cjs', 'esm'],
  dts: {
    resolve: true,
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
})
