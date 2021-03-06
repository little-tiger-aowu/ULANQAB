import Vue from 'vue'
import App from './App.vue'
import '@/assets/icon/iconfont.css'
import '@/assets/icons/index.js'
import SvgIcon from '@/components/svgIcon/index.vue'// svg组件
// 路由
import router from './router'
// vuex
import store from './store'
// 百度地图插件
import BaiduMap from 'vue-baidu-map'
// ElementUI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/swiper-bundle.css'
Vue.component('svg-icon', SvgIcon)
import Swiper2, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
Swiper2.use([Navigation, Pagination, EffectFade, Autoplay])
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(BaiduMap, {
  ak: 'S8HQueMqHAuG458jthnDMFT75dS9qzwI'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
