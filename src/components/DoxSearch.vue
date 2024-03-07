<script setup>
import { MdPreview } from "md-editor-v3";
import { ref } from "vue";

const content = ref("# uuuuu \n - kskk \n - ppapa  \n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**\n **ooo**");
</script>

<template>
  <div class="flex flex-col gap-2 w-3/4 py-4">
    <!-- Prompt -->
    <div class="flex items-center rounded-2xl bg-slate-200 px-6 py-4">
      <h1 class="text-xl font-semibold">Get started with Tailwind CSS</h1>
    </div>
    <!-- Result -->
    <article class="prose prose-sm px-6">
      <md-preview :modelValue="content" />
    </article>
  </div>
</template>
