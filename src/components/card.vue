<template>
  <div class="card">
    <div class="time">{{info.time}}</div>
    <div class="img-wrapper">
      <img :src="info.thumb">
    </div>
    <div class="title">
      {{info.title}}
    </div>
    <div class="content">
      {{content}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  computed: {
    content: function () {
      let content = this.info.content
      return content.length > 150 ? content.substr(0, 150) + '...' : content
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin: 0 auto;
  padding: 5px 20px;
  width: 300px;
  height: 500px;
  background: #fff;
  border-radius: 7px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px #cdcdcd;
}
.img-wrapper {
  margin: 10px auto 0;
  width: 240px;
  height: 240px;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    border-radius: 5px;
  }
}
.time,
.title {
  text-align: center;
}

.time {
  color: #aaa;
  font-size: 14px;
}

.title {
  margin-top: 15px;
  font-size: 26px;
  font-weight: 700;
}
.content {
  margin-top: 5px;
  font-size: 17px;
  word-break: initial;
}
</style>
