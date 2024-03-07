<script setup>
import { ref } from "vue";
import { PaperAirplaneIcon, GlobeAltIcon } from "@heroicons/vue/24/solid";
import { useLookupStore } from '@/stores/lookup'
import axios from 'axios'

// Store
const store = useLookupStore()
// 是否联网搜索
const online = ref(false);
// 提示词
const prompt = ref('');

// socket
const socket = ref(null)
const wssURL = ref(import.meta.env.VITE_WS_API + '/lookup/completion')

// 发送消息
function send() {
  // 发送提示词
  if (prompt.value !== '') {
    // 设置活跃状态
    store.active = true
    // 创建 socket 连接
    socket.value = new WebSocket(wssURL.value)
    // 连接成功
    socket.value.onopen = onOpen
    // 连接失败
    socket.value.onerror = (evt) => {
      console.log('WebSocket connection error:', evt)
      socket.value = null
    }
    // 连接关闭
    socket.value.onclose = (evt) => {
      console.log('WebSocket connection closed:', evt)
      store.active = false
    }
    // 监听消息
    socket.value.onmessage = onMessage
  }
}

// 打开 WS 连接
function onOpen(evt) {
  console.log('WebSocket connection opened:', evt)
  // console.log('Message:', message)
  if (prompt.value !== '') {
    store.clean()
    store.prompt = prompt.value
    socket.value.send(prompt.value)
    prompt.value = ''
  }
}

// 监听消息
// data: {result, error, stout}
function onMessage(evt) {
    // 更新中间的加载状态信息
    store.streamOut(evt.data)
}

</script>

<template>
  <div
    class="flex flex-col justify-center rounded-2xl shadow-2xl w-max gap-1 pt-4 px-4 bg-white"
  >
    <vs-input
      v-model="prompt"
      placeholder="输入您的问题？"
      style="width: 600px"
      :loading="store.active"
    />
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <GlobeAltIcon class="w-8 h-8" />
        <div class="center con-switch w-0">
          <vs-switch v-model="online" color="success" />
        </div>
      </div>
      <vs-button shape="circle" icon :loading="store.active">
        <PaperAirplaneIcon class="w-4 h-4" @click="send" />
      </vs-button>
    </div>
  </div>
</template>
