<template>
  <div class="stackAll">
    <div class="stack-wrapper">
      <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
    </div>
    <div class="OverBox-img" @click="goBack">
        <img :src="overImg" alt="">
      </div>
  </div>
</template>
<script>
import stack from 'base/stack/stack'
export default {
  data () {
    return {
      overImg: './static/icon/done.png',
      someList: [],
      stackinit: {
        visible: 3
      }
    }
  },
  mounted () {
    let that = this
    setTimeout(function () {
      that.someList = [
        {
          html: '<img src="static/imgone/1.png" alt="01">',
          state: 1
        },
        {
          html: '<img src="static/imgone/2.png" alt="02">',
          state: 2
        },
        {
          html: '<img src="static/imgone/3.png" alt="03">',
          state: 2
        },
        {
          html: '<img src="static/imgone/4.png" alt="04">',
          state: 1
        },
        {
          html: '<img src="static/imgone/5.png" alt="05">',
          state: 1
        },
        {
          html: '<img src="static/imgone/6.png" alt="06">',
          state: 2
        },
        {
          html: '<img src="static/imgone/7.png" alt="07">',
          state: 1
        }
      ]
    }, 1000)
  },
  components: {
    stack
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    }
  }
}
</script>
<style>
.stackAll {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: -webkit-linear-gradient(#27283b, #595a6d); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#27283b, #595a6d); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#27283b, #595a6d); /* Firefox 3.6 - 15 */
  background: linear-gradient(#27283b, #595a6d); /* 标准的语法 */
}
.stack-wrapper {
  left: 0;
  top: 132px;
  right: 0;
  margin:0 auto;
  position: absolute;
  z-index: 1000;
  width: 550px;
  height: 750px;
  padding: 0;
  list-style: none;
  pointer-events: none;
}
.OverBox-img {
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.OverBox-img img {
  width: 100%;
}
</style>
