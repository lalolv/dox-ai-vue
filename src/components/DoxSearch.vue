<script setup>
import { MdPreview } from "md-editor-v3";
import { ref } from "vue";
import { useLookupStore } from '@/stores/lookup'

// Store
const store = useLookupStore()

</script>

<template>
  <div class="flex flex-col gap-2 w-3/4 py-4">
    <!-- Prompt -->
    <div class="flex items-center rounded-2xl bg-slate-200 px-6 py-4">
      <h1 class="text-xl font-semibold">{{ store.prompt }}</h1>
    </div>
    <!-- Result -->
    <article class="prose max-w-none px-6">
      <md-preview :modelValue="store.response" />
    </article>
  </div>
</template>
