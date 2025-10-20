import { defineConfig } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';

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
  output: {
    polyfill: 'usage',
    overrideBrowserslist: [
      'chrome >= 61',
      'android >= 8',
      'safari >= 11',
      'last 4 versions',
      '> 1%',
      'not ie <= 9',
      'Firefox ESR',
    ],
  },
  plugins: [pluginLess()],
});
