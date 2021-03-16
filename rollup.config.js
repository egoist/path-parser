import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'

/** @type {import('rollup').Plugin} */
const replace = {
  transform(code) {
    return code.replace(
      /\b__DEV__\b/g,
      `process.env.NODE_ENV === 'development'`,
    )
  },
}

/** @type {import('rollup').RollupOptions} */
const jsConfig = {
  input: './src/index.ts',
  plugins: [esbuild({}), replace],
  output: [
    { file: 'dist/index.mjs', format: 'esm' },
    { file: 'dist/index.js', format: 'cjs' },
  ],
}

/** @type {import('rollup').RollupOptions} */
const dtsConfig = {
  input: './src/index.ts',
  plugins: [dts()],
  output: {
    dir: 'dist',
    format: 'esm',
  },
}

export default [jsConfig, dtsConfig]
