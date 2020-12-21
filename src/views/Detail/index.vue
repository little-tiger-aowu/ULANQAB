<template>
  <div class="detail">
    <div v-if="nowIdName == 'id'">
      <el-page-header @back="goBack" :content="data.title"> </el-page-header>
      <div class="title">{{ data.title }}</div>
      <div class="min-title">
        发布时间：{{ data.issueTime | formatDate }} 发布人：{{ data.author }}
      </div>
      <div class="txt">
        <span v-html="data.content"></span>
      </div>
    </div>
    <div v-else>
      <el-page-header @back="goBack" :content="data.name"> </el-page-header>
      <div class="img">
        <img :src="data.imageUrl" height="150" />
      </div>
      <!-- <div class="title">{{ data.name }}</div> -->
      <div class="min-title">发布时间：{{ data.createTime | formatDate }}</div>
      <div class="txt">
        <span v-html="data.briefInformation"></span>
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
          }
        });
      } else {
        getNews(oId[1]).then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.data = res.data;
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
.img {
  text-align: center;
}
.detail {
  max-width: 1000px;
  margin: 50px auto 0;
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .min-title {
    text-align: center;
    padding: 10px;
    font-size: 12px;
    color: #999;
  }
  .txt {
    line-height: 24px;
    text-align: justify;
    p{
      font-size: 17px !important;
    }
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
