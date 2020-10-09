/*
 * @Author: xxp
 * @Date: 2020-10-09 16:13:30
 * @LastEditors: xxp
 * @LastEditTime: 2020-10-09 17:34:43
 * @FilePath: \multi-paged:\demo\hello-vue3\src\router\index.js
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About2.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
