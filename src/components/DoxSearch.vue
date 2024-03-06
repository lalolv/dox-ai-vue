<script setup>
import { MdPreview } from "md-editor-v3";
import { ref } from "vue";

const content = ref("# uuuuu \n - kskk \n - ppapa \n **ooo**");
</script>

<template>
  <div class="flex flex-col gap-4 w-3/4 py-6">
    <!-- Prompt -->
    <h1 class="text-xl font-semibold">Get started with Tailwind CSS</h1>
    <!-- Result -->
    <div></div>
    <article class="prose prose-sm">
      <md-preview :modelValue="content" />
    </article>
  </div>
</template>
