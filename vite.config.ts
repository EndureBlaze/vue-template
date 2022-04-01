import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@page': resolve(__dirname, 'src/page'),
      '@img': resolve(__dirname, 'src/assets/img'),
    },
  },
  base: './',
  server: {
    port: 3000,
  },
  define: {
    'process.env.BASE_URL': '"/"',
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 100,
          propList: ['*'],
          unitPrecision: 5,
          replace: true,
          mediaQuery: false,
        }),
      ],
    },
  },
})
