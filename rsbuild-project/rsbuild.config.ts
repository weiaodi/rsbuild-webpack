import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  source: {
    decorators: {
      version: 'legacy',
    },
    entry: {
      demo: {
        import: ['./src/index.ts'],
      },
    },
  },
});
