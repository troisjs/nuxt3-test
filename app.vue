<template>
  <ClientOnly>
    <Test v-if="isMounted" />
  </ClientOnly>
</template>

<script setup>
import { defineAsyncComponent, defineComponent, h, onMounted } from 'vue'

let render = []
const Test = defineComponent({ render() { return render } })

const isMounted = ref(false)
onMounted(() => {
  render = h(defineAsyncComponent(() => import('./components/troisjs/Test.vue')))
  isMounted.value = true
})
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
