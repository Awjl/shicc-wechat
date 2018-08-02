<template>
  <div class="purchaseDetalis">
    <Swiper :listImg="listImg"></Swiper>
    <div class="Detalis-title">
      <div class="title-left">
        <p class="leftName">餐厅包间代金券</p>
        <p class="leftjiage">代金券：
          <span>¥300</span>
        </p>
      </div>
      <div class="title-right">
        <div class="right-img" @click="collection">
          <img :src="xinIcon" alt="" v-if='show'>
          <img :src="xinactiveIcon" alt="" v-else>
        </div>
        <p>加入心愿单</p>
      </div>
    </div>
    <div class="line">
    </div>
    <div class="Detalis">
      <div class="notes">
        购买须知
      </div>
      <div class="Detalis-line">
      </div>
      <div class="he10">
      </div>
      <div class="he10">
      </div>
      <div class="Detalislist">
        有效期：
      </div>
      <div class="DetalisItem">
        2018.07.01至2019.07.01 （周末、法定节假日通用）
      </div>
      <div class="he10"></div>
      <div class="Detalislist">
        使用时间：
      </div>
      <div class="DetalisItem">
        10:00-22:00
      </div>
      <div class="he10"></div>
      <div class="Detalislist">
        使用规则：
      </div>
      <div class="DetalisItem">
        <p>*需要提前预约 </p>
        <p>*不可叠加使用</p>
        <p>不兑现不找零</p>
        <p>*提供免费Wifi </p>
        <p>停车位收费标准：详情到店或者电话咨询</p>
      </div>
      <div class="he30"></div>
      <div class="notes">
        产品详情
      </div>
      <div class="Detalis-line">
      </div>
    </div>
    <div class="text-title">
      特色餐厅
    </div>
    <div class="text-center">
      精选地道的意大利北部佳肴款待各方宾客。传承意大利北部最传统的烹调手法, 融和厨师的创意灵感，各式菜品都弥散着普罗奇尼蘑菇的芳香气味。餐厅赋予现代设计亦不失华贵，以深红色的樱桃木为架构，位于餐厅入口处的“Bottega”酒廊陈列200多款精选自意大利的陈年佳酿，将最大程度的满足美酒爱好者的需求；吊顶悬挂3,000枚特制镀银蘑菇造型与餐厅主题相得益彰；精致的蓝色水杯，特制镀银餐具及各种瓷器用品均出自意大利名家之手。正面墙布采用拉丁仿古设计，红色的孟买风格窗帘以及名贵的水晶灯造就与众不同的就餐氛围； 此外，餐厅另设有一个10人包间以“牛肝菌”命名。
    </div>
    <div class="text-img">
      <img :src="detalisImg" alt="">
    </div>
    <div class="footer">
      <div class="footer-left">
        <span class="new">¥<span>188</span></span>
        <span class="old">¥300</span>
      </div>
      <div class="footer-over" @click="goSubmission()">
        立即购买
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'base/swiper/swiper'

export default {
  data () {
    return {
      xinIcon: './static/icon/xin-icon.png',
      xinactiveIcon: './static/icon/xinactive-icon.png',
      detalisImg: './static/showImg/detalis.png',
      show: true,
      listImg: [
        { img: './static/showImg/banner.png', id: 1 },
        { img: './static/showImg/banner.png', id: 1 },
        { img: './static/showImg/banner.png', id: 1 },
        { img: './static/showImg/banner.png', id: 1 }
      ]
    }
  },
  methods: {
    collection () {
      this.show = !this.show
    },
    goSubmission () {
      this.$router.push({
        path: `/Submission`
      })
    }
  },
  components: {
    Swiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
.he10 {
  height: 10px;
}
.he30 {
  height: 30px;
}
.Detalis-title {
  height: 128px;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-left p {
  height: 40px;
  line-height: 40px;
}
.leftName {
  font-size: 24px;
  color: #4a4a4a;
}
.leftjiage {
  font-size: 18px;
  color: #9b9b9b;
  letter-spacing: 1.09px;
}
.leftjiage span {
  font-size: 24px;
  color: #ed6969;
  letter-spacing: 1.45px;
}
.title-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title-right p {
  font-size: 16px;
  color: #ed6969;
  letter-spacing: 0.97px;
}
.right-img {
  width: 44px;
  height: 41px;
  margin-bottom: 10px;
}
.line {
  width: 100%;
  height: 10px;
  background: #f2f2f2;
}
.Detalis {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}
.notes {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  color: #4a4a4a;
  padding-left: 10px;
}
.Detalis-line {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
}
.Detalislist {
  font-size: 22px;
  color: #4a4a4a;
  height: 40px;
  line-height: 40px;
}
.DetalisItem {
  font-size: 22px;
  line-height: 35px;
  color: #9b9b9b;
}
.Detalislist,
.DetalisItem {
  padding-left: 10px;
}
.text-title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  color: #4A4A4A;
}
.text-center {
  font-size: 22px;
  color: #9B9B9B;
  padding: 0 40px;
  box-sizing: border-box;
  line-height: 30px;
  margin-bottom: 30px;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.footer div{
  width: 50%;
  height: 88px;
  line-height: 88px;
  text-align: center;
}
.footer-left .new{
  font-size: 24px;
  color: #ED6969;
  letter-spacing: 2.59px;
  margin-right: 10px;
}
.footer-left .new span{
  font-size: 48px;
}
.footer-left .old {
  font-size: 22px;
  color: #9B9B9B;
  letter-spacing: 0.97px;
  position:relative;
}
.footer-left .old::before{
  content:"";
  position:absolute;
  left:0;
  top:45%;
  width:100%;
  height:1px;
  box-sizing:border-box;
  background:#9B9B9B;
  transform-origin:bottom center;
  transform: rotate(9deg)
}
.footer-over{
  background: #59C2FA;
  font-size: 24px;
  color: #FFFFFF;
}
</style>
