<!---*
* @description  侧边栏
* @fileName sideBar.vue
* @author 叶金龙
* @date 2021/07/06 16:48:47
*--->
<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="routerPath"
      :collapse="isCollapse"
      :unique-opened="true"
      :background-color="'#f7f8fa'"
      :text-color="'#303133'"
      :active-text-color="'#409eff'"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import sidebarItem from "./sidebarItem.vue";
export default defineComponent({
  name: "sideBar",
  components: {
    sidebarItem,
  },
  setup() {
    const currentroute = useRoute();
    const routes = useRouter().options.routes;
    const routerPath = computed(() => {
      return currentroute.path;
    });

    const isCollapse = computed(() => {
      return false;
    });
    // const handleOpen = (key: string, keyPath: any) => {};
    // const handleClose = (key: string, keyPath: any) => {};
    // console.log(variables.value);
    // console.log(variables);
    return {
      routes,
      routerPath,
      // variables,
      isCollapse,
      // handleOpen,
      // handleClose,
    };
  },
});
</script>
<style lang="scss">
.color {
  background-color: $menuText;
  height: 10px;
}
</style>
