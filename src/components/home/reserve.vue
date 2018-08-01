<template>
  <div class="reserve">
    <div class="reserve-box">
      <img :src="listImgtwo" alt="">
      <div class="reserve-title">
        <p>如需预约，请留下您的联系方式</p>
        <p>我们会在24小时内联系您</p>
      </div>
    </div>
    <div class="he20"></div>
    <div class="reserve-from">
      <div class="from-item">
        <label>您的姓名</label><input type="text" placeholder="请输入您的姓名">
      </div>
      <div class="he20"></div>
      <div class="from-item">
        <label>手机号码</label><input type="text" placeholder="请输入您的手机号">
      </div>
      <div class="he20"></div>
      <div class="from-item">
        <label>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注</label>
        <textarea></textarea>
      </div>
    </div>
    <div class="ture-box" @click="show">
      立即预约
    </div>
    <div class="OverBox" v-if="showTrue">
      <div class="Box-one">
        <div class="true-img">
          <img :src="TrueImg" alt="">
        </div>
        <div class="he30"></div>
        <div class="true-name">
          预约成功
        </div>
         <div class="he30"></div>
        <div class="true-line"></div>
         <div class="he30"></div>
        <div class="true-name">
          <p>我们已经收到您的预订信息</p>
          <p>酒店工作人员会在24小时内与您联系</p>
        </div>
        <div class="true-iph">
          酒店电话：（8621) 5037 0000
        </div>
      </div>
      <div class="OverBox-img" @click="hide">
        <img :src="overImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listImgtwo: './static/img/listthree2.png',
      overImg: './static/icon/done.png',
      TrueImg: './static/icon/true-iocn.png',
      showTrue: false
    }
  },
  methods: {
    show () {
      this.showTrue = true
    },
    hide () {
      this.showTrue = false
      this.$router.back(-1)
    }
  }
}
</script>

<style>
.he20 {
  height: 20px;
}
.he30{
  height: 30px;
}
.reserve-box {
  width: 100%;
  position: relative;
  margin-bottom: 30px;
}
img {
  width: 100%;
}
.reserve-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(000, 000, 000, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  color: #fff;
  font-size: 24px;
}
.reserve-from {
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
}
.from-item {
  display: flex;
  justify-content: space-between;
}
.from-item input,
.from-item textarea {
  width: 524px;
  padding: 0px 10px;
  margin: 0;
  border-radius: 10px;
  resize: none;
  outline: none;
  box-sizing: border-box;
  color: #979797;
}
.from-item label {
  padding-top: 10px;
  font-size: 24px;
  color: #9b9b9b;
}
.from-item input {
  height: 40px;
  border: 2px solid #979797;
}
.from-item textarea {
  padding:10px 20px;
  height: 200px;
}
.ture-box {
  width: 690px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  position: fixed;
  bottom: 100px;
  left: 0;
  right: 0;
  margin: auto;
  background: #59c2fa;
  border-radius: 10px;
  font-size: 40px;
  color: #fff;
}
.OverBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(000, 000, 000, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Box-one {
  width: 550px;
  height: 700px;
  background: #fff;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.true-iph {
  position: absolute;
  bottom: 29px;
  margin: auto;
  color: #9B9B9B;
  font-size: 24px;
}
.OverBox-img {
  margin-top: 74px;
  width: 60px;
  height: 60px;
}
.OverBox-img img {
  width: 100%;
  height: 100%;
}

.true-img {
  width: 80px;
  height: 80px;
}
.true-line {
  width: 450px;
  height: 2px;
  background: #DCDCDC;
}
.true-name {
  font-size: 24px;
  color: #4A4A4A;
  letter-spacing: 0.67px;
  text-align: center;
  line-height: 40px;
}
</style>
