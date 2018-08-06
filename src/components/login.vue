<template>
  <div class="login">
    <img :src="imgbg" alt="">
    <div class="login-conter">
      <div class="logoimg">
        <img :src="logo" alt="">
      </div>
      <div class="inp">
        <img :src="iconOne" alt=""><input type="text" placeholder="请输入手机号">
      </div>
      <div class="line"></div>
      <div class="inp">
        <img :src="iconTwo" alt=""><input type="password" placeholder="请输入密码">
      </div>
      <div class="line"></div>
      <div class="register">
        <span @click="goRegister">没有账号？</span>
        <span>忘记密码</span>
      </div>
      <div class="btn">
        登录
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgbg: './static/loginimg/bg.png',
      logo: './static/loginimg/logo.png',
      iconOne: './static/loginimg/phone.png',
      iconTwo: './static/loginimg/password.png'
    }
  },
  methods: {
    goRegister () {
      this.$router.push({
        path: '/Register'
      })
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
  background:#DCDCDC;
}
.login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.login-conter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logoimg {
  margin-top: 172px;
  margin-bottom: 150px;
  width: 300px;
  height: 136px;
}
.inp {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.inp img{
  width: 50px;
  height: 50px;
  margin: 0 10px;
}
.inp input {
  width: 400px;
  outline: none;
  background: inherit;
}
.register {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}
.btn {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border: 2px solid #59C2FA;
  border-radius: 4px;
  font-size: 24px;
  color: #59C2FA;
  letter-spacing: 1.45px;
  margin-top: 192px;
}
</style>
