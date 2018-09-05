<template>
  <div class="home">
    <Swiper :listImg="listImg"></Swiper>
    <div class="he40"></div>
    <div class="title">
      <div class="title-text">一期一会</div>
    </div>
    <div class="he20"></div>
    <hall :hallList="hallList"></hall>
    <div class="he20"></div>
    <div class="title">
      <div class="title-text">一隅一食</div>
    </div>
    <div class="he20"></div>
    <Food :footList="footList"></Food>
    <div class="title">
      <div class="title-text">关于我们</div>
    </div>
    <div class="he20"></div>
    <HomeList></HomeList>
    <div class="he30"></div>
    <div class="reserve" @click="goReserve">
      会议预定
    </div>
    <div class="he20"></div>
    <div class="homebtn" @click="goSrver">
      <img :src="img" alt="">
    </div>
    <not-logged v-if="notShow"></not-logged>
  </div>
</template>

<script>
import Swiper from 'base/swiper/swiper'
import Hall from 'base/hall/hall'
import Food from 'base/food/food'
import HomeList from 'base/homelist/homelist'

import { getTopBanner, getOneStageBanner, getCornerMealBanner } from 'api/homeapi'
import { ERR_OK } from 'api/config'
import NotLogged from 'base/notlogin/notlogin'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      img: './static/icon/service-icon.png',
      listImg: [],
      hallList: [],
      footList: [],
      notShow: false
    }
  },
  created () {
    this._getTopBanner()
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getTopBanner () {
      getTopBanner().then((res) => {
        if (res.code === ERR_OK) {
          console.log(`顶部banner=====`)
          console.log(res.data)
          this.listImg = res.data
          this._getOneStageBanner()
        }
      })
    },
    _getOneStageBanner () {
      getOneStageBanner().then((res) => {
        if (res.code === ERR_OK) {
          console.log(`一期一会banner=====`)
          console.log(res.data)
          this.hallList = res.data
          this._getCornerMealBanner()
        }
      })
    },
    _getCornerMealBanner () {
      getCornerMealBanner().then((res) => {
        if (res.code === ERR_OK) {
          console.log(`一隅一食banner=====`)
          console.log(res.data)
          this.footList = res.data
        }
      })
    },
    notShowbox () {
      if (!this.UserID) {
        this.$router.push({
          path: '/Login'
        })
      }
    },
    goReserve () {
      this.notShowbox()
      if (this.UserID) {
        this.$router.push({
          path: `/Reserve`
        })
      }
    },
    goSrver () {
      this.$router.push({
        path: `/Service`
      })
    }
  },
  components: {
    Swiper,
    Hall,
    Food,
    HomeList,
    NotLogged
  }
}
</script>

<style scoped>
.he20 {
  height: 20px;
}
.he40 {
  height: 40px;
}
.he30 {
  height: 30px;
}
.title-text {
  width: 140px;
  height: 40px;
  background: #59c2fa;
  color: #fff;
  line-height: 42px;
  text-align: center;
  border-radius: 0 100px 100px 0;
  font-size: 24px;
}
.reserve {
  width: 300px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  text-align: center;
  border: 2px solid #59c2fa;
  border-radius: 100px;
  font-size: 24px;
  color: #59c2fa;
  letter-spacing: 1.45px;
  text-align: center;
}
.homebtn {
  position: fixed;
  right: 40px;
  bottom: 128px;
  width: 100px;
  height: 100px;
}
.homebtn img {
  width: 100%;
  height: 100%;
}
</style>
