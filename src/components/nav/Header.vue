<template>
  <div class="header">
    <div class="nav">
      <!-- nav右侧 -->
      <div class="nav-right">
        <div>
          <span>公众版</span>
          <!-- <span class="active">公众版</span>
        <span>员工/学生版</span>
        <span>EN</span> -->
        </div>
      </div>
      <!-- 菜单 -->
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-col :span="5">
            <div class="nav-logo">
              <img src="@/assets/images/logo.png" width="100%" />
            </div>
          </el-col>
          <el-col :span="19">
            <div class="nav-menu">
              <div
                v-for="(item, index) in menuList"
                :key="index"
                class="nav-menu-box"
              >
                <el-link :href="'/#'+item.link" :underline="false"
                  ><span>{{ item.name }}</span></el-link
                >
                <div class="sub-menu">
                  <el-link
                    v-for="(item2, index2) in item.subMenu"
                    :key="index2"
                    :underline="false"
                    >{{ item2.name }}</el-link
                  >
                </div>
              </div>
            </div>
          </el-col>
        </el-col>
      </el-row>
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
          // subMenu: [
          //   {
          //     name: "医院简介",
          //     link: "/",
          //   },
          //   {
          //     name: "组织机构",
          //     link: "/",
          //   },
          //   {
          //     name: "科室导航",
          //     link: "/",
          //   },
          //   {
          //     name: "历/现任领导",
          //     link: "/",
          //   },
          // ],
        },
        {
          name: "专家介绍",
          link: "/introduce",
          // subMenu: [
          //   {
          //     name: "医院专家介绍",
          //     link: "/",
          //   },
          //   {
          //     name: "专家搜索",
          //     link: "/",
          //   },
          //   {
          //     name: "专家详情",
          //     link: "/",
          //   },
          // ],
        },
        {
          name: "新闻中心",
          link: "/news",
          // subMenu: [
          //   {
          //     name: "学术新闻",
          //     link: "/",
          //   },
          //   {
          //     name: "医疗新技术",
          //     link: "/",
          //   },
          //   {
          //     name: "综合新闻",
          //     link: "/",
          //   },
          //   {
          //     name: "专题专栏",
          //     link: "/",
          //   },
          // ],
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
    };
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
    .nav-right {
      background-color: $color-3;

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
            color: $color-5;
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
      margin-top: 1%;
      .nav-menu-box {
        position: relative;
        height: 100%;

        .el-link {
          padding-top: 20px;
          span {
            padding: 5px 10px;
          }
          &:hover {
            background-image: url(~@/assets/images/icon-down.png);
            background-repeat: no-repeat;
            background-position: top center;

            span {
              box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.2);
              color: #ffc600;
              text-shadow: 1px 1px 1px rgba($color: #000000, $alpha: 0.4);
              border-bottom: 2px solid #689674;
            }
          }
        }
        .sub-menu {
          overflow: hidden;
          position: absolute;
          left: -30%;
          width: 100px;
          background-color: #c0c0c0;
          text-align: center;
          // height: 0px;
          transition: 0.3s all;
          display: none;
        }
        &:hover .sub-menu {
          display: block;
        }
      }
    }
  }
}
</style>