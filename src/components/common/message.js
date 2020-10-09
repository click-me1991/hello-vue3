/*
 * @Author: xxp
 * @Date: 2020-10-09 16:48:32
 * @LastEditors: xxp
 * @LastEditTime: 2020-10-09 16:53:57
 * @FilePath: \multi-paged:\demo\hello-vue3\src\components\common\message.js
 */
import { ref, watch } from "vue";
export function message() {
  let msg = ref(123);
  watch(msg, newVal => {
    console.log("msg changed", newVal);
  });
  const changeMessage = () => {
    msg.value = new Date().toTimeString();
  };
  return { msg, changeMessage };
}
