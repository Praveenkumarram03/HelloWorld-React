import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@': path.resolve(__dirname, 'src'), // Alias for the src folder
    },
  },
});



