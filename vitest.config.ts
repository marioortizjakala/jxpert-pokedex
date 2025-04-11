import path from 'path';

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Resolve @ as src directory
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
};
