import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

import { PORT, HOST } from './constants'

export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
    host: HOST,
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  build: {
    cssCodeSplit: true, 
  },
});

