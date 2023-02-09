<script setup lang="ts">
import Typed from 'typed.js';
import { onMounted, ref, StyleValue } from 'vue';
const typedRef = ref<Element>();
interface Props {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  style?: StyleValue;
}

const props = withDefaults(defineProps<Props>(), {
  typeSpeed: 70,
  backSpeed: 50
});

onMounted(() => {
  typedRef.value &&
    new Typed(typedRef.value, {
      strings: props.strings,
      typeSpeed: props.typeSpeed,
      backSpeed: props.backSpeed
    });
});
</script>

<script lang="ts">
export default { name: 'loclink-typed' };
</script>

<template>
  <div class="loclink-typed" :style="props.style">
    <span ref="typedRef"></span>
  </div>
</template>

<style scoped lang="scss"></style>
