<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello</h1>
        <p class="py-6">
          专注本地模型的 RAG 搜索
        </p>
        <!-- <button class="btn btn-primary">Search</button> -->
        <vs-input v-model="value" placeholder="Name" />
        <vs-button> Default </vs-button>
      </div>
    </div>
  </div>
</template>

<style></style>
