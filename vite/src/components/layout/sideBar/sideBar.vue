<!---*
* @description  侧边栏
* @fileName sideBar.vue
* @author 叶金龙
* @date 2021/07/06 16:48:47
*--->
<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <!-- <el-menu
      :show-timeout="200"
      :default-active="routerPath"
      :collapse="isCollapse"
      :unique-opened="true"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu> -->
  </el-scrollbar>
</template>
<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import variables from "@/styles/variables.scss";
export default defineComponent({
  name: "sideBar",
  setup() {
    const route = useRoute();
    const routes = useRouter().options.routes;
    // console.log(route);
    // console.log(routes);
    // const routerPath=()=>{}
    const routerPath = computed(() => {
      return route;
    });
    const va = computed(() => {
      return variables;
    });

    // const handleOpen = (key: string, keyPath: any) => {};
    // const handleClose = (key: string, keyPath: any) => {};
    return {
      route,
      routes,
      routerPath,
      va,
      // handleOpen,
      // handleClose,
    };
  },
});
</script>
<style scoped lang="scss"></style>
