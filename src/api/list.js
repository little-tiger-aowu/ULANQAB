import request from '@/utils/request'

// 专家介绍 获取科室的类型
export function pageList(id) {
    return request({
        url: `/office/page_list?type=${id}`,
        method: 'GET'
    })
}
// 专家介绍 通过类型分页获取科室数据
export function typeList() {
    return request({
        url: `/office/type_list`,
        method: 'GET'
    })
}

// 通过类型分页获取新闻数据
export function newsList(params) {
    return request({
        url: `/news/page_list`,
        method: 'GET',
        params: params
    })
}

// 通过ID获取新闻数据
export function getNews(id) {
    return request({
        url: `/news/get_news?id=${id}`,
        method: 'GET'
    })
}
// 通过搜索获取用医师专家的信息
export function searchData(params) {
    return request({
        url: `/physician/search_data`,
        method: 'GET',
        params: params
    })
}
// 通过id获取医师信息
export function physicianId(id) {
    return request({
        url: `/physician/id?id=${id}`,
        method: 'GET'
    })
}

// 通过id获取科室及医生数据
export function physicianInfo(id) {
    return request({
        url: `/office/physician_info?type=${id}`,
        method: 'GET'
    })
}

// 获取专题列表
export function specialList() {
    return request({
        url: `/special/list`,
        method: 'GET'
    })
}

// 获取专题的新闻内容
export function specialNewsList(id) {
    return request({
        url: `/special/news_list?id=${id}`,
        method: 'GET'
    })
}

// 获取专题的新闻内容
export function searchOutCall(params) {
    return request({
        url: `/outCall/search_outCall`,
        method: 'GET',
        params: params
    })
}
//通过id来获取科室的详细数据
export function infoIdlist(id){
  return request({
      url:`/office/info?id=${id}`,
      method:'GET',
  })
}

// 通过类型分页获取视频数据
export function getvideo(params){
    return request({
        url:'/video/page',
        method:'GET',
        params
    })
}