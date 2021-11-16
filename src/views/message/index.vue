<template>
  <div class="message">
    <h4 style="font-size: 24px">联系我们</h4>
    <h2 v-show="top == 2 || top == null">中心医院院本部（中心医院）</h2>
    <div class="message-text" v-show="top == 2 || top == null">
      <h5>联系电话</h5>
      <ul>
        <li class="strong">中心医院院本部（中心医院）</li>
        <li>预约挂号电话：0474-2263875</li>
        <li>
          <span>急救中心电话：0474-2263985 </span>
          <span style="display: block; text-indent: 125px"> 0474-2324120</span>
        </li>
        <li>胸痛中心电话：0474-2276793</li>
      </ul>
      <h5>医院地址及邮编</h5>
      <ul>
        <li class="strong">中心医院院本部（中心医院）</li>
        <li>地址：乌兰察布市集宁区解放大街157号</li>
        <li>邮编：012000</li>
      </ul>
      <h5>中心医院院本部乘车路线</h5>
      <ul>
        <li>乘车路线：乘1、4、11路公交车中心医院站下车即到。</li>
        <!-- 乘车路线：(市中医蒙医医院) -->
        <li style="text-indent: 89px">
          乘5路公交车虎山公园站下车向北100米即到。
        </li>
      </ul>
      <h5>中心医院院本部地图</h5>
      <!-- 地图 -->
      <div class="footer-map" style=" margin-bottom: 150px;">
        <baidu-map
          v-if="showMap"
          :center="center"
          :zoom="zoom"
          @ready="handler"
          style="width: 100%; height: 370px;"
          @click="getClickInfo"
          :scroll-wheel-zoom="true"
        >
        </baidu-map>
      </div>
    </div>
    <h2 v-show="top == 1 || top == null" >
      中心医院新区分院(乌兰察布市中医蒙医医院)
    </h2>
    <div class="message-text" v-show="top == 1 || top == null">
      <h5>联系电话</h5>
      <ul>
        <li class="strong">中心医院新区分院(乌兰察布市中医蒙医医院)</li>
        <li>预约挂号电话：0474-2313126</li>
        <li>
          <span>急救中心电话：0474-2263985 </span>
          <span style="display: block; text-indent: 125px"> 0474-2324120</span>
        </li>
        <li>胸痛中心电话：0474-2276793</li>
        <li>咨询电话：0474–2313113</li>
      </ul>
      <h5>医院地址及邮编</h5>
      <ul>
        <li class="strong">中心医院新区分院(乌兰察布市中医蒙医医院)</li>
        <li>地址：乌兰察布市集宁新区工农大街西呼格吉街南</li>
        <li>邮编：012000</li>
      </ul>
      <h5>中心医院新区分院(乌兰察布市中医蒙医医院)乘车路线</h5>
      <ul>
        <li>乘车路线：乘10路、11路、21路、33路、36路公交均可到达</li>
      </ul>
      <h5>中心医院新区分院(乌兰察布市中医蒙医医院)地图</h5>
      <!-- 地图 -->
      <div class="footer-map">
        <baidu-map
          :center="centers"
          :zoom="zoom"
          @ready="handlers"
          style="width: 100%; height: 370px"
          @click="getClick"
          :scroll-wheel-zoom="true"
        >
        </baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
import mapIcon from "@/assets/images/yihua-icon-fill.png";
export default {
  data() {
    return {
      centers: { lng: 113.143078, lat: 41.03531 },
      center: { lng: 113.120003, lat: 41.036747 },
      zoom: 15,
      top: this.$route.query.top,
      showMap: false,
    };
  },
  methods: {
    // map
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
  },
  created() {
    setTimeout(() => {
      this.showMap = true;
    }, 10);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // window.addEventListener('scroll', this.topscrool,true)
    //this.topscrool()
    console.log(this.top);
  },
};
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  h2 {
    margin: 30px 0;
   
  }
  .message-text {
    width: 60%;
    margin: 0 auto;

    h5 {
      display: inline-block;
      font-size: 20px;
      border-bottom: 3px solid #56a5aa;
      margin-bottom: 30px;
    }
    ul {
      display: block;
      li {
        margin-bottom: 15px;
        width: auto;
        font-size: 18px;
        text-align: left;
        span {
          font-size: 18px;
          display: inline-block;
          letter-spacing: normal;
          // width: 8.9%;
        }
      }
    }
  }
}
</style>