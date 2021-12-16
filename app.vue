<template>
  <ClientOnly>
    <LazyTest v-if="isMounted" />
  </ClientOnly>
</template>

<script setup>
const isMounted = ref(false)
onMounted(() => {
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
