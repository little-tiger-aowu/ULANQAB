<template>
  <div class="footer">
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

    <div class="buttom-nav">
      <div class="max-nav">
        <el-row>
          <el-col :span="16" :offset="1" class="nav-menu">
            <router-link to="/">
              <span>医院概况</span>
            </router-link>
            <router-link to="/">
              <span>专家介绍</span>
            </router-link>
            <router-link to="/">
              <span>党建工作</span>
            </router-link>
            <router-link to="/">
              <span>科研天地</span>
            </router-link>
            <router-link to="/">
              <span>蒙医分院市中医</span>
            </router-link>
            <router-link to="/">
              <span>新闻中心</span>
            </router-link>
            <router-link to="/">
              <span>医学教育</span>
            </router-link>
            <router-link to="/">
              <span>护理园地</span>
            </router-link>
            <router-link to="/">
              <span>医院公告</span>
            </router-link>
          </el-col>
          <el-col :span="6" class="nav-ewm">
            <img src="@/assets/images/footer/footer-ewm.png" />
            <p>乌兰察布市<br />中心医院官方微博</p>
          </el-col>
        </el-row>
      </div>
      <div class="min-nav">
        <el-row>
          <el-col :span="6" :offset="1">网站地图 / 法律声明 / 联系我们</el-col>
          <el-col :span="16"
            >Copyright © 2018 乌兰察布中心医院. All Rights Reserved
            蜀ICP备16010396号 网站建设：北京分形科技</el-col
          >
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      center: { lng: 109.45744048529967, lat: 36.49771311230842 },
      zoom: 13,
    };
  },
  methods: {
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
<style lang="scss">
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.footer {
  @include maxWidth;
  position: relative;
  margin-top: 70px;
  .footer-nav {
    border-top: 1px solid $color-6;
    padding: 30px 5%;
    .left {
      .el-link {
        position: relative;
        padding: 0 10px;
        color: $color-8;
        span:after {
          @include afterLine($color-8);
        }
      }
    }
    .right {
      text-align: right;
      span {
        padding: 0 10px;
      }
    }
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
  .buttom-nav {
    font-size: 12px;
    background-color: #2c4f2d;
    .max-nav {
      height: 200px;
      background-image: url(~@/assets/images/footer/footer-bg.png);
      background-size: cover;
      text-align: center;
      .nav-menu span {
        transition: .5s all;
        display: inline-block;
        color: #fff;
        width: 12px;
        margin: 40px 15px 0;
        line-height: 15px;
        vertical-align: top;
        &:hover{
          color: #ffc600;
          background-image: url(~@/assets/images/footer/icon-bottom.png);
          background-repeat: no-repeat;
          background-size: 12px;
          padding-top: 40px;
        }
      }
      .nav-ewm{
        margin-top: 50px;
        color: #fff;
        font-size: 12px;
        img {
          height: 50px;
          background-color: #fff;
          padding:3px;
        }
        p{
          margin-top: 19px;
        }
      }
    }
    .min-nav {
      font-size: 12px;
      color: #fff;
      line-height: 36px;
    }
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
</style>