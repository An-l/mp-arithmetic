function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function boundingClientRect (selector) {
  // 在mpvue中target被设置为global
  if (!window) {
    return new Promise((resolve, reject) => {
      const query = wx.createSelectorQuery()
      query.select(selector).boundingClientRect((res) => {
        resolve(res)
      }).exec()
    })
  }
  return new Promise((resolve, reject) => {
    resolve(document.querySelector(selector).getBoundingClientRect())
  })
}
/**
 * @desc 生成滑动动画
 * @param {number} speed - 动画运行时间
 * @param {number} transX - 横向偏移量
 * @return {object} animationData
 */
export function slideAnimate (speed, transX, selector) {
  if (!window) {
    const animation = wx.createAnimation({
      transformOrigin: 'left top',
      timingFunction: 'linear',
      duration: speed || 17,
      delay: 0
    })
    animation.translate3d(transX, 0, 0).step()
    return animation.export()
  }
  // 非微信环境就操作dom
  const target = document.querySelector(selector)
  target.setAttribute(
    'style',
    `transform: translate3d(${transX}px, 0, 0); transition: transform ${speed || 17}ms linear`
  )
  return null
}

export default {
  formatNumber,
  formatTime
}
