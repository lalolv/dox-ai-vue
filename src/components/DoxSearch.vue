<script setup>
import { MdPreview } from "md-editor-v3";
import { ref } from "vue";
import { useLookupStore } from "@/stores/lookup";

// Store
const store = useLookupStore();
</script>

<template>
  <div class="flex flex-col gap-2 w-3/4 py-4">
    <!-- Prompt -->
    <div class="flex items-center rounded-lg bg-slate-100 px-4 py-2">
      <h1 class="text-base font-medium">{{ store.prompt }}</h1>
    </div>
    <vs-alert type="border" color="#d1d5db">
      <!-- Result -->
      <article class="prose max-w-none">
        <md-preview :modelValue="store.response" />
      </article>
      <!-- waiting gif -->
      <div class="flex justify-center">
        <img class="object-cover" :class="{ hidden: !store.waiting }" width="120" src="/robot-joypixels.gif">
      </div>
    </vs-alert>
  </div>
</template>
