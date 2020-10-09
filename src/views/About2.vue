<!--
 * @Author: xxp
 * @Date: 2020-10-09 16:35:33
 * @LastEditors: xxp
 * @LastEditTime: 2020-10-09 17:36:37
 * @FilePath: \multi-paged:\demo\hello-vue3\src\views\About2.vue
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
  <FromElement @login="loginEvt"></FromElement>
</template>
<script>
import FromElement from "@/components/FromElement2.vue";
export default {
  data() {
    return {
      count: 0,
      msg: "some message"
    };
  },
  components: {
    FromElement
  },
  computed: {
    countDouble() {
      return this.count * 2;
    }
  },
  watch: {
    count(newVal) {
      console.log("count changed", newVal);
    },
    msg(newVal) {
      console.log("msg changed", newVal);
    }
  },
  methods: {
    inc() {
      this.count += 1;
    },
    dec() {
      if (this.count !== 0) {
        this.count -= 1;
      }
    },
    changeMessage() {
      this.msg = new Date().toString();
    },
    loginEvt(data) {
      console.log(data);
    }
  }
};
</script>
