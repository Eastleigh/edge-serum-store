import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensures Vite uses root directory
  publicDir: 'public', // Serves files from `public`
});
