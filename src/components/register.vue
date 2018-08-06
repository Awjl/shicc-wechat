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
        <img :src="iconThree" alt=""><input type="password" placeholder="请输入验证码"> <span>获取验证码</span>
      </div>
      <div class="line"></div>
      <div class="inp">
        <img :src="iconTwo" alt=""><input type="password" placeholder="请输入密码">
      </div>
      <div class="line"></div>
      <div class="btn">
        注册
      </div>
      <div class="btnlogin" @click="gologin">
        已有账号？
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
      iconTwo: './static/loginimg/password.png',
      iconThree: './static/loginimg/ma.png'
    }
  },
  methods: {
    gologin () {
      this.$router.push({
        path: '/Login'
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
.inp span{
  display: block;
  width: 180px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #59C2FA;
  border-radius: 4px;
  font-size: 20px;
  color: #FFFFFF;
  letter-spacing: 1.21px;
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
.btnlogin {
  width: 120px;
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
  color: #4A4A4A;
  letter-spacing: 1.21px;
}
</style>
