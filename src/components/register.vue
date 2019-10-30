<template>
  <div class="login">
    <img :src="imgbg" alt />
    <div class="login-conter">
      <div class="logoimg">
        <img :src="logo" alt />
      </div>
      <div class="inp">
        <img :src="iconOne" alt />
        <input type="text" placeholder="请输入手机号" v-model="user.iphone" @blur="OnBlur()" />
        <span>{{nameErr}}</span>
      </div>
      <div class="line"></div>
      <div class="inp">
        <img :src="iconThree" alt />
        <input type="text" placeholder="请输入验证码" v-model="user.code" />
        <span class="yan" @click="yanzheng()">{{content}}</span>
      </div>
      <div class="line"></div>
      <div class="inp">
        <img :src="iconTwo" alt />
        <input
          type="password"
          placeholder="请输入8-15位，英文数字混合密码"
          v-model="user.password"
          @blur="OnPassWord()"
        />
        <span>{{passwordeErr}}</span>
      </div>
      <div class="line"></div>
      <div class="loginbtn" @click="register">注册</div>
      <div class="btnlogin" @click="gologin">已有账号？</div>
    </div>
    <div class="box" v-if="show">
      <p>新人专享礼包</p>
      <p>现金礼包已放入您的账户</p>
      <div class="logincouponlist">
        <div class="couponitem" v-for="(item, index) in items" :key="index">
          <div class="couponitem-title" :class="{activebg: item.state == 2 || item.state == 3}">
            <div class="couponitem-new" v-if="item.type === 1">
              <span>{{item.price/100}}</span>元
            </div>
            <div class="couponitem-new" v-if="item.type === 2">
              <span>P</span>停车券
            </div>
            <div class="couponitem-name">
              <p>{{item.name}}</p>
              <p>{{item.startTime | formatDate}} - {{item.endTime | formatDate}}</p>
            </div>
            <div class="couponitem-btn" v-if="item.state == 1" @click="goShopping(item.type )">立即使用</div>
          </div>
          <div class="couponitem-footer">{{item.title}}</div>
          <div class="he20"></div>
        </div>
      </div>
      <div class="boxImg" @click="tohome">
        <img :src="overImg" alt />
      </div>
    </div>
  </div>
</template>
<script>
import { Register, sendSMS, getNewbeeCoupon } from "api/login";
import { setUserID, getOpen } from "common/js/auth";
import md5 from "js-md5";

import { ERR_OK, vxconfig } from "api/config";

let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;

export default {
  data() {
    return {
      overImg: "./static/icon/done.png",
      imgbg: "./static/loginimg/bg.png",
      logo: "./static/loginimg/logo.png",
      iconOne: "./static/loginimg/phone.png",
      iconTwo: "./static/loginimg/password.png",
      iconThree: "./static/loginimg/ma.png",
      items: [],
      show: false,
      user: {
        iphone: "",
        code: "",
        password: "",
        openId: ""
      },
      nameErr: "",
      passwordeErr: "",
      content: "获取验证码",
      totalTime: 60,
      canClick: true
    };
  },
  created() {
    vxconfig(window.location.href.split("#")[0]);
    this.user.openId = getOpen();
  },
  methods: {
    _Register() {
      Register(this.user).then(res => {
        if (res.code === ERR_OK) {
          // console.log(res.data)
          if (res.data.code === ERR_OK) {
            this.$store.commit("SET_USERID", res.data.msg);
            setUserID(res.data.msg);
            window.sessionStorage.setItem(
              "sessionToken",
              res.data.sessionToken
            );
            this._getNewbeeCoupon(res.data.msg);
          } else {
            alert(res.data.msg);
          }
        }
      });
    },
    _getNewbeeCoupon(id) {
      getNewbeeCoupon(id).then(res => {
        if (res.code === ERR_OK) {
          // console.log('新手优惠券================================')
          // console.log(res.data)
          this.show = true;
          this.items = res.data;
        }
      });
    },
    goShopping(id) {
      if (id === 1) {
        this.$router.push({
          path: `/Purchase`
        });
      } else {
        this.$router.push({
          path: `/packing`
        });
      }
    },
    yanzheng() {
      if (this.user.iphone) {
        if (!phoneReg.test(this.user.iphone)) {
          return;
        }
        if (!this.canClick) return; // 改动的是这两行代码
        this.canClick = false;
        this.content = this.totalTime + "s后重新发送";
        let clock = window.setInterval(() => {
          this.totalTime--;
          this.content = this.totalTime + "s后重新发送";
          if (this.totalTime < 0) {
            window.clearInterval(clock);
            this.content = "重新发送";
            this.totalTime = 10;
            this.canClick = true; // 这里重新开启
          }
        }, 1000);
        sendSMS(this.user.iphone).then(res => {
          // console.log(res.data)
        });
      } else {
        this.nameErr = "请输入手机号";
      }
    },
    OnBlur() {
      if (this.user.iphone) {
        if (phoneReg.test(this.user.iphone)) {
          this.nameErr = "";
        } else {
          this.nameErr = "格式不正确";
        }
      } else {
        this.nameErr = "请输入手机号";
      }
    },
    OnPassWord() {
      let password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,15}$/;
      if (this.user.password) {
        if (password.test(this.user.password)) {
          this.passwordeErr = "";
        } else {
          this.passwordeErr = "格式不正确";
        }
      } else {
        this.passwordeErr = "请输入密码";
      }
    },
    gologin() {
      this.$router.push({
        path: "/Login"
      });
    },
    tohome() {
      this.show = false;
      if (this.$route.params.id == "login") {
        this.$router.push({
          path: "/My"
        });
      } else if (this.$route.params.id == "packing") {
        this.$router.push({
          path: "/packing"
        });
      }
    },
    register() {
      if (
        this.nameErr == "" &&
        this.user.code != "" &&
        this.passwordeErr == "" &&
        this.user.password != ""
      ) {
        this.user.password = md5(this.user.password);
        this._Register();
      }
    }
  }
};
</script>

<style>
.he20 {
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
}
.logoimg {
  width: 300px;
  height: 136px;
  margin: 172px auto 150px;
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
  font-size: 20px;
  color: red;
}
.inp span.yan {
  background: #59c2fa;
  border-radius: 4px;
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
  height: 40px;
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
  margin: 192px auto 0;
}
.btnlogin {
  width: 120px;
  text-align: center;
  font-size: 20px;
  color: #4a4a4a;
  letter-spacing: 1.21px;
  margin: 40px auto 0;
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
.box > p:nth-child(1) {
  font-size: 36px;
  color: #ffffff;
  letter-spacing: 2px;
  height: 50px;
  line-height: 50px;
}
.box > p:nth-child(2) {
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 1.7px;
  height: 50px;
  line-height: 50px;
}
.logincouponlist {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}
.logincouponlist > .couponitem {
  width: 690px;
  height: 200px;
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
  background: #fff;
}
.boxImg {
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.boxImg img {
  width: 60px;
  height: 60px;
}
</style>
