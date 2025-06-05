import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), solidPlugin()],
  server: {
    port: 3000,
    host: true, // Accept requests from external hosts like Netlify preview
    strictPort: true,
    hmr: {
      host: 'devserver-preview--acrex.netlify.app',
      protocol: 'wss',
    }
  },
  build: {
    target: 'esnext',
  },
});
