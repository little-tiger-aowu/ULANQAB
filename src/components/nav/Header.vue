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
                        :class="[
                          { active: nowPathMenu.indexOf(item.name) != -1 },
                        ]"
                        :href="item.subMenu ? '' : '/#/' + item.link"
                        :underline="false"
                        :disabled="
                          item.subMenu ? disabled == false : disabled == true
                        "
                      >
                        <span>{{ item.name }}</span></el-link
                      >
                      <div class="sub-menu">
                        <el-link
                          :class="[
                            { active: nowPathMenu.indexOf(item2.name) != -1 },
                          ]"
                          v-for="(item2, index2) in item.subMenu"
                          :key="index2"
                          :href="
                            '/#/' +
                            `${item.link == 0 ? '' : item.link}` +
                            `${item.link === 0 ? '' : '/'}` +
                            item2.link +
                            `?${
                              item2.num == undefined ? '' : 'num=' + item2.num
                              }`
                          "
                          :underline="false"
                        >
                          {{ item2.name }}
                        </el-link>
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
          // link: "about",
          link: 0,
          subMenu: [
            {
              name: "医院介绍",
              link: "about",
            },
            {
              name: "医院组织机构",
              link: "research",
            },
            {
              name: "医院领导介绍",
              link: "research",
            },
            {
              name: "联系我们",
              link: "message",
            },
          ],
        },
        {
          name: "患者服务",
          link: 0,
          subMenu: [
            {
              name: "预约挂号",
              link: "guide",
              num:  2
            },
            // http://192.168.1.30:8080/#/detail?id=14
            // http://192.168.1.30:8080/#/detail?id=14%3F
            {
              name: "就医指南",
              link: "guide",
            },
            {
              name: "特色诊疗",
              link: "research",
            },
            {
              name: "出/入院服务",
              link: "research",
            },
            {
              name: "医保服务",
              link: "guide?opnum=2",
            },
            {
              name: "常见问题",
              link: "research",
            },
            {
              name: "健康科普",
              link: "serve/health",
            },
            {
              name: "患者心声",
              link: "research",
            },
          ],
        },
        {
          name: "科室导航",
          // link: "introduce",
          link: 0,
          subMenu: [
            {
              name: "非手术科室",
              link: "section",
              // num: 2,
              num:''
            },
            {
              name: "手术科室",
              link: "section",
              // num: 1,
              num:''
            },
            {
              name: "诊断相关科室",
              link: "section",
              // num: 3,
              num:''
            },
          ],
        },
        {
          name: "专家介绍",
          link: 0,
          subMenu: [
            {
              name: "非手术科室",
              link: "introduce",
              num: 2,
            },
            {
              name: "手术科室",
              link: "introduce",
              num: 1,
            },
            {
              name: "诊断相关科室",
              link: "introduce",
              num: 3,
            },
          ],
        },
        {
          name: "新闻中心",
          link: 0,
          subMenu: [
            {
              name: "综合新闻",
              link: "news",
            },
            {
              name: "医院公告",
              link: "notice",
            },
            {
              name: "媒体聚焦",
              link: "news/list?id=4&name=媒体聚焦&menu=news",
            },
            {
              name: "医院院报",
              link: "news/list?id=2&name=医院院报&menu=news",
            },
          ],
        },
        {
          name: "党建工作",
          link: 0,
          subMenu: [
            {
              name: "党委要闻",
              link: "party",
            },
            {
              name: "初心故事",
              link: "research",
            },
            {
              name: "院内动态",
              link: "research",
            },
            {
              name: "理论学习",
              link: "research",
            },
          ],
        },
        {
          name: "科研天地",
          link: 0,
          subMenu: [
            {
              name: "医学前沿",
              link: "research",
            },
            {
              name: "科研动态",
              link: "research",
            },
            {
              name: "科研成果",
              link: "research",
            },
          ],
        },
        {
          name: "医学教育",
          link: 0,
          subMenu: [
            {
              name: "住院医师规范化培训",
              link: "educate",
            },
            {
              name: "教学动态",
              link: "educate",
            },
            {
              name: "继续教育",
              link: "educate",
            },
          ],
        },
        {
          name: "护理风采",
          link: 0,
          subMenu: [
            {
              name: "护理概况",
              link: "nursing",
            },
            {
              name: "护理教学",
              link: "nursing",
            },
            {
              name: "护理文化",
              link: "nursing",
            },
          ],
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
        padding: 0 10px 0 0;
        .el-link {
          font-size: 16px;
          transition: 0.5s;
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
          width: 130%;
          //height: 10px;
          background-color: #fff;
          box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.2);
          text-align: center;
           height: 0px;
           //transition: .6s all;
          display: none;
          opacity: 0;
          .el-link {
            font-size: 15px;
            line-height: 40px;
            &:hover {
              opacity: 1;
               //display: block;
              transition: 0.1s all ease-in;
              color: #308594;
            }
          }
          .active {
            color: #308594;
          }
        }
        &:hover .sub-menu {
          height: auto;
          opacity: 1;
          transition: 1s all ease-in;
          display: block;
          animation:mymove 1s;
        }
        @keyframes mymove{
          0%{
            top: 40px;
            height: 0;
          }
          100%{
            top: 70px;
            height: auto;
          }
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
          flex-wrap: 1;
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
