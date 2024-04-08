import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [devtools(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    lib: {
      entry: fileURLToPath(new URL('./src/index.tsx', import.meta.url)),
      name: 'SolidExample',
      fileName: 'index',
    },
  },
});
