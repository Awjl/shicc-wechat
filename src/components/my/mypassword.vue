<template>
  <div class="password">
    <div class="yanzheng" v-if="show">
      <p>请完成以下认证</p>
      <p>请输入176****1234收到的短信验证码</p>
      <div class="yanzhengcode">
        <input type="text">
        <span class="codebtn">获取验证码</span>
      </div>
      <div class="next-btn" @click="nextPass">
        下一步
      </div>
    </div>
    <div class="yanzheng" v-if="nextshow">
      <p>设置新的登录密码</p>
      <div class="newpassword">
        <input type="text">
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
        返回个人中心
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: true,
      nextshow: false,
      over: false,
      overimg: './static/icon/true-iocn.png'
    }
  },
  methods: {
    nextPass () {
      this.show = false
      this.nextshow = true
      this.over = false
    },
    overTrue () {
      this.show = false
      this.nextshow = false
      this.over = true
    },
    gomy () {
      this.show = true
      this.nextshow = false
      this.over = false
      this.$router.push({
        path: '/My'
      })
    }
  }
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
}
.yanzhengcode input {
  width: 400px;
  height: 50px;
  border: 2px solid #979797;
  border-radius: 10px;
  outline: none;
  padding: 0 20px;
}
.codebtn {
  width: 180px;
  height: 50px;
  line-height: 50px;
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
