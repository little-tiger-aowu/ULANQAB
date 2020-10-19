<template>
  <div class="about">
    <img src="@/assets/images/about/banner.png" width="100%" />
    <!-- 医院概况 -->
    <div class="about-box-1">
      <div class="title">医院概况</div>
      <div class="min-title">了解市中心医院</div>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img src="@/assets/images/about/img1.png" width="100%" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/about/img1.png" width="100%" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/about/img1.png" width="100%" />
        </swiper-slide>
      </swiper>
    </div>
    <!-- 组织结构 -->
    <div class="about-box-2">
      <div class="title">组织机构</div>
      <div class="min-title">了解市中心医院完善的组织机构</div>
      <img src="@/assets/images/about/img2.png" width="100%" />
    </div>

    <!-- 历/现任领导 -->
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="about-box-3">
          <div class="title-2">历/现任领导</div>
          <el-row :gutter="8">
            <el-col :span="3" v-for="(item,index) in 16" :key="index" class="content">
              <img src="@/assets/images/about/img3.jpg" width="100%" />
              <div class="name">
                【加】启尔德<br />
                1892年创办仁济医院
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 0,
        // centeredSlides: true,
        autoHeight: true, //高度随内容变化
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.about {
  @include maxWidth;
  .title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 100px;
  }
  .min-title {
    text-align: center;
    line-height: 30px;
  }
  .title-2 {
    background-color: #5a81b9;
    color: #fff;
    display: inline-block;
    font-size: 22px;
    padding: 10px;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .about-box-3 {
    .name {
      font-size: 12px;
    }
    .content{
      margin-bottom: 20px;
    }
  }
}
</style>
