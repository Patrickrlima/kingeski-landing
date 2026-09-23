import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Caminhos relativos nos assets gerados — assim o build funciona tanto na
  // raiz do domínio quanto publicado em um subcaminho (ex: prévia hospedada).
  base: './',
  build: {
    target: 'es2019',
    cssCodeSplit: true,
    sourcemap: false,
  },
});
