<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="card-list">
      <slide :arithmeticList="arithmeticList">
      </slide>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import slide from '@/components/slide'
// import API from 'api'

export default {
  data() {
    return {
      arithmeticList: []
    }
  },

  components: {
    card,
    slide
  },

  methods: {
    // 获取算法列表
    getArithmeticList() {
      // API.getArithmeticList().then(res => {
      //   console.log(res)
      //   this.arithmeticList = res.list
      // })
      this.arithmeticList = [
        {
          title: 'suanfa 1',
          content:
            'Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. ',
          answerList: [],
          time: '2018-07-05',
          thumb:
            // 'http://img.hb.aicdn.com/6a2a095166fa6a1e59ad7ac5faf4107ea62f0e8c745e1-xRr4gC_fw658'
            'http://img.hb.aicdn.com/ffc8be4570331ba6957da29362a1d33ce9c9701b2e3c1-bVKqtS_fw658'
        },
        {
          title: 'suanfa 1',
          content:
            'Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. ',
          answerList: [],
          time: '2018-07-05',
          thumb:
            // 'http://img.hb.aicdn.com/6a2a095166fa6a1e59ad7ac5faf4107ea62f0e8c745e1-xRr4gC_fw658'
            'http://img.hb.aicdn.com/ffc8be4570331ba6957da29362a1d33ce9c9701b2e3c1-bVKqtS_fw658'
        },
        {
          title: 'suanfa 1',
          content:
            'Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. ',
          answerList: [],
          time: '2018-07-05',
          thumb:
            // 'http://img.hb.aicdn.com/6a2a095166fa6a1e59ad7ac5faf4107ea62f0e8c745e1-xRr4gC_fw658'
            'http://img.hb.aicdn.com/ffc8be4570331ba6957da29362a1d33ce9c9701b2e3c1-bVKqtS_fw658'
        },
        {
          title: 'suanfa 1',
          content:
            'Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. ',
          answerList: [],
          time: '2018-07-05',
          thumb:
            // 'http://img.hb.aicdn.com/6a2a095166fa6a1e59ad7ac5faf4107ea62f0e8c745e1-xRr4gC_fw658'
            'http://img.hb.aicdn.com/ffc8be4570331ba6957da29362a1d33ce9c9701b2e3c1-bVKqtS_fw658'
        },
        {
          title: 'suanfa 2',
          content:
            'Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. ',
          answerList: [],
          time: '2018-07-05',
          thumb:
            'http://img.hb.aicdn.com/6a2a095166fa6a1e59ad7ac5faf4107ea62f0e8c745e1-xRr4gC_fw658'
        }
      ]
    },
    clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created() {
    this.getArithmeticList()
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  overflow: hidden;
  background: #ececec;
}
.card-list {
  margin-top: 40px;
}
</style>
