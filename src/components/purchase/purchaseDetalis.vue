<template>
  <div class="purchaseDetalis">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(str, index) in dataList.bannerUrls" :key="index">
          <!-- <img :src="`http://${str.pictureUrl}?x-oss-process=image/format,png`" @click="goDetails(str.id)" /> -->
          <img :src="str" @click="goDetails(str.id)" style="vertical-align:middle" />
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
    <div class="Detalis-title">
      <div class="title-left">
        <p class="leftName">{{dataList.name}}(<span v-if="dataList.isBespeak === 1 ">需要预约</span><span v-else>不需要预约</span>)</p>
        <p class="leftjiage">代金券：
          <span>¥{{dataList.oldPrice | formatFee}}</span>
        </p>
      </div>
      <div class="title-right">
        <div class="right-img" @click="collection(dataList.goodsId)">
          <img :src="xinIcon" alt="" v-if='dataList.isLove != 1'>
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
        {{dataList.termOfValidity}}
      </div>
      <div class="he10"></div>
      <div class="Detalislist">
        使用时间：
      </div>
      <div class="DetalisItem">
        {{dataList.useTime}}
      </div>
      <div class="he10"></div>
      <div class="Detalislist">
        使用规则：
      </div>
      <div class="DetalisItem">
        <p v-for="(item, index) in dataList.useRule" :key="index">{{item}} </p>
      </div>
      <div class="he30"></div>
      <div class="notes">
        产品详情
      </div>
      <div class="Detalis-line">
      </div>
    </div>
    <div class="text-title">
      {{dataList.name}}
    </div>
    <div class="text-center">
      {{dataList.introduce}}
    </div>
    <div class="text-img">
      <img :src="str" alt="" v-for="(str, index) in dataList.introduceUrls" :key="index">
    </div>
    <div class="footer">
      <div class="footer-left">
        <span class="new">¥<span>{{dataList.newPrice | formatFee}}</span></span>
        <span class="old">¥{{dataList.oldPrice | formatFee}}</span>
      </div>
      <div class="footer-over" @click="goSubmission(dataList.goodsId)">
        立即购买
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { getGoodsDetail } from 'api/shopping'
import { inLove, outLove } from 'api/homeapi'
import { ERR_OK } from 'api/config'
import { mapGetters } from 'vuex'

export default {
  inject: ['reload'],
  data() {
    return {
      xinIcon: './static/icon/xin-icon.png',
      xinactiveIcon: './static/icon/xinactive-icon.png',
      detalisImg: './static/showImg/detalis.png',
      show: true,
      user: 0,
      dataList: {}
    }
  },
  updated() {
    var swiper = new Swiper('.swiper-container', {
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination'
      },
      paginationClickable: true,
      loop: true,
      speed: 600,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      onTouchEnd: function () {
        swiper.startAutoplay()
      }
    })
  },
  created() {
    this.reload()
    if (this.UserID) {
      this.user = this.UserID
      this._getGoodsDetail(this.user)
    }
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getGoodsDetail(user) {
      console.log('商品详情===================')
      getGoodsDetail(user, this.$route.params.id).then((res) => {
        if (res.code === ERR_OK) {
          console.log(`商品详情=====`)
          console.log(res.data)
          this.dataList = res.data
          this.dataList.useRule = this.dataList.useRule.split(',')
          console.log(this.dataList.useRule)
        }
      })
    },
    collection(id) {
      if (this.dataList.isLove === 1) {
        this.dataList.isLove = null
        outLove(this.user, id, 2).then((res) => {
          if (res.code === ERR_OK) {
            console.log('取消成功')
          }
        })
      } else {
        this.dataList.isLove = 1
        inLove(this.user, id, 2).then((res) => {
          if (res.code === ERR_OK) {
            console.log('保存成功')
          }
        })
      }
    },
    goSubmission(id) {
      this.$router.push({
        path: `/Submission/${id}`
      })
    }
  },
  components: {
    Swiper
  },
  // beforeRouteLeave (to, from, next) {
  //   if (to.name === 'Purchase') {
  //     to.meta.keepAlive = true
  //     next()
  //   } else {
  //     to.meta.keepAlive = false
  //     next()
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-wrapper {
  height: 650px;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
}
.swiper-slide {
  width: 100%;
  height: 100%;
}
.swiper-slide > img {
  width: 100%;
  height: 100%;
}
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
  font-size: 24px;
  color: #4a4a4a;
  height: 40px;
  line-height: 40px;
}
.DetalisItem {
  font-size: 24px;
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
  color: #4a4a4a;
}
.text-center {
  font-size: 24px;
  color: #9b9b9b;
  padding: 0 40px;
  box-sizing: border-box;
  line-height: 40px;
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
.footer div {
  width: 50%;
  height: 88px;
  line-height: 88px;
  text-align: center;
}
.footer-left > .new {
  font-size: 24px;
  color: #ed6969;
  letter-spacing: 2.59px;
  margin-right: 10px;
}
.footer-left > .new span {
  font-size: 48px;
}
.footer-left > .old {
  font-size: 22px;
  color: #9b9b9b;
  letter-spacing: 0.97px;
  position: relative;
}
.footer-left .old::before {
  content: '';
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  height: 2px;
  box-sizing: border-box;
  background: #9b9b9b;
  transform-origin: bottom center;
  transform: rotate(9deg);
}
.footer-over {
  background: #59c2fa;
  font-size: 28px;
  color: #ffffff;
}
</style>
