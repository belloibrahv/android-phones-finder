import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['@faker-js/faker']
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]',
      }
    }
  }
});
