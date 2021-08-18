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
              <el-col>
                <!-- <router-link:to="'/news/list?id=' + item.id + '&name=' + item.name + '&menu=news'"> -->
                <div class="list">
                  <!-- <div
                      class="img"
                      :style="{
                        backgroundImage: 'url(' + item.imagUrl + ')',
                      }"
                    ></div> -->
                  <div
                    class="list-txt"
                    v-for="item in listData"
                    :key="item.id"
                    :style="
                      item.id > 2
                        ? 'width:40%;display:inline-block;margin-left: 7%;'
                        : ''
                    "
                  >
                    <!-- <div>{{ item.name }}<i class="el-icon-caret-top"></i></div> -->
                    <div class="txt-top">
                      <em>{{ item.name }}</em>
                      <router-link
                        :to="
                          '/news/list?id=' +
                          item.id +
                          '&name=' +
                          item.name +
                          '&menu=news'
                        "
                        tag="span"
                        style="float: right"
                        >更多</router-link
                      >
                    </div>
                    <!-- 第一个 -->
                    <div class="txt-item" v-show="item.id == 1">
                      <!-- 左边 -->
                      <div class="item-left">
                        <!-- 图片 -->
                        <div class="left-src">
                          <img src="" />
                        </div>
                        <!-- 文字 -->
                        <div class="left-text">
                          <!-- 标题 -->
                          <h4>标题</h4>
                          <!-- 内容 -->
                          <p>内容</p>
                        </div>
                      </div>
                      <!-- 右边 -->
                      <div class="item-right">
                        <!-- 内容 -->
                        <div
                          class="right-contion"
                          v-for="(item, index) in oneList"
                          :key="index"
                        >
                          <!-- 标题 -->
                          <h4>{{item.title}}</h4>
                          <!-- v-html='item.content' -->
                          <p >
                           <!-- {{item.content}} -->
                             我是内容
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- 第二个 -->
                    <div class="txt-item2" v-show="item.id == 2">
                      <el-row class="item2-contion" type="flex" justify="center">
                        <el-col
                          :span="10"
                          v-for="item in listDatas"
                          :key="item.id"
                        >
                          <a :href="item.content" target="_blank">
                            <div class="item2-list">
                              <div
                                class="img"
                                :style="{
                                  backgroundImage: 'url(' + item.imageUrl + ')',
                                }"
                              ></div>
                              <div class="item2-txt">
                                <div>{{ item.title }}</div>
                              </div>
                            </div>
                          </a>
                        </el-col>
                      </el-row>
                    </div>
                    <!--第3个 -->
                    <div class="txt-item3" v-show="item.id == 3">
                      <el-row type="flex" >
                        <el-col :span="24" class="content">
                          <ul class="item3-box">
                            <router-link
                              v-for="item in threeList"
                              :key="item.id"
                              :to="'/detail?id=' + item.id + '&menu=news'"
                            >
                              <li>
                                <span class="item3-txt">{{ item.title }}</span>
                                <span>{{ item.issueTime | formatDate }}</span>
                              </li>
                            </router-link>
                          </ul>
                        </el-col>
                      </el-row>
                    </div>
                    <!-- 第四个 -->
                    <div class="txt-item4" v-show="item.id == 4">
                     <el-row type="flex" >
                        <el-col :span="24" class="content">
                          <ul class="item3-box">
                            <router-link
                              v-for="item in fourList"
                              :key="item.id"
                              :to="'/detail?id=' + item.id + '&menu=news'"
                            >
                              <li>
                                <span class="item3-txt">{{ item.title }}</span>
                                <span>{{ item.issueTime | formatDate }}</span>
                              </li>
                            </router-link>
                          </ul>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </div>
              </el-col>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
// import{list} from '@/views/News/index copy.vue'
import { formatDate } from "@/utils/time.js";
import { specialList, specialNewsList } from "@/api/list.js";
export default {
  name: "news",
  data() {
    return {
      listData: [],
      oneList:[],//
      listDatas: [], //
      listshow: false, //
      threeList: [], //
      fourList:[],//
    };
  },
  mounted() {
    this.getSpecialList();
    this.getSpecialNewsList(); //医院院报
    this.getthreeList();
    this.getfourList();
    this.getoneList();
  },
  //过滤
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
  methods: {
    getSpecialList() {
      specialList().then((res) => {
        if (res.code == 200) {
          this.listData = res.data;
        }
      });
    },
    getoneList(){
     specialNewsList(1).then((res) => {
        if (res.code == 200) {
          // this.listDatas = res.data;
          res.data.forEach((item) => {
            if (this.oneList.length != 4) {
              this.oneList.push(item);
            }
          });
          console.log(this.oneList[1].content);
        }
      });
    },
    getSpecialNewsList() {
      specialNewsList(2).then((res) => {
        if (res.code == 200) {
          // this.listDatas = res.data;
          res.data.forEach((item) => {
            if (this.listDatas.length != 4) {
              this.listDatas.push(item);
            }
          });
          //console.log(this.listDatas);
        }
      });
    },
    getthreeList() {
      specialNewsList(3).then((res) => {
        if (res.code == 200) {
          // this.listDatas = res.data;
          res.data.forEach((item) => {
            if (this.threeList.length != 4) {
              this.threeList.push(item);
            }
          });
          //console.log(this.listDatas);
        }
      });
    },
    getfourList(){
       specialNewsList(4).then((res) => {
        if (res.code == 200) {
          // this.listDatas = res.data;
          res.data.forEach((item) => {
            if (this.fourList.length != 4) {
              this.fourList.push(item);
            }
          });
        }
      });
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.news {
  @include maxWidth;
  // banenr
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
  // 最新新闻
  .new-box {
    padding: 50px 0 100px;

    .title {
      // text-align: center;
      font-size: 30px;
      margin-bottom: 30px;

      font-weight: normal;
      padding-left: 10px;
    }
    .content {
      .list {
        box-sizing: border-box;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        width: 100%;
        display: block;
        margin-bottom: 10px;
        .list-txt {
          //font-weight: bold;
          width: 90%;
          margin: 0 auto;
          line-height: 60px;
          padding-bottom: 50px;
          .txt-top {
            //position: relative;
            // text-align: center;
            border-bottom: 2px solid #e6e6e6;
            font-size: 16px;
            transition: 0.3s all;
            // background-color: #fff;
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换行
            span {
              font-size: 18px;
              color: #0087cd;
            }
            span:hover {
              color: #56a5aa;
            }
            em {
              padding-bottom: 15px;
              font-size: 24px;
              font-style: normal;
              border-bottom: 3px solid #0087cd;
            }
          }
          // 第一个
          .txt-item {
            width: 100%;
            display: flex;
            justify-content: space-between;
            // text-align: center;
            .item-left {
              width: 50%;
              .left-src {
                margin: 0;
                margin-top: 20px;
                padding: 0;
                line-height: 0;
                img {
                  width: 100%;
                  height: 380px;
                  //background-color: #0087cd;
                  margin: 0;
                  
                }
              }
              .left-text {
                h4 {
                  line-height: 0;
                }
                p {
                  line-height: 0;
                   
                }
              }
            }
            .item-right {
              width: 45%;
              display: flex;
              flex-direction: column;
              .right-contion {
                box-shadow: 1px 1px 15px #ddd;
                height: 98px;
                margin-top: 20px;
                margin-right: 20px;
                padding: 30px 20px;
                border: 1px solid #ddd;
                cursor: pointer;
                h4 {
                  margin: 0;
                  padding: 0;
                  line-height: 20px;
                }
                p {
                  margin: 0;
                  padding: 0;
                  line-height: 20px;
                  width: 90%;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
              .right-contion:hover {
                background-color: #dddddd;
                h4 {
                  color: $color-9;
                }
              }
            }
          }
          // 第二个
          .txt-item2 {
            height: auto;
            .item2-contion {
              .item2-list {
                //width: 70%;
                .img {
                  background-color: #eee;
                  height: 300px;
                  //padding-bottom: 40%;
                  // background:no-repeat;
                  background-size: cover;
                }
                .item2-txt {
                  color: #333;
                  > div {
                    text-align: center;
                    font-size: 12px;
                    width: 50%;
                    margin: -20px  auto 20px ;
                    background-color: rgba($color: #fff, $alpha: 0.7);
                    background-color: #fff;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    line-height: 40px;
                    overflow: hidden; //超出的文本隐藏
                    text-overflow: ellipsis; //溢出用省略号显示
                    white-space: nowrap; //溢出不换行
                  }
                }
                &:hover{
                  img{
                    height: 200px;
                    cursor: crosshair;
                  }
                  .item2-txt{
                    div{
                       background-color: #ddd;
                    }
                      color: $color-9;
                  }
                } 
              }
              
            }
          }
          // 第三个
          .txt-item3, .txt-item4 {
            margin: 0;
            padding: 0;
            // 列表
            .item3-box {
              li {
                color: #333;
                box-shadow: 0px 0px 18px 0px rgba(2, 2, 2, 0.09);
                font-size: 16px;
                background: #fff;
                margin-top: 10px;
                position: relative;
                font-weight: bold;
                //transition: 0.5s all;
                line-height: 50px;
                padding: 0 20px;
                &:hover {
                  color: $color-9;
                  background-color: #ddd;
                }
                span:last-child {
                  float: right;
                  font-weight: normal;
                }
                .item3-txt {
                  display: inline-block;
                  width: 60%;
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
                    top: 18px;
                    left: 2px;
                  }
                }
              }
            }
          }
          //
        }
      }
    }
  }
}
</style>
