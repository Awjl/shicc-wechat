<template>
  <div class="order">
    <div class="order-nav">
      <div class="nav-item " :class="{active: index == 1}" @click="notused">
        未使用
      </div>
      <div class="nav-item" :class="{active: index == 2}" @click="alreadyused">
        已使用
      </div>
    </div>
    <div class="orderList">
      <div class="list" v-for="(item, index) in dataList" :key="index">
        <div class="orderitem">
          <div class="orderitem-id">
            <div class="idnum">
              订单号：{{item.id}}
            </div>
            <div class="state">
              <span v-if="item.state == 1">待付款</span>
              <span v-if="item.state == 2">待使用</span>
              <span v-if="item.state == 3">已完成</span>
            </div>
          </div>
          <div class="line">
          </div>
          <div class="orderitem-conter">
            <div class="orderitem-img">
              <img :src="item.img" alt="">
            </div>
            <div class="orderitem-name">
              <div class="name">
                {{item.name}}
              </div>
              <div class="new">
                ￥{{item.new}}
              </div>
              <div class="num">
                x {{item.num}}
              </div>
              <div class="sum">
                总计：￥{{item.sum}}
              </div>
            </div>
          </div>
          <div class="line">
          </div>
          <div class="btn">
            <span class="true-btn" v-if="item.state == 1">立即付款</span>
            <span class="over-btn" v-if="item.state == 2" @click="show">立即使用</span>
            <span class="over-btn" v-if="item.state == 3">再来一单</span>
          </div>
        </div>
        <div class="line5">

        </div>
      </div>
    </div>
    <div class="OverBox" v-if="showTrue">
      <div class="Box-one">
        <div class="box-title">
          卡券兑换码
        </div>
        <div class="box-erwei">

        </div>
        <div class="box-name">
          有效期：
        </div>
        <div class="box-text">
          2018.07.01至2019.07.01 （周末、法定节假日通用）
        </div>
        <div class="box-name">
          使用时间：
        </div>
        <div class="box-text">
          10:00-22:00
        </div>
        <div class="box-name">
          使用规则：
        </div>
        <div class="box-text">
          <p>*需要提前预约</p>
          <p>*不可叠加使用</p>
          <p>不兑现、不找零</p>
          <p>*提供免费Wifi</p>
          <p>停车位收费标准：详情到店或者电话咨询</p>
        </div>
      </div>
      <div class="OverBox-img" @click="hide">
        <img :src="overImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 1,
      TrueImg: './static/icon/true-iocn.png',
      overImg: './static/icon/done.png',
      showTrue: false,
      dataList: [{ id: 20180606123, state: 1, img: './static/myimg/shop.png', name: '舒适商务套间', new: 693, num: 2, sum: 1286 }, { id: 20180606123, state: 2, img: './static/myimg/shop.png', name: '舒适商务套间', new: 693, num: 2, sum: 1286 }]
    }
  },
  methods: {
    notused () {
      this.index = 1
      this.dataList = [{ id: 20180606123, state: 1, img: './static/myimg/shop.png', name: '舒适商务套间', new: 693, num: 2, sum: 1286 }, { id: 20180606123, state: 2, img: './static/myimg/shop.png', name: '舒适商务套间', new: 693, num: 2, sum: 1286 }]
    },
    alreadyused () {
      this.index = 2
      this.dataList = [{ id: 20180606123, state: 3, img: './static/myimg/shop.png', name: '舒适商务套间', new: 693, num: 2, sum: 1286 }, { id: 20180606123, state: 3, img: './static/myimg/shop.png', name: '舒适商务套间', new: 693, num: 2, sum: 1286 }]
    },
    hide () {
      this.showTrue = false
    },
    show () {
      this.showTrue = true
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
  height: 5px;
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
.orderitem-name .new,
.orderitem-name .num,
.orderitem-name .sum {
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
  background: #D8D8D8;
  margin: 17px 0;
}
.box-name,.box-text{
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  line-height: 35px;
  font-size: 24px;
  color: #9B9B9B;
}
.box-name{
  color: #4A4A4A;
}
.OverBox-img {
  margin-top: 74px;
  width: 60px;
  height: 60px;
}
</style>
