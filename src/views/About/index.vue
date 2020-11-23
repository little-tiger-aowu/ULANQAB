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
        <div>a</div>
        <!-- <div class="button-swiper"> -->
        <!-- <div class="swiper-button-prev"></div> -->
        <div class="swiper-pagination" slot="pagination"></div>

        <!-- <div class="swiper-button-next"></div> -->
        <!-- </div> -->
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
      <el-col :span="18" :offset="4">
        <div class="about-box-3">
          <div class="title-2">历/现任领导</div>
          <el-row :gutter="8">
            <el-col
              :span="3"
              v-for="(item, index) in 16"
              :key="index"
              class="content"
            >
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
        // spaceBetween: -40,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        watchSlidesProgress: true,
        on: {
          progress(swiper, progress) {
            console.log(swiper, progress);
          },
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
  .about-box-1 {
    max-width: 1800px;
    min-width: 960px;
    overflow: hidden;
    padding-bottom: 50px;
  }
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
    .content {
      margin-bottom: 20px;
    }
  }
  .swiper-container {
    overflow: visible;
    margin-top: 50px;
  }
  // .button-swiper{
  //   position: absolute;z
  //   top:0;
  //   z-index: 99;
  // }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
    opacity: 0.5;
    margin-top: 15px;
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    opacity: 1;
    transform: scale(1.2);

    margin-top: 0;
  }
}
</style>
