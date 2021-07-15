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
    <div class="userOwn">
      <div class="name">GoldenSide</div>
      <img src="/logo/logo.jpg" alt="" />
    </div>
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
  background-color: #242f42;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .collapse-btn {
    font-size: 22px;
    color: #fff;
  }
  .name {
    color: #fff;
    margin-right: 20px;
  }

  @keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  .userOwn {
    width: 300px;
    padding-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      cursor: pointer;
      transform: rotate(360deg);
      animation: rotation 2s linear infinite;
    }
  }
}
</style>
