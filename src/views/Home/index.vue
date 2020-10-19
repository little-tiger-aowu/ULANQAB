<template>
  <div class="home">
    <!-- banner -->
    <img src="@/assets/images/banner1.jpg" width="100%" />

    <!-- search -->
    <div class="search">
      <el-row>
        <el-col :span="14" :offset="2">
          <el-input v-model="inputSearch" placeholder="搜索"></el-input>
        </el-col>
        <el-col :span="3" :offset="3">
          <el-button>马上查询</el-button>
        </el-col>
      </el-row>
    </div>

    <!-- 医院特色 -->
    <div class="home-item-1">
      <el-row>
        <el-col :span="4">
          <img
            src="@/assets/images/index/bg1.png"
            width="100%"
            style="margin-top: 100px"
          />
        </el-col>
        <el-col :span="16">
          <!-- 1 -->
          <ul class="box-1">
            <li>
              <img src="@/assets/images/index/icon-yisheng.png" />
              <p>预约挂号</p>
              <span>Make an Appointment</span>
            </li>
            <li>
              <img src="@/assets/images/index/icon-yibaozhenliaoxiangmu.png" />
              <p>就诊指南</p>
              <span>Patien & Visitor Guide</span>
            </li>
            <li>
              <img src="@/assets/images/index/icon-yibaofuwu.png" />
              <p>医保服务</p>
              <span>Patien & Visitor Guide</span>
            </li>
            <li>
              <img src="@/assets/images/index/icon-wenti.png" />
              <p>常见问题</p>
              <span>FAQ</span>
            </li>
          </ul>
          <!-- 2 -->
          <el-col :span="10" class="box-2">
            <div class="item-box">
              <div class="img">
                <img src="@/assets/images/index/icon-yao.png" width="100%" />
              </div>
              <div class="content">
                <p>医技、辅助科室</p>
                <span>Medical Technology & Auxiliary Department</span>
              </div>
            </div>
            <div class="item-box">
              <div class="img">
                <img
                  src="@/assets/images/index/icon-shoushu.png"
                  width="100%"
                />
              </div>
              <div class="content">
                <p>手术科室</p>
                <span>Surgical Departments</span>
              </div>
            </div>
          </el-col>
          <el-col :span="10" :offset="2" class="box-2">
            <div class="item-box">
              <div class="img">
                <img src="@/assets/images/index/icon-keshi.png" width="100%" />
              </div>
              <div class="content">
                <p>非手术科室</p>
                <span>Non-Surgical Departments</span>
              </div>
            </div>
            <div class="item-box">
              <div class="img">
                <img
                  src="@/assets/images/index/icon-daohang.png"
                  width="100%"
                />
              </div>
              <div class="content">
                <p>科室导航</p>
                <span>Department Navigation</span>
              </div>
            </div>
          </el-col>
        </el-col>
        <el-col :span="20" class="box-3">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
              <div>
                <div class="max-title">医疗特色</div>
                <ul class="content">
                  <li class="title">致敬劳动，情系盛夏</li>
                  <li>
                    <p>【新冠肺炎系列科普视频】生活中生活中...</p>
                    <span>2020.02.13</span>
                  </li>
                  <li>
                    <p>【新冠肺炎系列科普视频】生活中...</p>
                    <span>2020.02.13</span>
                  </li>
                  <li>
                    <p>【新冠肺炎系列科普视频】生活中...</p>
                    <span>2020.02.13</span>
                  </li>
                  <li class="more">
                    <router-link to="/">查看更多</router-link>
                  </li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/index/item-img-2.png" width="100%" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/index/item-img-2.png" width="100%" />
            </swiper-slide>
          </swiper>
        </el-col>
      </el-row>

      <!-- 3 -->
      <div class="decorate-bg-1">
        <div></div>
      </div>
      <div class="box-4">
        <el-row>
          <el-col :span="8" :offset="4">
            <img src="@/assets/images/index/item-img-3.png" width="100%" />
          </el-col>
          <el-col :span="8">
            <div class="content">
              <div>
                <span class="title">学术研讨</span>
                <span class="more">查看更多</span>
              </div>
              <div class="min-title">
                我院生物治疗国家重点实验室在NATURE 杂志发表重
              </div>
              <div class="txt">
                我院肝脏外科曾勇教授、吴泓教授课题组在CELL
                DE,男科学研究室袁久洪教授团队多项研究成果被欧美临床指南.神经外科方芳教授、内分泌代谢科谭惠文副教授共同在DI,曾勇教授、吴泓教授课题组在MOLECULAR
                CAN.我院蛋白质组学和代谢组学研究室程惊秋教授、杨浩副研究...
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="4">
            <div class="content">
              <div>
                <span class="title">学术研讨</span>
                <span class="more">查看更多</span>
              </div>
              <div class="min-title">
                我院生物治疗国家重点实验室在NATURE 杂志发表重
              </div>
              <div class="txt">
                我院肝脏外科曾勇教授、吴泓教授课题组在CELL
                DE,男科学研究室袁久洪教授团队多项研究成果被欧美临床指南.神经外科方芳教授、内分泌代谢科谭惠文副教授共同在DI,曾勇教授、吴泓教授课题组在MOLECULAR
                CAN.我院蛋白质组学和代谢组学研究室程惊秋教授、杨浩副研究...
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <img src="@/assets/images/index/item-img-3.png" width="100%" />
          </el-col>
        </el-row>
      </div>
      <div class="decorate-bg-2">
        <div></div>
      </div>
    </div>

    <!-- 地图 -->
    <div class="footer-map">
      <baidu-map
        :center="center"
        :zoom="zoom"
        @ready="handler"
        style="width: 100%; height: 400px"
        @click="getClickInfo"
        :scroll-wheel-zoom="true"
      >
        <div class="map-box">
          <div class="title">联系市中心医院</div>
          <ul class="map-list">
            <li>乌兰察布中心医院</li>
          </ul>
          <div>地址：内蒙古自治区乌兰察布市集宁区解放大街157号</div>
          <div class="map-txt">市中医蒙医医院（分院）</div>
        </div>
      </baidu-map>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      inputSearch: "",
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 0,
        // centeredSlides: true,
        autoHeight: true, //高度随内容变化
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // Some Swiper option/callback...
      },
      // map
      center: { lng: 109.45744048529967, lat: 36.49771311230842 },
      zoom: 12,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    // map
    handler({ BMap, map }) {
      // 初始化地图,设置中心点坐标
      var point = new BMap.Point(121.483974, 31.216048);
      map.centerAndZoom(point, 15);

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
      var icon = new BMap.Icon("./assets/logo.png", new BMap.Size(100, 100));
      //设置标注的经纬度
      var marker = new BMap.Marker(new BMap.Point(121.160724, 31.173277), {
        icon: icon,
      });
      //把标注添加到地图上
      map.addOverlay(marker);
      var content = "<table>";
      content = content + "<tr><td> 编号：001</td></tr>";
      content =
        content + "<tr><td> 地点：上海汉得信息技术股份有限公司</td></tr>";
      content = content + "<tr><td> 时间：2018-1-3</td></tr>";
      content += "</table>";
      var infowindow = new BMap.InfoWindow(content);
      // 图标点击的时候显示标注
      marker.addEventListener("click", function () {
        this.openInfoWindow(infowindow);
      });
      // 标注默认显示
      // var infoWindow = new BMap.InfoWindow(content) // 创建信息窗口对象
      // map.openInfoWindow(infoWindow, point)
    },
    getClickInfo(e) {
      console.log(e.point.lng);
      console.log(e.point.lat);
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.home {
  // 装饰
  .decorate-bg-1 {
    @include decorateBg(row-reverse, 80px, 80px);
  }
  .decorate-bg-2 {
    @include decorateBg(row, 80px, 160px);
  }
  @include maxWidth;

  .search {
    @include width800;
    position: relative;
    z-index: 2;
    margin: 0 auto 100px;
    background-color: #fff;
    padding: 10px;
    margin-top: -15px;
    border-bottom: 5px solid #609a70;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.3);
    .el-button {
      background-image: url(~@/assets/images/index/icon-search.png);
      background-repeat: no-repeat;
      background-size: 30px;
      background-position: 10px center;
      padding-left: 40px;
      border: 0;
      color: #fff;
      background-color: #62b479;
      box-shadow: 0px 2px 3px 0px #416948,
        inset 0px -1px 5px 0px rgba(45, 45, 45, 0.45);
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
      li {
        width: 25%;
        color: #fff;
        text-align: center;
        padding: 30px 0;
        transition: 0.2s transform;
        span {
          font-size: 12px;
        }
        p {
          margin-top: 30px;
          margin-bottom: 10px;
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
          &:nth-child(odd) {
            box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.5);
            background-image: url(~@/assets/images/index/box-1-bg-1.png);
          }
          &:nth-child(even) {
            box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.5);
            background-image: url(~@/assets/images/index/box-1-bg-2.png);
          }
        }
        &:nth-child(odd) {
          background-color: #416948;
        }
        &:nth-child(even) {
          background-color: #768d55;
        }
      }
    }
    .box-2 {
      margin-top: 20px;

      .item-box {
        padding: 20px 0;
        border-bottom: 1px solid rgba($color: #416948, $alpha: 0.3);
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        transition: 0.2s all;

        &:hover {
          box-shadow: 0 0 5px rgba($color: #758d54, $alpha: 0.5);
          border-right: 3px solid #758d54;
          img {
            box-shadow: 0 0 5px rgba($color: #758d54, $alpha: 0.8);
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
      .max-title {
        font-size: 20px;
        text-align: left;
        padding: 20px 50px;
        font-weight: bold;
      }
      .content {
        background-color: #325b3d;
        color: #fff;
        font-size: 12px;
        text-align: left;
        padding: 10px 50px;
        width: 210px;
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
        }
        a {
          color: #fff;
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
          overflow: hidden; //超出的文本隐藏
          text-overflow: ellipsis; //用省略号显示
          white-space: nowrap; //不换行
        }
        .more {
          float: right;
          padding-top: 10px;
          font-size: 12px;
        }
        .txt {
          font-size: 13px;
          line-height: 24px;
          text-align: justify;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }
    }
  }

  // swiper
  .swiper-container {
    // width: 100%;
    // height: 100%;
    // overflow-x: hidden; overflow-y: visible;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }
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
</style>
