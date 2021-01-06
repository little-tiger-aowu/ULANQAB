<template>
  <div class="notice">
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">科研天地</el-link>
      </div>
      <div>
        <img src="@/assets/images/notice/banner.png" width="100%" />
      </div>
    </div>
    <!-- 正文 -->
    <el-row type="flex" justify="center" class="item-1">
      <el-col :span="16">
        <div class="title">公告公示</div>
        <div class="box-1">
          <div class="contant" v-if="listData.length > 0">
            <router-link
              :to="'/detail?id=' + item.id + '&menu=notice'"
              v-for="item in listData"
              :key="item.id"
            >
              <div class="list">
                <el-row>
                  <el-col :span="16">
                    <div class="content">
                      <span v-html="item.title"></span>
                    </div>
                  </el-col>
                  <el-col :span="5" :offset="3">
                    <div class="time">2020-05-11</div>
                  </el-col>
                </el-row>
              </div>
            </router-link>
          </div>
          <div v-else>- 暂无数据 -</div>
        </div>
        <div class="page-num">
          <el-pagination
            background
            small
            @current-change="handleCurrentChange"
            :current-page.sync="page.current"
            :page-size="page.size"
            layout="prev, pager, next"
            :total="total"
            :pager-count="5"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { newsList } from "@/api/list.js";
import { formatDate } from "@/utils/time.js";
export default {
  name: "notice",
  data() {
    return {
      listData: [],
      page: {
        current: 1,
        size: 10,
        type: 6,
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
<style lang="scss">
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.notice {
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
    .title {
      font-size: 18px;
      font-weight: bold;
      //   梯形
      width: 100px;
      line-height: 50px;
      height: 0;
      border-style: solid;
      border-width: 0 50px 50px 20px;
      border-color: transparent transparent #f7f7f7 #f7f7f7;
    }
    .box-1 {
      background-color: #f7f7f7;
      padding: 20px;
      .contant {
        background-color: #fbfbfb;

        box-shadow: 0 0 20px rgba($color: #999, $alpha: 0.7);
        padding: 20px;
        .list {
          color: #333;
          line-height: 40px;
          cursor: pointer;
          border-bottom: 1px solid #dedede;
          .content {
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换
          }
          .time {
            font-size: 12px;
            text-align: right;
            color: #999;
          }
        }
      }
    }
    .page-num {
      float: right;
      text-align: center;
      //   梯形
      width: 150px;
      line-height: 0;
      height: 0;
      border-style: solid;
      border-width: 50px 0 0 50px;
      border-color: #f7f7f7 transparent #f7f7f7 transparent;
      .el-pagination {
        margin-top: -40px;
        margin-left: -22px;
        .el-pager li:not(.disabled).active {
          background-color: #ebebeb;
          color: #000;
        }
        .el-pager li:not(.disabled):hover {
          color: #000;
        }
      }
    }
  }
}
</style>
