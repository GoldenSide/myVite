<!---*
* @description  头部
* @fileName header.vue
* @author 叶金龙
* @date 2021/07/06 15:10:37
*--->
<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChange">
      <i :class="[collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
    </div>
    <img src="/logo/logo.jpg" alt="" />
    <div class="logo">GoldenSide`s system</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  setup: () => {
    const collapse = ref(false);
    function collapseChange() {
      collapse.value = !collapse.value;
    }
    return { collapse, collapseChange };
  },
});
</script>
<style scoped lang="scss">
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background-color: #242f42;
  img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
}
</style>
