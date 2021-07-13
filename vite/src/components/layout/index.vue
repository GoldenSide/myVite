<!---*
* @description   入口主文件
* @fileName Home.vue
* @author 叶金龙
* @date 2021/07/06 15:04:52
*--->
<template>
  <el-row>
    <el-col :xs="16" :sm="12" :md="8" :lg="6" :xl="2">
      <vsidebar />
    </el-col>
    <el-col :xs="8" :sm="12" :md="16" :lg="18" :xl="22">
      <Gheader />
      <vtags />
      <router-view></router-view
    ></el-col>
  </el-row>
</template>

<script lang="ts">
import Gheader from "./header.vue";
import vsidebar from "./sideBar.vue";
import vtags from "./tags.vue";
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "home",
  components: { Gheader, vsidebar, vtags },
});
</script>

<style scoped lang="scss">
.main {
  display: flex;
  .leftSide {
    flex-basis: 260px;
    flex-shrink: 0;
  }
  .rightSide {
    flex: 1;
  }
}
</style>
