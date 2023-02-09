<script setup lang="ts">
import { toRefs } from 'vue';
import { RouteRecordRaw, useRoute } from 'vue-router';

interface Props {
  menuCollapse: boolean;
  routes: RouteRecordRaw[];
}

const props = defineProps<Props>();
const { menuCollapse } = toRefs(props);

const route = useRoute();
console.log();
</script>

<script lang="ts">
export default { name: 'cms-sidebar' };
</script>

<template>
  <ElMenu
    mode="vertical"
    :collapse="menuCollapse"
    active-text-color="#ffd04b"
    background-color="#304156"
    class="side-menu"
    text-color="#fff"
    :default-active="route.path"
    router
  >
    <template v-for="(item, index) of routes" :key="index">
      <ElSubMenu v-if="item.children" :index="item.path">
        <template #title>
          <el-icon><component :is="item.meta!.icon" /></el-icon>
          <span>{{ item.name }}</span>
        </template>

        <template v-for="(child, indey) of item.children" :key="indey">
          <ElMenuItem :index="child.path">
            <span>{{ child.name }}</span>
          </ElMenuItem>
        </template>
      </ElSubMenu>

      <ElMenuItem v-else :index="item.path">
        <el-icon> <component :is="item.meta!.icon" /> </el-icon>
        <span>{{ item.name }}</span>
      </ElMenuItem>
    </template>
  </ElMenu>
</template>

<style scoped lang="scss">
.side-menu:not(.el-menu--collapse) {
  width: 240px;
}
.side-menu {
  :deep(.el-menu-item),
  :deep(.el-sub-menu__title) {
    font-size: 18px;
  }
}
</style>
