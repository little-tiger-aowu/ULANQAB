<template>
  <div class="home">
    <!-- banner -->
    <img src="@/assets/images/banner1.jpg" width="100%" />

    <!-- search -->
    <div class="search">
      <el-row>
        <el-col :span="14" :offset="2">
          <el-input v-model="inputSearch" placeholder="搜索"></el-input>
        </el-col>
        <el-col :span="3" :offset="3">
          <el-button>马上查询</el-button>
        </el-col>
      </el-row>
    </div>

    <!-- 医院特色 -->
    <div class="home-item-1">
      <ul class="box-1">
        <li>
          <img src="@/assets/images/index/icon-yisheng.png">
          <p>预约挂号</p>
          <span>Make an Appointment</span>
        </li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      inputSearch: "",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.home {
  @include maxWidth;

  .search {
    @include width800;
    position: relative;
    z-index: 2;
    margin: 0 auto 100px;
    background-color: #fff;
    padding: 10px;
    margin-top: -15px;
    border-bottom: 5px solid #609a70;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.3);
    .el-button {
      background-image: url(~@/assets/images/index/icon-search.png);
      background-repeat: no-repeat;
      background-size: 30px;
      background-position: 10px center;
      padding-left: 40px;
      border: 0;
      color: #fff;
      background-color: #62b479;
      box-shadow: 0px 2px 3px 0px #416948,
        inset 0px -1px 5px 0px rgba(45, 45, 45, 0.45);
      border-radius: 5px;
    }
  }

  .home-item-1 {
    background-image: url(~@/assets/images/index/bg1.png);
    .box-1 {
      @include width800;

      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      li {
        width: 25%;
        color: #fff;
        text-align: center;
        &:nth-child(odd){
          background-color: #416948;
        }
        &:nth-child(even){
          background-color: #768d55;
        }
      }
    }
  }
}
</style>
