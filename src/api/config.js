import Vue from 'vue'
const url = {
  baseUrl: 'https://www.easy-mock.com/mock/5b3d90138f765a380804da3c/mpArithmetic'
}

var Fly = require('flyio/dist/npm/wx.js') // wx.js为flyio的微信小程序入口文件
var fly = new Fly() // 创建fly实例

// 配置请求基地址
Vue.prototype.$http = fly
fly.config.baseURL = url.baseUrl
console.log(fly)

// 添加拦截器
fly.interceptors.request.use(request => {
  // 给所有请求添加自定义header
  // request.headers['Accept'] = 'application/vnd.github.mercy-preview+json'
  // 打印出请求体
  console.log(request)
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

export default fly
