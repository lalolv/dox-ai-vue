<script setup>
import { PlusIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="flex h-full w-full justify-between place-items-center px-4">
    <div class="font-medium">DoxAI</div>
    <div class="flex items-center gap-2">
      <div class="text-gray-500">已入库 100 个文件</div>
      <div>
        <vs-button shape="circle" color="success" icon>
          <PlusIcon class="w-4 h-4"></PlusIcon>
        </vs-button>
      </div>
    </div>
  </div>
</template>
