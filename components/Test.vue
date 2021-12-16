<template>
  <Slider :images="images" />
</template>

<script setup lang="ts">
import Slider from '@troisjs/components/src/sliders/explode/Slider.vue'

const images = [
  { src: 'https://troisjs.github.io/assets/images/img1.jpg' },
  { src: 'https://troisjs.github.io/assets/images/img2.jpg' },
  { src: 'https://troisjs.github.io/assets/images/img3.jpg' },
  { src: 'https://troisjs.github.io/assets/images/img4.jpg' }
]
</script>
