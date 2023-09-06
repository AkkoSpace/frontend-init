/*
 * @Author: yantingwei akkoyan@qq.com
 * @Date: 2023-09-03 22:09:32
 * @LastEditors: yantingwei akkoyan@qq.com
 * @LastEditTime: 2023-09-06 09:27:49
 * @FilePath: /frontend-init/src/router/index.ts
 * @Description: 路由配置
 */
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
