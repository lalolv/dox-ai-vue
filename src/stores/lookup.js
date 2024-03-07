import { ref } from "vue";
import { defineStore } from "pinia";

export const useLookupStore = defineStore("lookup", () => {
  // 当前输入的prompt
  const prompt = ref("");
  // 响应
  const response = ref("");
  // 是否活跃
  const active = ref(false);

  // 持续流式输出
  function streamOut(output) {
    response.value += output;
  }

  // 清除原来的数值和状态
  function clean() {
    response.value = "";
  }

  return { prompt, response, active, streamOut, clean };
});
