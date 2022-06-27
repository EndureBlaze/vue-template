import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import postCssPxToRem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-import.d.ts',
    }),
    Components({
      resolvers: [NaiveUiResolver()],

      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@page': resolve(__dirname, 'src/page'),
      '@img': resolve(__dirname, 'src/assets/img'),
    },
  },
  base: './',
  define: {
    'process.env.BASE_URL': '"/"',
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8',
            '> 1%',
          ],
          grid: true,
        }),
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
