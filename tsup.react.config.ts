import { defineConfig } from 'tsup';

// Output lands at repo root (react-dist/), not nested inside react/, so pnpm's
// git-dependency snapshotting keeps it — see /react-dist in .gitignore and the
// root package.json "exports" mapping for "./react".
export default defineConfig({
    entry: { index: 'react/src/index.ts' },
    outDir: 'react-dist',
    tsconfig: 'react/tsconfig.json',
    format: ['esm', 'cjs'],
    splitting: false,
    clean: true,
    dts: true,
    outExtension: ({ format }) => ({ js: format === 'esm' ? '.mjs' : '.cjs' }),
});
