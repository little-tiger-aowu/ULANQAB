<template>
  <div class="detail">
    <div v-if="nowIdName == 'id'">
      <el-page-header @back="goBack" :content="data.title"> </el-page-header>
      <div class="title">{{ data.title }}</div>
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
    <div v-else>
      <el-page-header @back="goBack" :content="data.name"> </el-page-header>
      <div class="context">
        <div class="context-left">
          <div class="img">
            <img :src="data.imageUrl" height="150" />
          </div>
          <div class="min-title">
            发布时间：{{ data.createTime | formatDate }}
          </div>
        </div>
        <div class="txt">
          <div class="title">{{ data.name }}</div>
          <p class="MsoNormal">
            <!-- <strong>刘达钧</strong>  &nbsp;-->
            心血管内科主任 &nbsp; 中共党员 &nbsp;大学本科 &nbsp;主任医师
          </p>
          <p class="good">
            擅长:
            冠状动脉造影、冠脉支架术、起搏器置入术、心律失常射频消融等心脏介入诊治，以及高血压、冠心病、风湿性心脏病和心律失常、心衰等心血管危急重症的抢救诊疗。
          </p>
          <!-- <p class="MsoNormal" style="text-indent: 30pt">
            <strong>学术及社会兼职</strong>
          </p> -->
          <p class="MsoNormal">内蒙古医学会心血管分会常委</p>
          <p class="MsoNormal">内蒙古医学会电生理分会常委</p>
          <p class="MsoNormal">内蒙古医师协会胸痛专业委员会副主委</p>
          <p class="MsoNormal">内蒙古医学会医疗事故技术鉴定专家</p>
        </div>
      </div>
      <div class="doctors">
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
      </div>
      <!-- <img src="http://wlcbzxyy.front.qiniu.synconize.com/picture/0001.jpg" width="100%"> -->
    </div>
  </div>
</template>
<script>
import { getNews, physicianId } from "@/api/list.js";
import { formatDate } from "@/utils/time.js";
export default {
  name: "detail",
  data() {
    return {
      nowIdName: "",
      data: {},
    };
  },
  //过滤
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
  mounted() {
    this.getNewsData();
  },
  methods: {
    getNewsData() {
      console.log(this.$route.fullPath.split("?"));
      let oPullpath = this.$route.fullPath.split("?")[1];
      let oId = oPullpath.split("=");
      console.log(oId[0]);
      this.nowIdName = oId[0];
      if (oId[0] == "doctorId") {
        physicianId(oId[1]).then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.data = res.data;
            console.log(res);
          }
        });
      } else {
        getNews(oId[1]).then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.data = res.data;
            console.log(res);
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
  .context {
    display: flex;
    margin-bottom: 68px;
    .context-left{
      padding-top: 0;
    }
    .title {
       padding-top: 38px;
      // text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
    .img {
      text-align: center;
      img {
        width: 230px;
        height: 340px;
      }
    }
    .good {
      font-size: 17px;
      padding-bottom: 50px;
      border-bottom: 2px dashed #ccc;
      margin-bottom: 45px;
    }

    .txt {
      margin-left: 70px;
      line-height: 24px;
      text-align: justify;
      p {
        font-size: 17px !important;
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
</style>
<style lang="scss">
.MsoNormal {
  margin-left: 0 !important;
  font-size: 17px !important;
}
</style>
