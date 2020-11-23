<template>
  <div class="party">
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">党建工作</el-link>
      </div>
      <div>
        <img src="@/assets/images/party/banner.png" width="100%" />
      </div>
    </div>
    <!-- 正文 -->
    <!-- 牢记使命 -->
    <el-row class="item-1" type="flex" justify="center">
      <el-col :span="14" class="box-1">
        <el-col :span="12">
          <div style="width: 100%">
            <img src="@/assets/images/party/img1.png" width="100%" />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="content">
            今年5月，中央召开“不忘初心、牢记使命”主题教育工作会议，习近平总书记发表重要讲话，向全党发出了动员令，为开展好主题教育提供了根本遵循。<br />
            上半年，我院召开党委常委会和党委理论学习中心组学习会，认真传达了中央“不忘初心、牢记使命”主题教育工作会议精神和学校相关要求，成立了医(学)院主题教育筹备领导小组，制定了主题教育筹备工作方案；对主题教育实施方案制定，开展学习教育、调查研究、检视问题、专项整治等工作进行了专题研究和谋划。并在暑假期间通过院党委集中调训方式完成究总支书记、党支部书记学习培
          </div>
        </el-col>
      </el-col>
    </el-row>
    <!-- 初心故事 -->
    <el-row>
      <el-col :span="4">
        <img src="@/assets/images/party/k1.png" width="100%" />
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="16" class="item-2">
        <el-row>
          <el-col :span="12"><div class="title">初心故事</div></el-col>
          <el-col :span="12"><div class="title">院内动态</div></el-col>
        </el-row>
        <el-row class="item-box">
          <el-col :span="12">
            <div class="box-1">
              <div>
                <img src="@/assets/images/party/img2.png" width="100%" />
                <ul>
                  <li>
                    不忘初心，关注癌痛——腹部肿瘤科患者服务微
                    <span>2019.11.15</span>
                  </li>
                  <li>
                    不忘初心，关注癌痛——腹部肿瘤科患者服务微
                    <span>2019.11.15</span>
                  </li>
                  <li>
                    不忘初心，关注癌痛——腹部肿瘤科患者服务微
                    <span>2019.11.15</span>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="box-2">
              <div class="content">
                <el-row v-for="item in 3" :key="item" class="list">
                  <el-col :span="12">
                    <img src="@/assets/images/party/img3.png" width="90%" />
                  </el-col>
                  <el-col :span="12">
                    <div class="txt-1">
                      【守初心，担使命】我院召开“不忘初心、牢记使命”专题民主生活会
                    </div>
                    <div class="txt-2">2019.12.11</div>
                  </el-col>
                </el-row>
              </div>
              <div class="more">查看更多</div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- 理论学习 -->
    <div style="text-align: right">
      <img src="@/assets/images/party/k2.png" width="60" />
    </div>
    <el-row type="flex" justify="center" class="item-3">
      <el-col :span="16" class="box-1">
        <el-col :span="7"> <div class="title">理论学习</div> </el-col>
        <el-col :span="17">
          <div class="contant">
            <div v-for="item in 10" :key="item" class="list">
              @全体党员 这份主题教育学习资料送给你！
            </div>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.party {
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
    position: relative;
    z-index: 1;
    margin-top: -10px;
    margin-bottom: -8%;
    .box-1 {
      background-color: #fff;
      .content {
        font-size: 12px;
        // line-height: 20px;
        padding: 20px;
        text-align: justify;
      }
    }
  }
  .item-2 {
    background-color: #f7f7f7;
    padding-bottom: 50px;
    margin-bottom: 50px;
    .item-box {
      background-color: #fff;
      > .el-col:first-child {
        border-right: 5px solid #f7f7f7;
      }
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      padding: 0 30px;
      line-height: 50px;
      background-color: #f7f7f7;
    }

    .box-1 {
      ul {
        position: relative;
        z-index: 1;
        margin-top: -40px;
        li {
          line-height: 40px;
          margin-bottom: 2px;
          background-color: rgba($color: #fff, $alpha: 1);
        }
        li:first-child {
          background-color: rgba($color: #fff, $alpha: 0.5);
        }
      }
    }
    .box-2 {
      .content {
        padding: 20px;
        .list {
          margin-bottom: 15px;
          font-size: 13px;
        }
      }
      .more {
        padding: 0 20px;
        text-align: right;
      }
    }
  }
  .item-3 {
    background-color: #f3f3f3;
    .box-1 {
      background-color: #84273c;
      padding: 40px;
      background-image: url(~@/assets/images/party/bg.png);
      background-size: cover;
      background-position: bottom left;
      .title {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
      }
    }
    .contant {
      height: 300px;
      overflow-y: scroll;
      line-height: 40px;
      color: #ffff;
      padding: 0 10px;

      &::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 2px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
      }
      &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        background: #a14b5e;
      }
      &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        border-radius: 10px;
        background: rgba($color: #000000, $alpha: 0.6);
      }
      .list {
        border-bottom: 1px solid rgba($color: #fda8a8, $alpha: 0.2);
      }
    }
  }
}
</style>