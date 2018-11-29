<template>
  <div class="QRsuccess-box">
    <div class="QRsuccess">
      <div>
        <img :src="TrueImg" alt="">
      </div>
      <div class="QRsuccess-title">{{dataListName}}</div>
      <div class="goHome" @click="closeWx()">
        关闭页面
      </div>
    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
      TrueImg: './static/loginimg/logo.png',
      dataListName: '',
      dataList: window.location.href.split('=')[1]
    }
  },
  created() {
    if (this.dataList == "501") {
      this.dataListName = "优惠券已领取完"
    } else if (this.dataList == "502") {
      this.dataListName = "获取优惠券失败"
    } else if (this.dataList == "503") {
      this.dataListName = "不存在该用户"
    } else if (this.dataList == "504") {
      this.dataListName = "不能重复领用"
    } else {
      this.dataListName = "优惠券领取成功"
    }
  },
  methods: {
    closeWx() {
      WeixinJSBridge.call('closeWindow');
    }
  }
}
</script>

<style>

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
  margin: 60px 0;
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
