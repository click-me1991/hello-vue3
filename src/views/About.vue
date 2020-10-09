<!--
 * @Author: xxp
 * @Date: 2020-10-09 16:13:30
 * @LastEditors: xxp
 * @LastEditTime: 2020-10-09 16:32:41
 * @FilePath: \multi-paged:\demo\hello-vue3\src\views\About.vue
-->
<template>
  <img src="../assets/logo.png" />
  <h1>Hello Vue 3!</h1>
  <button @click="inc">Clicked {{ count }} times.</button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc
    };
  }
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
button {
  cursor: pointer;
}
</style>
