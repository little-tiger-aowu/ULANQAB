<template>
  <div class="notice">
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">科研天地</el-link>
      </div>
      <div>
        <img src="@/assets/images/notice/banner.png" width="100%" />
      </div>
    </div>
    <!-- 正文 -->
    <el-row type="flex" justify="center" class="item-1">
      <el-col :span="16">
        <div class="title">公告公式</div>
        <div class="box-1">
          <div class="contant">
            <div v-for="item in 6" :key="item" class="list">
              乌兰察布中心医院公共区域卫生间施工监理招标文件
              <span>2020-05-11</span>
            </div>
          </div>
        </div>
        <div class="page-num">
          <el-pagination background layout="prev, pager, next" :total="20">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.notice {
  @include maxWidth;
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
  .item-1 {
    margin-top: 50px;
    .title {
      font-size: 18px;
      font-weight: bold;
      //   梯形
      width: 100px;
      line-height: 50px;
      height: 0;
      border-style: solid;
      border-width: 0 50px 50px 20px;
      border-color: transparent transparent #f7f7f7 #f7f7f7;
    }
    .box-1 {
      background-color: #f7f7f7;
      padding: 20px;
      .contant {
        background-color: #fbfbfb;
        box-shadow: 0 0 20px rgba($color: #999, $alpha: 0.7);
        padding: 20px;
        .list {
          line-height: 40px;
          border-bottom: 1px solid #dedede;
          span {
            display: inline-block;
            float: right;
            width: 200px;
            text-align: center;
          }
        }
      }
    } 
    .page-num {
      float: right;
      //   梯形
      width: 150px;
      line-height: 0;
      height: 0;
      border-style: solid;
      border-width: 50px 0 0 50px;
      border-color: #f7f7f7 transparent #f7f7f7 transparent;
      .el-pagination {
        margin-top: -50px;
        margin-left: -30px;
        .el-pager li:not(.disabled).active {
          background-color: #ebebeb;
          color: #000;
        }
        .el-pager li:not(.disabled):hover {
          color: #000;
        }
      }
    }
  }
}
</style>
