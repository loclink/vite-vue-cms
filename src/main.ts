import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import App from './App.vue';
import router from '@/router';
import { loadOhMyLive2D } from 'oh-my-live2d';
import 'normalize.css';
import '@/assets/css/base.scss';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

loadOhMyLive2D({});

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(ElementPlus, { size: 'large', zIndex: 3999 });
app.mount('#app');
