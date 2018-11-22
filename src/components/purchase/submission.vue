<template>
  <div class="submission">
    <div class="submission-list">
      <div class="submission-title">
        <div class="submission-img">
          <img :src="shoping.pictureUrl" alt="">
        </div>
        <div class="submission-name">
          <div class="submission-time">
            <p>{{shoping.name}}</p>
            <p>{{shoping.termOfValidity}} |
              <span v-if="shoping.isBespeak === 1">需预约</span>
              <span v-else>不需预约</span>
            </p>
          </div>
          <div class="new">
            ¥{{shoping.newPrice | formatFee}}
          </div>
        </div>
      </div>
      <div class="line">
      </div>
      <div class="num">
        <div class="num-title">
          数量：
        </div>
        <div class="num-add">
          <img :src="subIcon" alt="" @click="subclick">
          <span>{{num}}</span>
          <img :src="addIcon" alt="" @click="addclick">
        </div>
      </div>
      <div class="line">
      </div>
      <div class="num">
        <div class="num-title">
          小计：
        </div>
        <div class="num-jiage">
          {{sum | formatFee}}
        </div>
      </div>
      <div class="line">
      </div>
      <div class="num" @click='showboxtrue'>
        <div class="num-title">
          优惠券：
        </div>
        <div class="num-jiage">
          {{numquan}}
        </div>
      </div>
    </div>
    <div class="submission-iph">
      <div class="iph-title">
        手机号:
      </div>
      <div class="iph-jiage">
        {{shoping.mobile}}
      </div>
    </div>
    <div class="submission-btn" @click="sumBtn">
      提交订单
    </div>
    <div class="box" v-if='showbox'>
      <div class="box-item">
        <div class="box-title">
          <span @click='quxiao'>取消</span> 选择优惠券
          <span class="box-true" @click='trueover'>确定</span>
        </div>
        <div class="line"></div>
        <div class="couponlist">
          <div class="couponitem" v-for="(item, index) in items" :key="index" @click="activetrue(item, index)" :class="{couponitemactive: index == typeindex }">
            <div class="couponitem-title" :class="{activebg: item.limitPrice > sum }">
              <div class="couponitem-new">
                <span>{{item.price/100}}</span>元
              </div>
              <div class="couponitem-name">
                <p>{{item.name}}</p>
                <p> {{item.startTime | formatDate}} - {{item.endTime | formatDate}}</p>
              </div>
            </div>
            <div class="couponitem-footer">
              {{item.title}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsOrderDetail, changeAddressById } from 'api/shopping'
import { getAllCoupon, createWechatPayOrder } from 'api/user'
import { ERR_OK } from 'api/config'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      num: 1,
      sum: 1,
      typeindex: null,
      numquan: '暂无可用',
      img: './static/showImg/submission.png',
      addIcon: './static/icon/add-icon.png',
      subIcon: './static/icon/sub-icon.png',
      imgRight: './static/icon/ic_back.png',
      shoping: {
        goodsId: '',
        mobile: '',
        num: 1,
        total: 1,
        userId: '',
        couponId: ''
      },
      items: [],
      showbox: false
    }
  },
  created() {
    this._getGoodsOrderDetail()
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getGoodsOrderDetail() {
      console.log(this.UserID, this.$route.params.id)
      getGoodsOrderDetail(this.UserID, this.$route.params.id).then((res) => {
        if (res.code === ERR_OK) {
          console.log(`提交订单=====`)
          console.log(res.data)
          this.shoping = res.data
          this.shoping.num = 1
          this.shoping.total = this.shoping.num * this.shoping.newPrice
          this.sum = this.shoping.newPrice
          this._getAllCoupon()
        }
      })
    },
    _getAllCoupon() {
      getAllCoupon(this.UserID, 1, this.shoping.type).then((res) => {
        if (res.code === ERR_OK) {
          console.log('查询')
          console.log(res.data)
          if (res.data.length > 0) {
            this.numquan = res.data.length + '个优惠券'
            this.items = res.data
          }
        }
      })
    },
    _changeAddressById() {
      this.shoping.userId = this.UserID
      changeAddressById(this.shoping).then((res) => {
        if (res.code === ERR_OK) {
          createWechatPayOrder(window.location.href.split('#')[0], this.UserID, res.data).then(res => {
            if (res.code === ERR_OK) {
              var self = this
              console.log(res)
              wx.config({
                debug: false, 
                appId: res.data.appId,
                timestamp: res.data.timeStamp,
                nonceStr: res.data.nonceStr,
                signature: res.data.signature,
                jsApiList: ['chooseWXPay'],
              })
              wx.ready(function () {
                wx.chooseWXPay({
                  appId: res.data.appId,
                  timestamp: res.data.timeStamp, 
                  nonceStr: res.data.nonceStr, 
                  package: res.data.package,
                  signType: 'MD5', 
                  paySign: res.data.paySign,
                  success: function (res) {
                    if (res.errMsg == "chooseWXPay:ok") {
                      self.$router.push({
                        path: '/MyTransfer'
                      })
                    }
                  },
                  cancel: function (res) {
                    self.$router.push({
                      path: '/My/MyOrder'
                    })
                  },
                  fail: function (res) {
                    self.$router.push({
                      path: '/My/MyOrder'
                    })
                  }
                });
              })
            }
          })
        }
      })
    },
    showboxtrue() {
      this.showbox = true
      this.shoping.couponId = ''
      this.numquan = this.items.length + '个优惠券'
      this.shoping.total = this.shoping.newPrice * this.shoping.num
      this.num = this.shoping.num
      this.sum = this.shoping.total
    },
    quxiao() {
      this.showbox = false
      this.shoping.couponId = ''
      this.numquan = this.items.length + '个优惠券'
      this.shoping.total = this.shoping.newPrice * this.shoping.num
      this.num = this.shoping.num
      this.sum = this.shoping.total
    },
    sumBtn() {
      this._changeAddressById()
    },
    trueover() {
      this.showbox = false
    },
    subclick() {
      if (this.shoping.num === 1) {
        return
      }
      this.shoping.num = this.shoping.num - 1
      this.shoping.total = this.shoping.newPrice * this.shoping.num
      this.num = this.shoping.num
      this.sum = this.shoping.total
      this.shoping.couponId = ''
      this.numquan = this.items.length + '个优惠券'
      this.shoping.total = this.shoping.newPrice * this.shoping.num
      this.num = this.shoping.num
      this.sum = this.shoping.total
    },
    addclick() {
      this.shoping.num = this.shoping.num + 1
      this.shoping.total = this.shoping.newPrice * this.shoping.num
      this.num = this.shoping.num
      this.sum = this.shoping.total
      this.shoping.couponId = ''
      this.numquan = this.items.length + '个优惠券'
      this.shoping.total = this.shoping.newPrice * this.shoping.num
      this.num = this.shoping.num
      this.sum = this.shoping.total
    },
    activetrue(item, index) {
      console.log(item.limitPrice <= this.sum)
      if (this.typeindex === null) {
        if (item.saleType === 1) {
          if (item.limitPrice <= this.sum) {
            this.typeindex = index
            this.shoping.couponId = item.id
            this.numquan = item.name
            this.shoping.total = this.shoping.total - item.price
            this.sum = this.shoping.total
          }
        } else {
          if (item.limitPrice <= this.sum) {
            this.typeindex = index
            this.shoping.couponId = item.id
            this.numquan = item.name
            this.shoping.total = this.shoping.total - item.limitPrice
            this.sum = this.shoping.total
          }
        }
      } else {
        this.shoping.couponId = ''
        this.num = this.shoping.num
        this.shoping.total = this.shoping.newPrice * this.shoping.num
        this.sum = this.shoping.total
        console.log(this.num)
        console.log(this.sum)
        if (item.saleType === 1) {
          if (item.limitPrice <= this.sum) {
            this.typeindex = index
            this.shoping.couponId = item.id
            this.numquan = item.name
            this.shoping.total = this.shoping.total - item.price
            this.sum = this.shoping.total
          }
        } else {
          if (item.limitPrice <= this.sum) {
            this.typeindex = index
            this.shoping.couponId = item.id
            this.numquan = item.name
            this.shoping.total = this.shoping.total - item.limitPrice
            this.sum = this.shoping.total
          }
        }
      }
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
}
.line {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
}
.submission {
  width: 100vw;
  height: calc(100vh - 100px);
  background: #f2f2f2;
  overflow: hidden;
}
.submission-list {
  margin: 38px 0 20px;
  padding: 20px 30px 0;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
}
.submission-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background: #59c2fa;
  text-align: center;
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 1.45px;
}
.submission-img {
  width: 130px;
  height: 130px;
}
.submission-name {
  width: 540px;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.submission-name > .new {
  height: 45px;
  line-height: 45px;
  font-size: 24px;
  color: #9b9b9b;
  letter-spacing: 1.45px;
}
.submission-title {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.submission-time p:nth-child(1) {
  font-size: 24px;
  height: 45px;
  line-height: 45px;
  color: #4a4a4a;
}
.submission-time p:nth-child(2) {
  font-size: 24px;
  color: #59c2fa;
  letter-spacing: 1.45px;
}
.num-title {
  font-size: 24px;
  color: #4a4a4a;
}
.num {
  height: 73px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.num-add {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.num-jiage {
  font-size: 24px;
  color: #ed6969;
}
.num-add img {
  width: 30px;
  height: 30px;
}
.num-add span {
  padding: 5px 40px;
  background: #f2f2f2;
  margin: 0 10px;
}
.submission-iph {
  height: 73px;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.iph-title {
  color: #4a4a4a;
  font-size: 24px;
}
.iph-jiage img {
  width: 10px;
  height: 19px;
  transform: rotate(180deg);
  margin-left: 10px;
}
.box {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(000, 000, 000, 0.5);
}
.box-item {
  width: 100%;
  height: 70%;
  background: #fff;
  position: absolute;
  bottom: 0;
}
.box-title {
  width: 90%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
}
.box-title span {
  display: block;
  width: 100px;
  height: 40px;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  border: 2px solid #59c2fa;
  color: #59c2fa;
  border-radius: 10px;
}
.box-title span.box-true {
  background: #59c2fa;
  color: #fff;
}
.couponlist {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}
.couponitem {
  width: 690px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 22px;
  overflow: hidden;
  border: 1px solid #ddd;
}
.couponitemactive {
  box-shadow: 0 0 10px 10px #fff5f5;
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
  /* margin: 30px 50px; */
  font-size: 24px;
  color: #ffffff;
}
.couponitem-new span {
  font-size: 70px;
}
.couponitem-name {
  width: 400px;
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
  margin-top: 63px;
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
