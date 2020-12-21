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
            上半年，我院召开党委常委会和党委理论学习中心组学习会，认真传达了中央“不忘初心、牢记使命”主题教育工作会议精神和学校相关要求，成立了医(学)院主题教育筹备领导小组，制定了主题教育筹备工作方案；对主题教育实施方案制定，开展学习教育、调查研究、检视问题、专项整治等工作进行了专题研究和谋划。并在暑假期间通过院党委集中调训方式完成究总支书记、党支部书记学习培训。
            <!-- 正在建设 -->
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
          <!-- <el-col :span="12"><div class="title">院内动态</div></el-col> -->
        </el-row>
        <el-row class="item-box">
          <el-col :span="14">
            <div class="box-1">
              <div>
                <!-- <img src="@/assets/images/party/img2.png" width="100%" /> -->
                <ul>
                  <li v-for="(item,index)  in listData.slice(0,3)" :key="index">
                    <img :src="item.imageUrl" width="100%" v-if="index == 0" />
                    <div>
                      <el-row>
                        <el-col :span="16">
                          <div class="content">
                            {{ item.title }}
                          </div>
                        </el-col>
                        <el-col :span="5" :offset="3">
                          <span>{{item.issueTime|formatDate}}</span>
                        </el-col>
                      </el-row>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="box-2">
              <div class="content">
                <el-row v-for="(item,index)  in listData.slice(3,5)" :key="index" class="list">
                  <el-col :span="12">
                    <img :src="item.imageUrl" width="90%" />
                    <!-- <img src="@/assets/images/party/img3.png" width="90%" /> -->
                  </el-col>
                  <el-col :span="12">
                    <div class="txt-1">
                       {{item.title}}
                    </div>
                    <div class="txt-2">{{item.issueTime|formatDate}}</div>
                  </el-col>
                </el-row>
              </div>
              <router-link to="/list?id=2">
                <!-- <div class="more">查看更多</div> -->
              </router-link>
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
              正在建设
            </div>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { newsList } from "@/api/list.js";
import { formatDate } from "@/utils/time.js";
export default {
  name: "party",
  data() {
    return {
      listData: [],
      page: {
        current: 1,
        size: 6,
        type: 2,
      },
      total: 1,
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
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      newsList(this.page).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.total = res.data.total;
          this.listData = res.data.records;
        }
      });
    },
    handleCurrentChange(val) {
      this.page.current = val;
      this.getNewsList();
    },
  },
};
</script>
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
        font-size: 14px;
        line-height: 24px;
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
        li {
          line-height: 40px;
          margin-bottom: 2px;
          background-color: rgba($color: #fff, $alpha: 1);
          .content {
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换
          }
        }
        li:first-child > div {
          position: relative;
          z-index: 1;
          margin-top: -50px;
          background-color: rgba($color: #fff, $alpha: 0.5);
        }
      }
    }
    .box-2 {
      .txt-1 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp: 3; //显示的行
      }
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
        color: #999;
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