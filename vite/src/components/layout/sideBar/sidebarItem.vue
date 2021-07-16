<template>
  <div class="menu-wrapper" v-if="nohidden() && noChild()">
    <app-link :to="item.path">
      <el-menu-item>
        <item :meta="item.meta" />
      </el-menu-item>
    </app-link>
  </div>
  <el-submenu v-else :index="combinePath(item.path)">
    <template #title>
      <item :meta="item.meta" />
    </template>
    <sidebar-item
      v-for="child in item.children"
      :is-nest="true"
      :item="child"
      :key="child.path"
      class="nest-menu"
      :base-path="child.path"
    />
  </el-submenu>
</template>
<script lang="ts">
import { ref, defineComponent, reactive } from "vue";
import item from "./item.vue";
import appLink from "./link.vue";
// import path from "path";
const path = require("path");
export default defineComponent({
  name: "sidebarItem",
  props: ["item", "basePath", "basePath"],
  components: { item, appLink },
  setup(props, ctx) {
    let currentItem: Record<string, any> = reactive({});
    currentItem = props.item;
    const nohidden = () => {
      if (currentItem.meta.hasOwnProperty("hidden")) {
        return !currentItem.meta.hidden;
      } else {
        return true;
      }
    };
    const noChild = () => {
      return (
        !currentItem.hasOwnProperty("children") ||
        currentItem.children.length == 0
      );
    };
    // console.log(currentItem.path);
    const combinePath = (pa: string) => {
      path.resolve(pa);
      let str: string = "";
      str = props.basePath + pa;
      console.log(str);
      return str;
    };
    let curPa = props.basePath;
    console.log(curPa);
    return {
      // currentItem,
      nohidden,
      noChild,
      combinePath,
      curPa,
      // pathIndex,
    };
  },
});
</script>
<style lang="scss"></style>
