<template>
  <div class="mpvue-slide">
    <div class="slide-wrapper"
      @touchstart="onTouchstart"
      @touchmove="onTouchmove"
      :animation="animationData">
      <div class="card-wrapper" v-for="(item, index) in arithmeticList" :key="index">
          <card :info="item"></card>
        </div>
    </div>
  </div>
</template>

<script>
import card from './card.vue'
import { boundingClientRect, slideAnimate } from 'utils'
export default {
  props: ['arithmeticList'],
  components: {
    card
  },
  data() {
    return {
      wrapWidth: 0,
      slideWidth: 0,
      slideIndex: 0,
      startX: 0,
      transX: 0,
      animationData: {
        transformOrigin: '50% 50%',
        duration: 300,
        timingFunction: 'ease',
        delay: 0
      }
    }
  },
  computed: {
    transBoundary() {
      return [-(this.wrapWidth - this.slideWidth), 0]
    }
  },
  methods: {
    async initSlide() {
      // 获取wrap层的宽度
    },
    async onTouchstart(e) {
      this.startX = e.touches[0].clientX

      const $wrapRect = await boundingClientRect('.mpvue-slide > .slide-wrapper')
      this.wrapWidth = $wrapRect.width
      const $slideRect = await boundingClientRect('.mpvue-slide')
      this.slideWidth = $slideRect.width
    },
    // onTouchmove(e) {
    //   let moveX = 0
    //   moveX = e.touches[0].clientX

    //   let distance = moveX - this.startX
    //   this.startX = moveX
    //   this.transX = this.transX + distance

    //   // 边界检测
    //   this.transX = this.getSafeValue(this.transX, this.transBoundary)

    //   // 创建动画 动画移动跟随distance
    //   this.animationData = slideAnimate(
    //     this.speed,
    //     this.transX,
    //     '.mpvue-slide>.slide-wrap'
    //   )
    // },
    onTouchmove(e) {
      let endX = 0
      console.log(this.slideWidth)

      endX = e.touches[0].clientX

      let distance = endX - this.startX
      console.log('​onTouchmove -> distance', Math.abs(distance))
      this.transX = this.transX + distance

      if (Math.abs(distance) < (this.slideWidth / 4)) {
        return
      }

      let slideWidth = this.slideWidth + 20
      this.transX = distance > 0 ? slideWidth : -slideWidth
      this.transX = this.getSafeValue(this.transX, this.transBoundary)
      console.log('​onTouchmove -> this.transX ', this.transX)

      // 创建动画 动画移动跟随distance
      this.animationData = slideAnimate(
        500,
        this.transX,
        '.mpvue-slide>.slide-wrap'
      )
    },
    /**
     * @desc 获取偏移的安全距离
     * @param {number} transX - 横向偏移量
     * @param {Array} boundary 偏移范围 例如[-100, 0]
     * @return {number} 获取偏移的安全距离
     */
    getSafeValue(transX, boundary) {
      if (transX > boundary[1]) {
        return boundary[1]
      }
      if (transX < boundary[0]) {
        return boundary[0]
      }
      return transX
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.mpvue-slide {
  overflow: hidden;
  .slide-wrapper {
    display: flex;
    width: max-content;
  }
}
.card-wrapper {
  margin-right: 20px;
  padding-bottom: 10px;
  &:first-child {
    margin-left: 35px;
  }
}
</style>

