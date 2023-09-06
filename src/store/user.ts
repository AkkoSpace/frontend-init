/*
 * @Author: yantingwei akkoyan@qq.com
 * @Date: 2023-09-06 00:16:00
 * @LastEditors: yantingwei akkoyan@qq.com
 * @LastEditTime: 2023-09-06 09:36:56
 * @FilePath: /frontend-init/src/store/user.ts
 * @Description: 用户信息
 */
// state: 存储的状态信息，比如用户信息
import { StoreOptions } from "vuex";
import ACCESS_ENUM from "@/access/accessEnum";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: ACCESS_ENUM.NOT_LOGIN,
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      // TODO 从后端获取用户信息
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
