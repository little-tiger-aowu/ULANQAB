<template>
  <!-- 科室介绍  -->
  <div class="nav">
    <div class="nav-left"></div>
    <div class="nav-right">
      <!-- 标题 -->
      <div class="right-title">
        <h4>科室介绍</h4>
        <button @click="dialogVisible = true">查看更多</button>
        <el-dialog
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <h4>科室介绍</h4>
          <p>
            北京协和医院内科学系自1921年建院之初即成立。经过近百年的传承及发展，目前内科学系下属包括了心脏内科、呼吸内科、消化内科、肾脏内科、血液内科、风湿免疫内科、感染内科、普通内科、肿瘤内科、老年医学科、内分泌科、内科重症监护病房共12个科室，成为了全国各种内科疑难危重疾病的诊治中心。协和内科以其严格而规范的住院医师、总住院医师轮转培训以及三级医师查房制度而闻名，由此培养出了一批又
          </p>
        </el-dialog>
      </div>
      <!-- 内容 -->
      <div class="right-text">
        北京协和医院内科学系自1921年建院之初即成立。经过近百年的传承及发展，目前内科学系下属包括了心脏内科、呼吸内科、消化内科、肾脏内科、血液内科、风湿免疫内科、感染内科、普通内科、肿瘤内科、老年医学科、内分泌科、内科重症监护病房共12个科室，成为了全国各种内科疑难危重疾病的诊治中心。协和内科以其严格而规范的住院医师、总住院医师轮转培训以及三级医师查房制度而闻名，由此培养出了一批又
      </div>
      <h4>就诊指南</h4>
      <!-- 功能区 -->
      <div class="functional">
        <ul>
          <li>
            <p>
              <svg-icon icon-class="referral" />
              <!-- <span class="font_family icon-zhuanjiachuzhenxinxi"></span> -->
              出诊信息
            </p>
          </li>
          <li>
            <p>
              <span class="font_family icon-a-yuyueguahao3"></span>
              医师介绍
            </p>
          </li>

          <li>
            <p>
              <span class="font_family icon-weizhi"></span>
              科室位置
            </p>
          </li>
          <li>
            <p>
              <span class="font_family icon-lianxiwomen"></span>
              联系我们
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  max-width: 1000px;
  margin: 50px auto 0;
  .nav-right {
    h4 {
      font-size: 24px;
      color: #333333;
    }
    .right-title {
      display: flex;
      justify-content: space-between;

      h4 {
        margin: 0;
        font-size: 24px;
        color: #333333;
      }
      button {
        margin: auto 0;
        font-size: 12px;
        color: #474747;
        width: 90px;
        line-height: 22px;
        height: 22px;
        border: 1px solid #ddd;
        display: block;
        text-align: center;
        background-color: #fff;
        border-radius: 10px;
        float: right;
      }
      button:hover {
        background-color: #01763a;
        color: #fff;
      }
    }
    .right-text {
      line-height: 24px;
      color: #474747;
      font-size: 14px;
      margin-top: 16px;
      height: 108px;
      overflow: hidden;
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
          p {
            color: #333333;
            font-size: 18px;
            margin: 0;
           .svg-icon{
             width: 10px;
           }
          }
          p:hover {
            color: #01763a;
            span {
              color: #01763a;
            }
          }
        }
      }
    }
  }
}
</style>
