<template>
  <div class="footer">
    <div class="buttom-nav">
      <div class="max-nav">
        <div class="nav-content">
          <el-row>
            <!-- <el-col :span="16" :offset="1" class="nav-menu">
              <router-link v-for="(item, index) in menuList" :key="index" :to="item.link">
                <span :class="nowRoutePath == item.link ? 'active' : ''">{{
                  item.name
                }}</span>
              </router-link>
            </el-col> -->
            <el-col :span="8" class="nav-ewm" :offset="1">
              <h2>友情链接</h2>
              <a href="#">内蒙古自治区乌兰察布市中医蒙医医院</a>
            </el-col>
            <el-col :span="7" class="nav-ewm">
              <h2>关于我们</h2>
              <p>预约挂号电话：0474-2263857</p>
              <p>急救中心电话：0474-2324120</p>
              <p>胸痛中心电话：0474-2276793</p>
              <p>电子邮箱：wlcbzxyyb@sina.com</p>
              <p>新浪微博：内蒙古乌兰察布市中心医院官方微博</p>
            </el-col>
            <el-col :span="3" class="nav-ewm center">
              <img src="@/assets/images/footer/footer-ewm.png" />
              <p>乌兰察布市<br />中心医院微信公众号</p>
            </el-col>
            <el-col :span="3" class="nav-ewm center">
              <img src="@/assets/images/ewm2.png" />
              <p>乌兰察布市<br />中医蒙医医院微信公众号</p>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="min-nav">
        <el-row>
          <el-col :span="6" :offset="1">网站地图 / 法律声明 / 联系我们</el-col>
          <el-col :span="16">
            Copyright © 2018 乌兰察布市中心医院网站. All Rights Reserved
           <a href="https://beian.miit.gov.cn/" target="_blank" style="color:#fff">蒙ICP备19003220号-2</a> 
            <!-- 网站建设：北京分形科技 -->
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          name: "首页",
          link: "/",
        },
        {
          name: "医院概况",
          link: "/about",
        },
        {
          name: "专家介绍",
          link: "/introduce",
        },
        {
          name: "新闻中心",
          link: "/news",
        },
        {
          name: "党建工作",
          link: "/party",
        },
        {
          name: "科研天地",
          link: "/research",
        },
        {
          name: "医学教育",
          link: "/educate",
        },
        {
          name: "护理园地",
          link: "/nursing",
        },

        {
          name: "医院公告",
          link: "/notice",
        },
      ],
      nowRoutePath: "/",
    };
  },
  mounted() {
    // console.log(this.$route.path);
    this.nowRoutePath = this.$route.path;
  },
  watch: {
    "$route.path"(newVal) {
      console.log(newVal);
      this.nowRoutePath = newVal;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.footer {
  position: relative;
  @include maxWidth;
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
  .buttom-nav {
    font-size: 12px;
    background-color: $color-9;
    .max-nav {
      // height: 300px;
      position: relative;
      // padding-bottom: 14%;
      height: 217px;
      background-image: url(~@/assets/images/footer/footer-bg.png);
      background-size: cover;
      background-position: center;
      // text-align: center;
      .nav-content {
        position: absolute;
        width: 100%;
      }
      .nav-menu span {
        transition: 0.5s all;
        display: inline-block;
        color: #fff;
        width: 12px;
        margin: 100px 15px 0;
        line-height: 15px;
        vertical-align: top;
        &:hover {
          color: #ffc600;
          background-image: url(~@/assets/images/footer/icon-bottom.png);
          background-repeat: no-repeat;
          background-size: 12px;
          padding-top: 50px;
        }
        &.active {
          color: #ffc600;
          background-image: url(~@/assets/images/footer/icon-bottom.png);
          background-repeat: no-repeat;
          background-size: 12px;
          padding-top: 40px;
        }
      }
      .nav-ewm {
        margin-top: 45px;
        color: #fff;
        font-size: 12px;
        a {
          color: #fff;
        }
        p{
          margin:0
        }
        h2 {
          margin-block-start:0
        }
        img {
          height: 72px;
          background-color: #fff;
          padding: 3px;
          display: inline-block;
          margin-top: 2px;
        }
        
      }
    }
    .min-nav {
      font-size: 12px;
      color: #fff;
      line-height: 36px;
    }
  }
  .center {
    text-align: center;
    p{
      margin-top:10px !important
    }
  }
}
</style>
