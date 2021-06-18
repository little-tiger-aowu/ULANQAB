<template>
  <div class="news">
    <div class="block">
      <!-- banner -->
      <div class="banner-txt">
        <div class="link-txt">
          <el-link type="info" href="/" :underline="false">首页></el-link>
          <el-link type="info" href="/#/news" :underline="false">新闻中心></el-link>
          <el-link type="info" :underline="false">{{ linkName }}</el-link>
        </div>
        <div>
          <img src="@/assets/images/news/banner.png" width="100%" />
        </div>
      </div>

      <!-- 正文 -->

      <!-- 院报 -->

      <div class="box-1">
        <div style="text-align: right">
          <!-- <img src="@/assets/images/news/kuai.png" height="100" /> -->
        </div>
        <div class="item-1">
          <!-- <div class="title">医院院报</div> -->

          <el-row type="flex" justify="center">
            <el-col :span="16" class="content">
              <div>
                <el-col :span="8" v-for="item in listData" :key="item.id">
                  <router-link :to="'/detail?id=' + item.id + '&menu=party'">
                    <div class="list">
                      <div
                        class="img"
                        :style="{
                          backgroundImage: 'url(' + item.imageUrl + ')',
                        }"
                      ></div>
                      <div class="txt">
                        <div>{{ item.title }}</div>
                      </div>
                    </div>
                  </router-link>
                </el-col>
              </div>
              <!-- <div class="more">查看更多</div> -->
            </el-col>
          </el-row>
        </div>
        <!-- <div style="text-align: center; margin-top: 20px">
          <el-pagination
            :hide-on-single-page="true"
            @current-change="handleCurrentChange"
            :current-page.sync="page.current"
            :page-size="page.size"
            layout="prev, pager, next"
            :total="total"
          >
          </el-pagination>
        </div> -->
      </div>
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
      // 专题名称
      linkName: this.$route.query.name,
      //   专题Id
      id: this.$route.query.id,
      //   专题列表
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
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.news {
  @include maxWidth;
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
        color: #689674;
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
          border: 3px solid #689674;
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
