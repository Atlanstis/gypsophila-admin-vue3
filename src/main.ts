import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from '@/router';

const app = createApp(App);

// 注册路由
setupRouter(app);

app.mount('#app');
