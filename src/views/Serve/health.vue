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
      <!-- 更多信息 -->
      <div >
        <el-row type="flex" justify="center">
          <el-col :span="16" class="content">
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
      <div class="periphery"  v-show="show">
        <!--健康讲堂 -->
        <div class="classroom">
          <!-- 头部  -->
          <div class="classroom-top">
            <p>健康讲堂</p>
            <span>>更多</span>
            <!-- 选择项 -->
            <div class="optionList">
              <div @click="optionBtns(0)" ref="option" class="actives">专家讲座视频</div>
              <div @click="optionBtns(1)" ref="option1">特色治疗视频</div>
              <div @click="optionBtns(2)" ref="option2">医院宣传视频</div>
            </div>
          </div>
          <!-- 视频列表 -->
          <div class="classroomVideo">
             <div class="videoItem" v-for="(item,index) in 3" :key="index">
                <video src=""></video>
                <!-- 文字 -->
                <p>测试</p>
             </div>
          </div>
        </div>
        <!-- 健康科普 -->
        <div class="science">
          <!-- 头部  -->
          <div class="science-top">
            <p>健康科普</p>
            <span>>更多</span>
          </div>
          <!-- 文章列表 -->
             
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
import { newsList } from "@/api/list.js";
import { formatDate } from "@/utils/time.js";
export default {
  name: "newsList",
  data() {
    return {
      //   专题列表
      listData: [],
      page: {
        current: 1,
        size: 10,
        type: 8,
      },
      total: 1,
      show: false,
     
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
    
    this.getSpecialNewsList();
  },

  methods: {
    getSpecialNewsList() {
      newsList(this.page).then((res) => {
        if (res.code == 200) {
          //   this.listData = res.data;
          this.total = res.data.total;
          this.listData = res.data.records;
        }
      });
    },
    handleCurrentChange(val) {
      this.page.current = val;
      this.getNewsList();
    },
    // 点击
    optionBtns(val) {
      // console.log(el.target.className="actives");
      if (val == 0) {
        this.$refs.option1.className = "";
        this.$refs.option2.className = "";
        this.$refs.option.className = "actives";
      } else if (val == 1) {
        this.$refs.option.className = "";
        this.$refs.option2.className = "";
        this.$refs.option1.className = "actives";
      } else if (val == 2) {
        this.$refs.option.className = "";
        this.$refs.option1.className = "";
        this.$refs.option2.className = "actives";
      }
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
          border-bottom: 2px solid #b5b5b5;
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
          }
        }
        //视频列表
       .classroomVideo{
         .videoItem{
            margin: 20px 0;
            border: 2px solid #ccc;
            border-radius: 10px;
            padding: 8px 13px;
            display: flex; 
            justify-content: space-between;  
            video{
              width: 30%;
              background-color: aqua;
              border-radius: 10px;
            }
            // 文字
            p{
              width: 65%;
              font-size: 16px;
            }
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
