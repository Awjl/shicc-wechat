<template>
  <div class="order">
    <div class="order-nav">
      <div class="nav-item " :class="{active: index == 1}" @click="notused">
        进行中
      </div>
      <div class="nav-item" :class="{active: index == 2}" @click="alreadyused">
        已完成
      </div>
    </div>
    <div class="orderList">
      <div class="list" v-for="(item, index) in dataList" :key="index">
        <div class="orderitem">
          <div class="orderitem-id">
            <div class="idnum">
              订单号：{{item.code}}
            </div>
            <div class="state">
              <span v-if="item.state == 1">待付款</span>
              <span v-if="item.state == 2">已完成</span>
            </div>
          </div>
          <div class="line">
          </div>
          <div class="orderitem-conter">
            <div class="orderitem-img">
              <img :src="item.url" alt="">
            </div>
            <div class="orderitem-name">
              <div class="name">
                {{item.name}}
              </div>
              <div class="new">
                ￥{{item.newPrice | formatFee}}
              </div>
              <div class="num">
                x {{item.num}}
              </div>
              <div class="sum">
                总计：￥{{item.total | formatFee}}
              </div>
            </div>
          </div>
          <div class="line">
          </div>
          <div class="btn">
            <span class="true-btn" v-if="item.state == 1" @click="sumBtn(item.id)">立即付款</span>
            <span class="over-btn" v-if="item.state == 2" @click="toShopping(item.goodsId)">再来一单</span>
            <span class="del-btn" @click="delorder(item.id, index)" v-if="item.state == 1">取消订单</span>
          </div>
        </div>
        <div class="line5">

        </div>
      </div>
    </div>
    <div class="orderNone" v-if="dataList.length == 0">
      - 暂无订单 -
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getAllGoodsOrder, deleteOrder, createWechatPayOrder } from 'api/user'
import { changeAddressById } from 'api/shopping'
import { ERR_OK } from 'api/config'

export default {
  data() {
    return {
      index: 1,
      TrueImg: './static/icon/true-iocn.png',
      overImg: './static/icon/done.png',
      type: 1,
      showTrue: false,
      dataList: []
    }
  },
  created() {
    this._getAllGoodsOrder()
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getAllGoodsOrder() {
      getAllGoodsOrder(this.UserID, this.type).then((res) => {
        if (res.code === ERR_OK) {
          console.log('这是订单中心=============================')
          console.log(res.data)
          this.dataList = res.data
        }
      })
    },
    _deleteOrder(id) {
      deleteOrder(this.UserID, id).then((res) => {
        if (res.code === ERR_OK) {
          console.log('删除订单=================================')
          alert('删除成功')
        }
      })
    },
    sumBtn(id) {
      this._changeAddressById(id)
    },
    toShopping(id) {
      this.$router.push({
        path: `/PurchaseDetalis/${id}`
      })
    },
    _changeAddressById(id) {
      console.log(id)
      createWechatPayOrder(window.location.href.split('#')[0], this.UserID, id).then(res => {
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
                    path: '/My/MyOrder'
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
    },
    notused() {
      this.index = 1
      this.type = 1
      this.dataList = []
      this._getAllGoodsOrder()
    },
    alreadyused() {
      this.index = 2
      this.type = 2
      this.dataList = []
      this._getAllGoodsOrder()
    },
    delorder(id, index) {
      console.log(id, index)
      this._deleteOrder(id)
      this.dataList.splice(index, 1)
    }
  }
}
</script>

<style>
img {
  width: 100%;
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
.orderNone {
  width: 100%;
  text-align: center;
  color: #ddd;
  margin: 100px 0;
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
.btn {
  width: 100%;
  height: 103px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.btn span {
  display: block;
  width: 180px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 5px;
  font-size: 24px;
}
.btn span.true-btn {
  background: #59c2fa;
  color: #ffffff;
}
.btn span.del-btn {
  background: #ff4949;
  color: #ffffff;
  margin-right: 10px;
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
}
.box-title {
  margin-top: 50px;
  font-size: 24px;
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
</style>
