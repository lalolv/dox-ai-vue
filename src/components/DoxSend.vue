<script setup>
import { ref } from "vue";
import { PaperAirplaneIcon, GlobeAltIcon } from "@heroicons/vue/24/solid";

const prompt = ref("");
const active = ref(false);
</script>

<template>
  <div
    class="flex flex-col justify-center rounded-2xl shadow-2xl w-max gap-1 pt-4 px-4 bg-white"
  >
    <vs-input
      v-model="prompt"
      placeholder="输入您的问题？"
      style="width: 600px"
    />
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <GlobeAltIcon class="w-6 h-6" />
        <div class="center con-switch w-0">
          <vs-switch v-model="active" />
        </div>
      </div>
      <vs-button shape="circle" icon>
        <PaperAirplaneIcon class="w-4 h-4" />
      </vs-button>
    </div>
  </div>
</template>
