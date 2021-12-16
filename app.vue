<template>
  <ClientOnly>
    <Test />
  </ClientOnly>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const Test = defineAsyncComponent(() => import('./components/troisjs/Test.vue'))
</script>

<style>
html, body {
  margin: 0;
}
html, body, body > div, body > div > div {
  height: 100%;
}
canvas {
  display: block;
}
</style>
