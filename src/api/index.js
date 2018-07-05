import fly from './config'

const API = {
  // 获取算法列表
  getArithmeticList() {
    return fly.get('/getArithmeticList').then(res => {
      let data = res.data
      if (data.code === 200) {
        return data.data
      }
      return data
    })
  }
}
export default API
