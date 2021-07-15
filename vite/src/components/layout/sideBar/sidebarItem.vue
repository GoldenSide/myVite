<template>
  <div class="menu-wrapper" v-if="nohidden() && noChild()">
    <template>
      <app-link>
        <el-menu-item>
          <item />
        </el-menu-item>
      </app-link>
    </template>
  </div>

  <el-submenu v-else :index="'a'">
    <template #title>
      <item :meta="item.meta" />
    </template>
    <sidebar-item
      v-for="child in item.children"
      :is-nest="true"
      :item="child"
      :key="child.path"
      class="nest-menu"
    />
  </el-submenu>
</template>
<script lang="ts">
import { ref, defineComponent, reactive } from "vue";
import item from "./item.vue";
import appLink from "./link.vue";
export default defineComponent({
  name: "sidebarItem",
  props: ["item", "basePath"],
  components: { item, appLink },
  setup(props, ctx) {
    console.log(props.item);
    // console.log(ctx);
    let currentItem: Record<string, any> = reactive({});
    // currentItem = props.item;
    const nohidden = () => {
      if (currentItem.hasOwnProperty("meta")) {
        return !currentItem.meta.hidden;
      } else {
        return false;
      }
    };
    const noChild = () => {
      return (
        !currentItem.hasOwnProperty("children") ||
        currentItem.children.length == 0
      );
    };

    console.log(nohidden());
    console.log(noChild());

    return {
      currentItem,
      nohidden,
      noChild,
      // pathIndex,
    };
  },
});
</script>
<style lang="scss"></style>
