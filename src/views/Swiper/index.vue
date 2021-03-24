<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        ><img src="@/assets/images/about/banner.png" width="100%"
      /></swiper-slide>
      <swiper-slide
        ><img src="@/assets/images/about/banner.png" width="100%"
      /></swiper-slide>
      <swiper-slide
        ><img src="@/assets/images/about/banner.png" width="100%"
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template> 
<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: -100,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // Some Swiper option/callback...
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
    this.swiper.slideTo(1, 1000, false);
  },
};
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
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
  opacity: .5;
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
  opacity: 1;position: relative;
  z-index: 999;
}
</style>