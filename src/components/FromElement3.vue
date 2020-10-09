<!--
 * @Author: xxp
 * @Date: 2020-10-09 17:31:53
 * @LastEditors: xxp
 * @LastEditTime: 2020-10-09 17:32:14
 * @FilePath: \multi-paged:\demo\hello-vue3\src\components\FromElement3.vue
-->
<template>
  <div class="form-element">
    <h2>{{ state.title }}</h2>
    <input type="text" v-model="state.username" placeholder="Username" />

    <input type="password" v-model="state.password" placeholder="Password" />

    <button @click="login">
      Submit
    </button>
    <p>Values: {{ state.username + " " + state.password }}</p>
  </div>
</template>
<script>
import { reactive, onMounted, computed } from "vue";

export default {
  props: {
    title: String
  },
  setup(props, { emit }) {
    const state = reactive({
      username: "",
      password: "",
      lowerCaseUsername: computed(() => state.username.toLowerCase())
    });

    onMounted(() => {
      console.log("title: " + props.title);
    });

    const login = () => {
      emit("login", {
        username: state.username,
        password: state.password
      });
    };

    return {
      login,
      state
    };
  }
};
</script>
