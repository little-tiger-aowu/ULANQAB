<template>
  <div class="footer">
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
    return {};
  },
  methods: {},
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
    background-color: #2c4f2d;
    .max-nav {
      height: 200px;
      background-image: url(~@/assets/images/footer/footer-bg.png);
      background-size: cover;
      text-align: center;
      .nav-menu span {
        transition: 0.5s all;
        display: inline-block;
        color: #fff;
        width: 12px;
        margin: 40px 15px 0;
        line-height: 15px;
        vertical-align: top;
        &:hover {
          color: #ffc600;
          background-image: url(~@/assets/images/footer/icon-bottom.png);
          background-repeat: no-repeat;
          background-size: 12px;
          padding-top: 40px;
        }
      }
      .nav-ewm {
        margin-top: 50px;
        color: #fff;
        font-size: 12px;
        img {
          height: 50px;
          background-color: #fff;
          padding: 3px;
        }
        p {
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
</style>