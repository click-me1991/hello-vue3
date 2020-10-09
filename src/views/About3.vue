<!--
 * @Author: xxp
 * @Date: 2020-10-09 16:36:10
 * @LastEditors: xxp
 * @LastEditTime: 2020-10-09 16:52:27
 * @FilePath: \multi-paged:\demo\hello-vue3\src\views\About3.vue
-->
<template>
  <div class="counter">
    <p>count: {{ count }}</p>
    <p>NewVal (count + 2): {{ countDouble }}</p>
    <button @click="inc">Increment</button>
    <button @click="dec">Decrement</button>
    <p>Message: {{ msg }}</p>
    <button @click="changeMessage()">Change Message</button>
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
import { message } from "@/components/common/message.js";
export default {
  setup() {
    /* ---------------------------------------------------- */
    let count = ref(0);
    const countDouble = computed(() => count.value * 2);
    watch(count, newVal => {
      console.log("count changed", newVal);
    });
    const inc = () => {
      count.value += 1;
    };
    const dec = () => {
      if (count.value !== 0) {
        count.value -= 1;
      }
    };
    /* ---------------------------------------------------- */
    // let msg = ref("vue3.0 About3");
    // watch(msg, newVal => {
    //   console.log("msg changed", newVal);
    // });
    // const changeMessage = () => {
    //   msg.value = new Date().toString();
    // };
    /* ---------------------------------------------------- */
    let { msg, changeMessage } = message();
    return {
      count,
      inc,
      dec,
      countDouble,
      msg,
      changeMessage
    };
  }
};
</script>
