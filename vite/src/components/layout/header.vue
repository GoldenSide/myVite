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
    <div class="logo">后台管理系统</div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps} from "vue";
  ref:collapse=false;
  function collapseChange(){
  }
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
}
</style>