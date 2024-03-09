<script setup>
import { PlusIcon } from "@heroicons/vue/24/solid";
import { onMounted, ref } from 'vue'
import { upDoc } from '@/api/doc.js'

const upfile = ref(null)

onMounted(async () => {
  
})

function selectFile() {
  upfile.value.click();
}

function selectedFile(evt) {
  const file = evt.target.files[0];
  const formData = new FormData();
  formData.append('file', file);
  upDoc(formData, async function (event) {
    // console.log(event.progress);
    if (event.progress == 1) {
      console.log('上传完成');
    }
  })
}
</script>

<template>
  <div class="flex h-full w-full justify-between place-items-center px-4">
    <div class="font-medium text-3xl">DoxAI</div>
    <div class="flex items-center gap-2">
      <div class="text-gray-500">已入库 100 个文件</div>
      <div>
        <input ref="upfile" type="file" accept="*" class="hidden" @change="selectedFile">
        <vs-button shape="circle" type="flat" icon @click="selectFile">
          <PlusIcon class="w-4 h-4"></PlusIcon>
        </vs-button>
      </div>
    </div>
  </div>
</template>
