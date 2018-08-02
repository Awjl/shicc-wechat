<template>
  <div class="trueexchange">
    <div class="addres active" @click="goAddres" v-if="show">
      + 添加收货信息
    </div>
    <div class="addres" v-else>
      <div class="list-content">
        <div class="list-left">
          <div class="title">
            <span>西瓜</span>
            <span>15000000000</span>
          </div>
          <p>上海市黄浦区制造局路833弄23号C座</p>
        </div>
        <div class="list-right">
          修改<img :src="rightImg" alt="">
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="list">
      <div class="list-img">
        <img :src="img" alt="">
      </div>
      <div class="list-name">
        <p>荣耀运动蓝牙耳机</p>
        <p>颜色2，12*20mm</p>
        <div class="list-jiage">
          <div class="new">
            300积分
          </div>
          <div class="num">
            <span>X{{num}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        兑换积分：260
      </div>
      <div class="footer-right">
        确定兑换
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rightImg: './static/icon/addres.png',
      img: './static/showImg/address.png',
      num: 1,
      show: true
    }
  },
  methods: {
    goAddres () {
      this.show = !this.show
      this.$router.push({
        path: '/MyAddres'
      })
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
.line {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
  margin: 30px 0;
}
.trueexchange {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.addres {
  width: 100%;
  height: 136px;
  text-align: center;
  background: #dcdcdc;
}
.active {
  line-height: 136px;
}
.list-content {
  height: 100%;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}
.list-content span{
  display: block;
  color: #333;
  font-size: 28px;
  color: #4A4A4A;
  letter-spacing: 1px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.list-left p {
  margin-top: 20px;
  font-size: 24px;
  color: #9B9B9B;
  letter-spacing: 1px;
  white-space: nowrap;
}
.list-right {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #4A4A4A;
  letter-spacing: 0.67px;
}
.list-right img {
  width: 28px;
  height: 28px;
  margin-left: 12px;
}
.list {
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.list-img {
  width: 130px;
  height: 130px;
}
.list-name {
  width: 520px;
}
.list-name p:nth-child(1) {
  margin-top: 10px;
  font-size: 30px;
  height: 35px;
  line-height: 35px;
}
.list-name p:nth-child(2) {
  font-size: 22px;
  color: #9b9b9b;
  height: 35px;
  line-height: 35px;
}
.list-jiage {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-jiage .new {
  font-size: 28px;
  color: #ed6969;
  letter-spacing: 0.78px;
}
.num-add {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.num {
  font-size: 24px;
  /* color: #ed6969; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88px;
  border-top: 1px solid #dcdcdc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer div {
  width: 50%;
  text-align: center;
  height: 88px;
  line-height: 88px;
}
.footer div.footer-left {
  font-size: 28px;
  color: #ed6969;
  letter-spacing: 1px;
}
.footer div.footer-right {
  background: #59c2fa;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 0.86px;
}
</style>
