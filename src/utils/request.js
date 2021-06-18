import axios from 'axios';
// import Vue from 'vue'
import { Message } from 'element-ui';
import qs from 'qs';
import baseUrl from './baseUrl.js'
// import router from '@/router'

const service = axios.create({
  baseURL: baseUrl,
  timeout: 50000, // 请求超时时间
  transformRequest: [function (data) {
    // console.log(data);
    if (Object.prototype.toString.call(data) === '[object FormData]') {
      return data
    }
    data = qs.stringify(data);
    return data;
  }]
});

// request拦截器
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
// respone拦截器
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
