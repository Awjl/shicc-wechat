<template>
  <div class="home">
    <div class="banner-he">
      <Swiper :listImg="listImg" :height="height"></Swiper>
    </div>
    <div class="he40"></div>
    <div class="title">
      <div class="title-text">一期一会</div>
    </div>
    <div class="he20"></div>
    <div class="hall-he">
      <hall :hallList="hallList"></hall>
    </div>
    <div class="he40"></div>
    <div class="title">
      <div class="title-text">一隅一食</div>
    </div>
    <div class="he20"></div>
    <div class="food-he">
      <Food :footList="footList"></Food>
    </div>
    <div class="he20"></div>
    <div class="title">
      <div class="title-text">关于我们</div>
    </div>
    <div class="he20"></div>
    <HomeList></HomeList>
    <div class="he30"></div>
    <div
      class="reserve"
      @click="goReserve"
    >
      会议预定
    </div>
    <div class="he20"></div>
    <div
      class="homebtn"
      @click="goSrver"
    >
      <img
        :src="img"
        alt=""
      >
    </div>
    <not-logged v-if="notShow"></not-logged>
  </div>
</template>

<script>
import Swiper from 'base/swiper/swiper'
import Hall from 'base/hall/hall'
import Food from 'base/food/food'
import HomeList from 'base/homelist/homelist'

import { getTopBanner, getOneStageBanner, getCornerMealBanner, defaultLogin } from 'api/homeapi'
import { ERR_OK } from 'api/config'
import NotLogged from 'base/notlogin/notlogin'
import { mapGetters } from 'vuex'
import { setUserID } from 'common/js/auth'


export default {
  data() {
    return {
      img: './static/icon/service-icon.png',
      listImg: [],
      hallList: [],
      footList: [],
      height: '161',
      notShow: false
    }
  },
  created() {
    this._getTopBanner()
    // this._defaultLogin()
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _defaultLogin() {
      defaultLogin().then((res) => {
        if (res.code === ERR_OK) {
          // console.log('获取UserId-------------------------------------')
          // console.log(res.data)
          this.$store.commit('SET_USERID', res.data)
          setUserID(res.data)
        }
      })
    },
    _getTopBanner() {
      getTopBanner().then((res) => {
        if (res.code === ERR_OK) {
          // console.log(`顶部banner=====`)
          // console.log(res.data)
          this.listImg = res.data
          this._getOneStageBanner()
        }
      })
    },
    _getOneStageBanner() {
      getOneStageBanner().then((res) => {
        if (res.code === ERR_OK) {
          // console.log(`一期一会banner=====`)
          // console.log(res.data)
          this.hallList = res.data
          this._getCornerMealBanner()
        }
      })
    },
    _getCornerMealBanner() {
      getCornerMealBanner().then((res) => {
        if (res.code === ERR_OK) {
          // console.log(`一隅一食banner=====`)
          // console.log(res.data)
          this.footList = res.data
        }
      })
    },
    notShowbox() {
      if (!this.UserID) {
        this.$router.push({
          path: '/Login'
        })
      }
    },
    goReserve() {
      this.notShowbox()
      if (this.UserID) {
        this.$router.push({
          path: `/Reserve`
        })
      }
    },
    goSrver() {
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
.banner-he {
  height: 322px;
}
.hall-he {
  height: 300px;
}
.food-he {
  min-height: 320px;
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
