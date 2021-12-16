<template>
  <ClientOnly>
    <LazyTest />
  </ClientOnly>
</template>

<script setup>
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
