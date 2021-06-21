// 引用axios
import axios from 'axios';
// import Vue from 'vue'
// 引用element-ui中的 错误提示组件
import { Message } from 'element-ui';
// qs组件库 用于将url的参数转化为对象
import qs from 'qs';
// 引用请求头
import baseUrl from './baseUrl.js'
// import router from '@/router'
// 创建一个新的axios
const service = axios.create({
  baseURL: baseUrl,
  timeout: 50000, // 请求超时时间
  // VUE—axios自定义请求配置，在向服务器发送前，修改请求数据
  transformRequest: [function (data) {
    // console.log(data);
    // 判断data是什么数据类型 Object.prototype.toString.call(data)
    if (Object.prototype.toString.call(data) === '[object FormData]') {
      return data
    }
    // 转为url参数形式
    data = qs.stringify(data);
    return data;
  }]
});

// request拦截器 添加请求拦截器
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// let toastFail, errorFail;
// respone拦截器 添加响应拦截器
service.interceptors.response.use(
  response => {
    // const res = response.data;
    // if (res.code == 40020 || res.code == 40002 || res.code == 40021) {
    //   router.push({ path: "/login" })
    //   return
    // }
    return response.data;
  },
  error => {
    Message({
      message: '网络请求超时！',
      type: 'error'
    });
    return Promise.reject(error);
  }
);

export default service;
