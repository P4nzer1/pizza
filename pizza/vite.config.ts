import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  css: {
    modules: {
      scopeBehaviour: 'local', 
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    },
   
  },
  build: {
    cssCodeSplit: false, 
  },
});