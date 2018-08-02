<template>
  <div class="my">
    <div class="my-bg">
      <img :src="imgbg" alt="">
      <div class="my-name">
        <div class="my-title">
          <div class="my-tou">
            <img :src="imgTou" alt="">
          </div>
          <div class="title-name">
            <p>西瓜</p>
            <p>每天进步一点点！</p>
          </div>
        </div>
        <div class="my-list">
          <div>
            <p>心愿单</p>
            <p>10</p>
          </div>
          <div>
            <p>优惠券</p>
            <p>20</p>
          </div>
          <div>
            <p>积分</p>
            <p>2.8k</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mydetalis">
      <div class="my-item">
        <img src="./myicon/myitem1.png" alt=""> 我的订单
      </div>
      <div class="one">
        查看<img src="./myicon/my-right.png" alt="">
      </div>
    </div>
    <div class="myall">
      <div class="my-item">
        <img src="./myicon/myitem2.png" alt=""> 资料修改
      </div>
    </div>
    <div class="myall">
      <div class="my-item">
        <img src="./myicon/myitem3.png" alt=""> 我的心愿单
      </div>
    </div>
    <div class="myall">
      <div class="my-item">
        <img src="./myicon/myitem4.png" alt=""> 积分兑换
      </div>
    </div>
    <div class="myall">
      <div class="my-item">
        <img src="./myicon/myitem5.png" alt=""> 我的优惠券
      </div>
    </div>
    <div class="he10"></div>
    <div class="myall">
      <div class="my-item">
        <img src="./myicon/myitem6.png" alt=""> 收货地址
      </div>
    </div>
    <div class="myall">
      <div class="my-item">
        <img src="./myicon/myitem7.png" alt=""> 修改密码
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgbg: './static/myimg/my-bg.png',
      imgTou: './static/myimg/my-tou.png'
    }
  }
}
</script>

<style scoped>
.he10{
  height: 10px;
}
img {
  width: 100%;
}
.my {
  overflow: hidden;
  background: #f2f2f2;
}
.my-bg {
  position: relative;
}
.my-name {
  padding: 40px;
  position: absolute;
  width: 670px;
  height: 300px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  margin-bottom: -150px;
  background: #fff;
  box-sizing: border-box;
}
.my-title {
  display: flex;
  height: 120px;
}
.my-tou {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 30px;
}
.title-name {
  margin-top: 20px;
  line-height: 35px;
}
.title-name p:nth-child(1) {
  font-size: 28px;
  color: #59C2FA;
  letter-spacing: 1.7px;
}
.title-name p:nth-child(2) {
  font-size: 20px;
  color: #9B9B9B;
  letter-spacing: 1.45px;
}
.my-list {
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  line-height: 40px;
  font-size: 28px;
  color: #59C2FA;
  letter-spacing: 1.7px;
}
.mydetalis {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 150px 40px 0;
  margin-bottom: 10px;
}
.one {
  font-size: 24px;
  color: #59C2FA;
}
.one img {
  margin-left: 10px;
  width: 10px;
  height: 19px;
}
.my-item {
  display: flex;
  align-items: center;
  height: 90px;
  line-height: 90px;
  font-size: 28px;
  color: #4A4A4A;
}
.my-item img{
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.myall {
  background: #fff;
  padding: 0 40px;
  border-bottom: 1px solid #DCDCDC;
}
</style>
