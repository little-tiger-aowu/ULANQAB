<template>
  <div class="list">
    <!-- banner -->
    <img src="@/assets/images/about/banner.png" width="100%" />
    <ul class="box">
      <router-link to="detail?id=4">
        <li>
          <span class="txt">城乡居民医疗保险政策解读</span>
          <span>2020-12-03</span>
        </li>
      </router-link>
      <router-link to="detail?id=5">
        <li>
          <span class="txt">城镇职工医疗保险政策解读</span>
          <span>2020-12-03</span>
        </li>
      </router-link>
    </ul>
    <!-- <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination>
    </div> -->
  </div>
</template>
<script>
export default {
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.list {
  @include maxWidth;
  

  .box {
    max-width: 600px;
    margin: 50px auto 0;
    li {
      line-height: 30px;
      padding-top: 10px;
      color: #333;
      border-bottom: dotted 1px #dedede;
      span:last-child {
        float: right;
        font-size: 12px;
        color: #999;
      }
      .txt {
        display: inline-block;
        width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .pagination {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
