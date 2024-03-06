<script setup>
import { RouterView } from 'vue-router'
import { DoxHeader } from '@/components'
</script>

<template>
  <div class="min-h-screen relative bg-slate-50">
    <!-- Header -->
    <div class="fixed top-0 left-0 right-0 h-10 backdrop-blur-md bg-slate-200/60 z-10">
      <DoxHeader/>
    </div>
    <!-- Main -->
    <div class="grid justify-items-center overflow-auto pt-10 z-0">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
