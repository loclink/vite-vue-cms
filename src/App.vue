<script setup lang="ts"></script>

<template>
  <div class="app">
    <RouterView v-slot="props"><component :is="props.Component"></component> </RouterView>
    <RouterView name="Login"></RouterView>
  </div>
</template>

<style scoped></style>
