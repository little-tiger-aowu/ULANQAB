<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view />
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import navFooter from "@/components/nav/Footer";
import navHeader from "@/components/nav/Header";
export default {
  name: "App",
  components: { navFooter, navHeader },
};
</script>
<style lang="scss">
body {
  // font-family: "微软雅黑";
  color: #333;
  font-size: 14px;
  margin: 0;
  font-weight: normal;
  min-width: 1080px;
}
img {
  margin-bottom: -5px;
}
li {
  list-style-type: none;
}
ul {
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
a {
  text-decoration: none;
}
p{
  margin-block-end: 0;
}
.el-pager li.active,.el-pager li:hover,.el-pagination button:hover{
  color: #689674 !important;
}
</style>
