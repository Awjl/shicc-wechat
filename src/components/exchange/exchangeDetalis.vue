<template>
  <div class="exchangeDetalis">
    <Swiper :listImg="listImg.banner"></Swiper>
    <div class="title">
      <div class="name">
        {{listImg.pointGoods.name}}
        <p> {{listImg.pointGoods.summary}}</p>
      </div>
      <div class="title-jiage">
        <span class="new" v-if="type === '1'">{{listImg.pointGoods.v1NewPoint}}积分</span>
        <span class="new" v-else>{{listImg.pointGoods.v2NewPoint}}积分</span>
        <span class="old">{{listImg.pointGoods.oldPoint}}积分</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="detalis">
      <div class="submission-iph">
        <div class="iph-title">
          已选择：蓝色 X1
        </div>
        <div class="iph-jiage">
          <img :src="imgRight" alt="">
        </div>
      </div>
      <div class="detalisLine"></div>
      <div class="detailsTitle">商品参数：</div>
      <div class="detailsItem">
        <p>商品产地<span>中国大陆</span></p>
        <p>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌<span>华为</span></p>
        <p>线&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长<span>1200mm</span></p>
      </div>
      <div class="detailsTitle">商品详情图：</div>
    </div>
    <div class="detalisImg">
      <img :src="item.img" alt="" v-for="(item, index) in imgItem" :key="index">
    </div>
    <div class="footer" @click="goTrue">
      立即兑换
    </div>
  </div>
</template>

<script>
import Swiper from 'base/swiper/swiper'
import { getPointGoodsDetailById } from 'api/shopping'
import { ERR_OK } from 'api/config'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      imgRight: './static/icon/ic_back.png',
      listImg: {
        pointGoods: {
          name: '',
          summary: ''
        }
      },
      imgItem: [{img: './static/showImg/details3.png'}, {img: './static/showImg/details1.png'}, {img: './static/showImg/details2.png'}],
      type: ''
    }
  },
  created () {
    this._getPointGoodsDetailById()
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getPointGoodsDetailById () {
      getPointGoodsDetailById(this.$route.params.id).then((res) => {
        if (res.code === ERR_OK) {
          console.log('积分详情=============')
          console.log(res.data)
          this.type = this.$route.params.type
          this.listImg = res.data
        }
      })
    },
    goTrue () {
      this.$router.push({
        path: `/TrueExchange`
      })
    }
  },
  components: {
    Swiper
  }
}
</script>

<style scoped>
img{
  width: 100%;
}
.line {
  width: 100%;
  height: 10px;
  background: #f5f5f5;
}
.title {
  width: 100%;
  height: 198px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.name {
  font-size: 24px;
  color: #4a4a4a;
  line-height: 35px;
  letter-spacing: 1px;
}
.name p {
  font-size: 20px;
  color: #9b9b9b;
  letter-spacing: 0;
  text-align: center;
}
.title-jiage {
  margin-top: 19px;
}
.new {
  font-size: 28px;
  color: #ed6969;
}
.old {
  font-size: 18px;
  color: #9b9b9b;
  position: relative;
}
.old::before {
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
.detalis{
  width: 100%;
  padding: 40px 30px 0;
  box-sizing: border-box;
}
.submission-iph {
  height: 33px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.iph-title{
  font-size: 24px;
  color: #222222;
}
.detalisLine {
  width: 100%;
  height: 2px;
  background:  #DCDCDC;
  margin-top: 20px;
}
.detailsTitle {
  font-size: 24px;
  color: #4A4A4A;
  margin: 30px 0;
}
.iph-jiage img {
  width: 10px;
  height: 19px;
  transform: rotate(180deg);
  margin-left: 10px;
}
.detailsItem p{
  font-size: 24px;
  color: #9B9B9B;
  height: 40px;
  line-height: 40px;
}
.detailsItem p span{
  margin-left: 30px;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88px;
  text-align: center;
  line-height: 88px;
  background: #59C2FA;
  font-size: 28px;
  color: #FFFFFF;
}
</style>
