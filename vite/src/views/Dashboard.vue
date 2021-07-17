<!---*
* @description  系统首页
* @fileName Dashboard.vue
* @author 叶金龙
* @date 2021/07/06 16:05:40
*--->
<template>
  <div>
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "chart",
  setup() {
    let activeIndex2 = ref("1");
    const handleSelect = (key: string, keyPath: string) => {
      console.log(key);
      console.log(keyPath);
      console.log(activeIndex2.value);
    };
    const handleOpen = (key: string, keyPath: string) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string) => {
      console.log(key, keyPath);
    };

    return {
      activeIndex2,
      handleSelect,
      handleOpen,
      handleClose,
    };
  },
});
</script>

<style scoped></style>
