<template>
  <div class="exchange">
    <div class="exchange-bg">
      <img :src="bg" alt="" style="vertical-align:middle">
      <div class="exchange-title" v-if="showLevel">
        您现有积分
      </div>
      <div class="exchange-num" v-if='showLevel'>
        {{Levelnum.points}}
      </div>
      <div class="exchange-btn" v-if='!showLevel' @click="gologin">
        去登陆
      </div>
      <div class="lvavel" v-if='showLevel && Levelnum.level == 1'>
        V1会员
      </div>
      <div class="lvavel" v-if='showLevel && Levelnum.level == 2'>
        V2会员
      </div>
    </div>
    <div class="purchase-nav">
      <span :class="{active: show}" @click="tabOne()">V1会员区</span>
      <span :class="{active: !show}" @click="tabTwo()">V2尊享区</span>
    </div>
    <div class="exchangelist">
      <div class="item" v-for="(item, index) in items" :key="index" @click="goDetalis(item.id, type, Levelnum.level)">
        <div class="exchangelist-img">
          <img :src="item.pictureUrl" alt="">
        </div>
        <div class="item-title">
          <p>{{item.name}}</p>
          <div class="item-jiage">
            <span class="new" v-if="show">{{item.v1NewPoint}}积分</span>
            <span class="new" v-else>{{item.v2NewPoint}}积分</span>
            <span class="old">{{item.oldPoint}}积分</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom" v-if="!showover">- 到底了 -</div>
    <mugen-scroll :handler="fetchData" :should-handle="!loading" v-if="showover" class="bottom">
      - 加载中 -
    </mugen-scroll>
    <not-logged v-if="notShow"></not-logged>
  </div>
</template>

<script>
import NotLogged from 'base/notlogin/notlogin'
import MugenScroll from 'vue-mugen-scroll'
import { ERR_OK } from 'api/config'
import { getUserLevel } from 'api/user'
import { getV1PointGoods, getV2PointGoods } from 'api/shopping'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      bg: './static/exchangeImg/bg.png',
      show: true,
      notShow: false,
      showLevel: true,
      showover: true,
      Levelnum: {},
      pn: 1,
      pg: 4,
      items: [],
      loading: false,
      type: 1
    }
  },
  created() {
    if (this.UserID) {
      this._getUserLevel(this.UserID)
    } else {
      this.showLevel = false
    }
    this._getV1PointGoods(this.pn, this.pg)
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  components: {
    NotLogged,
    MugenScroll
  },
  methods: {
    _getUserLevel(id) {
      getUserLevel(id).then((res) => {
        if (res.code === ERR_OK) {
          // console.log('会员积分=============')
          // console.log(res.data)
          this.showLevel = true
          this.Levelnum = res.data
        }
      })
    },
    _getV1PointGoods(pn, pg) {
      getV1PointGoods(pn, pg).then((res) => {
        if (res.code === ERR_OK) {
          // console.log('获取V1积分列表==================')
          // console.log(res.data)
          let vm = this
          if (res.data.length === 0) {
            this.showover = false
          } else {
            res.data.forEach(function (value, index, array) {
              vm.items.push(value)
            })
            this.loading = false
          }
        }
      })
    },
    _getV2PointGoods(pn, pg) {
      getV2PointGoods(pn, pg).then((res) => {
        if (res.code === ERR_OK) {
          // console.log('获取V2积分列表==================')
          // console.log(res.data)
          let vm = this
          if (res.data.length === 0) {
            this.showover = false
          } else {
            res.data.forEach(function (value, index, array) {
              vm.items.push(value)
            })
            this.loading = false
          }
        }
      })
    },
    gologin() {
      this.$router.push({
        path: '/Login'
      })
    },
    fetchData() {
      this.loading = true
      this.pn++
      if (this.show) {
        this._getV1PointGoods(this.pn, this.pg)
      } else {
        this._getV2PointGoods(this.pn, this.pg)
      }
    },
    notShowbox() {
      if (!this.UserID) {
        this.$router.push({
          path: '/Login'
        })
      }
    },
    tabOne() {
      this.showover = true
      this.show = true
      this.pn = 1
      this.items = []
      this.type = 1
      this._getV1PointGoods(this.pn, this.pg)
    },
    tabTwo() {
      if (this.Levelnum.level === 1) {
        alert('您现在还没达到购买资格')
      }
      this.showover = true
      this.show = false
      this.pn = 1
      this.items = []
      this.type = 2
      this._getV2PointGoods(this.pn, this.pg)
    },
    goDetalis(id, type, level) {
      this.notShowbox()
      // console.log(type)
      if (this.UserID) {
        this.$router.push({
          path: `/ExchangeDetalis/${id}/${type}/${level}`
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
.exchange-bg {
  width: 100%;
  height: 400px;
  position: relative;
}
.exchange-title {
  width: 130px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 22px;
  color: #59c2fa;
}
.exchange-num {
  width: 177px;
  height: 122px;
  text-align: center;
  line-height: 122px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 80px;
  color: #59c2fa;
}
.exchange-btn {
  width: 130px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 26px;
  color: #fff;
  background: #59c2fa;
  border-radius: 10px;
}
.lvavel {
  width: 80px;
  height: 30px;
  line-height: 35px;
  text-align: center;
  border: 1px solid #ed6969;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 18px;
  color: #ed6969;
}
.purchase-nav {
  width: 100%;
  height: 83px;
  padding: 0 130px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdc;
}
.purchase-nav span {
  display: block;
  height: 83px;
  line-height: 83px;
  width: 150px;
  text-align: center;
  font-size: 28px;
  color: #4a4a4a;
}
.purchase-nav span.active {
  color: #59c2fa;
  border-bottom: 4px solid #59c2fa;
  box-sizing: border-box;
}
.exchangelist {
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.exchangelist > .item {
  width: 325px;
  height: 450px;
  margin-bottom: 20px;
  border: 1px solid #dcdcdc;
}
.exchangelist-img {
  height: 350px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title p {
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  color: #4a4a4a;
  padding-left: 20px;
}
.item-jiage {
  padding-left: 20px;
}
.item-title > .item-jiage > .new {
  font-size: 24px;
  color: #ed6969;
}
.item-title > .item-jiage > .old {
  font-size: 18px;
  color: #9b9b9b;
  letter-spacing: 0.97px;
  position: relative;
}
.item-jiage .old::before {
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
.bottom {
  text-align: center;
  height: 40px;
  line-height: 40px;
}
</style>
