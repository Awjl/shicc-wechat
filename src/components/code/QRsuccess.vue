<template>
  <div class="QRsuccess-box">
    <div class="QRsuccess">
      <div class="QRsuccess-title">领取成功</div>
      <div>
        <img :src="TrueImg" alt="">
      </div>
      <router-link tag="div" class="goHome" to="/Home">
        去首页
      </router-link>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      TrueImg: './static/icon/true-iocn.png',
    }
  },
  created() {
  },
  methods: {
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
