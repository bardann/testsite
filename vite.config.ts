import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/testsite/', // Replace 'repository-name' with your repo's name
  build: {
    outDir: 'dist',  // The folder Vite will use to store the built files
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
