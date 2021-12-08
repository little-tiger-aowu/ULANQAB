<template>
  <div class="news">
    <div class="block">
      <!-- banner -->
      <div class="banner-txt">
        <div class="link-txt">
          <el-link type="info" href="/" :underline="false">首页></el-link>
          <el-link type="info" :underline="false">患者服务</el-link>
        </div>
        <div>
          <img src="@/assets/images/serve/health-banner.png" width="100%" />
        </div>
      </div>
      <div class="item-1" v-if="show == false">
        <el-row type="flex" justify="center">
          <el-col :span="18" class="content">
            <ul class="box">
              <router-link
                v-for="item in listData"
                :key="item.id"
                :to="'/detail?id=' + item.id + '&menu=serve&submenu=health'"
              >
                <li>
                  <span class="txt">{{ item.title }}</span>
                  <span>{{ item.issueTime | formatDate }}</span>
                </li>
              </router-link>
            </ul>
          </el-col>
        </el-row>
      </div>
      <!-- 外围框 -->
      <div class="periphery" v-else>
        <!--健康讲堂 -->
        <div class="classroom">
          <!-- 头部  -->
          <div class="classroom-top">
            <p>健康讲堂</p>
            <!-- <span>> 更多</span> -->
            <!-- 选择项 -->
            <div class="optionList">
              <div
                @mouseenter="optionBtns(0)"
                @mouseleave="optionMouse(0)"
                ref="option"
                class="actives"
              >
                专家讲座视频
              </div>
              <div
                @mouseenter="optionBtns(1)"
                @mouseleave="optionMouse(1)"
                ref="option1"
              >
                特色治疗视频
              </div>
              <div
                @mouseenter="optionBtns(2)"
                @mouseleave="optionMouse(2)"
                ref="option2"
              >
                医院宣传视频
              </div>
            </div>
          </div>
          <!-- 视频列表 -->
          <div class="classroomVideo">
            <div
              class="videoItem"
              v-for="(item, index) in videoList"
              :key="index"
              @click="videoItemData(item)"
            >
              <div class="videoItem-img">
                <img :src="item.coverImage" />
                <img
                  src="@/assets/images/videoopen.png"
                  class="videoItem-open"
                />
              </div>

              <!-- <video  controls muted :src="item.videoUrl"></video> -->
              <!-- 文字 -->
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
        <!-- 健康科普 -->
        <div class="science">
          <!-- 头部  -->
          <div class="science-top">
            <p>健康科普</p>
            <span @click="show = false">> 更多</span>
          </div>
          <!-- 文章列表 -->
          <div
            class="science-Txtlist"
            v-for="(item, index) in listDataOne"
            :key="index"
            @click="
              $router.push(
                '/detail?id=' + item.id + '&menu=serve&submenu=health'
              )
            "
          >
            <!-- 标题 -->
            <p class="Txtlist-top">{{ item.title }}</p>
            <!-- 内容 -->
            <p class="Txtlist-content" v-html="item.content"></p>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center; margin-top: 20px">
      <el-pagination
        :hide-on-single-page="true"
        @current-change="handleCurrentChange"
        :current-page.sync="page.current"
        :page-size="page.size"
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { newsList, getvideo } from "@/api/list.js";
import { formatDate } from "@/utils/time.js";
export default {
  name: "newsList",
  data() {
    return {
      videoContionshow: false,
      videoItems: {},
      //   专题列表
      listData: [],
      // 专题列表第一条
      listDataOne: [],
      // 视频列表
      videoList: [],
      location: 1,
      page: {
        current: 1,
        size: 10,
        type: 8,
      },
      total: 1,
      show: true,
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
    this.getSpecialNewsList();
  },

  methods: {
    // 初始化
    getSpecialNewsList() {
      // 文章
      newsList(this.page).then((res) => {
        if (res.code == 200) {
          //   this.listData = res.data;
          this.total = res.data.total;
          // 全部
          this.listData = res.data.records;
          // 第一条
           this.listDataOne.push(res.data.records[0]);
            this.listDataOne.push(res.data.records[1]);
          this.listDataOne.push(res.data.records[2]);
        
          for (let index = 0; index < this.listDataOne.length; index++) {
             this.listDataOne[index].content = this.listDataOne[index].content
            .replace(/&nbsp;/g, "")
            .replace(/&rdquo;/g, "")
            .replace(/&ldquo;/g, "");
          // &ldquo;
          this.listDataOne[index].content = this.listDataOne[index].content
            .replace(/<[^>]+>/g, "")
            .replace(/(\n)/g, "");
          }
         
          // this.listDataOne[0].content
          // console.log(this.listDataOne[0].content);
        }
      });
      this._getvideo();
    },
    // 视频
    _getvideo() {
      let params = {
        current: 1,
        location: this.location,
        size: 3,
      };
      getvideo(params).then((res) => {
        if (res.code == 200) {
          // console.log(res.data);
          this.videoList = res.data.records;
          console.log(this.videoList);
          this.videoItems = this.videoList[0];
          console.log(this.videoItems);
        }
      });
    },
    // 分页
    handleCurrentChange(val) {
      this.page.current = val;
      this.getNewsList();
    },
    // 选择项移入
    optionBtns(val) {
      // console.log(el.target.className="actives");
      if (val == 0) {
        this.$refs.option1.className = "";
        this.$refs.option2.className = "";
        this.$refs.option.className = "actives";
        this.location = 1;
      } else if (val == 1) {
        this.$refs.option.className = "";
        this.$refs.option2.className = "";
        this.$refs.option1.className = "actives";
        this.location = 2;
      } else if (val == 2) {
        this.$refs.option.className = "";
        this.$refs.option1.className = "";
        this.location = 3;
        this.$refs.option2.className = "actives";
      }
      this._getvideo();
    },
    // 选择项移出
    optionMouse(val) {
      console.log(val);
    },
    //视频详情
    videoItemData(val) {
      console.log(val);
      // this.videoItems = val;
      this.$router.push({path:'/detail?id=' + '' ,query:val})
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.news {
  @include maxWidth;
  min-height: 70vh;
  .videoitem{
    width: 100%;
  }
  .block {
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
    // 外围框
    .periphery {
      margin-top: 20px;
      border: 2px solid #ccc;
      padding: 25px;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      // 健康讲堂 健康科普
      .classroom,
      .science {
        width: 45%;
        // 头部
        .classroom-top,
        .science-top {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #b5b5b5;
          position: relative;
          // 选择项
          .optionList {
            position: absolute;
            left: 20%;
            bottom: 0;
            div {
              float: left;
              line-height: 2;
              font-size: 18px;
              color: #6d6d6d;

              padding: 10px;

              border-top-right-radius: 10px;
              border-top-left-radius: 10px;
            }
            .actives {
              color: #fff;
              background-color: #2f7f87;
            }
          }
          p {
            font-size: 24px;
            display: inline-block;
            margin: 0;
            padding: 0;
            font-weight: 600;
            padding-bottom: 10px;
            border-bottom: 5px solid #2f7f87;
            transform: translateY(2px);
          }
          span {
            font-size: 18px;
            color: #2f7f87;
            line-height: 2;
            cursor: pointer;
          }
        }
        //视频列表
        .classroomVideo {
          .videoItem {
            margin: 20px 0;
            border: 1px solid rgba(73, 73, 73, 0.28);
            box-shadow: 0px 0px 18px 0px rgba(2, 2, 2, 0.09);
            border-radius: 10px;
            padding: 8px 13px;
            opacity: 0.9;
            display: flex;
            justify-content: space-between;
            video {
              width: 30%;
              background-color: aqua;
              border-radius: 10px;
            }
            .videoItem-img {
              width: 30%;
              position: relative;
              img {
                width: 100%;
              }
            }
            .videoItem-open {
              // background-color: #333;
              background-color: none;
              width: 50px !important;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            // 文字
            p {
              width: 65%;
              font-size: 16px;
            }
            &:hover {
              p {
                color: $color-9;
              }
            }
          }
        }
        //文章列表
        .science-Txtlist {
          padding: 0 0 60px 16px;
          margin: 20px 0;
          border: 1px solid rgba(73, 73, 73, 0.28);
          border-radius: 10px;
          opacity: 0.9;
          box-shadow: 0px 0px 18px 0px rgba(2, 2, 2, 0.09);
          //  标题
          .Txtlist-top {
            font-weight: 600;
            font-size: 24px;
          }
          // 内容
          .Txtlist-content {
            padding-right: 16px;
            font-size: 16px;
            letter-spacing: 1px;
            overflow: hidden; //超出文本隐藏
            text-overflow: ellipsis; ///超出部分省略号显示
            display: -webkit-box; //弹性盒模型
            -webkit-box-orient: vertical; //上下垂直
            -webkit-line-clamp: 2; //自定义行数
          }
          &:hover {
            .Txtlist-top {
              color: $color-9;
            }
            //
          }
        }
      }
    }
    // 列表
    .box {
      // max-width: 600px;
      margin: 50px auto 0;
      li {
        // line-height: 30px;
        color: #333;
        box-shadow: 0px 0px 18px 0px rgba(2, 2, 2, 0.09);
        font-size: 16px;
        background: #fff;
        padding: 20px 24px 20px 40px;
        margin-bottom: 10px;
        position: relative;
        font-weight: bold;
        transition: 0.5s all;
        &:hover {
          color: $color-9;
        }
        span:last-child {
          float: right;
          font-weight: normal;
          // color: #999;
        }
        .txt {
          display: inline-block;
          width: 70%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:after {
            content: "";
            display: block;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            border: 3px solid $color-9;
            position: absolute;
            top: 30px;
            left: 20px;
            margin-top: -6px;
          }
        }
      }
    }
    // 专题
    .item-1 {
      margin-top: 50px;
      .content {
        position: relative;
        .list {
          // padding: 0 10px;

          margin-bottom: 10px;
          position: relative;
          .img {
            background-color: #eee;
            padding-bottom: 133%;
            background-size: cover;
          }
          .txt {
            color: #333;
            > div {
              text-align: center;
              font-size: 12px;
              width: 70%;
              margin: -20px auto 20px;
              // background-color: rgba($color: #fff, $alpha: 0.7);
              background-color: #fff;
              box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
              line-height: 40px;
              overflow: hidden; //超出的文本隐藏
              text-overflow: ellipsis; //溢出用省略号显示
              white-space: nowrap; //溢出不换行
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
}
</style>
