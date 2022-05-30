<template>
  <div class="guide">
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">科室导航</el-link>
      </div>
      <div class="banner-img">
        <h2>就医指南</h2>
        <!-- <img src="@/assets/images/research/banner.png" width="100%" /> -->
      </div>
    </div>
    <!-- 选项 -->
    <a name="firstAnchor" style="opacity: 0">1</a>
    <el-row type="flex" justify="space-between" class="guide-option">
      <el-col :span="3" v-for="(item, index) in list" :key="index">
        <el-button
          plain
          :class="option == item.id ? 'options' : ''"
          @click="optionButs(item.id)"
          >{{ item.header }}</el-button
        >
      </el-col>
    </el-row>
    <!-- 选项内容 -->
    <el-row class="option-contion" type="flex" justify="space-between">
      <!-- 选项左边内容 -->
      <el-col :span="8">
        <el-row type="flex" style="flex-direction: column">
          <el-col :span="22" class="option-left">
            <ul>
              <li
                v-for="(item, index) in optionList"
                :key="index"
                :style="optionLi == item.identify ? 'color: #308594;' : ''"
                @click="liopen(item.identify)"
              >
                {{ item.title }}
                <img
                  v-show="item.identify == 1"
                  src="@/assets/images/option.png"
                />
              </li>
            </ul>
          </el-col>
          <el-col :span="22" class="option-left">
            <p>出诊信息查询</p>
            <input type="text" v-model="officeStr" placeholder="科室名称" />
            <input type="text" v-model="doctorName" placeholder="医生名称" />
            <div>
              <el-button @click="searchData">搜索</el-button>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <!-- 选项右边内容 -->
      <el-col :span="16" class="option-right">
        <div id="right" ref="text">
          <h4 :style="opcontion.id == 3 ? 'text-align: center;' : ''">
            {{ opcontion.title }}
          </h4>
          <!-- 流程图 -->
          <!-- <img
            :src="opcontion.contion"
            v-show="opcontion.id == 1 || opcontion.id == 4 || opcontion.id == 8"
          /> -->
          <el-image
            v-show="opcontion.id == 1 || opcontion.id == 4 || opcontion.id == 8"
            :src="opcontion.contion"
            :preview-src-list="Array(opcontion.contion)"
          >
          </el-image>
          <!-- 门诊时间 -->
          <!-- style="text-align: center;" -->
          <div
            style="padding: 0 40px; text-align: center"
            v-show="opcontion.id == 3"
            v-html="opcontion.contion"
          ></div>
          <div
            id="tab"
            v-show="opcontion.id == 2"
            v-html="opcontion.contion"
          ></div>
          <!-- <img src="" alt=""> -->
          <!-- 滚动条 -->
          <!-- <div class="scrollTools" id="el">
           <div class="scrollThumb" ref="thumb" v-drag ></div>
          </div> -->
          <div
            id="insurance"
            v-html="opcontion.contion"
            v-show="opcontion.id == 5"
          ></div>
          {{ opcontion.contion == "" ? "暂无" : "" }}
        </div>
        <div class="footer-map" v-show="opcontion.contion == 1">
          <p>地址：内蒙古自治区乌兰察布市集宁区解放大街157号</p>
          <!-- 地图（本院） -->
          <baidu-map
            v-if="mapShow"
            :center="center"
            :zoom="zoom"
            @ready="handler"
            style="width: 80%; height: 370px; margin: 0 auto"
            @click="getClickInfo"
            :scroll-wheel-zoom="true"
          >
          </baidu-map>
          <p style="margin-bottom: 10px">乘车路线：</p>
          <ul>
            <li style="margin-bottom: 5px; padding-left: 72px; font-size: 16px">
              乘1、4、11路公交车中心医院站下车即到。
            </li>
            <li style="margin-bottom: 5px; padding-left: 72px; font-size: 16px">
              乘5路公交车虎山公园站下车向北100米即到。
            </li>
          </ul>
        </div>
        <!-- 地图（分院） -->
        <div class="footer-map" v-show="opcontion.contion == 2">
          <p>地址：乌兰察布市集宁新区工农大街西呼格吉街南</p>
          <baidu-map
            v-if="mapShow"
            :center="centers"
            :zoom="zoom"
            @ready="handlers"
            style="width: 80%; height: 370px; margin: 0 auto"
            @click="getClick"
            :scroll-wheel-zoom="true"
          >
          </baidu-map>
          <p style="margin-bottom: 10px">乘车路线：</p>
          <ul>
            <li style="margin-bottom: 5px; padding-left: 72px; font-size: 16px">
              乘10路、11路、21路、33路、36路、51路公交均可到达
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <!-- 了解这些有可能对您的就诊有所帮助  -->
    <h1 style="font-weight: normal; text-align: center; margin: 100px 0 50px 0">
      了解这些有可能对您的就诊有所帮助
    </h1>
    <!-- 功能区 -->
    <div class="functional">
      <ul>
        <li style="cursor: pointer">
          <router-link tag="p" :to="'/table'" class="img">
            <!-- <span> <svg-icon icon-class="referral"  color='red'/></span> -->
            <!-- <span class="font_family icon-zhuanjiachuzhenxinxi"></span> -->
            <!-- 门诊出诊表 -->
          </router-link>
        </li>
        <li style="cursor: pointer">
          <div tag="p" @click="skip(1)" class="img2">
            <!-- <span class="font_family icon-a-yuyueguahao3"></span>
            就医须知 -->
          </div>
        </li>
        <li>
          <!--  :to="{ path: '/guide', query: { option: 4 } }" -->
          <div tag="p" @click="skip(3)" class="img3">
            <!-- <span class="font_family icon-a-yuyueguahao3"></span>
            就医须知 -->
          </div>
        </li>
        <li>
          <router-link
            tag="p"
            style="cursor: pointer"
            :to="'/section?num=2'"
            class="img4"
          >
            <!-- <span class="font_family icon-lianxiwomen"></span>
            专科专病 -->
          </router-link>
        </li>
        <li>
          <router-link
            tag="p"
            style="cursor: pointer"
            :to="'/research'"
            class="img5"
          >
            <!-- <span class="font_family icon-lianxiwomen"></span>
            健康体检 -->
          </router-link>
        </li>
        <li>
          <router-link
            tag="p"
            style="cursor: pointer"
            :to="'/serve/health'"
            class="img6"
          >
            <!-- <span class="font_family icon-lianxiwomen"></span>
            健康科普 -->
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mapIcon from "@/assets/images/yihua-icon-fill.png";
import { searchData } from "@/api/list.js";
import data from "../../utils/list";
export default {
  data() {
    return {
      mapShow: false,
      centers: { lng: 113.143078, lat: 41.03531 },
      center: { lng: 113.120003, lat: 41.036747 },
      zoom: 17,
      option: 1,
      optionLi: 1,
      officeStr: "",
      doctorName: "",
      opcontion: {},
      optionList: [],
      list: data.list,
      nums: this.$route.query.num,
      opnums: this.$route.query.opnum,
    };
  },
  methods: {
    skip(val) {
      this.option = val;
      let num = val - 1;
      this.optionList = this.list[num].list;
      this.opcontion = this.optionList[0];
      if (val == 3) {
        this.mapShow = true;
      }
      // window.location.hash = "#firstAnchor";
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    // 获取搜索信息
    getSearchData() {
      let data = {
        current: 1,
        doctorName: this.$route.query.doctorName,
        officeStr: this.$route.query.officeStr,
        size: "5",
      };
      searchData(data).then((res) => {
        if (res.code == 200) {
          this.doctorData = res.data.records;
          this.total = res.data.total;
          // this.page.current = res.data.current;
        }
      });
    },
    // 搜索
    searchData() {
      this.$router.push(
        "/doctor?current=1&size=16&doctorName=" +
          this.doctorName +
          "&officeStr=" +
          this.officeStr +
          "&menu=introduce"
      );
      this.getSearchData();
    },
    //
    optionButs(val) {
      this.optionLi = 1;
      this.option = val;
      let num = val - 1;
      this.optionList = this.list[num].list;
      this.opcontion = this.optionList[0];
      // this.liopen(0)
      setTimeout(() => {
        this.mapShow = true;
      }, 0);
    },
    //
    liopen(val) {
      this.mapShow = false;
      this.optionLi = val;
      let num = val - 1;
      this.opcontion = this.optionList[num];
      setTimeout(() => {
        this.mapShow = true;
      }, 10);
    },
    handler({ BMap, map }) {
      // 初始化地图,设置中心点坐标
      var point = new BMap.Point(113.120003, 41.036747);
      //12592519.133403657,4989464.545,16.28
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
    handlers({ BMap, map }) {
      // 初始化地图,设置中心点坐标
      var point = new BMap.Point(113.143078, 41.03531);
      map.centerAndZoom(point, 18);
      // 添加鼠标滚动缩放
      map.enableScrollWheelZoom();
      // 添加缩略图控件
      // map.addControl(
      //   new BMap.OverviewMapControl({
      //     isOpen: false,
      //     anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
      //   })
      // );
      // 添加缩放平移控件
      map.addControl(new BMap.NavigationControl());
      //添加比例尺控件
      map.addControl(new BMap.ScaleControl());
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl());
      //设置标注的图标
      var icon = new BMap.Icon(mapIcon, new BMap.Size(20, 25));
      //设置标注的经纬度
      var marker = new BMap.Marker(new BMap.Point(113.143078, 41.03531), {
        icon: icon,
      });
      //把标注添加到地图上
      map.addOverlay(marker);
      var content = "<table>";
      content = content + "<tr><td>乌兰察布中心医院分院(中蒙医院)</td></tr>";
      content =
        content +
        "<tr><td> 地点：乌兰察布市集宁新区工农大街西呼格吉街南</td></tr>";
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
    getClick(e) {
      console.log(e.point.lng);
      console.log(e.point.lat);
      this.centers.lng = e.point.lng;
      this.centers.lat = e.point.lat;
    },
    init() {
      if (this.nums != undefined || this.opnums != undefined) {
        if (this.nums == 2) {
          this.optionLi = 2;
          this.optionList = this.list[0].list;
          this.opcontion = this.optionList[2];
        }
        console.log(this.$route.query.opnum);
        // console.log(this.nums);
        // console.log(this.opnums);
      }
      if (this.opnums != "") {
        this.option = 2;
        this.optionList = this.list[1].list;
        this.opcontion = this.optionList[2];
      }
    },
    health() {
      if (this.$route.query.option != undefined) {
        this.option = this.$route.query.option;
        let num = this.$route.query.option - 1;
        this.optionList = this.list[num].list;
        this.mapShow = true;
        this.optionList[0].contion = String(this.optionList[0].contion);
        this.opcontion = this.optionList[0];
        console.log(this.opcontion);
        document.documentElement.scrollTop = 0;
      }
    },
  },
  created() {
    // var out = document.getElementById('right');
    // console.log(out);
    this.optionList = this.list[0].list;
    this.opcontion = this.optionList[0];
    console.log(this.$route.query.option);
    this.health();
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // this.init();
  },
  watch: {
    // $route: {
    //   handler: function (val, oldval) {
    //     console.log(val, oldval);
    //     console.log(val.query.option);
    //     if (val.query.option != undefined) {
    //       this.option = val.query.option;
    //       let num = val.query.option - 1;
    //       this.optionList = this.list[num].list;
    //       this.mapShow = true;
    //       this.optionList[0].contion = String(this.optionList[0].contion);
    //       this.opcontion = this.optionList[0];
    //       console.log(this.opcontion);
    //       document.documentElement.scrollTop = 0;
    //       // this.$route.query.option=''
    //     }
    //   },
    // },
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.guide {
  @include maxWidth;
  //   banenr
  .banner-txt {
    margin-bottom: 50px;
    .banner-img {
      width: 100%;
      height: 289px;
      background-image: url(../../assets/images/research/banner.png);
      h2 {
        margin: 0;
        padding: 0;
        font-size: 46px;
        line-height: 360px;
        font-weight: 600;
        letter-spacing: 2px;
        color: #fff;
        text-align: center;
      }
    }
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
  //选项
  .guide-option {
    width: 70%;
    margin: 0 auto;
  }
  .guide-option /deep/ .el-button {
    padding: 10px 40px;
    font-size: 18px;
    box-shadow: 0px 0px 5px 1px #b2b2b2;
    border: none;
    &:hover {
      background-color: #308594;
      color: #fff;
      //border: 1px solid #2f8594;
    }
  }
  .options {
    background-color: #308594;
    color: #fff;
  }
  //   选项内容
  .option-contion {
    margin: 40px auto;
    width: 70%;
    .option-left div /deep/ .el-button {
      width: 100%;
      font-size: 18px;
      color: #fff;
      background-color: #308594;
    }
    .option-left {
      height: 300px;
      //overflow-y: scroll;
      box-shadow: 0px 0px 5px 1px #b2b2b2;
      padding: 30px 20px;
      box-sizing: border-box;
      p {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 25px;
      }
      input {
        text-indent: 5px;
        width: 100%;
        outline: none;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 16px;
        line-height: 2;
        margin-bottom: 15px;
        border: 1px solid #898989;
      }
    }
    // 滚动样式（不全，有问题）
    // .option-left::-webkit-scrollbar{
    //   width: 2px;
    //   background-color: #ededed;
    // }
    // .option-left::-webkit-scrollbar-thumb {
    //   display: block;
    //   border-radius: 10px;
    //   background: #535353;
    // }
    // .option-left::-webkit-scrollbar-track {
    //   /*滚动条里面轨道*/
    //   border-radius: 10px;
    //   background: #ededed;
    // }
    // .option-left::-webkit-scrollbar-track-piece{
    //   width: 1px;
    //   background-color: red;
    // }
    .option-left:first-child {
      margin-bottom: 35px;
      cursor: pointer;
    }
    .option-right {
      position: relative;
      height: 635px;
      overflow-y: scroll;
      padding: 24px 20px;

      box-shadow: 0px 0px 5px 1px #b2b2b2;
      h4 {
        padding: 0;
        margin: 0;
        font-size: 22px;
        font-weight: normal;
        margin-bottom: 20px;
      }
      img {
        width: 100%;
      }
    }
    .option-left ul {
      // height: ;
      li:first-child {
        position: relative;
        img {
          position: absolute;
          right: -35px;
          width: 15px;
          height: auto;
        }
      }
      li {
        margin-bottom: 15px;
        font-size: 16px;
        &:hover {
          color: #308594;
        }
      }
    }
    .option-right .scrollTools {
      position: absolute;
      top: 10px;
      right: 20px;
      width: 1px;
      height: 100%;
      background-color: #ccc;
    }
    .option-right::-webkit-scrollbar {
      width: 0;
    }
    .option-right .scrollThumb {
      height: 50px;
      width: 20px;
      border-radius: 20px;
      background-color: #01763a;
      position: absolute;
      top: 0;
      right: -10px;
    }
  }
  .footer-map {
    position: relative;
    padding-bottom: 5px;
    margin-bottom: 50px;
    p {
      padding-left: 20px;
      font-size: 18px;
      margin-bottom: 30px;
    }
  }
  // /功能区
  .functional {
    margin: 0 auto;
    width: 70%;
    padding-bottom: 90px;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        text-align: center;
        height: auto;
        span {
          display: block;
          font-size: 35px;
          color: #4c4c4c;
          padding-bottom: 10px;
        }
        .img,
        .img2,
        .img3,
        .img4,
        .img5,
        .img6 {
          margin: 0 auto;
          width: 170px;
          height: 170px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
        }
        .img {
          background: url(../../assets/images/guide-m1.png) no-repeat;
          background-size: 100% 100%;
        }
        .img:hover {
          background: url(../../assets/images/guide-1.png) no-repeat;
          background-size: 100% 100%;
          border: none;
        }
        .img2 {
          background: url(../../assets/images/guide-j2.png) no-repeat;
          background-size: 100% 100%;
        }
        .img2:hover {
          background: url(../../assets/images/guide-2.png) no-repeat;
          background-size: 100% 100%;
          border: none;
        }
        .img3 {
          background: url(../../assets/images/guide-f3.png) no-repeat;
          background-size: 100% 100%;
        }
        .img3:hover {
          background: url(../../assets/images/guide-3.png) no-repeat;
          background-size: 100% 100%;
          border: none;
        }
        .img4 {
          background: url(../../assets/images/guide-z4.png) no-repeat;
          background-size: 100% 100%;
        }
        .img4:hover {
          background: url(../../assets/images/guide-4.png) no-repeat;
          background-size: 100% 100%;
          border: none;
        }
        .img5 {
          background: url(../../assets/images/guide-j5.png) no-repeat;
          background-size: 100% 100%;
        }
        .img5:hover {
          background: url(../../assets/images/guide-5.png) no-repeat;
          background-size: 100% 100%;
          border: none;
        }
        .img6 {
          background: url(../../assets/images/guide-j6.png) no-repeat;
          background-size: 100% 100%;
        }
        .img6:hover {
          background: url(../../assets/images/guide-6.png) no-repeat;
          background-size: 100% 100%;
          border: none;
        }
        // p:hover {
        //   background-color: #01763a;
        //   color: #fff;
        //   transform: scale(1.1);
        //   transition: 0.3s;
        //   //color: #01763a;
        //    .img {
        //       background: url(../../assets/images/guide-icon1.png) no-repeat;
        //    }
        //   span {
        //     color: #fff;
        //     //color: #01763a;
        //     .referral {
        //       color: #01763a;
        //     }
        //   }
        // }
      }
    }
  }
}
</style>
<style>
#tab table {
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
#tab table th {
  border-left: 1px solid #ccc;
}
#tab table td {
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
#insurance p {
  padding-left: 20px;
}
</style>