<template>
  <div class="exchangeDetalis">
    <Swiper :listImg="listImg.banner"></Swiper>
    <div class="exchangeDetalistitle">
      <div class="exchangeDetalisname">
        {{listImg.pointGoods.name}}
        <p> {{listImg.pointGoods.summary}}</p>
      </div>
      <div class="exchangeDetalistitle-jiage">
        <span class="new" v-if="type === '1'">{{listImg.pointGoods.v1NewPoint}}积分</span>
        <span class="new" v-else>{{listImg.pointGoods.v2NewPoint}}积分</span>
        <span class="old">￥{{listImg.pointGoods.oldPoint}}元</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="detalis">
      <div class="submission-iph" @click="showbox()">
        <div class="iph-title">
          已选择：{{listImg.pointGoods.kind[trueind]}}
        </div>
        <div class="iph-jiage">
          <img :src="imgRight" alt="">
        </div>
      </div>
      <div class="detalisLine"></div>
      <div class="detailsTitle">商品参数：</div>
      <div class="detailsItem">
        <p v-for="(item, index) in listImg.pointGoods.param" :key="index">{{item.key}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.name}}</p>
      </div>
      <div class="detailsTitle">商品详情图：</div>
    </div>
    <div class="detalisImg">
      <img :src="item.url" alt="" v-for="(item, index) in listImg.introduce" :key="index">
    </div>

    <div v-if="level>= type">
      <div v-if="listImg.pointGoods.stock > 0">
        <div class="footer" @click="goTrue" v-if='showtreu'>
          立即兑换
        </div>
        <div class="footer-active" v-else>
          积分不足
        </div>
      </div>
      <div class="footer-active" v-else>
        库存不足
      </div>
    </div>
    <div class="footer-active" v-else>
      您的级别不够
    </div>
    <div class="box" v-if="show">
      <div class="box-width">
        <div class="box-title">
          <span @click="boxquxiao">取消</span> 选择规格
          <span @click="boxtrue">确定</span>
        </div>
        <ul>
          <li v-for="(item, index) in listImg.pointGoods.kind" :key="index" :class="{ active: ind == index }" @click="tabsort(index)">{{item}}</li>
        </ul>
        <div class="box-btn">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'base/swiper/swiper'
import { getPointGoodsDetailById, isEnoughPoint } from 'api/shopping'
import { ERR_OK, vxconfig} from 'api/config'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      imgRight: './static/icon/ic_back.png',
      listImg: {
        pointGoods: {
          name: '',
          summary: '',
          param: {},
          kind: []
        }
      },
      imgItem: [{ img: './static/showImg/details3.png' }, { img: './static/showImg/details1.png' }, { img: './static/showImg/details2.png' }],
      type: '',
      level: '',
      ind: 0,
      trueind: 0,
      show: false,
      showtreu: false
    }
  },
  created() {
    this._getPointGoodsDetailById()
    vxconfig(window.location.href.split('#')[0])
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _isEnoughPoint() {
      if (this.type === '1') {
        isEnoughPoint(this.UserID, this.listImg.pointGoods.v1NewPoint).then((res) => {
          if (res.code === ERR_OK) {
            // console.log('判断积分是否做够===========')
            // console.log(res.data)
            this.showtreu = res.data
          }
        })
      } else {
        isEnoughPoint(this.UserID, this.listImg.pointGoods.v2NewPoint).then((res) => {
          if (res.code === ERR_OK) {
            // console.log('判断积分是否做够===========')
            // console.log(res.data)
            this.showtreu = res.data
          }
        })
      }
    },
    _getPointGoodsDetailById() {
      getPointGoodsDetailById(this.$route.params.id).then((res) => {
        if (res.code === ERR_OK) {
          if (res.code === ERR_OK) {
            // console.log('积分详情=============')
            // console.log(res.data)
            this.type = this.$route.params.type
            this.level = this.$route.params.level
            // console.log(this.type === '1')
            this.listImg = res.data
            this.listImg.pointGoods.param = JSON.parse(this.listImg.pointGoods.param)
            console.log(res.data)
            console.log(this.listImg)
            this.listImg.pointGoods.kind = this.listImg.pointGoods.kind.split('/')
            this._isEnoughPoint()
          }
        }
      })
    },
    boxtrue() {
      this.trueind = this.ind
      this.show = false
    },
    boxquxiao() {
      this.show = false
    },
    showbox() {
      this.show = true
    },
    goTrue() {
      if (this.type === '1') {
        this.$router.push({
          path: `/TrueExchange/${this.listImg.pointGoods.id}/${this.listImg.pointGoods.kind[this.trueind]}/${this.listImg.pointGoods.v1NewPoint}`
        })
      } else {
        this.$router.push({
          path: `/TrueExchange/${this.listImg.pointGoods.id}/${this.listImg.pointGoods.kind[this.trueind]}/${this.listImg.pointGoods.v2NewPoint}`
        })
      }
    },
    tabsort(index) {
      this.ind = index
    }
  },
  components: {
    Swiper
  }
}
</script>

<style scoped>
.box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(000, 000, 000, 0.5);
  z-index: 9999;
}
.box-width {
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 50vh;
  background: #fff;
}
.box-width ul {
  width: 86%;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
}
.box-width ul li {
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 2px solid #59c2fa;
  border-radius: 10px;
  margin-right: 20px;
}
.box-width ul li.active {
  background: #59c2fa;
  color: #fff;
}
.box-title {
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  text-align: center;
  color: #4a4a4a;
  border-bottom: 1px solid #dcdcdc;
}
.box-title span {
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ddd;
  font-size: 26px;
  border-radius: 20px;
}
img {
  width: 100%;
}
.line {
  width: 100%;
  height: 10px;
  background: #f5f5f5;
}
.exchangeDetalistitle {
  width: 100%;
  height: 198px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}
.exchangeDetalisname {
  font-size: 28px;
  color: #4a4a4a;
  line-height: 35px;
  letter-spacing: 1px;
  text-align: left;
  padding: 0 30px;

}
.exchangeDetalisname >p {
  font-size: 24px;
    color: #9b9b9b;

}
.name p {
  font-size: 20px;
  color: #9b9b9b;
  letter-spacing: 0;
  text-align: center;
}
.exchangeDetalistitle-jiage {
  margin-top: 19px;
  padding: 0 30px;
}

.exchangeDetalistitle-jiage > .new {
  font-size: 28px;
  color: #ed6969;
}
.exchangeDetalistitle-jiage > .old {
  font-size: 18px;
  color: #9b9b9b;
  position: relative;
  text-align: center;
}
.exchangeDetalistitle-jiage .old::before {
  content: '';
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  height: 2px;
  box-sizing: border-box;
  background: #acacac;
  transform-origin: bottom center;
  transform: rotate(0deg);
}
.detalis {
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
.iph-title {
  font-size: 24px;
  color: #222222;
}
.detalisLine {
  width: 100%;
  height: 1px;
  background: #dcdcdc;
  margin-top: 20px;
}
.detailsTitle {
  font-size: 24px;
  color: #4a4a4a;
  margin: 30px 0;
}
.iph-jiage img {
  width: 10px;
  height: 19px;
  transform: rotate(180deg);
  margin-left: 10px;
}
.detailsItem p {
  font-size: 24px;
  color: #9b9b9b;
  height: 40px;
  line-height: 40px;
}
.detailsItem p span {
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
  background: #59c2fa;
  font-size: 28px;
  color: #ffffff;
}
.footer-active {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88px;
  text-align: center;
  line-height: 88px;
  background: #ddd;
  font-size: 28px;
  color: #fff;
}
</style>
