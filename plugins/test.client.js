import { defineNuxtPlugin } from '#app'
import Test from './test/Test.vue'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('Test', Test)
})
