import '@/styles/index.less';
import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';

const app = createApp(App);

// 注册路由
setupRouter(app);
// 注册 pinia
setupStore(app);

app.mount('#app');
