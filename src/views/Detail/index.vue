<template>
  <div class="detail">
    <div v-if="nowIdName == 'id'">
      <el-page-header @back="goBack" :content="data.title"> </el-page-header>
      <div id="title">{{ data.title }}</div>
      <div class="min-title">
        发布时间：{{ data.issueTime | formatDate }} 发布人：{{
          data.author
        }}
        浏览量：{{ data.pageView }}
      </div>
      <div class="txt">
        <span v-html="data.content"></span>
      </div>
    </div>
    <!-- 医师信息 -->
    <div v-else>
      <el-page-header @back="goBack" :content="data.officeName">
      </el-page-header>
      <div class="context">
        <div class="context-left">
          <div class="img">
            <img :src="data.imageUrl" />
          </div>
          <!-- <div class="min-title">
            发布时间：{{ data.createTime | formatDate }}
          </div> -->
        </div>
        <div class="txt">
          <!-- 名字 -->
          <div class="title">{{ data.name }}</div>
          <ul class="rank">
            <!--  职称 -->
            <li v-show="data.position != '' && data.position != null"  style="font-size: 16px">
              <!-- <p class="bold"> 职务:</p> -->
              {{ data.position }}
            </li>
            <!-- 科室 -->
            <!-- <li v-show="data.officeName != '' && data.officeName != null" class="office">
              <p class="bold">科室:</p>
              {{ data.officeName }}
            </li> -->
          </ul>
          <!-- 职务 -->
          <p    
            class="bold"
            v-show="
              data.professionalTitle != '' && data.professionalTitle != null
            "
          >
            学术及社会兼职:
          </p>
          <div
            style="margin-left: 0px;"
            v-show="
              data.professionalTitle != '' && data.professionalTitle != null
            "
            v-html="data.professionalTitle"
            class="pertise"
          ></div>
          <!-- 简介 -->
          <p
            class="bold"
            v-show="
              data.briefInformation != '' &&
              data.briefInformation != null &&
              data.briefInformation != '暂无信息'
            "
          >
            个人简介:
          </p>
          <div
            v-html="data.briefInformation"
            class="intro"
            v-show="
              data.briefInformation != '' &&
              data.briefInformation != null &&
              data.briefInformation != '暂无信息'
            "
          ></div>
          <!-- 专业擅长 -->
          <div class="title-contion">
            <!-- <h4
              v-show="
                data.professionalTitle != '' && data.professionalTitle != null
              "
            >
              学术及社会兼职
            </h4>
            <p
              v-show="
                data.professionalTitle != '' && data.professionalTitle != null
              "
              v-html="data.professionalTitle"
              class="pertise"
            ></p> -->

            <p
              class="bold"
              v-show="data.achievement != '' && data.achievement != null"
            >
              主要成果:
            </p>
            <!-- <h4 v-show="data.achievement != '' && data.achievement != null">
              主要成果:
            </h4> -->
            <p
              v-show="data.achievement != '' && data.achievement != null"
              style="margin: 0;  margin-left: 0px;"
            >
              {{ data.achievement }}
            </p>
            <p
              class="bold"
              v-show="
                data.professionalExpertise != '暂无信息' &&
                data.professionalExpertise != null &&
                data.professionalExpertise != ''
              "
            >
              专业特长:
            </p>
            <!-- <h4 v-show="data.professionalExpertise != '暂无信息'">专业特长:</h4> -->
            <p
              v-show="
                data.professionalExpertise != '暂无信息' &&
                data.professionalExpertise != null &&
                data.professionalExpertise != ''
              "
              style="margin: 0;  margin-left: 0px;"
            >
              {{ data.professionalExpertise }}
            </p>
            <p
              class="bold"
              v-show="data.visitTime != '' && data.visitTime != null"
            >
              出诊时间:
            </p>
            <p
              v-show="data.visitTime != '' && data.visitTime != null"
              style="margin: 0;  margin-left: 0px;"
            >
              {{ data.visitTime }}
            </p>
          </div>
        </div>
      </div>
      <!-- 小图标 -->
      <div class="functional">
        <ul>
          <li style="cursor: pointer">
            <router-link
              tag="p"
              :to="{ path: '/table', query: { keyWord: typeList.name } }"
            >
              <!-- <svg-icon icon-class="referral" /> -->
              <span class="font_family icon-tingzhenqi"></span>
              出诊信息
            </router-link>
          </li>
          <li style="cursor: pointer">
            <router-link
              tag="p"
              :to="
                '/doctor?current=1&size=16&officeStr=' +
                typeList.name +
                '&menu=introduce'
              "
            >
              <!-- <span class="decut"></span> -->
              <span class="font_family icon-a-zhuanjiachuzhenxinxi1"></span>
              医师介绍
            </router-link>
          </li>
          <li>
            <p @click="visit = true" style="cursor: pointer">
              <span class="font_family icon-a-weizhi1"></span>
              科室位置
            </p>
            <el-dialog :visible.sync="visit" @close="has" v-if="visit">
              <span style="font-size: 24px; margin-bottom: 30px">科室位置</span>
              <div style=" text-align: left; display: inline-block;">
                <pre>
                   <span v-html="typeList.location" style="font-size: 18px; margin-bottom: 30px"></span>
                </pre>
              </div>
              <!-- {{typeList.location}} contactWay电话 -->
            </el-dialog>
          </li>
          <li>
            <p @click="message = true" style="cursor: pointer">
              <span class="font_family icon-a-lianxiwomen1"></span>
              联系我们
            </p>
            <el-dialog :visible.sync="message" v-if="message">
              <h4 style="font-size: 24px">联系我们</h4>
             <div style=" text-align: left; display: inline-block;">
               <pre>
                <span v-html="typeList.contactWay" style="font-size: 18px; margin-bottom: 30px"></span>
                </pre>
              </div>
            </el-dialog>
          </li>
        </ul>
      </div>
      <!-- <div class="doctors">
        <p class="MsoNormal">
          <strong>医生简介</strong>
        </p>
        <p class="MsoNormal" style="text-indent: 30pt">
          1992年7月毕业于内蒙古医学院临床医学专业，学士学位；多次在北京安贞医院、阜外心血管病医院、北大人民医院进修学习，从事临床医疗、教学、科研工作近30年。在国家级及省级专业学术期刊发表论文10余篇。曾获&ldquo;内蒙古抗击非典先进个人&rdquo;&ldquo;市中心医院星级医师&rdquo;等荣誉称号。
        </p>
        <p class="MsoNormal">
          <strong>主要成果</strong>
        </p>
        <p class="MsoNormal" style="text-indent: 30pt">
          主持开展的 &ldquo;冠状动脉介入治疗&rdquo; 获医院新技术新项目一等奖。
        </p>
         <p class="MsoNormal">
          <strong>出诊信息</strong>
        </p>
        <p class="MsoNormal" style="text-indent: 30pt">
          <strong>出诊时间：</strong>周一上、下午
        </p>
        <p class="MsoNormal" style="text-indent: 30pt">
          <strong>出诊地点：</strong>心血管内科门诊（门诊楼4层B区）
        </p>
        <p class="MsoNormal" style="text-indent: 30pt">
          <strong>咨询热线：</strong>0474-2276796
        </p>
      </div> -->

      <!-- <img src="http://wlcbzxyy.front.qiniu.synconize.com/picture/0001.jpg" width="100%"> -->
    </div>
  </div>
</template>
<script>
import { getNews, physicianId, infoIdlist } from "@/api/list.js";
import { formatDate } from "@/utils/time.js";
export default {
  name: "detail",
  data() {
    return {
      nowIdName: "",
      data: {},
      visit: false, //科室位置
      message: false,
      dialogVisible: false, //
      typeList: {}, //
    };
  },
  //过滤
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
  created() {
    this.getNewsData();
    // this.init();
  },
  methods: {
    //初始化
    init() {
      infoIdlist(this.data.officeId).then((res) => {
        if (res.code == 200) {
          console.log(res);
          this.typeList = res.data;
        } else {
          console.log(res);
        }
      });
    },
    // 关闭
    handleClose(done) {
      done();
      //this.visit = false;
      //this.dialogVisible = false
    },
    has() {
      // Object.assign(this.$data, this.$options.data());
      this.visit = false;
    },
    getNewsData() {
      console.log(this.$route.fullPath.split("?"));
      let oPullpath = this.$route.fullPath.split("?")[1];
      let oId = oPullpath.split("=");
      console.log(oId[1]);
      this.nowIdName = oId[0];
      if (oId[0] == "doctorId") {
        physicianId(oId[1]).then((res) => {
          // console.log(res);
          if (res.code == 200) {
            if (res.data.professionalTitle != null) {
              res.data.professionalTitle = res.data.professionalTitle.replace(
                /\n\n/g,
                "、"
              );
              res.data.professionalTitle = res.data.professionalTitle.replace(
                /\n/g,
                "、"
              );
              //   "<br/>"
            } else {
              console.log(1);
            }
            // console.log(res.data.professionalTitle);
            this.data = res.data;
            console.log(res.data);
          }
          infoIdlist(this.data.officeId).then((res) => {
            if (res.code == 200) {
              if (res.data.contactWay != null) {
                res.data.contactWay = res.data.contactWay.replace(
                  /\n\n/g,
                  "<br/>"
                );
                res.data.contactWay = res.data.contactWay.replace(/\n/g, "<br/>");
                //   "<br/>"
              }
              if (res.data.location != null) {
                res.data.location = res.data.location.replace(
                  /\n\n/g,
                  "<br/>"
                );
                res.data.location = res.data.location.replace(/\n/g, "<br/>");
                //   "<br/>"
              }
              console.log(res.data);
              this.typeList = res.data;
            } else {
              console.log(res);
            }
          });
        });
      } else {
        getNews(oId[1]).then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.data = res.data;
            console.log(res.data);
          }
        });
      }
    },
    goBack() {
      this.$router.go(-1); //返回上一层
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.detail {
  max-width: 1000px;
  margin: 50px auto 0;
  #title {
    //padding-top: 38px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .context {
    display: flex;
    margin-bottom: 68px;
    .context-left {
      padding-top: 0;
    }
    .title {
      padding: 20px 0 20px 0;
      // text-align: center;
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px dashed #ddd;
    }
    .img {
      text-align: center;
      img {
        margin-top: 60px;
        // object-fit: cover; 
        // object-position: top;//可能有时候图片不是从头部开始截图的 所以需要定位一下
        width: 240px;
        height: 350px;
        // max-width: 400px;
        // max-height: 450px;
        background-size: contain;
        background-repeat: no-repeat;
        // height: auto;
      }
    }
    .good {
      font-size: 14px;
      padding-bottom: 30px;
      //border-bottom: 2px dashed #ccc;
      //margin-bottom: 45px;
    }
    .txt {
      width: 100%;
      margin-left: 70px;
      line-height: 24px;
      text-align: justify;
      font-size: 14px !important;
      p {
        margin-left: 0px;
        font-size: 14px ;
        color: #666666;
      }
      .pertise {
        // line-height: 2;
        color: #666666;
      }
      // 简介
      .intro {
          margin-left: 0px;
          font-size: 12px;
        //   overflow: hidden; //超出文本隐藏
        // text-overflow: ellipsis; ///超出部分省略号显示
        // display: -webkit-box; //弹性盒模型
        // -webkit-box-orient: vertical; //上下垂直
        // -webkit-line-clamp: 2; //自定义行数
      }
      span {
        font-size: 14px !important;
      }
      .rank {
        display: flex;

        li {
          // width: 65%;
          font-size: 14px ;
          color: #666666;
          padding-right: 30px;
        }
        // .office {
        //   width: 30% !important;
        //   padding: 0;
        // }
      }
      .title-contion {
        // text-indent: 30pt;
        h4 {
          font-size: 14px;
        }
        .pertise {
          line-height: 2;
          color: #666666;
        }
        p {
          text-indent: 0pt;
          // margin-left: 30pt;
        }
      }
    }
  }
  // /功能区
  .functional {
    padding-bottom: 90px;
    ul {
      display: flex;
      
      li {
        text-align: center;
        width: 25%;
        height: auto;
        span {
          display: block;
          font-size: 50px;
          color: #4c4c4c;
          padding-bottom: 10px;
        }
        .decut {
          // display: block;
          margin: 0 auto;
          width: 55px;
          height: 50px;
          background: url("../../assets/images/decut.png");
          background-size: 100% 100%;
        }
        img {
          
          display: block;
          margin: 0 auto;
          // padding: 0;
          padding-bottom: 10px;
          width: 57px;
        }
        ::v-deep .el-dialog {
          width: 80%;
          .el-dialog__body {
            padding: 30px 20px 50px 50px;
          }
          span {
            letter-spacing: 3px;
            line-height: 1.5;
          }
          .footer-map {
            position: relative;
            padding-bottom: 5px;
            border-bottom: 1px solid #538b62;
            margin-bottom: 50px;
          }
          .strong {
            font-weight: 600;
            margin-bottom: 20px;
          }
          .message-text {
            h5 {
              display: inline-block;
              font-size: 20px;
              border-bottom: 3px solid #56a5aa;
              margin-bottom: 30px;
            }
            ul {
              display: block;
              li {
                margin-bottom: 10px;
                width: auto;
                font-size: 18px;
                text-align: left;
                span {
                  font-size: 18px;
                  display: inline-block;
                  letter-spacing: normal;
                  width: 8.7%;
                }
              }
            }
          }
        }
        p {
          color: #333333;
          font-size: 18px;
          margin: 0;
          .svg-icon {
            width: 10px;
          }
        }
        p:hover {
          color: #01763a;
          span {
            color: #01763a;
          }
          .decut {
            background: url("../../assets/images/decut2.png");
            background-size: 100% 100%;
          }
        }
      }
    }
  }
  .min-title {
    text-align: center;
    padding: 10px;
    font-size: 12px;
    color: #999;
  }
}
.el-page-header {
  margin-bottom: 50px;
}
.bold {
  font-size: 16px !important;
  font-weight: 600;
  color: #333333 !important;
}
</style>
<style lang="scss">
.MsoNormal:first-child {
  margin: 0;
  color: #666666;
}
.MsoNormal {
  text-indent: 0 !important;
  margin-left: 0 !important;
  font-size: 14px !important;
  font-family: "微软雅黑" !important;
  // color: #666666;
  span {
    font-size: 14px !important;
    font-family: "微软雅黑" !important;
  }
}
</style>
