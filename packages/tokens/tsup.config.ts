import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'tokens',
  entry: ['src/index.ts'],
  tsconfig: 'tsconfig.json',
  format: ['cjs', 'esm'],
  dts: {
    entry: 'src/index.ts',
    resolve: true,
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
})
