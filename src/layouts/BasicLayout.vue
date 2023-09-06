<!--
 * @Author: yantingwei akkoyan@qq.com
 * @Date: 2023-09-05 23:47:08
 * @LastEditors: yantingwei akkoyan@qq.com
 * @LastEditTime: 2023-09-06 09:25:38
 * @FilePath: /frontend-init/src/layouts/BasicLayout.vue
 * @Description: 基础布局
-->
<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>
#basicLayout {
}

#basicLayout .header {
  margin-bottom: 16px;
  box-shadow: 0 2px 8px #f0f1f2;
}

#basicLayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 16px;
  padding: 16px;
}

#basicLayout .footer {
  background: green;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
