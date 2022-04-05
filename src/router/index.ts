import { createRouter, createWebHistory } from "vue-router";
// import Test from '@/views/test.vue'
// import Index from '@/views/index.vue'
// 路由信息
const routes: never[] = [
//   {
//     path: "/",
//     name: "Index",
//     component: Index,
//   },
//   {
//     path: "/test",
//     name: "test",
//     component: Test,
//   },
];

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;