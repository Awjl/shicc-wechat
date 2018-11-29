<template>
  <div class="QRsuccess-box">
    <div class="QRsuccess">
      <div class="QRsuccess-title">{{dataname}}</div>
      <div>
        <img :src="TrueImg" alt="">
      </div>
      <div class="goHome" @click="closeWx">
        关闭页面
      </div>
    </div>
  </div>
</template>
<script>
import { successParkPay } from 'api/login'
export default {
  data() {
    return {
      dataname: '支付成功',
      TrueImg: './static/icon/true-iocn.png',
    }
  },
  created() {
    successParkPay(this.$route.params.id).then(res => {
    })
  },
  methods: {
    closeWx() {
      WeixinJSBridge.call('closeWindow');
    }
  }
}
</script>

<style>
/* .QRsuccess-box {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: url(./static/loginimg/bg.png) no-repeat;
  background-size: 100% 100%;
} */
.QRsuccess {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.QRsuccess-title {
  font-size: 50px;
  margin-bottom: 60px;
}
.goHome {
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #59c2fa;
  color: #fff;
  margin-top: 50px;
  border-radius: 10px;
}
</style>
