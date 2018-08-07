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
        <img :src="iconThree" alt=""><input type="password" placeholder="请输入验证码">
        <span>获取验证码</span>
      </div>
      <div class="line"></div>
      <div class="inp">
        <img :src="iconTwo" alt=""><input type="password" placeholder="请输入密码">
      </div>
      <div class="line"></div>
      <div class="loginbtn" @click="register">
        注册
      </div>
      <div class="btnlogin" @click="gologin">
        已有账号？
      </div>
    </div>
    <div class="box" v-if="show">
      <p>新人专享礼包</p>
      <p>200元现金已放入您的账户</p>
      <div class="logincouponlist">
        <div class="couponitem" v-for="(item, index) in items" :key="index">
          <div class="couponitem-title" :class="{activebg: item.state == 2 || item.state == 3}">
            <div class="couponitem-new">
              <span>{{item.new}}</span>元
            </div>
            <div class="couponitem-name">
              <p>{{item.name}}</p>
              <p>{{item.time}}</p>
            </div>
            <div class="couponitem-btn" v-if="item.state == 1">
              立即使用
            </div>
          </div>
          <div class="couponitem-footer">
            购买国际会议中心客房代金券专享
          </div>
          <div class="he20"></div>
        </div>
      </div>
      <div class="boxImg" @click="tohome">
        <img :src="overImg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      overImg: './static/icon/done.png',
      imgbg: './static/loginimg/bg.png',
      logo: './static/loginimg/logo.png',
      iconOne: './static/loginimg/phone.png',
      iconTwo: './static/loginimg/password.png',
      iconThree: './static/loginimg/ma.png',
      items: [{ new: 50, name: '每满500减50元券', time: '2018.07.03-2019.07.03', state: 1 }, { new: 50, name: '停车场专用券', time: '2018.07.03-2019.07.03', state: 1 }, { new: 50, name: '停车场专用券', time: '2018.07.03-2019.07.03', state: 1 }],
      show: false
    }
  },
  methods: {
    gologin () {
      this.$router.push({
        path: '/Login'
      })
    },
    tohome () {
      this.$router.push({
        path: '/My'
      })
    },
    register () {
      this.show = true
    }
  }
}
</script>

<style>
.he20{
  height: 50px;
}
img {
  width: 100%;
}
.line {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
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
.inp span {
  display: block;
  width: 180px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #59c2fa;
  border-radius: 4px;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 1.21px;
}
.inp img {
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
.loginbtn {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border: 2px solid #59c2fa;
  border-radius: 4px;
  font-size: 24px;
  color: #59c2fa;
  letter-spacing: 1.45px;
  margin-top: 192px;
}
.btnlogin {
  width: 120px;
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
  color: #4a4a4a;
  letter-spacing: 1.21px;
}
.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(000, 000, 000, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.box>p:nth-child(1){
  font-size: 36px;
  color: #FFFFFF;
  letter-spacing: 2px;
  height: 50px;
  line-height: 50px;
}
.box>p:nth-child(2){
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: 1.7px;
  height: 50px;
  line-height: 50px;
}
.logincouponlist {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}
.couponitem {
  width: 690px;
  height: 200px;
  box-shadow: 0 0 4px 4px #fff5f5;
  border-radius: 10px;
  margin-bottom: 22px;
  overflow: hidden;
  margin-bottom: 50px;
}
.couponitem-title {
  width: 100%;
  height: 150px;
  background: -webkit-linear-gradient(#ff7d7d, #ed6969); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#ff7d7d, #ed6969); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#ff7d7d, #ed6969); /* Firefox 3.6 - 15 */
  background: linear-gradient(#ff7d7d, #ed6969); /* 标准的语法 */
  display: flex;
}
.activebg {
  background: #9b9b9b;
}
.couponitem-new {
  width: 109px;
  height: 98px;
  text-align: center;
  line-height: 98px;
  margin: 30px 50px;
  font-size: 24px;
  color: #ffffff;
}
.couponitem-new span {
  font-size: 70px;
}
.couponitem-name {
  width: 250px;
  margin-top: 30px;
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
  margin-top: 63px;
  margin-left: 70px;
}
.couponitem-footer {
  padding-left: 40px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #9b9b9b;
  box-sizing: border-box;
  background: #fff;
}
.boxImg {
  width: 60px;
  height: 60px;
}
</style>
