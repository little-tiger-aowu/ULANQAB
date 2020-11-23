<template>
  <div class="research">
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">科研天地</el-link>
      </div>
      <div>
        <img src="@/assets/images/research/banner.png" width="100%" />
      </div>
    </div>
    <!-- 正文 -->
    <el-row type="flex" justify="center" class="item-1">
      <el-col :span="16">
        <el-col :span="7" class="box-1">
          <div style="height: 100%">
            <div class="content">
              <div class="title">医院“一网双模” <br />模式探索</div>
            </div>
            <img src="@/assets/images/research/img2.png" width="100%" />
          </div>
        </el-col>
        <el-col :span="10">
          <div>
            <img src="@/assets/images/research/img1.png" width="100%" />
          </div>
        </el-col>
        <el-col :span="7" class="box-1">
          <div style="height: 100%">
            <div class="content">
              <div class="txt">
                我院肝脏外科曾勇教授、吴泓教授课题组在CELL
                DE，男科学研究室袁久洪教授团队多项研究成果被欧美临床指南，神经外科方芳教授、内分泌代谢科谭惠文副教授共同在DI，曾勇教授、吴泓教授课题组在MOLECULAR
                CAN，我院蛋白质组学和代谢组学研究室程惊秋教授、杨浩副研究...
              </div>
            </div>
            <img src="@/assets/images/research/img3.png" width="100%" />
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.research {
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
    .box-1 {
      height: 100%;
      position: relative;
      img {
        position: absolute;
        bottom: 5%;
        border-bottom: 10px solid #416948;
      }
      .content {
        padding-top: 8%;
        // background-color: #000;
        height: 40%;
        .title {
          padding-top: 20%;
          font-size: 20px;
          font-weight: bold;
        }
        .txt {
          font-size: 13px;
          text-align: justify;
          line-height: 20px;
        }
      }
    }
  }
}
</style>