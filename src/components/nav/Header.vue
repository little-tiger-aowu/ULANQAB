<template>
  <div class="header">
    <div class="nav">
      <!-- nav右侧 -->
      <div class="nav-right">
        <div>
          <!-- <span>公众版</span> -->
        </div>
      </div>
      <!-- 菜单 -->
      <div class="aa">
        <el-row type="flex" justify="center">
          <el-col :span="16">
            <div class="nav-top">
              <div class="nav-top-box">
                <div class="logo-img">
                  <img src="@/assets/images/logo.jpg" width="100%" />
                </div>
                <div class="nav-menu">
                  <div class="nav-menu-a">
                    <div
                      v-for="(item, index) in menuList"
                      :key="index"
                      class="nav-menu-box"
                    >
                      <!-- <el-link
                        :class="[{ active: nowPathMenu.indexOf(item.link) != -1 }]"
                        :href="'/#/' + item.link"
                        :underline="false"
                      > -->
                      <el-link
                        :class="[{ active: nowPathMenu.indexOf(item.link) != -1 }]"
                        :href="item.subMenu ? '' : '/#/' + item.link"
                        :underline="false"
                        :disabled="item.subMenu ? disabled == false : disabled == true"
                      >
                        <span>{{ item.name }}</span></el-link
                      >
                      <div class="sub-menu">
                        <el-link
                          :class="[{ active: nowPathMenu.indexOf(item2.link) != -1 }]"
                          v-for="(item2, index2) in item.subMenu"
                          :key="index2"
                          :href="'/#/' + item.link + '/' + item2.link"
                          :underline="false"
                          >{{ item2.name }}</el-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      disabled: false,
      menuList: [
        {
          name: "首页",
          link: "home",
        },
        {
          name: "医院概况",
          link: "about",
        },
        {
          name: "专家介绍",
          link: "introduce",
        },
        {
          name: "患者服务",
          link: "serve/health",
          // subMenu: [
          //   {
          //     name: "健康科普",
          //     link: "health",
          //   },
          // ],
        },
        {
          name: "新闻中心",
          link: "news",
        },
        {
          name: "党建工作",
          link: "party",
        },
        {
          name: "科研天地",
          link: "research",
        },
        {
          name: "医学教育",
          link: "educate",
        },
        {
          name: "护理园地",
          link: "nursing",
        },

        {
          name: "医院公告",
          link: "notice",
        },
      ],
      nowRoutePath: "/",
      nowPathMenu: "",
    };
  },
  mounted() {
    console.log(this.$route);
    console.log(this.$route.path);
    this.nowRoutePath = this.$route.path;
    this.nowPathMenu = this.$route.fullPath;
    // console.log(this.nowPathMenu);
  },
  watch: {
    "$route.path"(newVal) {
      // console.log("1:" + this.$route.query);
      // console.log("1:" + newVal);
      console.log(newVal);
      this.nowRoutePath = newVal;
      this.nowPathMenu = this.$route.fullPath;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.header {
  color: $color-1;
  .el-row {
    margin: 0 !important;
  }
  .nav {
    min-height: 120px;
    .nav-right {
      background-color: $color-3;
      min-width: 960px;

      > div {
        @include maxWidth;
        height: 49px;
        line-height: 49px;
        text-align: right;
        span {
          padding: 0 15px;
          position: relative;
          cursor: pointer;
          &.active {
            color: $color-3;
          }
          &:after {
            @include afterLine($color-7);
          }
        }
      }
    }
    .nav-logo {
      box-shadow: 0px 0px 18px 0px rgba(2, 2, 2, 0.18);
      margin-top: -49px;
      min-width: 100px;
      img {
        background-color: $color-1;
        box-sizing: border-box;
        padding: 10px;
      }
    }
    .nav-menu {
      display: flex;
      display: -webkit-flex;
      justify-content: space-around;
      // min-width: 730px;
      .nav-menu-box {
        position: relative;
        height: 100%;

        .el-link {
          font-size: 16px;
          span {
            padding: 5px 0;
            min-width: 64px;
            display: inline-block;
            margin-top: 20px;

            text-align: center;
          }
          &:hover {
            span {
              background-image: url(~@/assets/images/icon-down.png);
              background-repeat: no-repeat;
              background-position: top center;
              background-size: 11px 8px;
              color: $color-9;
              padding: 15px 0;
            }
          }
        }
        .active {
          span {
            background-image: url(~@/assets/images/icon-down.png);
            background-repeat: no-repeat;
            background-position: top center;
            background-size: 11px 8px;
            color: $color-9;
            padding: 15px 0;
          }
        }
        .sub-menu {
          overflow: hidden;
          position: absolute;
          z-index: 999;
          // left: -30%;
          top: 70px;
          width: 180%;
          background-color: #fff;
          box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.2);
          text-align: center;
          // height: 0px;
          transition: 0.3s all;
          display: none;
          .el-link {
            font-size: 15px;
            line-height: 40px;
            &:hover {
              color: #308594;
            }
          }
          .active {
            color: #308594;
          }
        }
        &:hover .sub-menu {
          display: block;
        }
      }
    }
  }
  .aa {
    @include maxWidth;
  }
  .nav-top {
    display: flex;
    display: inline-flex;
    width: 100%;
    .nav-top-box {
      width: 100%;
      display: flex;
      display: inline-flex;
      justify-content: space-around;
      .logo-img {
        width: 150px;
        box-shadow: 0px 0px 18px 0px rgba(2, 2, 2, 0.18);
        margin-top: -49px;
        min-width: 130px;
        height: 130px;
        margin-right: 20px;
      }
      .nav-menu {
        height: 70px;
        width: 100%;
        .nav-menu-a {
          width: 100%;
          display: flex;
          display: inline-flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: -5px;
          > div {
            display: flex;
            display: inline-flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
.el-link.el-link--default.is-disabled {
  color: #606266;
}
.el-link.is-disabled {
  cursor: pointer;
}
</style>
