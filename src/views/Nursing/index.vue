<template>
  <div class="nursing">
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">护理园地</el-link>
      </div>
      <div>
        <img src="@/assets/images/nursing/banner.png" width="100%" />
      </div>
    </div>
    <!-- 正文 -->
    <!-- <el-row type="flex" justify="center" class="item-1">
      <el-col :span="16">
        <el-col :span="8">
          <div class="box-1">
            <img src="@/assets/images/nursing/img1.png" width="100%" />
            <div class="title">医疗新技术</div>
            <div class="min-title">
              <div>我院生物治疗国家重点实验室在NATURE 杂志发表重</div>
            </div>
            <div class="txt">
              我院肝脏外科曾勇教授、吴泓教授课题组在CELL
              DE，男科学研究室袁久洪教授团队多项研究成果被欧美临床指南，神经外科方芳教授、内分泌代谢科谭惠文副教授共同在DI，曾勇教授、吴泓教授课题组在MOLECULAR
              CAN，我院蛋白质组学和代谢组学研究室程惊秋教授、杨浩副研究...
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="box-1">
            <img src="@/assets/images/nursing/img2.png" width="100%" />
            <div class="title">护理特点</div>
            <div class="min-title">
              <div>致敬劳动，情系盛夏</div>
            </div>
            <div class="txt">
              【新冠肺炎系列科普视频】生活中...<br />
              2020.02.13<br />
              娃儿老喊腿杆痛，到底是正常的生长...<br />
              2020.06.01<br />
              看到娃儿有耳屎就想掏？华西专家说...<br />
              2020.06.01<br />
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="box-1">
            <img src="@/assets/images/nursing/img3.png" width="100%" />
            <div class="title">医疗特色</div>
            <div class="min-title">
              <div>我院生物治疗国家重点 杂志发表重</div>
            </div>
            <div class="txt">
              我院肝脏外科曾勇教授、吴泓教授课题组在CELL
              DE，男科学研究室袁久洪教授团队多项研究成果被欧美临床指南，神经外科方芳教授。
            </div>
          </div>
        </el-col>
      </el-col>
    </el-row> -->
    <!-- 护理诊疗设备 -->
    <!-- <div class="item-2">
      <div style="text-align: right">
        <img src="@/assets/images/nursing/k1.png" width="50" />
      </div>
      <el-row type="flex" justify="center">
        <el-col :span="16" class="contant">
          <el-col :span="12" class="box-2">
            <div class="title">护理诊疗设备</div>

            <el-col :span="18" class="content" :offset="6">
              <img src="@/assets/images/nursing/img4.png" width="100%" /> -->
              <!-- <div class="more-left">查看更多</div> -->
            <!-- </el-col>
          </el-col>
          <el-col :span="12" class="box-1">
            <div>
              四川大学华西临床医学院教育发展专项基金管理委员会是受四川大学华西临床医学院党政联席会授权并代表党政联席会管理专项基金的工作机构。由四川大学华西临床医学院党政联席会决定管委会的人员组成、任期及变更等相关事宜，并报四川大学教育基金会项目管理部备案。“专项基金”按照捐赠方意愿，用于四川大学华西临床医学院教育事业发展，包括：<br />
              1、学生资助、奖励、创业就业、社团活动、社会实践等；<br />
              2、资助校园科技文化活动等；
              <br />3、资助教学科研及学科发展等；<br />
              4、资助其他合乎捐赠方意愿，与四川大学华西临床医学院教育事业发展相关的公益活动。
            </div>
          </el-col>
        </el-col>
      </el-row>
    </div> -->
    <!-- 医院护理文化 -->
    <!-- <div class="item-2">
      <el-row type="flex" justify="center">
        <el-col :span="16" class="contant">
          <el-col :span="12" class="box-1">
            <div>
              则根据各学科之间的内在联系加以安排。学生获得的知识较为系统、完整，教学形式与中学相似，学生易于适应；教师的业务专长与所担负的课程一致,教材易于编写。经验证明,这些优点有利于保证教学质量。但这种教学模式以学科为基础，致使课程门数过多，内容往往重复，学生负担过重；各学科界限分明，基础课与临床课截然分开，不利于医学生早期接触医学、早期接触病人，早日接触社会。<br />
              则根据各学科之间的内在联系加以安排。学生获得的知识较为系统、完整，教学形式与中学相似，学生易于适应；教师的业务专长与所担负的课程一致,教材易于编写。
            </div>
          </el-col>
          <el-col :span="12" class="box-2">
            <div class="title">医院护理文化</div>

            <el-col :span="18" class="content">
              <img src="@/assets/images/nursing/img5.png" width="100%" /> -->
              <!-- <div class="more-right">查看更多</div> -->
            <!-- </el-col>
          </el-col>
        </el-col>
      </el-row>
      <div>
        <img src="@/assets/images/nursing/k2.png" width="100" />
      </div>
    </div> -->
    <div class="build">正在建设中...</div>
  </div>
</template>
<style lang="scss">
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.nursing {
  @include maxWidth;
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
  // 正文
  .item-1 {
    margin-top: 50px;
    .box-1 {
      padding: 0 10px;
      .title {
        position: relative;
        z-index: 1;
        width: 80%;
        margin: -40px auto 0;
        line-height: 80px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        background-color: #f8f8f8;
        border-bottom: 5px solid #768d55;
      }
      .min-title {
        width: 65%;
        margin: 0 auto;
        color: #023a94;
        font-size: 13px;
        height: 90px;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
      }
      .txt{
          text-align: justify;
          font-size: 13px;
          line-height: 20px;
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