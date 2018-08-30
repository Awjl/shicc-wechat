<template>
  <div class="purchase">
    <div class="purchase-banner">
      <img :src="dataList.picture.url" alt="">
      <div class="banner-text">
        {{dataList.picture.title}}
      </div>
    </div>
    <div class="purchase-nav">
      <span :class="{active: show}" @click="tabOne()">一 隅</span>
      <span :class="{active: !show}" @click="tabTwo()">一 食</span>
    </div>
    <div class="purchase-list">
      <div class="purchase-item" v-for="(item, index) in dataArr" :key="index" @click="goDetalis(item.goodsId)">
        <div class="purchase-img">
          <img :src="item.pictureUrl" alt="">
          <div class="purchase-name">
            {{item.title}}
          </div>
        </div>
        <div class="purchase-title">
          <div class="titleItem">
            <span>
              <img :src="hotIcon" alt="" v-if="item.isCommend == 1">
            </span>
            <div class="title-name">
              {{item.name}}
            </div>
          </div>
          <div class="Price">
            <span class="PriceNew">￥{{item.newPrice}}</span>
            <span class="PriceOld">￥{{item.oldPrice}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom" v-if="!showover">- 到底了 -</div>
    <mugen-scroll :handler="fetchData" :should-handle="!loading" v-if="showover" class="bottom" >
      - 加载中 -
    </mugen-scroll>
    <not-logged v-if="notShow"></not-logged>
  </div>
</template>

<script>
import MugenScroll from 'vue-mugen-scroll'
import { getCornerGoods, getMealGoods } from 'api/shopping'
import { ERR_OK } from 'api/config'
import NotLogged from 'base/notlogin/notlogin'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      dataList: {
        picture: {
          url: '',
          title: ''
        }
      },
      hotIcon: './static/icon/hot-icon.png',
      show: true,
      loading: false,
      pn: 1,
      pg: 4,
      dataArr: [],
      showover: true,
      notShow: false
    }
  },
  created () {
    this._getCornerGoods(this.pn, this.pg)
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getCornerGoods (pn, pg) {
      getCornerGoods(pn, pg).then((res) => {
        if (res.code === ERR_OK) {
          console.log(`商品列表banner=====`)
          console.log(res.data)
          this.dataList = res.data
          let vm = this
          if (res.data.goodsOuts.length === 0) {
            this.showover = false
          } else {
            res.data.goodsOuts.forEach(function (value, index, array) {
              vm.dataArr.push(value)
            })
            this.loading = false
          }
        }
      })
    },
    _getMealGoods (pn, pg) {
      getMealGoods(pn, pg).then((res) => {
        if (res.code === ERR_OK) {
          console.log(`商品列表banner=====`)
          console.log(res.data)
          this.dataList = res.data
          let vm = this
          if (res.data.goodsOuts.length === 0) {
            this.showover = false
          } else {
            res.data.goodsOuts.forEach(function (value, index, array) {
              vm.dataArr.push(value)
            })
            this.loading = false
          }
        }
      })
    },
    notShowbox () {
      if (!this.UserID) {
        this.notShow = true
        var vm = this
        setTimeout(function () {
          vm.notShow = false
        }, 1000)
        this.userState = false
      } else {
        this.userState = true
      }
    },
    fetchData () {
      this.loading = true
      this.pn++
      if (this.show) {
        this._getCornerGoods(this.pn, this.pg)
      } else {
        this._getMealGoods(this.pn, this.pg)
      }
    },
    tabOne () {
      this.showover = true
      this.show = true
      this.pn = 1
      this.dataArr = []
      this.dataList = {
        picture: {
          url: '',
          title: ''
        }
      }
      this._getCornerGoods(this.pn, this.pg)
    },
    tabTwo () {
      this.showover = true
      this.show = false
      this.pn = 1
      this.dataArr = []
      this.dataList = {
        picture: {
          url: '',
          title: ''
        }
      }
      this._getMealGoods(this.pn, this.pg)
    },
    goDetalis (id) {
      this.notShowbox()
      if (this.UserID) {
        this.$router.push({
          path: `/PurchaseDetalis/${id}`
        })
      }
    }
  },
  components: {
    MugenScroll,
    NotLogged
  }
}
</script>
<style scoped>
img {
  width: 100%;
}
.swiper-container {
  width: 100%;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.purchase-banner {
  width: 100%;
  position: relative;
}
.banner-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding-left: 30px;
  box-sizing: border-box;
  background: rgba(000, 000, 000, 0.5);
  color: #fff;
  font-size: 24px;
  letter-spacing: 1.45px;
}
.purchase-nav {
  width: 100%;
  height: 83px;
  padding: 0 180px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdc;
}
.purchase-nav span {
  display: block;
  height: 83px;
  line-height: 83px;
  width: 80px;
  text-align: center;
  font-size: 28px;
  color: #4a4a4a;
}
.purchase-nav span.active {
  color: #59c2fa;
  border-bottom: 4px solid #59c2fa;
  box-sizing: border-box;
}
.purchase-list {
  padding: 30px 30px 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.purchase-item {
  width: 335px;
  margin-bottom: 20px;
}
.purchase-img {
  position: relative;
}
.purchase-name {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 30px;
  color: #fff;
  font-size: 18px;
  background: rgba(000, 000, 000, 0.5);
  box-sizing: border-box;
}
.purchase-title {
  width: 100%;
  height: 100px;
}
.titleItem {
  display: flex;
  align-items: center;
  height: 50px;
  line-height: 50px;
}
.titleItem span {
  display: block;
  width: 30px;
  height: 30px;
  margin-top: -5px;
}
.title-name {
  font-size: 24px;
  color: #4a4a4a;
  letter-spacing: 1.45px;
}
.Price {
  width: 100%;
  padding-left: 30px;
  box-sizing: border-box;
}
.Price .PriceNew {
  font-size: 24px;
  color: #59c2fa;
  letter-spacing: 1.45px;
  font-weight: bold;
}
.Price .PriceOld {
  font-size: 18px;
  color: #9b9b9b;
  letter-spacing: 0.97px;
  position: relative;
  overflow: hidden;
}
.Price .PriceOld::before {
  content: '';
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  height: 1px;
  box-sizing: border-box;
  background: #9b9b9b;
  transform-origin: bottom center;
  transform: rotate(9deg);
}
.bottom {
  text-align: center;
  height: 40px;
  line-height: 40px;
}
</style>
