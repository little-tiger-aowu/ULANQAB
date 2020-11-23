<template>
  <div class="introduct">
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">护理园地</el-link>
      </div>
      <div>
        <img src="@/assets/images/introduct/bg-banner.png" width="100%" /> 
      </div>
    </div>
    <!-- 正文 -->
    <!-- swiper -->
    <div class="item-1">
      <div class="title">各科室专家</div>
      <el-row class="item-1-swiper" type="flex" justify="center">
        <el-col :span="16">
          <div class="swiper-content">
            <img src="@/assets/images/introduct/doctor1.png" width="200" />
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- search -->
    <div>
      <el-row type="flex" justify="center">
        <el-col :span="16" class="search">
          <el-col :span="10">
            科室选择：
            <input type="text" />
          </el-col>
          <el-col :span="10">
            医生姓名：
            <input type="text" />
          </el-col>
          <el-col :span="3">
            <el-button size="small">马上查询</el-button>
          </el-col>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="16" class="search-choose">
          <el-row :gutter="10">
            <el-col :span="4" class="tab-choose">
              <div>内科</div>
              <div>外科</div>
              <div>口腔科</div>
              <div>其他科</div>
            </el-col>
            <el-col :span="20" class="choose-list">
              <el-col :span="4" :offset="2">
                <div>心血管内科</div>
              </el-col>
              <el-col :span="4">
                <div>心血管内科</div>
              </el-col>
              <el-col :span="4">
                <div>心血管内科</div>
              </el-col>
              <el-col :span="4">
                <div>心血管内科</div>
              </el-col>
              <el-col :span="4">
                <div>心血管内科</div>
              </el-col>
              <el-col :span="4" :offset="2">
                <div>心血管内科</div>
              </el-col>
              <el-col :span="4">
                <div>心血管内科</div>
              </el-col>
              <el-col :span="4">
                <div>心血管内科</div>
              </el-col>
              <el-col :span="4">
                <div>心血管内科</div>
              </el-col>
              <el-col :span="4">
                <div>心血管内科</div>
              </el-col>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <!-- 医疗资源 -->
    <div class="box-1">
      <el-row type="flex" justify="center">
        <el-col :span="16" class="item-2">
          <div class="title">医疗资源</div>
          <div class="txt">
            两院院士X人 <br />
            973首席科学家X人 <br />
            国家杰出青年科学基金获得者XX人<br />
            高端引进人才XXX人<br />
          </div>
          <div class="more">
            <div>查看更多</div>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="end">
        <el-col :span="4">
          <img src="@/assets/images/introduct/kuai.png" width="100%" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Introduce",
  data() {
    return {
      //   搜索
      inputSearch: "",
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.introduct {
    @include maxWidth;

  //   banenr
  .banner-txt {
    margin-top: 10px;
    position: relative;
    .link-txt {
      position: absolute;
      left: 15%;
      top: 20px;
      z-index: 1;
      a {
        color: #fff;
      }
    }
  }
  // 正文
  //   siwper
  .item-1 {
    margin-top: 50px;
    text-align: center;
    .title {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .item-1-swiper {
      background-image: url(~@/assets/images/introduct/img1.png);
      background-size: cover;
      background-position: bottom left;
      background-repeat: no-repeat;
      padding: 20px 0;
      .swiper-content {
        background-color: rgba($color: #b2b3b2, $alpha: 0.2);
      }
    }
  }
  //   search
  .search {
    // @include width800;
    position: relative;
    z-index: 2;
    margin: 30px auto 0;
    background-color: #fff;
    padding: 10px;
    border-bottom: 5px solid #609a70;
    box-shadow: 0px -4px 18px rgba($color: #999, $alpha: 0.7);
    .el-button {
      background-image: url(~@/assets/images/index/icon-search.png);
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: 10px center;
      padding-left: 40px;
      border: 0;
      color: #fff;
      background-color: #62b479;
      box-shadow: 0px 2px 3px 0px #416948,
        inset 0px -1px 5px 0px rgba(45, 45, 45, 0.45);
      border-radius: 5px;
    }
    input {
      height: 25px;
      border: solid 1px #494949;
    }
  }
  .search-choose {
    background-color: #f4f4f4;
    padding: 20px;
    .choose-list {
      background-color: rgba($color: #fff, $alpha: 0.5);
      height: 175px;
      padding: 20px 0;
      .el-col {
        div {
          background-color: #fff;
          font-size: 12px;
          text-align: center;
          margin-bottom: 10px;
          line-height: 24px;
        }
      }
    }
    .tab-choose {
      div {
        color: #fff;
        text-align: center;
        margin-bottom: 5px;
        line-height: 40px;
        &:nth-child(odd) {
          background-color: #416948;
        }
        &:nth-child(even) {
          background-color: #768d55;
        }
      }
    }
  }
  .box-1 {
    .item-2 {
      margin-top: 100px;
      background-image: url(~@/assets/images/introduct/bg1.png);
      padding: 20px;
      background-size: cover;
      height: 240px;
      background-repeat: no-repeat;
      position: relative;
      .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .txt {
        line-height: 30px;
      }
      .more {
        position: absolute;
        bottom: -13px;
        left: 40%;
        width: 75px;
        line-height: 25px;
        background-color: #416948;
        text-align: center;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
</style>