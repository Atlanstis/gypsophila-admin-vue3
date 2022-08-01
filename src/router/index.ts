/**
 * 查看更多：
 * https://router.vuejs.org/zh/guide/
 */

import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Description from '@/views/description/index.vue';

// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
  // 创建一个 hash 历史记录。
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  // 应该添加到路由的初始路由列表。
  routes: [{ path: '/', component: Description }],
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router);
}
