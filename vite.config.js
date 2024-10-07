import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist'
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/imports.scss";
          @import "./src/assets/scss/global.scss";
          @import "material-design-icons-iconfont/dist/material-design-icons";
        `
      }
    }
  }
})
