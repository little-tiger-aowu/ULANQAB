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
}
img {
  margin-bottom: -19px;
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
</style>
