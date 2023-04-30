import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        /* eslint-disable no-undef */
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        license: resolve(__dirname, 'license/index.html'),
        nicholas: resolve(__dirname, 'nicholas/index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        search: resolve(__dirname, 'search/index.html'),
        404: resolve(__dirname, '404/404.html')
        /* eslint-enable no-undef */
      }
    }
  },
  assetsInclude: ['**/*.md']
})
