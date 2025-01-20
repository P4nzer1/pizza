import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { PORT, HOST } from './constants';

export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
    host: HOST,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/shared/styles/global.scss";`,
        includePaths: [path.resolve(__dirname, 'src')]
      },
    },
  },
  build: {
    cssCodeSplit: false,
  },
});