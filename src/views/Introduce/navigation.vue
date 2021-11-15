<template>
  <!-- 科室介绍  -->
  <div class="nav">
    <div class="nav-left"></div>
    <div class="nav-right">
      <!-- 标题 -->
      <div class="right-title">
        <h4>{{ typeList.name }}介绍</h4>
        <button @click="dialogVisible = true">查看更多</button>
        <el-dialog
          :visible.sync="dialogVisible"
          :before-close="handleClose"
          v-if="dialogVisible"
        >
          <h4>{{ typeList.name }}介绍</h4>
          <p>
            <!-- {{typeList.briefInformation=='暂无'?'正在完善中':typeList.briefInformation }} -->
            正在完善中...
          </p>
        </el-dialog>
      </div>
      <!-- 内容 -->
      <div class="right-text">
        <p>
          <!-- {{ typeList.briefInformation=='暂无'?'正在完善中':typeList.briefInformation }} -->
          
          正在完善中...</p>
      </div>
      <h4>就诊指南</h4>
      <!-- 功能区 -->
      <div class="functional">
        <ul>
          <li style="cursor: pointer;">
            <router-link tag="p" :to="{path:'/table',query: { keyWord:typeList.name }}">
              <!-- <svg-icon icon-class="referral" /> -->
              <span class="font_family icon-tingzhenqi"></span>
              出诊信息
            </router-link>
          </li>
          <li style="cursor: pointer;">
            <router-link tag="p" :to="'/doctor?current=1&size=16&officeStr=' + typeList.name + '&menu=introduce'">
              <span class="font_family icon-a-zhuanjiachuzhenxinxi1"></span>
              医师介绍
            </router-link>
          </li>

          <li>
            <p @click="visit = true" style="cursor: pointer;">
              <span class="font_family icon-a-weizhi1" ></span>
              科室位置
            </p>
            <el-dialog :visible.sync="visit" @close="has" v-if="visit">
              <span style="font-size: 24px; margin-bottom: 30px ">科室位置</span>
              <span v-html="typeList.location" style="font-size: 18px; margin-bottom: 30px"></span>
                <!-- {{typeList.location}} contactWay电话 -->
            </el-dialog>
          </li>
          <li>
            <p @click="message = true" style="cursor: pointer;">
              <span class="font_family icon-a-lianxiwomen1"></span>
              联系我们
            </p>
            <el-dialog :visible.sync="message" v-if="message">
              <h4 style="font-size: 24px">联系我们</h4>
              <span v-html="typeList.contactWay" style="font-size: 18px; margin-bottom: 30px"></span>
            </el-dialog>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { infoIdlist } from "@/api/list.js";
import mapIcon from "@/assets/images/yihua-icon-fill.png";
export default {
  data() {
    return {
      dialogVisible: false, //
      visit: false, //科室位置
      message: false,
      id: "", //
      typeList: {}, //
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.init();
  },
  methods: {
    //初始化
    init() {
      infoIdlist(this.id).then((res) => {
        if (res.code == 200) {
          console.log(res.data);
          this.typeList = res.data;
        }
      });
    },
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
  // watch:{
  //   $route:{
  //     handler:function(val,oldval){
  //       console.log(val.query.id,oldval.query.id);
  //       this.id=val.query.id
  //     }
  //   }
  // }
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
      margin-top: 16px;
      height: 108px;
      p {
        font-size: 14px;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4; /* 可以显示的行数，超出部分用...表示*/
        -webkit-box-orient: vertical;
      }
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
                  span {
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
