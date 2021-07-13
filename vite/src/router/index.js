import { createRouter, createWebHistory } from "vue-router";
// import  content from
import layout from "@/components/layout/index.vue";
// import content from "@/component/layout/layout";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    meta: {
      hidden: true,
    },
  },
  {
    path: "/",
    name: "home",
    component: layout,
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
