<template>
  <div class="news">
    <div class="block">
      <!-- banner -->
      <div class="banner-txt">
        <div class="link-txt">
          <el-link type="info" href="/" :underline="false">首页></el-link>
          <el-link type="info" :underline="false">新闻中心</el-link>
        </div>
        <div>
          <img src="@/assets/images/news/banner.png" width="100%" />
        </div>
      </div>
      <!-- 正文 -->
      <!-- 专题中心 -->
      <div class="box-1">
        <div style="text-align: right">
          <img src="@/assets/images/news/kuai.png" height="100" />
        </div>
        <div class="item-1">
          <div class="title">医院院报</div>

          <el-row type="flex" justify="center">
            <el-col :span="16" class="content">
              <div>
                <el-col :span="8" v-for="item in listData" :key="item.id">
                  <a :href="item.content" target="_blank">
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
                  </a>
                </el-col>
              </div>
              <!-- <div class="more">查看更多</div> -->
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
    </div>
  </div>
</template>
<script>
import { newsList } from "@/api/list.js";
export default {
  name: "news",
  data() {
    return {
      listData: [],
      page: {
        current: 1,
        size: 6,
        type: 7,
      },
      total: 1,
    };
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
.news {
  @include maxWidth;
  //   banenr
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
  //   正文

  .item-1 {
    background-image: url(~@/assets/images/news/bg1.png);
    background-size: cover;
    padding: 20px 0;
    .title {
      text-align: center;
      font-size: 20px;
      margin-bottom: 30px;
      font-weight: bold;
    }
    .content {
      background-color: rgba($color: #fff, $alpha: 0.5);
      padding: 20px 10px 10px;
      position: relative;

      .list {
        padding: 0 10px;
        margin-bottom: 10px;
        position: relative;
        .img {
          background-color: #eee;
          padding-bottom: 133%;
          background-size: cover;
        }
        .txt {
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          color: #333;
          > div {
            text-align: center;
            font-size: 12px;
            width: 70%;
            margin: 0 auto;
            padding: 0 10px;
            background-color: rgba($color: #fff, $alpha: 0.7);
            line-height: 30px;
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
