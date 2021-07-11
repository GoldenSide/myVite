<!---*
* @description   入口主文件
* @fileName Home.vue
* @author 叶金龙
* @date 2021/07/06 15:04:52
*--->
<template>
  <div class="main">
    <vheader />
    <vsidebar />
    <div class="content">
      <vtags />
      <router-view></router-view>
    </div>
  </div>
</template>

<script  lang="ts">
import vheader from "../components/layout/header.vue";
import vsidebar from "../components/layout/sideBar.vue";
import vtags from "../components/layout/tags.vue";
export default {
  name: "home",
  components: { vheader, vsidebar, vtags },
  data() {
    return {};
  },
  props: {},
  watch: {
    xxx: {},
  },
  created() {},
  methods: {},
};
</script>

<style scoped >
</style>