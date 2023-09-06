/*
 * @Author: yantingwei akkoyan@qq.com
 * @Date: 2023-09-04 23:35:57
 * @LastEditors: yantingwei akkoyan@qq.com
 * @LastEditTime: 2023-09-06 09:37:06
 * @FilePath: /frontend-init/src/store/index.ts
 * @Description: vuex
 */
import { createStore } from "vuex";
import user from "./user";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
  },
});
