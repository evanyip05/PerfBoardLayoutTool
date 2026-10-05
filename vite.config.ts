import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import pkg from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // replaces %SITE_TITLE% in index.html
      name: 'site-config-html',
      transformIndexHtml: html => html.replaceAll('%SITE_TITLE%', pkg.displayName)
    }
  ],
  base: `/${pkg.name}/`,

  // available in app code as globals (declared in src/vite-env.d.ts)
  define: {
    __SITE_TITLE__: JSON.stringify(pkg.displayName)
  },

  // does not work D:
  resolve: {
    alias: {
      '@Components': resolve(__dirname, 'src/Components')
    }
  }
})
