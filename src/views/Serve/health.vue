<template>
  <div class="news">
    <div class="block">
      <!-- banner -->
      <div class="banner-txt">
        <div class="link-txt">
          <el-link type="info" href="/" :underline="false">首页></el-link>
          <el-link type="info" :underline="false">健康科普</el-link>
        </div>
        <div>
          <img src="@/assets/images/serve/health-banner.png" width="100%" />
        </div>
      </div>

      <!-- 正文 -->

      <!-- 院报 -->

      <!-- 列表 -->

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
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.news {
  @include maxWidth;
  min-height: 70vh;
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
</style>
