import { createRouter, createWebHistory,RouteRecordRaw } from "vue-router";
import layout from "@/components/layout/index.vue";
import content from "@/components/layout/content/index.vue";
const routes:RouteRecordRaw[]= [
  // {
  //   path: "/",
  //   redirect: "/dashboard",
  //   meta: {
  //     hidden: true,
  //   },
  // },
  {
    path: "/",
    name: "home",
    component: layout,
    redirect: "/dashboard",
    meta:{
      title:'系统首页',
      icon:""
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: "数据展示页",
        },
        component: () => import("@/views/Dashboard.vue"),
      },
    ],
  },
  {
    path:"/table",
    name:'tableList',
    component:layout,
    meta:{
      title:'表格',
      icon:""
    },
    children:[
      {
        path: "/tableBasic",
        name: "tableBasic",
        meta: {
          title: "基础表格",
        },
        component: () => import("@/views/table/list.vue"),
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/#'),
  routes,
});
export default router;
