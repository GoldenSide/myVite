<!---*
* @description   入口主文件
* @fileName Home.vue
* @author 叶金龙
* @date 2021/07/06 15:04:52
*--->
<template>
  <el-row>
    <el-col :xs="16" :sm="12" :md="8" :lg="6" :xl="2">
      <div class="section-container">
        <div class="sidebar-container">
          <Gsidebar />
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :sm="12" :md="16" :lg="18" :xl="22">
      <div class="section-container">
        <div class="section-top">
          <Gheader />
          <Gtags />
        </div>
        <div class="section-content">
          <Gcontent />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Gheader from "./header/header.vue";
import Gsidebar from "./sideBar/index.vue";
import Gtags from "./tags/tags.vue";
import Gcontent from "./content/index.vue";
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "home",
  components: { Gheader, Gsidebar, Gtags, Gcontent },
});
</script>

<style scoped lang="scss">
// .main {
//   display: flex;
//   .leftSide {
//     flex-basis: 260px;
//     flex-shrink: 0;
//   }
//   .rightSide {
//     flex: 1;
//   }
// }
</style>
