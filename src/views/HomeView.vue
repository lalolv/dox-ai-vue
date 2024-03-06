<script setup>
import { ref } from 'vue'
import { DoxSend, DoxSearch } from '@/components'

const value = ref('')
const active = ref(false)
</script>

<template>
  <div class="w-full pb-28">
    <div class="flex justify-center">
      <dox-search></dox-search>
    </div>
    <!-- Send -->
    <div class="fixed bottom-0 left-0 right-0 h-28 z-10 flex justify-center">
      <dox-send></dox-send>
    </div>
  </div>
  
</template>

<style></style>
