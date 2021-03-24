<template>
  <div class="educate">
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">医学教育</el-link>
      </div>
      <div>
        <img src="@/assets/images/educate/banner.png" width="100%" />
      </div>
    </div>
    <!-- 正文 -->
    <div class="build">正在建设中...</div>
    <!-- 综合教育 -->
    <!-- <el-row type="flex" justify="center" class="item-1">
      <el-col :span="16" class="contant">
        <el-col :span="11" class="box-1">
          <div>
            <div class="title">综合教育</div>
            <div class="min-title">
              我院生物治疗国家重点实验室在NATURE 杂志发表重
            </div>
            <div>
              我院肝脏外科曾勇教授、吴泓教授课题组在CELL
              DE,男科学研究室袁久洪教授团队多项研究成果被欧美临床指南,神经外科方芳教授、内分泌代谢科谭惠文副教授共同在DI,曾勇教授、吴泓教授课题组在MOLECULAR
              CAN,我院蛋白质组学和代谢组学研究室程惊秋教授、杨浩副研究...
            </div>
            <div class="caret-right">
              <i class="el-icon-caret-right"></i>
            </div> -->
            <!-- <div class="more-right">查看更多</div> -->
          <!-- </div>
        </el-col>
        <el-col :span="13" class="img">
          <img src="@/assets/images/educate/img2.png" width="100%" />
        </el-col>
      </el-col>
    </el-row> -->
    <!-- 顺序设置 -->
    <!-- <div class="item-2">
      <el-row type="flex" justify="center">
        <el-col :span="16" class="contant">
          <el-col :span="12" class="box-1">
            <div>
              则根据各学科之间的内在联系加以安排。学生获得的知识较为系统、完整，教学形式与中学相似，学生易于适应；教师的业务专长与所担负的课程一致,教材易于编写。经验证明,这些优点有利于保证教学质量。但这种教学模式以学科为基础，致使课程门数过多，内容往往重复，学生负担过重；各学科界限分明，基础课与临床课截然分开，不利于医学生早期接触医学、早期接触病人，早日接触社会。<br>
              则根据各学科之间的内在联系加以安排。学生获得的知识较为系统、完整，教学形式与中学相似，学生易于适应；教师的业务专长与所担负的课程一致,教材易于编写。
            </div>
          </el-col>
          <el-col :span="12" class="box-2">
            <div class="title">顺序设置</div>

            <el-col :span="18" class="content">
              <img src="@/assets/images/educate/img1.png" width="100%" />
            </el-col>
          </el-col>
        </el-col>
      </el-row>
      <div>
        <img src="@/assets/images/educate/k1.png" width="50" />
      </div>
    </div> -->

    <!-- 学术新闻 -->
    <!-- <el-row type="flex" justify="center" class="item-1">
      <el-col :span="16" class="contant">
        <el-col :span="13" class="img">
          <img src="@/assets/images/educate/img3.png" width="100%" />
        </el-col>
        <el-col :span="11" class="box-1">
          <div>
            <div class="title">学术新闻</div>
            <div class="min-title">
              我院生物治疗国家重点实验室在NATURE 杂志发表重
            </div>
            <div>
              我院肝脏外科曾勇教授、吴泓教授课题组在CELL
              DE,男科学研究室袁久洪教授团队多项研究成果被欧美临床指南,神经外科方芳教授、内分泌代谢科谭惠文副教授共同在DI,曾勇教授、吴泓教授课题组在MOLECULAR
              CAN,我院蛋白质组学和代谢组学研究室程惊秋教授、杨浩副研究...
            </div>
            <div class="caret-left">
              <i class="el-icon-caret-left"></i>
            </div>
          </div>
        </el-col>
      </el-col>
    </el-row> -->

    <!-- 临床医学院教育发展专项基金 -->
    <!-- <div class="item-2">
      <el-row type="flex" justify="center">
        <el-col :span="16" class="contant">
          <el-col :span="12" class="box-2">
            <div class="title">临床医学院教育发展专项基金</div>

            <el-col :span="18" class="content" :offset="6">
              <img src="@/assets/images/educate/img4.png" width="100%" />
            </el-col>
          </el-col>
          <el-col :span="12" class="box-1">
            <div>
              则根据各学科之间的内在联系加以安排。学生获得的知识较为系统、完整，教学形式与中学相似，学生易于适应；教师的业务专长与所担负的课程一致,教材易于编写。经验证明,这些优点有利于保证教学质量。但这种教学模式以学科为基础，致使课程门数过多，内容往往重复，学生负担过重；各学科界限分明，基础课与临床课截然分开，不利于医学生早期接触医学、早期接触病人，早日接触社会。<br>
              则根据各学科之间的内在联系加以安排。学生获得的知识较为系统、完整，教学形式与中学相似，学生易于适应；教师的业务专长与所担负的课程一致,教材易于编写。
            </div>
          </el-col>
        </el-col>
      </el-row>
      <div style="text-align: right">
        <img src="@/assets/images/educate/k2.png" width="50" />
      </div>
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.educate {
  @include maxWidth;

  //   banenr
  .banner-txt {
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
    margin-top: 50px;
    .contant {
      background-color: #c8d4b8;
      .img {
        padding: 15px;
        background-color: #eaeaea;
      }
      .box-1 {
        height: 100%;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .more-right {
          background-color: #768d55;
          color: #fff;
          width: 80px;
          line-height: 30px;
          text-align: center;
          position: absolute;
          right: -40px;
          bottom: -15px;
        }
        .more-left {
          background-color: #768d55;
          color: #fff;
          width: 80px;
          line-height: 30px;
          text-align: center;
          position: absolute;
          left: -40px;
          bottom: -15px;
        }
        .caret-right {
          position: absolute;
          right: -43px;
          top: 40%;
          font-size: 70px;
          color: #c8d4b8;
        }
        .caret-left {
          position: absolute;
          left: -43px;
          top: 40%;
          font-size: 70px;
          color: #c8d4b8;
        }
        > div {
          width: 80%;
          color: #120605;
          line-height: 20px;
          font-size: 12px;
          text-align: justify;
          .title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .min-title {
            color: #023a94;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  .item-2 {
    margin-top: 100px;
    > .el-row {
      background-color: #f5f5f5;
      padding: 10px 0;
    }
    .box-1 {
      height: 100%;
      background-color: #416948;
      color: #fff;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      line-height: 20px;
      text-align: justify;
      > div {
        width: 80%;
      }
    }
    .box-2 {
      background-color: #fff;
      .title {
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        font-weight: bold;
      }

      .content {
        position: relative;
        height: 100%;
        .more-right {
          position: absolute;
          bottom: 0;
          right: -70px;
        }
        .more-left {
          position: absolute;
          bottom: 0;
          left: -70px;
        }
      }
    }
  }
}
.build{
  text-align: center;
  line-height: 300px;
  font-size: 25px;
}
</style>