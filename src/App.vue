<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-slate-600 h-screen flex">
    <!-- Main -->
    <div class="grow flex-col bg-slate-50 grid justify-items-center overflow-auto">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
