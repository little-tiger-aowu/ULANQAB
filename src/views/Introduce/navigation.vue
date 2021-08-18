<template>
  <!-- 科室介绍  -->
  <div class="nav">
    <div class="nav-left"></div>
    <div class="nav-right">
      <!-- 标题 -->
      <div class="right-title">
        <h4>科室介绍</h4>
        <button @click="dialogVisible = true">查看更多</button>
        <el-dialog
          :visible.sync="dialogVisible"
          :before-close="handleClose"
          v-if="dialogVisible"
        >
          <h4>科室介绍</h4>
          <p>
            北京协和医院内科学系自1921年建院之初即成立。经过近百年的传承及发展，目前内科学系下属包括了心脏内科、呼吸内科、消化内科、肾脏内科、血液内科、风湿免疫内科、感染内科、普通内科、肿瘤内科、老年医学科、内分泌科、内科重症监护病房共12个科室，成为了全国各种内科疑难危重疾病的诊治中心。协和内科以其严格而规范的住院医师、总住院医师轮转培训以及三级医师查房制度而闻名，由此培养出了一批又
            北京协和医院内科学系自1921年建院之初即成立。经过近百年的传承及发展，目前内科学系下属包括了心脏内科、呼吸内科、消化内科、肾脏内科、血液内科、风湿免疫内科、感染内科、普通内科、肿瘤内科、老年医学科、内分泌科、内科重症监护病房共12个科室，成为了全国各种内科疑难危重疾病的诊治中心。协和内科以其严格而规范的住院医师、总住院医师轮转培训以及三级医师查房制度而闻名，由此培养出了一批又
            北京协和医院内科学系自1921年建院之初即成立。经过近百年的传承及发展，目前内科学系下属包括了心脏内科、呼吸内科、消化内科、肾脏内科、血液内科、风湿免疫内科、感染内科、普通内科、肿瘤内科、老年医学科、内分泌科、内科重症监护病房共12个科室，成为了全国各种内科疑难危重疾病的诊治中心。协和内科以其严格而规范的住院医师、总住院医师轮转培训以及三级医师查房制度而闻名，由此培养出了一批又
            北京协和医院内科学系自1921年建院之初即成立。经过近百年的传承及发展，目前内科学系下属包括了心脏内科、呼吸内科、消化内科、肾脏内科、血液内科、风湿免疫内科、感染内科、普通内科、肿瘤内科、老年医学科、内分泌科、内科重症监护病房共12个科室，成为了全国各种内科疑难危重疾病的诊治中心。协和内科以其严格而规范的住院医师、总住院医师轮转培训以及三级医师查房制度而闻名，由此培养出了一批又
            北京协和医院内科学系自1921年建院之初即成立。经过近百年的传承及发展，目前内科学系下属包括了心脏内科、呼吸内科、消化内科、肾脏内科、血液内科、风湿免疫内科、感染内科、普通内科、肿瘤内科、老年医学科、内分泌科、内科重症监护病房共12个科室，成为了全国各种内科疑难危重疾病的诊治中心。协和内科以其严格而规范的住院医师、总住院医师轮转培训以及三级医师查房制度而闻名，由此培养出了一批又
          </p>
        </el-dialog>
      </div>
      <!-- 内容 -->
      <div class="right-text">
        北京协和医院内科学系自1921年建院之初即成立。经过近百年的传承及发展，目前内科学系下属包括了心脏内科、呼吸内科、消化内科、肾脏内科、血液内科、风湿免疫内科、感染内科、普通内科、肿瘤内科、老年医学科、内分泌科、内科重症监护病房共12个科室，成为了全国各种内科疑难危重疾病的诊治中心。协和内科以其严格而规范的住院医师、总住院医师轮转培训以及三级医师查房制度而闻名，由此培养出了一批又
      </div>
      <h4>就诊指南</h4>
      <!-- 功能区 -->
      <div class="functional">
        <ul>
          <li>
            <router-link tag="p" to="/table">
              <!-- <svg-icon icon-class="referral" /> -->
              <span class="font_family icon-zhuanjiachuzhenxinxi"></span>
              出诊信息
            </router-link>
          </li>
          <li>
            <router-link tag="p" to="/Introduce">
              <span class="font_family icon-a-yuyueguahao3"></span>
              医师介绍
            </router-link>
          </li>

          <li>
            <p @click="visit = true">
              <span class="font_family icon-weizhi"></span>
              科室位置
            </p>
            <el-dialog :visible.sync="visit" @close="has" v-if="visit">
              <span style="font-size: 24px; margin-bottom: 30px">科室位置</span>
              <span style="text-align: left; font-size: 18px"
                >内科学系: 东院内科住院楼2层(2段2层)</span
              >
              <span style="text-align: left; font-size: 18px"
                >心脏内科: 东院内科住院楼5层(5段5层)、西院南楼4层</span
              >
              <span style="text-align: left; font-size: 18px"
                >心脏监护室(CCU) : 东院内科住院楼2层(4段2层)</span
              >
              <span style="text-align: left; font-size: 18px"
                >呼吸内科: 东院内科住院楼3层(5段3层)、西院南楼6层</span
              >
              <span style="text-align: left; font-size: 18px"
                >消化内科: 东院内科住院楼4层(3段4层)、西院南楼3层</span
              >
              <span style="text-align: left; font-size: 18px"
                >肾脏内科: 东院内科住院楼6层(5段6层)、西院南楼4层</span
              >
              <span style="text-align: left; font-size: 18px"
                >血液内科: 东院内科住院楼10层(4段10层)、西院南楼2层</span
              >
              <span style="text-align: left; font-size: 18px"
                >血液透析中心: 东院老楼1层(7楼1层)</span
              >
              <span style="text-align: left; font-size: 18px"
                >风湿免疫内科: 东院内科住院楼6层(4段6层)、7层 (4段7层)</span
              >
              <span style="text-align: left; font-size: 18px"
                >感染内科: 东院内科住院楼6层(3段6层)</span
              >
              <span style="text-align: left; font-size: 18px"
                >普通内科: 东院内科住院楼5层(4段5层)</span
              >
              <span style="text-align: left; font-size: 18px"
                >肿瘤内科: 西院南楼2层、5层</span
              >
              <span style="text-align: left; font-size: 18px"
                >老年医学科: 东院老楼2层(6楼2层)</span
              >
              <span style="text-align: left; font-size: 18px"
                >内分泌科: 东院老楼2层(11楼2层)、3层(11楼3层)</span
              >
              <span style="text-align: left; font-size: 18px"
                >内科重症监护室(MICU):
                东院内科住院楼3层(4段3层)、西院南楼1层</span
              >
            </el-dialog>
          </li>
          <li>
            <p @click="message = true">
              <span class="font_family icon-lianxiwomen"></span>
              联系我们
            </p>
            <el-dialog :visible.sync="message" v-if="message">
              <h4 style="font-size: 24px">联系我们</h4>
              <div class="message-text">
                <h5>联系电话</h5>
                <ul>
                  <li class="strong">院本部（中心医院）</li>
                  <li>
                    预约挂号电话：0474-2263875 
                  </li>
                  <li ><span>急救中心电话：<br>
                  &nbsp;</span><span> 0474-2263985 
                                        0474-2324120</span>
                  </li>
                  <li>胸痛中心电话：0474-2276793</li>
                  <li class="strong">新区分院(市中医蒙医医院)</li>
                  <li>预约挂号电话：0474-2313126</li>
                </ul>
                <h5>医院地址及邮编</h5>
                <ul>
                  <li class="strong">院本部（中心医院）</li>
                  <li>地址：乌兰察布市集宁区解放大街157号</li>
                  <li>邮编：012000</li>
                  <li class="strong">新区分院(市中医蒙医医院)</li>
                  <li>地址：乌兰察布市集宁新区工农大街西呼格吉街南</li>
                  <li>邮编：012000</li>
                </ul>
                <h5>乘车路线及地图</h5>
                <ul>
                  <li>
                    乘车路线：(中心医院)乘1、4、11路公交车中心医院站下车即到。
                  </li>
                  <li>
                    乘车路线：(市中医蒙医医院)乘5路公交车虎山公园站下车向北100米即到
                  </li>
                </ul>
                <h5>中心医院本部乘车路线</h5>
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
                  </baidu-map>
                </div>
                <h5>中心医新区分院(市中医蒙医医院)乘车路线</h5>
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
                  </baidu-map>
                </div>
              </div>
            </el-dialog>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import mapIcon from "@/assets/images/yihua-icon-fill.png";
export default {
  data() {
    return {
      dialogVisible: false, //
      visit: false, //科室位置
      message: false,
    };
  },
  methods: {
    // 关闭
    handleClose(done) {
      done();
      //this.visit = false;
      //this.dialogVisible = false
    },
    has() {
      // Object.assign(this.$data, this.$options.data());
      this.visit = false;
    },
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
  },
};
</script>

<style lang="scss" scoped>
.nav {
  max-width: 1000px;
  margin: 50px auto 0;

  .nav-right {
    h4 {
      font-size: 24px;
      color: #333333;
    }
    .right-title {
      display: flex;
      justify-content: space-between;
      h4 {
        margin: 0;
        font-size: 24px;
        color: #333333;
      }
      button {
        margin: auto 0;
        font-size: 12px;
        color: #474747;
        width: 90px;
        line-height: 22px;
        height: 22px;
        border: 1px solid #ddd;
        display: block;
        text-align: center;
        background-color: #fff;
        border-radius: 10px;
        float: right;
      }
      button:hover {
        background-color: #01763a;
        color: #fff;
      }
      ::v-deep .el-dialog {
        width: 80%;
        .el-dialog__body {
          padding: 30px 20px 100px 20px;
          h4 {
            font-size: 24px;
          }
          p {
            font-size: 16px;
            line-height: 1.7;
            letter-spacing: 4px;
          }
        }
      }
    }
    .right-text {
      line-height: 24px;
      color: #474747;
      font-size: 14px;
      margin-top: 16px;
      height: 108px;
      overflow: hidden;
    }
    // /功能区
    .functional {
      padding-bottom: 90px;
      ul {
        display: flex;
        li {
          text-align: center;
          width: 25%;
          height: auto;
          span {
            display: block;
            font-size: 50px;
            color: #4c4c4c;
            padding-bottom: 10px;
          }
          ::v-deep .el-dialog {
            width: 80%;
            .el-dialog__body {
              padding: 30px 20px 50px 50px;
            }
            span {
              letter-spacing: 3px;
              line-height: 1.5;
            }
            .footer-map {
              position: relative;
              padding-bottom: 5px;
              border-bottom: 1px solid #538b62;
              margin-bottom: 50px;
            }
            .strong {
              font-weight: 600;
              margin-bottom: 20px;
            }
            .message-text {
              h5 {
                display: inline-block;
                font-size: 20px;
                border-bottom: 3px solid #56a5aa;
                margin-bottom: 30px;
              }
              ul {
                display: block;
                li {
                  margin-bottom: 10px;
                  width: auto;
                  font-size: 18px;
                  text-align: left;
                  span{
                    font-size: 18px;
                    display: inline-block;
                    letter-spacing: normal;
                    width: 8.7%;
                  }
                }
              }
            }
          }
          p {
            color: #333333;
            font-size: 18px;
            margin: 0;
            .svg-icon {
              width: 10px;
            }
          }
          p:hover {
            color: #01763a;
            span {
              color: #01763a;
            }
          }
        }
      }
    }
  }
}
</style>
