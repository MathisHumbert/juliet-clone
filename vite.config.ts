import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRouter from 'vite-plugin-react-router';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRouter()],
});
