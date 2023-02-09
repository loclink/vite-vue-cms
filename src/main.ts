import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import App from './App.vue';
import router from '@/router';
import 'normalize.css';
import '@/assets/css/base.scss';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(ElementPlus, { size: 'large', zIndex: 3999 });
app.mount('#app');
