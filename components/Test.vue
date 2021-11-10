<template>
  <Renderer ref="rendererC" antialias resize="window">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="boxC" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>

<script setup>
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs'

const rendererC = ref(null)
const boxC = ref(null)

onMounted(() => {
  const renderer = rendererC.value
  const mesh = boxC.value.mesh
  renderer.onBeforeRender(() => {
    mesh.rotation.x += 0.01;
  })
})
</script>
