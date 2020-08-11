import axios from 'axios'

// export function request(config, success, failure)
export function request(config){
  // 创建axios 实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',
    timeout: 5000,
  })
  
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 发送真正的网络请求
  return instance(config)
}