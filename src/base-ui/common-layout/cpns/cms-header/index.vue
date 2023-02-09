<script setup lang="ts">
import { ref, toRefs } from 'vue';
import LoclinkTyped from '@/base-ui/loclink-typed/index.vue';

const emits = defineEmits(['exhibition']);
const props = defineProps({
  isFold: {
    type: Boolean,
    default: true
  }
});

const { isFold } = toRefs(props);

const strings = ref([
  'Vite + Vue3 + TypeScript 的内容管理系统',
  '通篇使用CompositionAPI开发',
  '路由器使用：Vue-Router',
  '状态管理使用：Pinia',
  "欢迎您体验"
]);

const handleClickExhibitionBtn = () => {
  emits('exhibition');
};
</script>

<script lang="ts">
export default { name: 'cms-header' };
</script>

<template>
  <div class="cms-header">
    <div class="header-left">
      <div class="exhibition-btn" @click="handleClickExhibitionBtn">
        <el-icon :size="26">
          <Fold v-if="!isFold" />
          <Expand v-else />
        </el-icon>
      </div>
    </div>
    <div class="header-content">
      <LoclinkTyped
        :strings="strings"
        :style="{
          fontSize: '26px'
        }"
      />
    </div>
    <div class="header-right">btn</div>
  </div>
</template>

<style scoped lang="scss">
.cms-header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-content {
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
  }
}
</style>
