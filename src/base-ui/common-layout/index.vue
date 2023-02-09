<script setup lang="ts">
import { ref } from 'vue';
import CmsSidebar from './cpns/cms-sidebar/index.vue';
import CmsHeader from './cpns/cms-header/index.vue';
import { routes } from '@/router';
import { handleMenuMap } from '@/utils';

const menuCollapse = ref(false);
const handleExhibition = () => {
  menuCollapse.value = !menuCollapse.value;
};
</script>

<script lang="ts">
export default { name: 'common-layout' };
</script>

<template>
  <div class="common-layout">
    <ElContainer class="cms-container">
      <CmsSidebar :menu-collapse="menuCollapse" :routes="handleMenuMap(routes)"></CmsSidebar>
      <ElContainer>
        <ElHeader class="header">
          <CmsHeader @exhibition="handleExhibition" :is-fold="menuCollapse"></CmsHeader>
        </ElHeader>
        <ElMain>
          <RouterView></RouterView>
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<style lang="scss">
.common-layout {
  height: 100%;

  .cms-container {
    height: 100%;
    .header {
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
