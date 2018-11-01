<template>
  <div class="QRover">
    <div class="QRover-box">
      <div class="QRover-tile">核销代金券</div>
      <div class="QRitem">
        <span>订&nbsp;&nbsp;&nbsp;单&nbsp;&nbsp;&nbsp;&nbsp;号：</span>{{obj.orderCode}}
      </div>
      <div class="QRitem">
        <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</span>{{obj.name}}
      </div>
      <div class="QRitem">
        <span>券&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span>{{obj.couponCode}}
      </div>
      <div class="QRitem">
        <span>用户手机号：</span>{{obj.mobile}}
      </div>
      <div class="QRitem">
        <span>原&nbsp;&nbsp;&nbsp;价&nbsp;&nbsp;&nbsp;&nbsp;格：</span>{{obj.oldPrice}}
      </div>
      <div class="QRitem">
        <span>现&nbsp;&nbsp;&nbsp;价&nbsp;&nbsp;&nbsp;&nbsp;格：</span>{{obj.newPrice}}
      </div>
      <div class="QRitem">
        <span>有&nbsp;&nbsp;&nbsp;效&nbsp;&nbsp;&nbsp;&nbsp;期：</span>{{obj.termOfValidity}}
      </div>
      <div class="QRitem">
        <span>规&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;则：</span>{{obj.useRule}}
      </div>
      <div class="QRitem">
        <span>使&nbsp;用&nbsp;&nbsp;时&nbsp;间：</span>{{obj.useTime}}
      </div>
      <div class="QRbtn">
        <div class="true">
          确认
        </div>
        <div>
          取消
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getVoucherInfo } from 'api/shopping'
export default {
  data() {
    return {
      obj: {
        couponCode: '',
        id: '',
        mobile: "",
        name: "",
        newPrice: '',
        oldPrice: '',
        orderCode: '',
        state: '',
        termOfValidity: "",
        useRule: "",
        useTime: "",
      }
    }
  },
  created() {
    this._getQRcode()
  },
  methods: {
    _getQRcode() {
      getVoucherInfo(this.$route.params.id).then(res => {
        console.log(res)
        this.obj = res.data
      })
    }
  }
}
</script>

<style>
.QRover {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: url(./static/loginimg/bg.png) no-repeat;
  background-size: 100% 100%;
}
.QRover-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
}
.QRover-tile {
  width: 100%;
  text-align: center;
  font-size: 40px;
  color: #59c2fa;
  font-weight: bold;
  margin: 100px 0;
}
.QRitem {
  display: flex;
  margin: 20px 0;
  font-size: 30px;
  /* justify-content: center; */
  align-items: center;
}
.QRitem span {
  display: block;
  width: 30%;
  font-size: 26px;
}
.QRbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.QRbtn>div{
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 26px;
  border: 1px solid #ddd;
  margin: 0 20px;
  border-radius: 10px;
}
.QRbtn>div.true{
  border:1px solid #59c2fa;
  background: #59c2fa;
  color: #fff;
}
</style>
