/*
 * @Author: yantingwei akkoyan@qq.com
 * @Date: 2023-09-06 00:06:46
 * @LastEditors: yantingwei akkoyan@qq.com
 * @LastEditTime: 2023-09-06 09:28:03
 * @FilePath: /frontend-init/src/router/routes.ts
 * @Description: 路由配置
 */
import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import noAuthView from "@/views/NoAuthView.vue";
import ACCESS_ENUM from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/noAuth",
    name: "noAuth",
    component: noAuthView,
  },
  {
    path: "/hide",
    name: "hide",
    component: noAuthView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/about",
    name: "关于",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
