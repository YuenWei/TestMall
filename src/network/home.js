import {request} from './request'

// 封装首页网络请求
export function getHomeData() {
  return request({
    url: '/home/multidata',
  })
}

// 获取首页 [流行，新款，精选]数据
export function getHomeGoods(type, page){
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}