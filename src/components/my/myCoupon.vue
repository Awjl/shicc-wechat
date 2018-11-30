<template>
  <div class="coupon">
    <div class="coupon-nav">
      <div class="nav-item " :class="{active: index == 1}" @click="notused">
        未使用
      </div>
      <div class="nav-item" :class="{active: index == 2}" @click="alreadyused">
        已使用
      </div>
      <div class="nav-item" :class="{active: index == 3}" @click="expired">
        已过期
      </div>
    </div>
    <div class="couponlist">
      <div class="couponitem" v-for="(item, index) in items" :key="index">
        <div class="couponitem-title" :class="{activebg: item.state == 2 || item.state == 3}">
          <div class="couponitem-new" v-if="item.type === 1">
            <span>{{item.price/100}}</span>元
          </div>
          <div class="couponitem-new" v-if="item.type === 2">
            <span>P</span>停车券
          </div>
          <div class="couponitem-name">
            <p>{{item.name}}</p>
            <p> {{item.startTime | formatDate}} - {{item.endTime | formatDate}}</p>
          </div>
          <div class="couponitem-btn" v-if="item.state == 1" @click="goShopping(item.type)">
            立即使用
          </div>
        </div>
        <div class="couponitem-footer">
          {{item.title}}
        </div>
      </div>
    </div>
    <div class="wishNone" v-if="items.length == 0">
      - 暂无优惠券信息 -
    </div>
  </div>
</template>

<script>
import { ERR_OK } from 'api/config'
import { getAllCoupon } from 'api/user'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      index: 1,
      type: 0,
      items: []
    }
  },
  created() {
    this._getAllCoupon()
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getAllCoupon() {
      getAllCoupon(this.UserID, this.index, this.type).then((res) => {
        if (res.code === ERR_OK) {
          // console.log('获取优惠券列表========================')
          // console.log(res.data)
          this.items = res.data
        }
      })
    },
    goShopping(id) {
      if (id === 1) {
        this.$router.push({
          path: `/Purchase`
        })
      } else {
        // this.$router.push({
        //   path: `/parking`
        // })
        window.location.href = 'http://www.shiccs.net/sicc/park/index';
      }
    },
    notused() {
      this.index = 1
      this.items = []
      this._getAllCoupon()
    },
    alreadyused() {
      this.index = 2
      this.items = []
      this._getAllCoupon()
    },
    expired() {
      this.index = 3
      this.items = []
      this._getAllCoupon()
    }
  }
}
</script>

<style>
.coupon {
  padding-top: 82px;
}
.wishNone {
  width: 100%;
  text-align: center;
  margin: 100px 0;
  color: #ddd;
}
.coupon-nav {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 82px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #dcdcdc;
}
.nav-item {
  width: 80px;
  height: 82px;
  line-height: 82px;
  text-align: center;
  font-size: 24px;
  color: #9b9b9b;
}
.active {
  border-bottom: 4px solid #59c2fa;
  color: #59c2fa;
  box-sizing: border-box;
}
.couponlist {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}
.couponitem {
  width: 690px;
  height: 200px;
  box-shadow: 0 0 4px 4px #fff5f5;
  border-radius: 10px;
  margin-bottom: 22px;
  overflow: hidden;
}
.couponitem-title {
  width: 100%;
  height: 150px;
  background: -webkit-linear-gradient(#ff7d7d, #ed6969); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#ff7d7d, #ed6969); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#ff7d7d, #ed6969); /* Firefox 3.6 - 15 */
  background: linear-gradient(#ff7d7d, #ed6969); /* 标准的语法 */
  display: flex;
  align-items: center;
}
.activebg {
  background: #9b9b9b;
}
.couponitem-new {
  width: 189px;
  height: 98px;
  text-align: center;
  line-height: 98px;
  font-size: 24px;
  color: #ffffff;
}
.couponitem-new span {
  font-size: 70px;
}
.couponitem-name {
  width: 250px;
  color: #fff;
  line-height: 35px;
}
.couponitem-name p:nth-child(1) {
  font-size: 24px;
}
.couponitem-name p:nth-child(2) {
  font-size: 18px;
}
.couponitem-btn {
  width: 130px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: #ffffff;
  font-size: 18px;
  color: #ee6a6a;
  border-radius: 100px;
  margin-left: 70px;
}
.couponitem-footer {
  padding-left: 40px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #9b9b9b;
  box-sizing: border-box;
}
</style>
