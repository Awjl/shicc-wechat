<template>
  <div class="order">
    <div class="order-nav">
      <div class="nav-item " :class="{active: index == 0}" @click="notused">
        全部
      </div>
      <div class="nav-item" :class="{active: index == 1}" @click="alreadyused">
        未使用
      </div>
      <div class="nav-item" :class="{active: index == 2}" @click="over">
        已使用
      </div>
      <div class="nav-item" :class="{active: index == 3}" @click="transfer">
        已转赠
      </div>
    </div>
    <div class="orderList">
      <div class="list" v-for="(item, index) in dataList" :key="index">
        <div class="orderitem">
          <div class="orderitem-id">
            <div class="idnum" v-if="item.orderCode">
              订单号：{{item.orderCode}}
            </div>
            <div class="idnum" v-else>
              订单号：无
            </div>
            <div class="state">
              <span v-if="item.state == 1">未使用</span>
              <span v-if="item.state == 2">已使用</span>
              <span v-if="item.state == 3">已转赠</span>
            </div>
          </div>
          <div class="line">
          </div>
          <div class="orderitem-conter">
            <div class="orderitem-img">
              <img :src="item.pictureUrl" alt="">
            </div>
            <div class="orderitem-name">
              <div class="name">
                {{item.name}}
              </div>
              <div class="new">
                ￥{{item.newPrice}}
              </div>
              <div class="num">
                x 1
              </div>
              <div class="sum">
                总计：￥{{item.newPrice}}
              </div>
            </div>
          </div>
          <div class="line">
          </div>
          <div class="orderitembtn">
            <div v-if="item.deliverer || item.consignee">
              <p v-if="item.deliverer && item.consignee == null">来自{{item.deliverer}}转赠</p>
              <p v-if="item.consignee">已转赠给：{{item.consignee}}</p>
            </div>
            <div v-else></div>
            <div class="btn-btn">
              <span class="over-btn" v-if="item.state == 1" @click="showgi(item.goodsId)">转赠</span>
              <span class="true-btn" v-if="item.state == 1" @click="show(item.orderCode)">立即使用</span>
              <span class="over-btn" v-if="item.state == 2">再来一单</span>
            </div>
          </div>
        </div>
        <div class="line5">

        </div>
      </div>
    </div>
    <div class="wishNone" v-if="dataList.length == 0">
      - 暂无代金券信息 -
    </div>
    <div class="OverBox" v-if="showTrue">
      <div class="Box-one">
        <div class="box-title">
          卡券兑换码
        </div>
        <div class="boxTwotitle">
          券码：{{useCode.couponCode}}
        </div>
        <div class="box-erwei">
          <img :src="useCode.qrCode" alt="">
        </div>
        <div class="box-name">
          有效期：
        </div>
        <div class="box-text">
          {{useCode.termOfValidity}}
        </div>
        <div class="box-name">
          使用时间：
        </div>
        <div class="box-text">
          {{useCode.useTime}}
        </div>
        <div class="box-name">
          使用规则：
        </div>
        <div class="box-text">
        <p v-for="(item, index) in useCode.useRule" :key="index">{{item}} </p>
        </div>
      </div>
      <div class="OverBox-img" @click="hide">
        <img :src="overImg" alt="">
      </div>
    </div>
    <div class="giveUser" v-if="showgive">
      <div class="giveUser-box">
        <div class="giveUser-title">转赠</div>
        <div class="giveUser-inp" v-if='!time'>
          <label>手机号：</label><input type="text" placeholder="请输入手机号" v-model="giveUser.mobile">
        </div>
        <div class="giver-time" v-else>
          {{time}}
        </div>
        <div class="give-btn">
          <span @click="givequxiao">取消</span>
          <span class="give-true" @click="givetrue" v-if='!time'>确定</span>
          <span class="give-true" @click="giveargin" v-else>重新输入</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getALLVoucher, givenToOne, checkMobile, getQRcode } from 'api/user'
import { ERR_OK } from 'api/config'

export default {
  data() {
    return {
      index: 0,
      TrueImg: './static/icon/true-iocn.png',
      overImg: './static/icon/done.png',
      showTrue: false,
      showgive: false,
      useCode: {
        couponCode: '',
        qrCode: '',
        termOfValidity: '',
        useRule: '',
        useTime: ''
      },
      dataList: [],
      giveUser: {
        mobile: '',
        deliverer: '',
        couponId: ''
      },
      time: ''
    }
  },
  created() {
    this._getALLVoucher()
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getALLVoucher() {
      getALLVoucher(this.UserID, this.index).then((res) => {
        if (res.code === ERR_OK) {
          console.log('这是代金券列表=============================')
          console.log(res.data)
          this.dataList = res.data
        }
      })
    },
    _getQRcode(goodsID) {
      getQRcode(goodsID, this.UserID).then((res) => {
        if (res.code === ERR_OK) {
          this.showTrue = true
          console.log(res.data)
          this.useCode = res.data
          this.useCode.useRule = this.useCode.useRule.split(',')
        }
      })
    },
    _givenToOne() {
      givenToOne(this.giveUser).then((res) => {
        if (res.code === ERR_OK) {
          console.log('转赠===================')
          this.showgive = false
          alert('转赠成功')
          this._getALLVoucher()
        }
      })
    },
    _checkMobile() {
      checkMobile(this.giveUser.mobile).then((res) => {
        if (res.code === ERR_OK) {
          console.log('查询结果===================')
          console.log(res.data)
          if (res.data.code === 200) {
            this._givenToOne()
          } else {
            this.time = res.data.msg
          }
        }
      })
    },
    notused() {
      this.index = 0
      this.dataList = []
      this._getALLVoucher()
    },
    alreadyused() {
      this.index = 1
      this.dataList = []
      this._getALLVoucher()
    },
    over() {
      this.index = 2
      this.dataList = []
      this._getALLVoucher()
    },
    transfer() {
      this.index = 3
      this.dataList = []
      this._getALLVoucher()
    },
    hide() {
      this.showTrue = false
      this._getALLVoucher()
    },
    show(id) {
      console.log(id)
      this._getQRcode(id)
    },
    showgi(id) {
      this.giveUser.deliverer = this.UserID
      this.giveUser.couponId = id
      this.showgive = true
    },
    givetrue() {
      this.time = '请稍后'
      this._checkMobile()
    },
    giveargin() {
      this.time = ''
    },
    givequxiao() {
      this.showgive = false
    }
  }
}
</script>

<style>
img {
  width: 100%;
}
.wishNone {
  width: 100%;
  text-align: center;
  margin: 100px 0;
  color: #ddd;
}
.line {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
}
.line5 {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
}
.order-nav {
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
.orderList {
  padding-top: 88px;
}
.active {
  border-bottom: 4px solid #59c2fa;
  color: #59c2fa;
  box-sizing: border-box;
}
.list {
  width: 100%;
  height: 372px;
  box-sizing: border-box;
}
.orderitem {
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
}
.orderitem-id {
  display: flex;
  height: 73px;
  line-height: 73px;
  justify-content: space-between;
}
.orderitem-id .idnum {
  font-size: 24px;
  color: #4a4a4a;
}
.orderitem-id .state {
  font-size: 24px;
  color: #9b9b9b;
}
.orderitem-conter {
  width: 100%;
  height: 192px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.orderitem-img {
  width: 150px;
  height: 150px;
}
.orderitem-name {
  width: 500px;
  line-height: 36px;
}
.orderitem-name .name {
  font-size: 24px;
  color: #161616;
}
.orderitem-name > .new,
.orderitem-name > .num,
.orderitem-name > .sum {
  width: 100%;
  text-align: right;
  font-size: 24px;
  color: #9b9b9b;
}
.orderitem > .orderitembtn {
  width: 100%;
  height: 103px;
  display: flex;
  /* flex-direction: row-reverse; */
  justify-content: space-between;
  align-items: center;
}
.btn-btn {
  display: flex;
}
.orderitembtn span {
  display: block;
  width: 180px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 5px;
  font-size: 24px;
  margin-left: 20px;
}
.orderitembtn span.true-btn {
  background: #59c2fa;
  color: #ffffff;
}
.over-btn {
  border: 2px solid #59c2fa;
  color: #59c2fa;
}
.OverBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(000, 000, 000, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Box-one {
  width: 580px;
  height: 800px;
  background: #fff;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: auto;
}
.box-title {
  margin-top: 30px;
  font-size: 28px;
  color: #161616;
  height: 35px;
  line-height: 35px;
}
.boxTwotitle {
  margin-top: 20px;
  font-size: 22px;
  color: #161616;
  height: 35px;
  line-height: 35px;
}
.box-erwei {
  width: 200px;
  height: 200px;
  background: #d8d8d8;
  margin: 17px 0;
}
.box-name,
.box-text {
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  line-height: 35px;
  font-size: 24px;
  color: #9b9b9b;
}
.box-name {
  color: #4a4a4a;
}
.OverBox-img {
  margin-top: 74px;
  width: 60px;
  height: 60px;
}
.giveUser {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(000, 000, 000, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.giveUser-box {
  width: 580px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.giveUser-title {
  height: 80px;
  width: 100%;
  text-align: center;
  line-height: 80px;
  font-size: 30px;
  border-bottom: 1px solid #ddd;
}
.giveUser-inp {
  width: 70%;
  height: 50px;
  line-height: 50px;
  margin: 80px auto;
}
.giver-time {
  width: 70%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  margin: 80px auto;
}
.giveUser-inp input {
  height: 60px;
  border-bottom: 1px solid #ddd;
  outline: none;
}
.give-btn {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.give-btn > span {
  display: block;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 5px;
  font-size: 24px;
  border: 2px solid #59c2fa;
  color: #59c2fa;
}
.give-btn > span.give-true {
  background: #59c2fa;
  color: #ffffff;
}
</style>
