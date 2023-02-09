<script setup lang="ts">
import { toRefs } from 'vue';

const emits = defineEmits(['exhibition']);
const props = defineProps({
  isFold: {
    type: Boolean,
    default: true
  }
});
const { isFold } = toRefs(props);
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
    <div class="header-content"></div>
    <div class="header-right"></div>
  </div>
</template>

<style scoped lang="scss">
.cms-header {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
