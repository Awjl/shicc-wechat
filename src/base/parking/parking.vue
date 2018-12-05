<template>
  <div class="packing">
    <div class="bg">
      <img
        src="./pack.png"
        alt=""
      >
      <div class="bg-text">
        <input
          type="text"
          placeholder="请输入车牌号"
          v-model="carList.number"
          disabled="disabled"
        >
        <div class="packingtext">
          上海国际会议中心停车场
        </div>
      </div>
    </div>
    <div class="packinglist">
      <div class="packinglistitem">
        <span>入场时间：</span>
        <span v-if="carList.state === 1">0</span>
        <span v-else>{{carList.inTime}}</span>
      </div>
      <div class="packinglistitem">
        <span>停车时长：</span>
        <span v-if="carList.state === 1">0</span>
        <span v-else>{{carList.duration | timefliters}}</span>
      </div>
      <div class="packinglistitem">
        <span>支付金额：</span>
        <span class="redcolor" v-if="carList.state === 1">0</span>
        <span class="redcolor" v-else>￥{{carList.totalFee/100}}</span>
      </div>
      <div class="he20"></div>
      <div class="packingline"></div>
      <div class="he20"></div>
      <div
        class="packinglistitem"
        @click="showBoxStata"
      >
        <span>抵用券：</span>
        <span>{{numquan}}</span>
      </div>
      <div class="he20"></div>
      <div class="packingline"></div>
      <div class="he20"></div>
      <div class="he20"></div>
      <div class="sumpacking">
        <div>小计<span class="redcolor redsum">￥{{carList.due/100}}</span></div>
      </div>
    </div>
    <div class="packing-btn" v-if="carList.state === 1">
      暂无订单
    </div>
    <div class="packing-btn" @click="goPayPacking" v-else>
      立即支付
    </div>
    <div
      class="packingBox"
      v-if="showPacking"
    >
      <div class="packingBoxBind">
        <div class="packingBoxBindTitle">绑定车牌号</div>
        <div class="packingBoxBindInp">
          <input
            type="text"
            placeholder="请输入车牌号"
            v-model="carList.number"
          >
        </div>
        <div
          class="packingBoxBindBtn"
          @click="_bindPlateNumber"
        >
          绑定
        </div>
      </div>
    </div>
    <div
      class="box"
      v-if='showbox'
    >
      <div class="box-item">
        <div class="box-title">
          <span @click='quxiao'>取消</span> 选择优惠券
          <span
            class="box-true"
            @click='trueover'
          >确定</span>
        </div>
        <div class="line"></div>
        <div class="couponlist">
          <div
            class="couponitem"
            v-for="(item, index) in items"
            :key="index"
            @click="activetrue(item.id, index, item.name)"
            :class="{couponitemactive: index == typeindex }"
          >
            <div class="couponitem-title">
              <div
                class="couponitem-new"
                v-if="item.type === 2"
              >
                <span>P</span>停车券
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
import { getAllCoupon } from 'api/user'
import { parkLogin, bindPlateNumber, queryParkingCost, payCost } from 'api/login'
export default {
  data() {
    return {
      showPacking: false,
      showbox: false,
      items: [],
      typeindex: null,
      numquan: "暂无优惠券",
      youhuiId: '',
      carList: {
        billId: null,
        billState: null,
        couponId: null,
        createDate: null,
        due: null,
        duration: 0,
        id: null, // 用户Id
        inTime: 0,
        number: null, // 车牌号
        outTime: null,
        paid: null,
        parkCode: null,
        parkName: null,
        state: null,
        totalFee: 0,
        unpaid: null,
        userId: null
      }
    }
  },
  created() {
    this._parkLogin()
  },
  methods: {
    activetrue(item, index, name) {
      this.typeindex = index
      this.youhuiId = item
      this.numquan = name
    },
    showBoxStata() {
      this.showbox = true
    },
    quxiao() {
      this.showbox = false
      this.youhuiId = ''
      this.numquan = ''
      this._queryParkingCost(this.youhuiId)
    },
    trueover() {
      this._queryParkingCost(this.youhuiId)
    },
    goPayPacking() {
      payCost(this.carList.userId).then(res => {
        if (res.code === 0) {
          window.location.href = res.data
        }
      })
    },
    _queryParkingCost(yuoID) {
      queryParkingCost(this.carList.userId, this.carList.number, yuoID).then(res => {
        if (res.code === 0) {
          // console.log('费用查询=================================================================')
          // console.log(res.data)
          this.showbox = false
          this.carList = res.data
        }
      })
    },
    _getAllCoupon(id) {
      getAllCoupon(id, 1, 2).then((res) => {
        if (res.code === 0) {
          // console.log('查询停车券-----------------------------------------------------------------')
          // console.log(res.data)
          if (res.data.length > 0) {
            this.numquan = res.data.length + '个优惠券'
            this.items = res.data
          }
        }
      })
    },
    _parkLogin() {
      parkLogin(window.location.href.split('=')[1]).then(res => {
        if (res.code === 0) {
          // console.log("停车----------------------------------")
          // console.log(res.data)
          if (res.data.code === 500107) {
            this.$router.push({
              path: '/Register/packing'
            })
          }
          if (res.data.code === 201) {
            this.showPacking = true
            this.carList = res.data.msg
          }
          if (res.data.code === 202) {
            this.carList = res.data.msg
            this._getAllCoupon(this.carList.userId)
          }
        }
      })
    },
    _bindPlateNumber() {
      // console.log()
      bindPlateNumber(this.carList.userId, this.carList.number).then(res => {
        if (res.code === 0) {
          this.showPacking = false
          this._parkLogin()
        }
      })
    }
  }
}
</script>

<style>
.he20 {
  height: 20px;
}
img {
  width: 100%;
}
.packingBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(000, 000, 000, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.packingBoxBind {
  width: 400px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
}
.packingBoxBindTitle {
  font-size: 30px;
  margin-bottom: 30px;
}
.packingBoxBindInp input {
  width: 200px;
  height: 50px;
  outline: none;
  text-align: center;
  border-bottom: 2px solid #dcdcdc;
  margin-bottom: 30px;
}
.packingBoxBindBtn {
  width: 140px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  background: #59c2fa;
  border-radius: 10px;
}
.packing {
  padding: 20px;
  box-sizing: border-box;
}
.bg {
  position: relative;
}
.packingtext {
  font-size: 24px;
  color: #ffffff;
  text-align: center;
}
.bg-text {
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  width: 50%;
  margin: 0 auto;
}
.bg-text input {
  background: inherit;
  height: 50px;
  width: 100%;
  outline: none;
  text-align: center;
  color: #fff;
  font-size: 40px;
  margin-bottom: 20px;
}
.bg-text input::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #fff;
  font-weight: bold;
}
.packinglist {
  width: 100%;
  height: 500px;
  background: #fff;
}
.packinglistitem {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.packinglistitem > span {
  display: block;
  font-size: 24px;
  color: #4a4a4a;
}
.packingline {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
}
.sumpacking {
  display: flex;
  justify-content: flex-end;
  font-size: 24px;
  color: #4a4a4a;
}
span.redcolor {
  color: #ed6969;
}
span.redsum {
  font-size: 40px;
}
.packing-btn {
  width: 500px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  background: #59c2fa;
  color: #fff;
  font-size: 40px;
  border-radius: 100px;
  margin: 50px auto 0;
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
  height: 800px;
  background: #fff;
  position: absolute;
  bottom: 0;
}
.box-title {
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
}
.line {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
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
  height: 718px;
  overflow-y: auto;
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
  box-shadow: 0 0 10px 10px #ed6969;
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
