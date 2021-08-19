<template>
  <div class="home">
    <!-- banner -->
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img src="@/assets/images/index/banner.jpg" width="100%" />
      </swiper-slide>
      <swiper-slide>
        <router-link to="/about"
          ><img src="@/assets/images/about/banner.png" width="100%"
        /></router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    <!-- <img src="@/assets/images/about/banner.png" width="100%" /> -->
    <!-- search -->
    <el-row type="flex" justify="center">
      <el-col :span="18">
        <div class="search">
          <el-row>
            <el-col :span="15" :offset="2">
              <el-input
                v-model="inputSearch"
                placeholder="医生姓名/关键字/科室名"
                size="small"
              ></el-input>
              <div class="error" v-show="errorSearch">内容不能为空！</div>
            </el-col>
            <el-col :span="3" :offset="2">
              <el-button size="small" icon="el-icon-search" @click="searchData"
                >马上查询</el-button
              >
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div style="height: 40px"></div>
    <!-- 医院特色 -->
    <div class="home-item-1">
      <el-row>
        <el-col :span="18" :offset="3">
          <!-- 1 -->
          <ul class="box-1">
            <li class="bg" @click="open">
              <div>
                <img src="@/assets/images/index/icon-yisheng.png" />
                <p style="color: #fff">预约挂号</p>
                <span style="color: #fff">Make an Appointment</span>
              </div>
            </li>
            <li>
              <router-link to="/table">
                <div>
                  <img
                    src="@/assets/images/index/icon-yibaozhenliaoxiangmu.png"
                  />
                  <p>门诊出诊表</p>
                  <span>Outpatient call form</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/detail?id=14">
                <div>
                  <img src="@/assets/images/index/icon-yibaofuwu.png" />
                  <p>就诊指南</p>
                  <span>Clinic guide</span>
                </div>
              </router-link>
            </li>
            <li>
              <div @click="open">
                <img src="@/assets/images/index/icon-wenti.png" />
                <p>医保服务</p>
                <span>Medical Insurance Service</span>
              </div>
            </li>
          </ul>
        </el-col>
      </el-row>
      <!-- 2 -->
      <el-row :gutter="20" style="margin-top: 60px">
        <el-col :span="6" :offset="3">
          <el-card :body-style="{ padding: '0px' }" class="proList">
            <img src="@/assets/images/index/proIndex1.png" class="image" />
            <div style="height: 20px"></div>
            <span class="proTitle">医院公告</span>
            <router-link to="/notice">
              <el-button type="text" class="button"
                >更多>></el-button
              ></router-link
            >
            <div style="padding: 14px">
              <router-link  :to="'/detail?id=' + item.id + '&menu=notice'" v-for="(item,index) in noticeList" :key="index">
                <ul class="list">
                  {{item.title}}
                </ul>
              </router-link>
              <!-- <router-link to="/notice">
                <ul class="list">
                  蒙速办"APP"健康码申领步骤
                </ul>
              </router-link>
              <router-link to="/notice">
                <ul class="list">
                  乌兰察布市中心医院门诊就诊流程
                </ul>
              </router-link> -->
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="proList">
            <img src="@/assets/images/index/proIndex2.png" class="image" />
            <div style="height: 20px"></div>
            <span class="proTitle">医院院报</span>
            <router-link to="/news/list?id=3&name=医院动态&menu=news">
              <el-button type="text" class="button"
                >更多>></el-button
              ></router-link
            >
            <div style="padding: 14px">
              <ul class="list" v-for="(item, index) in reportList" :key="index">
                <a :href="item.content" target="_blank" style="color: #666">{{
                  item.title
                }}</a>
              </ul>

              <!-- <router-link to="/news">
                <ul class="list">
                  院报2020年第八期
                </ul>
              </router-link>
              <router-link to="/news">
                <ul class="list">
                  院报2020年第七期
                </ul>
              </router-link> -->
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="proList">
            <img src="@/assets/images/index/proIndex3.png" class="image" />
            <div style="height: 20px"></div>
            <span class="proTitle">媒体摘要</span>
            <router-link to="/news/list?id=4&name=媒体摘要&menu=news">
              <el-button type="text" class="button"
                >更多>></el-button
              ></router-link
            >
            <div style="padding: 14px">
              <router-link
                :to="'/detail?id=' + item.id + '&menu=news'"
                v-for="(item, index) in medialist"
                :key="index"
              >
                <ul class="list">
                  {{
                    item.title
                  }}
                </ul>
              </router-link>
              <!-- <router-link to="/news">
                <ul class="list">
                  国务院联防联控机制就重点人群新冠病毒疫苗接种工作举行发布会（实录全文）
                </ul>
              </router-link>
              <router-link to="/news">
                <ul class="list">
                  乌兰察布市中心医院门诊出诊医师一览表
                </ul>
              </router-link> -->
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 科室导航 -->
    <div style="margin-top: 60px">
      <el-row class="department-content" :gutter="20">
        <el-col :span="21" :offset="3"><h1>科室导航</h1></el-col>
        <el-col :span="6" :offset="3">
          <img src="@/assets/images/index/Department.png" class="leftImg" />
        </el-col>
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="6">
              <span
                class="iconKeshi"
                style="background: #538eb6"
                v-show="keType != 1"
                @mouseenter="_getphysicianInfo(1)"
                >非手术科室</span
              >
              <img
                src="@/assets/images/index/Department1.png"
                class="leftImg"
                v-show="keType == 1"
              />
            </el-col>
            <el-col :span="6">
              <span
                class="iconKeshi"
                style="background: #56a5aa"
                v-show="keType != 2"
                @mouseenter="_getphysicianInfo(2)"
                >手术科室</span
              >
              <img
                src="@/assets/images/index/Department2.png"
                class="leftImg"
                v-show="keType == 2"
              />
            </el-col>
            <el-col :span="6">
              <span
                class="iconKeshi"
                style="background: #e7ca90"
                v-show="keType != 3"
                @mouseenter="_getphysicianInfo(3)"
                >诊断相关科室</span
              >
              <img
                src="@/assets/images/index/Department3.png"
                class="leftImg"
                v-show="keType == 3"
              />
            </el-col>
            <el-col :span="6">
              <!-- <img
                src="@/assets/images/index/Department4.png"
                class="leftImg"
              /> -->
              <router-link to="/introduce">
                <span class="iconKeshi">更多科室介绍</span>
              </router-link>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6" v-for="(item, index) in listDataA" :key="item.id">
              <router-link
                :to="
                  '/doctor?current=1&size=16&officeStr=' +
                  item.name +
                  '&menu=introduce'
                "
                v-if="index < 16"
              >
                <p class="depList">{{ item.name }}</p></router-link
              >
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!---->
    <div style="margin-top: 30px">
      <el-row class="zhongxin">
        <el-col :span="18" :offset="3">
          <div class="indexbu">
            <ul>
              <img src="@/assets/images/index/indexXin1.png" @click="open" />
            </ul>
            <ul>
              <img src="@/assets/images/index/indexXin2.png" @click="open" />
            </ul>
            <ul>
              <img src="@/assets/images/index/indexXin3.png" @click="open" />
            </ul>
            <ul>
              <img src="@/assets/images/index/indexXin4.png" @click="open" />
            </ul>
            <ul>
              <img src="@/assets/images/index/indexXin5.png" @click="open" />
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 60px">
      <el-col :span="21" :offset="3"><h1>特色医疗</h1></el-col>
      <el-row class="zhongxin2">
        <el-col :span="18" :offset="3">
          <div class="indexbu">
            <ul>
              <img src="@/assets/images/index/indexKe1.png" @click="open" />
            </ul>
            <ul>
              <img src="@/assets/images/index/indexKe2.png" @click="open" />
            </ul>
            <ul>
              <img src="@/assets/images/index/indexKe3.png" @click="open" />
            </ul>
            <ul>
              <img src="@/assets/images/index/indexKe4.png" @click="open" />
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 地图 -->
    <div class="footer-map" style="margin-top: 60px">
      <baidu-map
        :center="center"
        :zoom="zoom"
        @ready="handler"
        style="width: 100%; height: 370px"
        @click="getClickInfo"
        :scroll-wheel-zoom="true"
      >
        <!-- <div class="map-box">
          <div class="title">联系市中心医院</div>
          <ul class="map-list">
            <li>乌兰察布中心医院</li>
          </ul>
          <div>地址：内蒙古自治区乌兰察布市集宁区解放大街157号</div>
          <div class="map-txt">市中医蒙医医院（分院）</div>
        </div> -->
      </baidu-map>
    </div>
    <!--右边icon-->
    <div class="iconLink">
      <ul>
        <li @click="open">
          <span class="s1">
            <img src="@/assets/images/index/indexIocn1.png" />
          </span>
          <span class="s2"> 预约挂号 </span>
        </li>
        <li>
          <router-link to="/table">
            <span class="s1">
              <img src="@/assets/images/index/indexIocn2.png" />
            </span>
            <span class="s2"> 门诊出诊 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/introduce">
            <span class="s1">
              <img src="@/assets/images/index/indexIocn3.png" />
            </span>
            <span class="s2"> 特色科室 </span>
          </router-link>
        </li>
        <li @click="open">
          <span class="s1">
            <img src="@/assets/images/index/indexIocn4.png" />
          </span>
          <span class="s2"> 远程医疗 </span>
        </li>
        <li @click="open">
          <span class="s1">
            <img src="@/assets/images/index/indexIocn5.png" />
          </span>
          <span class="s2"> 报告查询 </span>
        </li>
        <li>
          <span class="s1">
            <img src="@/assets/images/index/indexIocn6.png" />
          </span>
          <span class="s2"> 暂无 </span>
        </li>
        <li>
          <el-popover placement="left" :width="150" trigger="hover">
            <template #reference>
              <span class="s3">
                <img src="@/assets/images/index/indexIocn7.png" />
              </span>
            </template>
            <div class="popover-img">
              <img
                src="@/assets/images/footer/footer-ewm.png"
                style="width: 150px; height: auto"
              />
            </div>
          </el-popover>
        </li>
        <li>
          <span class="s1">
            <img src="@/assets/images/index/indexIocn8.png" />
          </span>
          <span class="s2"> 暂无 </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { physicianInfo, specialNewsList, newsList } from "@/api/list.js";

import mapIcon from "@/assets/images/yihua-icon-fill.png";
export default {
  name: "Home",
  data() {
    return {
      errorSearch: false,
      mapIcon,
      inputSearch: "",
      listDataA: [],
      keType: 1,
      swiperOptions: {
        autoplay: {
          delay: 3000, //1秒切换一次
          disableOnInteraction: false,
        },
        speed: 1000,
        autoHeight: false, //高度随内容变化
        loop: true,
        // Some Swiper option/callback...
        pagination: {
          el: ".swiper-pagination",
        },
      },
      // map
      center: { lng: 113.120003, lat: 41.036747 },
      zoom: 15,
      medialist: [], //媒体列表
      reportList: [], //
      noticeList: [], //
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this._getphysicianInfo(1);
    this.getmedialist();
    this.getreportList();
    this.getnoticeList();
  },
  methods: {
    _getphysicianInfo(type) {
      this.keType = type;
      physicianInfo(type).then((res) => {
        if (res.code == 200) {
          this.listDataA = res.data;
        }
      });
    },
    open() {
      this.$alert("正在建设...", "提示", {
        confirmButtonText: "确定",
      });
    },
    // map
    handler({ BMap, map }) {
      // 初始化地图,设置中心点坐标
      var point = new BMap.Point(113.120003, 41.036747);
      map.centerAndZoom(point, 17);

      // 添加鼠标滚动缩放
      map.enableScrollWheelZoom();
      // 添加缩略图控件
      //   map.addControl(
      //     new BMap.OverviewMapControl({
      //       isOpen: false,
      //       anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
      //     })
      //   );
      // 添加缩放平移控件
      map.addControl(new BMap.NavigationControl());
      //添加比例尺控件
      map.addControl(new BMap.ScaleControl());
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl());
      //
      //设置标注的图标
      var icon = new BMap.Icon(mapIcon, new BMap.Size(20, 25));
      //设置标注的经纬度
      var marker = new BMap.Marker(new BMap.Point(113.120003, 41.036747), {
        icon: icon,
      });
      //把标注添加到地图上
      map.addOverlay(marker);
      var content = "<table>";
      content = content + "<tr><td>乌兰察布中心医院</td></tr>";
      content =
        content +
        "<tr><td> 地点：内蒙古自治区乌兰察布市集宁区解放大街157号</td></tr>";
      content = content + "<tr><td></td></tr>";
      content += "</table>";
      var infowindow = new BMap.InfoWindow(content);
      // 图标点击的时候显示标注
      marker.addEventListener("click", function () {
        this.openInfoWindow(infowindow);
      });
      // 标注默认显示
      var infoWindow = new BMap.InfoWindow(content); // 创建信息窗口对象
      map.openInfoWindow(infoWindow, point);
    },
    getClickInfo(e) {
      console.log(e.point.lng);
      console.log(e.point.lat);
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    },
    searchData() {
      console.log(this.inputSearch);
      if (this.inputSearch) {
        this.$router.push("/table?keyWord=" + this.inputSearch);
        this.errorSearch = false;
      } else {
        console.log("object");
        this.errorSearch = true;
      }
    },
    //媒体列表
    getmedialist() {
      specialNewsList(4).then((res) => {
        if (res.code == 200) {
          res.data.forEach((item) => {
            if (this.medialist.length != 3) {
              this.medialist.push(item);
            }
          });
          //console.log(this.medialist);
          //console.log(res.data);
        } else {
          console.log(res.code);
        }
      });
    },
    //医院院报
    getreportList() {
      specialNewsList(2).then((res) => {
        if (res.code == 200) {
          res.data.forEach((item) => {
            if (this.reportList.length != 3) {
              this.reportList.push(item);
            }
          });
          // console.log(this.reportList);
        }
      });
    },
    //医院公告
    getnoticeList() {
      let page = {
        current: 1,
        size: 10,
        type: 6,
      };
      newsList(page).then((res) => {
        res.data.records.forEach((item) => {
          if (this.noticeList.length != 3) {
            this.noticeList.push(item);
          }
        });
        console.log(this.noticeList);
        //console.log(res.data.records);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.home {
  .iconKeshi {
    text-align: center;
    color: #fff;
    height: 40px;
    font-size: 20px;

    width: 100%;
    background-color: #00763a;
    display: block;
    border-radius: 5px;
    line-height: 40px;
    cursor: pointer;
  }
  .iconLink {
    z-index: 20000;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    span {
      display: block;
    }
    li {
      cursor: pointer;
      width: 65px;
      height: 65px;
      position: relative;
    }
    .s1 {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 65px;
      height: 65px;
      img {
        width: 65px;
        height: auto;
      }
    }
    .s1:hover {
      opacity: 0;
    }
    .s2 {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      color: #fff;
      width: 51px;
      height: 51px;
      margin: 7px;
      font-size: 12px;
      vertical-align: middle;
      line-height: 56px;
      text-align: center;
      background-color: #00763a;
      border-radius: 5px;
      word-wrap: break-word;
    }
    .s3 {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 65px;
      height: 65px;
      img {
        width: 65px;
        height: auto;
      }
    }
    .popover-img {
      img {
        width: 150px;
        height: auto;
      }
    }
  }
  .zhongxin {
    .indexbu {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    ul {
      width: 19%;
      img {
        width: 100%;
        height: auto;
        cursor: pointer;
      }
    }
  }
  .zhongxin2 {
    .indexbu {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    ul {
      width: 24%;
      img {
        width: 100%;

        height: auto;
        cursor: pointer;
      }
    }
  }
  .proList {
    .image {
      width: 100%;
      height: auto;
    }
    .proTitle {
      font-size: 25px;
      padding: 10px;
    }
    .button {
      float: right;
      text-align: right;
      font-size: 12px;
      padding-right: 10px;
    }
    .list {
      border-bottom: #eeeeee 1px solid;
      margin-top: 10px;
      color: #666;
      padding-bottom: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .department-content {
    .leftImg {
      width: 100%;
      height: auto;
    }
    .depList {
      color: #666;
      text-align: center;
      border: #000000 1px solid;
      padding: 10px;
      border-radius: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .depList:hover {
    color: #999;
    border: #999 1px solid;
  }
  // 装饰
  .decorate-bg-1 {
    @include decorateBg(row-reverse, 80px, 80px);
  }
  .decorate-bg-2 {
    @include decorateBg(row, 80px, 160px);
  }
  @include maxWidth;

  .search {
    position: relative;
    z-index: 2;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px 10px;
    margin-top: 10px;
    border-bottom: 5px solid $color-9;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.3);
    color: #333;
    .error {
      position: absolute;
      bottom: -18px;
      left: 10%;
      color: RED;
      font-size: 12px;
    }
    .el-button {
      background-repeat: no-repeat;
      background-size: 30px;
      background-position: 10px center;
      border: 0;
      color: #fff;
      background-color: $color-3;
      box-shadow: 2px 2px 3px 0px #416948,
        inset 0px -1px 5px 0px rgba(45, 45, 45, 0.3);
      border-radius: 5px;
    }
  }

  .home-item-1 {
    // background-image: url(~@/assets/images/index/bg1.png);
    // background-repeat: no-repeat;
    // background-size: 15%;
    // background-position: left center;
    .box-1 {
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      li {
        width: 23%;
        color: #000;
        text-align: center;
        padding: 30px 0;
        transition: 0.2s transform;
        box-shadow: 2px 2px 5px 5px rgba(185, 181, 181, 0.408);
        // margin: 10px;
        &.bg {
          // background-image: url(~@/assets/images/index/bg-2.png);
          background-color: rgb(83, 142, 182);
          background-size: cover;
          background-position: bottom center;
          // border: 1px solid #000;
          box-shadow: 2px 2px 5px 5px rgba(185, 181, 181, 0.408);
        }
        &.bg:hover {
          // background-image: url(~@/assets/images/index/bg-2-1.png);
          background-size: cover;
          background-position: bottom center;
        }
        span {
          color: #fff;
          font-size: 12px;
          // color: #646464;
        }
        p {
          margin-top: 30px;
          margin-bottom: 0px;
          color: #fff;
          // color: #646464;
          font-size: 21px;
        }
        span:nth-child(1) {
          color: #646464;
        }
        p:nth-child(1) {
          color: #646464;
        }
        img {
          height: 60px;
        }
        &:hover {
          transform: scale(1.05, 1.05);
          text-shadow: 2px 2px 5px rgba($color: #000000, $alpha: 1);
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: bottom center;
          &:nth-child(3) {
            box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.5);
            // background-image: url(~@/assets/images/index/box-1-bg-1.png);
          }
          &:nth-child(even) {
            box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.5);
            // background-image: url(~@/assets/images/index/box-1-bg-2.png);
          }
        }
        &:nth-child(3) {
          background-color: #e4ca8f;
        }
        &:nth-child(2) {
          background-color: #00763a;
        }
        &:nth-child(4) {
          background-color: #56a5aa;
        }
      }
    }
    .box-2 {
      margin-top: 20px;

      .item-box {
        color: #333;
        padding: 20px 0;
        border-bottom: 1px solid rgba($color: $color-3, $alpha: 0.3);
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        transition: 0.2s all;

        &:hover {
          box-shadow: 0 0 5px rgba($color: $color-9, $alpha: 0.5);
          border-right: 3px solid $color-9;
          img {
            box-shadow: 0 0 5px rgba($color: $color-9, $alpha: 0.8);
          }
        }

        .img {
          background-image: url(~@/assets/images/index/icon-bg.png);
          background-size: 100%;
          background-repeat: no-repeat;
          img {
            width: 70px;
            height: 70px;
          }
          margin-right: 30px;
        }
        .content {
          width: 250px;
        }
        p {
          margin-block-start: 0;
          font-size: 20px;
          font-weight: bold;
        }
        span {
          display: inline-block;
          font-size: 12px;
          line-height: 12px;
          margin-top: 15px;
          height: 25px;
          // background-color: red;
        }
      }
    }
    .box-3 {
      margin-top: 150px;
      margin-bottom: 50px;
      position: relative;
      .max-title {
        font-size: 20px;
        text-align: left;
        padding: 20px 50px;
        font-weight: bold;
      }
      .content {
        background-color: $color-9;
        color: #fff;
        font-size: 12px;
        text-align: left;
        padding: 10px 50px;
        // width: 210px;
        box-sizing: content-box;
        p {
          overflow: hidden; //超出的文本隐藏
          text-overflow: ellipsis; //用省略号显示
          white-space: nowrap; //不换行
        }
        .title {
          font-size: 20px;
        }
        .more {
          text-align: right;
          color: #333;
        }
        a {
          color: #fff;
        }
      }
      .box-img {
        // position: absolute;
        // top: 25px;
        position: relative;
        margin-top: -23%;
        .img {
          margin-top: 40px;
          opacity: 0.6;
        }
      }
    }
    .box-4 {
      background-color: #f8f8f8;
      padding: 10px 0;
      .content {
        padding: 30px;
        .title {
          font-size: 24px;
          font-weight: bold;
        }
        .min-title {
          color: #023a94;
          font-size: 16px;
          line-height: 50px;
          overflow: hidden; //  超出的文本隐藏
          text-overflow: ellipsis; //用省略号显示
          white-space: nowrap; //不换行
        }
        .more {
          float: right;
          padding-top: 10px;
          font-size: 12px;
          color: #666;
        }
        .txt {
          font-size: 13px;
          line-height: 24px;
          text-align: justify;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
        }
      }
    }
  }

  // swiper
  // .swiper-slide {
  //   text-align: center;
  //   font-size: 18px;
  //   background: #fff;

  //   /* Center slide text vertically */
  //   display: -webkit-box;
  //   display: -ms-flexbox;
  //   display: -webkit-flex;
  //   display: flex;
  //   -webkit-box-pack: center;
  //   -ms-flex-pack: center;
  //   -webkit-justify-content: center;
  //   justify-content: center;
  //   -webkit-box-align: center;
  //   -ms-flex-align: center;
  //   -webkit-align-items: center;
  //   align-items: center;
  //   transition: 300ms;
  //   transform: scale(0.8);
  // }
  // .swiper-slide-active,
  // .swiper-slide-duplicate-active {
  //   transform: scale(1);
  // }
}

/* 地图标注圆角显示 */
.BMap_bubble_title {
  color: black;
  font-size: 13px;
  font-weight: bold;
  text-align: left;
}
.BMap_pop div:nth-child(1) {
  border-radius: 7px 0 0 0;
}
.BMap_pop div:nth-child(3) {
  border-radius: 0 7px 0 0;
  background: #ababab;
  width: 23px;
  width: 0px;
  height: 10px;
}
.BMap_pop div:nth-child(3) div {
  border-radius: 7px;
}
.BMap_pop div:nth-child(5) {
  border-radius: 0 0 0 7px;
}
.BMap_pop div:nth-child(5) div {
  border-radius: 7px;
}
.BMap_pop div:nth-child(7) {
  border-radius: 0 0 7px 0;
}
.BMap_pop div:nth-child(7) div {
  border-radius: 7px;
}
// 标注右上角的关闭按钮隐藏
.BMap_pop > img {
  display: none;
}
.footer-map {
  width: 75%;
  margin: 0 auto;
  position: relative;
  padding-bottom: 5px;
  border-bottom: 1px solid #538b62;
  margin-bottom: 50px;
}
.map-box {
  position: absolute;
  top: -50px;
  left: 20%;
  width: 280px;
  height: 300px;
  background-image: url(~@/assets/images/footer/map-content-bg.png);
  background-size: cover;
  color: #fff;
  padding: 0 10px;
  font-size: 12px;
  .title {
    text-align: center;
    font-size: 20px;
    line-height: 70px;
  }
  .map-list {
    text-align: center;
    font-size: 14px;
    margin-bottom: 10px;
    li {
      // background-color: transparent;
      background-image: url(~@/assets/images/footer/map-content-bg2.png);
      background-size: cover;
      width: 310px;
      line-height: 40px;
      margin-left: -15px;
      padding-right: 15px;
    }
  }
  .map-txt {
    position: absolute;
    width: 95%;
    text-align: center;
    bottom: 0;
    left: 2.5;
    line-height: 60px;
    border-top: 2px solid #7ca792;
  }
}

// 小图标
.left-bg-1 {
  background-image: url(~@/assets/images/index/bg1.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: bottom;
  width: 100%;
  height: 530px;
  margin-top: 130px;
}
</style>
<style lang="scss">
.BMap_noprint {
  // background: url(http://cdn.synconize.com/yihua-icon-fill.png) !important;
  background-size: auto 100% !important;
  background-repeat: no-repeat !important;
  // width: 30px !important;
  // height: 30px !important;
}
</style>