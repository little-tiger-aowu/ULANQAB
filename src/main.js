import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
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
