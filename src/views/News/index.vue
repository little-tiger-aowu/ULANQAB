<template>
  <div class="news">
    <div class="block">
  <span class="demonstration">默认 click 触发子菜单</span>
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">新闻中心</el-link>
      </div>
      <div>
        <img src="@/assets/images/news/banner.png" width="100%" />
      </div>
    </div>
    <!-- 正文 -->
    <!-- 专题中心 -->
    <div class="box-1">
      <div style="text-align: right">
        <img src="@/assets/images/news/kuai.png" height="100" />
      </div>
      <div class="item-1">
        <div class="title">专题中心</div>

        <el-row type="flex" justify="center">
          <el-col :span="16" class="content">
            <div>
              <el-col :span="8">
                <div class="list">
                  <img src="@/assets/images/news/img1.png" width="100%" />
                  <div class="txt">
                    <div>抗击新冠肺炎，中院在行动</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="list">
                  <img src="@/assets/images/news/img1.png" width="100%" />
                  <div class="txt">
                    <div>抗击新冠肺炎，中院在行动</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="list">
                  <img src="@/assets/images/news/img1.png" width="100%" />
                  <div class="txt">
                    <div>抗击新冠肺炎，中院在行动</div>
                  </div>
                </div>
              </el-col>
            </div>
            <div class="more">查看更多</div>
          </el-col>
        </el-row>
      </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.news {
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
  //   正文

  .item-1 {
    background-image: url(~@/assets/images/news/bg1.png);
    background-size: cover;
    padding: 20px 0;
    .title {
      text-align: center;
      font-size: 20px;
      margin-bottom: 30px;
      font-weight: bold;
    }
    .content {
      background-color: rgba($color: #fff, $alpha: 0.5);
      padding: 20px 10px 0;
      position: relative;

      .list {
        padding: 0 10px;
        margin-bottom: 10px;
        position: relative;
        .txt {
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          > div {
            text-align: center;
            font-size: 12px;
            width: 80%;
            margin: 0 auto;
            background-color: rgba($color: #fff, $alpha: 0.7);
            line-height: 30px;
          }
        }
      }
      .more {
        position: absolute;
        right: -60px;
        bottom: 0;
        font-size: 12px;
      }
    }
  }
}
</style>