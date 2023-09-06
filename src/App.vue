<!--
 * @Author: yantingwei akkoyan@qq.com
 * @Date: 2023-09-06 00:20:20
 * @LastEditors: yantingwei akkoyan@qq.com
 * @LastEditTime: 2023-09-06 09:26:48
 * @FilePath: /frontend-init/src/App.vue
 * @Description: 入口文件
-->
<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

/**
 * 全局初始化函数，有全局单次调用的代码，都可以写到这里
 */
const doInit = () => {
  console.log("hello 欢迎来到我的项目");
};

onMounted(() => {
  doInit();
});

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  if (to.meta?.access === "canAdmin") {
    if (store.state.user.loginUser?.role !== "admin") {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>

<style>
#app {
}
</style>
