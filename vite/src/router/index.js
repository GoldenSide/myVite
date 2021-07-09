import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        meta: {
          title: "系统首页",
        },
        component: () => import("../views/Dashboard.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
