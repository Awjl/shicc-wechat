<template>
  <div class="login">
    <img :src="imgbg" alt="">
    <div class="login-conter">
      <div class="logoimg">
        <img :src="logo" alt="">
      </div>
      <div class="inp">
        <img :src="iconOne" alt=""><input type="text" placeholder="请输入手机号" v-model="user.name" @blur="OnBlur()">
        <span>{{nameErr}}</span>
      </div>
      <div class="line"></div>
      <div class="inp">
        <img :src="iconTwo" alt=""><input type="password" placeholder="请输入8-15位，中英文混合密码" v-model="user.password" @blur="OnPassWord()">
        <span>{{passwordeErr}}</span>
      </div>
      <div class="line"></div>
      <div class="register">
        <span @click="goRegister">没有账号？去注册</span>
        <span @click="gowant">忘记密码</span>
      </div>
      <div class="loginbtn" @click="goLoing">
        登录
      </div>
    </div>
  </div>
</template>
<script>
import { login } from 'api/login'
import { ERR_OK } from 'api/config'
import { setUserID, getUserID } from 'common/js/auth'

export default {
  data () {
    return {
      imgbg: './static/loginimg/bg.png',
      logo: './static/loginimg/logo.png',
      iconOne: './static/loginimg/phone.png',
      iconTwo: './static/loginimg/password.png',
      nameErr: '',
      passwordeErr: '',
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    _login () {
      login(this.user).then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data)
          if (res.data.code === ERR_OK) {
            this.$store.commit('SET_USERID', res.data.msg)
            setUserID(res.data.msg)
            console.log(getUserID())
            this.show = true
            this.$router.push({
              path: '/My'
            })
          } else {
            alert(res.data.msg)
          }
        }
      })
    },
    OnBlur () {
      let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
      if (this.user.name) {
        if (phoneReg.test(this.user.name)) {
          this.nameErr = ''
        } else {
          this.nameErr = '格式不正确'
        }
      } else {
        this.nameErr = '请输入手机号'
      }
    },
    OnPassWord () {
      let password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,15}$/
      if (this.user.password) {
        if (password.test(this.user.password)) {
          this.passwordeErr = ''
        } else {
          this.passwordeErr = '格式不正确'
        }
      } else {
        this.passwordeErr = '请输入密码'
      }
    },
    goRegister () {
      this.$router.push({
        path: '/Register'
      })
    },
    gowant () {
      this.$router.push({
        path: '/MyPassword'
      })
    },
    goLoing () {
      console.log('登录')
      if (this.nameErr == '' && this.passwordeErr == '' && this.user.name != '' && this.user.password != '') {
        this._login()
      }
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
  height: 100vh;
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
.inp span {
  display: block;
  width: 180px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  color: red;
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
</style>
