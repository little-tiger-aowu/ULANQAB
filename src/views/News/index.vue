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
      <div class="new-box">
        <el-row type="flex" justify="center" :gutter="20">
          <el-col :span="18" class="content">
            <div class="title">专题专栏</div>
            <div>
              <el-col :span="8" v-for="item in listData" :key="item.id">
                <router-link
                  :to="'/news/list?id=' + item.id + '&name=' + item.name + '&menu=news'"
                >
                  <div class="list">
                    <div
                      class="img"
                      :style="{
                        backgroundImage: 'url(' + item.imagUrl + ')',
                      }"
                    ></div>
                    <div class="txt">
                      <!-- <div>{{ item.name }}<i class="el-icon-caret-top"></i></div> -->
                      <div>{{ item.name }}</div>
                    </div>
                  </div>
                </router-link>
              </el-col>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import { specialList } from "@/api/list.js";
export default {
  name: "news",
  data() {
    return {
      listData: [],
    };
  },
  mounted() {
    this.getSpecialList();
  },
  methods: {
    getSpecialList() {
      specialList().then((res) => {
        if (res.code == 200) {
          this.listData = res.data;
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
  //   正

  // 最新新闻
  .new-box {
    padding: 50px 0 100px;
    // background-color: #f0f0f0;
    .title {
      // text-align: center;
      font-size: 20px;
      margin-bottom: 30px;
      font-weight: bold;
      padding-left: 10px;
    }
    .content {
      position: relative;
      .list {
        // padding: 0 10px;
        &:hover {
          .img {
            // border: 1px solid #416948;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
          }
          .txt > div {
            background-color: rgba($color: #fff, $alpha: 1);
            box-shadow: 0 -3px 12px 0 rgba(0, 0, 0, 0.3);
            // border-bottom: 1px solid #416948;
            i {
              color: #416948;
            }
          }
        }
        margin-bottom: 10px;
        position: relative;
        .img {
          // background-color: #eee;
          padding-bottom: 75%;
          background-size: cover;
          background-position-x: center;
          background-repeat: no-repeat;
          transition: 0.2s all;
          border: 1px solid transparent;
        }
        .txt {
          color: #333;
          font-weight: bold;
          > div {
            position: relative;
            text-align: center;
            font-size: 16px;
            width: 70%;
            margin: -20px auto 20px;
            background-color: rgba($color: #fff, $alpha: 1);
            transition: 0.3s all;
            // background-color: #fff;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            line-height: 40px;
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换行

            i {
              display: block;
              position: absolute;
              width: 100%;
              font-size: 20px;
              bottom: -7px;
              color: transparent;
              // transition: 0.1s all;
            }
          }
        }
      }
    }
  }
}
</style>
