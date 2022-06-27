import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import i18n from './i18n'
import '@/common/rem'

createApp(App).use(i18n).use(router).mount('#app')
