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
    <div class="btn" @click="goSrver">
      <img :src="img" alt="">
    </div>
  </div>
</template>

<script>
import Swiper from 'base/swiper/swiper'
import Hall from 'base/hall/hall'
import Food from 'base/food/food'
import HomeList from 'base/homelist/homelist'

export default {
  data () {
    return {
      img: './static/icon/service-icon.png',
      listImg: [
        { img: './static/img/banner.png', id: 1 },
        { img: './static/img/banner.png', id: 1 },
        { img: './static/img/banner.png', id: 1 },
        { img: './static/img/banner.png', id: 1 }
      ],
      hallList: [
        { img: './static/img/listone-1.png', text: '大堂吧' },
        { img: './static/img/listone-2.png', text: '咖啡吧' }
      ],
      footList: [
        { img: './static/img/listtwo-1.png', text: '上海风味餐厅 名厨料理', Price: 600 },
        { img: './static/img/listtwo-2.png', text: '豪华江景房 专享服务', Price: 700 }
      ]
    }
  },
  methods: {
    goReserve () {
      this.$router.push({
        path: `/Reserve`
      })
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
    HomeList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  height: 30px;
  background: #59c2fa;
  color: #fff;
  line-height: 30px;
  text-align: center;
  border-radius: 0 100px 100px 0;
  font-size: 20px;
}
.reserve {
  width: 300px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  text-align: center;
  border: 2px solid #59C2FA;
  border-radius: 100px;
  font-size: 24px;
  color: #59c2fa;
  letter-spacing: 1.45px;
  text-align: center;
}
.btn {
  position: fixed;
  right: 40px;
  bottom: 128px;
  width: 100px;
  height: 100px;
}
.btn img {
  width: 100%;
  height: 100%;
}
</style>
