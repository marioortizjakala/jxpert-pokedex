import path from 'path';

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul', // or 'v8'
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/__fixtures__/**',
        '**/vite.config.ts',
        '**/vitest.config.ts',
        '**/pokeApiDTO.ts',
        '**/App.tsx',
        '**/main.tsx',
        '**/Router.tsx',
        // '**/*.d.ts',
      ],
    },
  },
};
