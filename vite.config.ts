import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[local]_[hash:base64:5]',
    }
  },
  base: '/',
  build: {
    // Simplify the build output
    outDir: 'dist',
    // Avoid manualChunks since it could be causing issues
    rollupOptions: {
      output: {
        // Ensure assets have consistent names
        assetFileNames: 'assets/[name].[hash].[ext]',
        // Use a simpler chunk structure
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
});