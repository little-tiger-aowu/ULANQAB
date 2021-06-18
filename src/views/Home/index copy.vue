<template>
  <div class="home">
    <!-- banner -->
    <img src="@/assets/images/about/banner.png" width="100%" />

    <!-- search -->
    <el-row type="flex" justify="center">
      <el-col :span="16">
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
                >立即查询</el-button
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
        <el-col :span="4">
          <div class="left-bg-1"></div>
        </el-col>
        <el-col :span="16">
          <!-- 1 -->
          <ul class="box-1">
            <li class="bg">
              <router-link to="/table">
                <div>
                  <img src="@/assets/images/index/icon-yisheng.png" />
                  <p>挂号指南</p>
                  <span>Make an Appointment</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/detail?id=14">
                <div>
                  <img src="@/assets/images/index/icon-yibaozhenliaoxiangmu.png" />
                  <p>就诊指南</p>
                  <span>Patien & Visitor Guide</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/list">
                <div>
                  <img src="@/assets/images/index/icon-yibaofuwu.png" />
                  <p>医保服务</p>
                  <span>Patien & Visitor Guide</span>
                </div>
              </router-link>
            </li>
            <li>
              <div @click="open">
                <img src="@/assets/images/index/icon-wenti.png" />
                <p>常见问题</p>
                <span>FAQ</span>
              </div>
            </li>
          </ul>
          <!-- 2 -->
          <el-col :span="10" class="box-2">
            <router-link to="/introduce?id=3">
              <div class="item-box">
                <div class="img">
                  <img src="@/assets/images/index/icon-yao.png" width="100%" />
                </div>
                <div class="content">
                  <p>医技、辅助科室</p>
                  <span>Medical Technology & Auxiliary Department</span>
                </div>
              </div>
            </router-link>

            <router-link to="/introduce?id=2">
              <div class="item-box">
                <div class="img">
                  <img src="@/assets/images/index/icon-shoushu.png" width="100%" />
                </div>
                <div class="content">
                  <p>手术科室</p>
                  <span>Surgical Departments</span>
                </div>
              </div>
            </router-link>
          </el-col>
          <el-col :span="10" :offset="2" class="box-2">
            <router-link to="/introduce?id=1">
              <div class="item-box">
                <div class="img">
                  <img src="@/assets/images/index/icon-keshi.png" width="100%" />
                </div>
                <div class="content">
                  <p>非手术科室</p>
                  <span>Non-Surgical Departments</span>
                </div>
              </div>
            </router-link>
            <router-link to="/introduce">
              <div class="item-box">
                <div class="img">
                  <img src="@/assets/images/index/icon-daohang.png" width="100%" />
                </div>

                <div class="content">
                  <p>科室导航</p>
                  <span>Department Navigation</span>
                </div>
              </div>
            </router-link>
          </el-col>
        </el-col>
        <el-col :span="20" class="box-3">
          <el-col :span="8">
            <div @click="open">
              <div class="max-title">医疗特色</div>
              <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide>
                  <div>
                    <ul class="content">
                      <li class="title">致敬劳动，情系盛夏</li>
                      <li>
                        <p>【正在建设】正在建设...</p>
                        <span>2020.02.13</span>
                      </li>
                      <li>
                        <p>【正在建设】正在建设...</p>
                        <span>2020.02.13</span>
                      </li>
                      <li>
                        <p>【正在建设】正在建设...</p>
                        <span>2020.02.13</span>
                      </li>
                      <li class="more">
                        <router-link to="/">查看更多</router-link>
                      </li>
                    </ul>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </el-col>

          <el-col :span="24">
            <div class="box-img">
              <el-col :span="11" :offset="6">
                <img src="@/assets/images/img-2.jpg" width="100%" />
              </el-col>
              <el-col :span="7">
                <img src="@/assets/images/img-6.jpg" width="100%" class="img" />
              </el-col>
            </div>
          </el-col>
        </el-col>
      </el-row>

      <!-- 3 -->
      <div class="decorate-bg-1">
        <div></div>
      </div>
      <div class="box-4">
        <el-row>
          <el-col :span="8" :offset="4">
            <!-- <img src="@/assets/images/nopic/img1.jpg" width="100%" /> -->
            <img src="@/assets/images/img-3.jpg" width="100%" />
          </el-col>
          <el-col :span="8">
            <div class="content">
              <div>
                <span class="title">医疗设备</span>
                <router-link to="/about">
                  <span class="more">查看更多</span>
                </router-link>
              </div>
              <div class="min-title">医院医疗设施先进，医疗设备齐全</div>
              <div class="txt">
                拥有飞利浦Ingenia3.0TCX全数字磁共振系统、西门子Force开源CT、GE公司全息数字PET/CT
                Discovery MI,双向数字平板心血管造影机、64排128层螺旋CT,
                瑞典医科达直线加速器、奥林巴斯CV290电子胃肠镜系统和EU-ME2
                Plus超声内镜诊断仪，以及先进的彩色多普勒超声诊断仪等高精医疗设备300余台件，为医院可持续发展奠定了良好的硬件基础。
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="4">
            <div class="content">
              <div>
                <span class="title">医疗服务</span>
                <router-link to="/about">
                  <span class="more">查看更多</span>
                </router-link>
              </div>
              <div class="min-title">医院学科设置齐全，医疗服务到位</div>
              <div class="txt">
                设有临床科室59个，医技科室28个。其中康复医学科是自治区临床医学重点学科。建院以来，特别是近年来，医院始终坚持并笃定实施“科技兴院”“人才强院”发展战略，重视加强学科建设和医疗技术水平的提高，现已形成了自己独有的医疗特色与优势。心脏大血管外科是医院的传统优势学科，在自治区处于领先地位，享有很高的知名度；老年医学科设备先进，人才梯队合理，技术全面，正向着自治区先进行列迈进；心血管内科在自治区较早开展了心脑血管疾病的介入治疗，疗效显著；血液、内分泌、呼吸系统，头颈部、胸腹部肿瘤等疾病的诊断和治疗，创伤类、骨科疾病、产妇及婴幼儿危重症疾病的救治能力均处于自治区先进水平；关节置换、间盘疾病手术治疗经验丰富、效果极佳；血液净化、肾脏疾病的诊治，消化糸统疾病诊治及内镜下治疗，重症创伤性疾病救治系统完善，技术先进；妇科、泌尿外科所有疾病及肝胆、胃肠、乳腺疾病广泛采用微创手术治疗，患者痛苦小，疗效好；中蒙医专科建设体系完善，设备先进，服务优良。目前，医院各学科建设均处于快速发展期，许多学科的多项技术在本地区处于领先水平。
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <!-- <img src="@/assets/images/nopic/img1.jpg" width="100%" /> -->
            <img src="@/assets/images/img-1.jpg" width="100%" />
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
        style="width: 100%; height: 370px"
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
import mapIcon from "@/assets/images/yihua-icon-fill.png";
export default {
  name: "Home",
  data() {
    return {
      errorSearch:false,
      mapIcon,
      inputSearch: "",
      swiperOptions: {
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
      center: { lng: 113.120003, lat: 41.036747 },
      zoom: 15,
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
        content + "<tr><td> 地点：内蒙古自治区乌兰察布市集宁区解放大街157号</td></tr>";
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
        this.$router.push("/table?keyWord="+this.inputSearch);
        this.errorSearch = false
      } else {
        console.log("object");
        this.errorSearch = true
      }
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
    position: relative;
    z-index: 2;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px 10px;
    margin-top: -35px;
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
      box-shadow: 2px 2px 3px 0px #416948, inset 0px -1px 5px 0px rgba(45, 45, 45, 0.3);
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
        &.bg {
          background-image: url(~@/assets/images/index/bg-2.png);
          background-size: cover;
          background-position: bottom center;
        }
        &.bg:hover {
          background-image: url(~@/assets/images/index/bg-2-1.png);
          background-size: cover;
          background-position: bottom center;
        }
        span {
          font-size: 12px;
          color: #fff;
        }
        p {
          margin-top: 30px;
          margin-bottom: 0px;
          color: #fff;
          font-size: 21px;
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
            background-image: url(~@/assets/images/index/box-1-bg-1.png);
          }
          &:nth-child(even) {
            box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.5);
            background-image: url(~@/assets/images/index/box-1-bg-2.png);
          }
        }
        &:nth-child(3) {
          background-color: $color-9;
        }
        &:nth-child(even) {
          background-color: $color-3;
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
