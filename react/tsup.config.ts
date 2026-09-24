import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    splitting: true,
    clean: true,
    dts: true,
    // Unambiguous extensions: no react/package.json survives packing to declare "type", see root exports.
    outExtension: ({ format }) => ({ js: format === 'esm' ? '.mjs' : '.cjs' }),
});