<template>
  <div class="password">
    <div class="yanzheng" v-if="show">
      <p>请完成以下认证</p>
       <div class="yanzhengcode yanzhengcode-ipn">
        <input type="text" placeholder="请输入手机号" v-model="userdata.mobile" @blur="OnBlur()">
        <span class="iph-err">{{nameErr}}</span>
      </div>
      <div class="yanzhengcode">
        <input type="text" placeholder="请输入验证码" v-model="userdata.code">
        <span class="codebtn" @click="yanzheng()">{{content}}</span>
      </div>
      <div class="next-btn" @click="nextPass">
        下一步
      </div>
    </div>
    <div class="yanzheng" v-if="nextshow">
      <p>设置新的登录密码</p>
      <div class="yanzhengcode yanzhengcode-ipn">
        <input type="text" placeholder="请输入8-15位，中英文混合密码" v-model="userdata.password" @blur="OnPassWord()">
        <span class="iph-err">{{passwordeErr}}</span>
      </div>
      <div class="next-btn" @click="overTrue">
        确认修改
      </div>
    </div>
    <div class="yanzheng" v-if="over">
      <div class="overimg">
        <img :src="overimg" alt="">
        <div>修改成功</div>
      </div>
      <div class="next-btn" @click="gomy">
        返回首页
      </div>
    </div>
  </div>
</template>
<script>
import { matchCode, changePwd } from 'api/user'
import { sendSMS } from 'api/login'
import { ERR_OK } from 'api/config'

let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/

export default {
  data () {
    return {
      show: true,
      nextshow: false,
      over: false,
      overimg: './static/icon/true-iocn.png',
      content: '获取验证码',
      totalTime: 60,
      canClick: true,
      userdata: {
        mobile: '',
        code: '',
        password: ''
      },
      nameErr: '',
      passwordeErr: ''
    }
  },
  methods: {
    nextPass () {
      // console.log(this.userdata)
      if (this.nameErr == '' && this.userdata.code != '') {
        matchCode(this.userdata).then((res) => {
          if (res.code === ERR_OK) {
            // console.log(res.data)
            if (res.data) {
              this.show = false
              this.nextshow = true
              this.over = false
            } else {
              alert('验证码错误')
            }
          }
        })
      }
    },
    overTrue () {
      // console.log(this.userdata)
      if (this.userdata.password != '' && this.passwordeErr == '') {
        changePwd(this.userdata).then((res) => {
          if (res.code === ERR_OK) {
            this.show = false
            this.nextshow = false
            this.over = true
          }
        })
      }
    },
    gomy () {
      this.show = true
      this.nextshow = false
      this.over = false
      this.$router.push({
        path: '/Home'
      })
    },
    OnPassWord () {
      let password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,15}$/
      if (this.userdata.password) {
        if (password.test(this.userdata.password)) {
          this.passwordeErr = ''
        } else {
          this.passwordeErr = '格式不正确'
        }
      } else {
        this.passwordeErr = '请输入密码'
      }
    },
    OnBlur () {
      if (this.userdata.mobile) {
        if (phoneReg.test(this.userdata.mobile)) {
          this.nameErr = ''
        } else {
          this.nameErr = '格式不正确'
        }
      } else {
        this.nameErr = '请输入手机号'
      }
    },
    yanzheng () {
      if (this.userdata.mobile) {
        if (!phoneReg.test(this.userdata.mobile)) {
          return
        }
        if (!this.canClick) return // 改动的是这两行代码
        this.canClick = false
        this.content = this.totalTime + 's后重新发送'
        let clock = window.setInterval(() => {
          this.totalTime--
          this.content = this.totalTime + 's后重新发送'
          if (this.totalTime < 0) {
            window.clearInterval(clock)
            this.content = '重新发送'
            this.totalTime = 10
            this.canClick = true // 这里重新开启
          }
        }, 1000)
        sendSMS(this.userdata.mobile).then((res) => {
          // console.log(res.data)
        })
      } else {
        this.nameErr = '请输入手机号'
      }
    }
  },
  // beforeRouteLeave (to, from, next) {
  //   to.meta.keepAlive = false
  //   next()
  // }
}
</script>
<style>
.yanzheng {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.yanzheng p {
  font-size: 24px;
  color: #4a4a4a;
  letter-spacing: 0.67px;
  height: 60px;
  line-height: 60px;
}
.yanzheng p:nth-child(2) {
  font-size: 22px;
  color: #9b9b9b;
  letter-spacing: 0.61px;
}
.yanzhengcode {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
}
.iph-err {
  position: absolute;
  top: 0;
  right: 20px;
  color: red;
  height: 80px;
  line-height: 80px;
}
.yanzhengcode input {
  width: 400px;
  height: 80px;
  border: 2px solid #979797;
  border-radius: 10px;
  outline: none;
  padding: 0 20px;
  box-shadow:0px 0px 0px rgba(0,0,0,0);
  -webkit-appearance:none;
}
.yanzhengcode-ipn input{
  width: 100%;
  box-shadow:0px 0px 0px rgba(0,0,0,0);
  -webkit-appearance:none;
}
.codebtn {
  width: 180px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  display: block;
  background: #59c2fa;
  border-radius: 4px;
  color: #fff;
}
.next-btn {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: #59c2fa;
  border-radius: 10px;
  margin-top: 100px;
  color: #fff;
}
.newpassword input {
  margin-top: 60px;
  width: 100%;
  height: 50px;
  background: #f4f4f4;
  border-radius: 10px;
}
.overimg {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.overimg img {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}
</style>
