<template>
  <div class="QRsuccess-box">
    <div class="QRsuccess">
      <div>
        <img :src="TrueImg" alt="">
      </div>
      <div class="QRsuccess-title">{{dataList}}</div>
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
      TrueImg: './static/loginimg/logo.png',
      dataList: window.location.href.split('=')[1]
    }
  },
  created() {
  },
  methods: {
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
