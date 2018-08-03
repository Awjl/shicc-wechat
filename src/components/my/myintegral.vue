<template>
  <div class="integral">
    <div class="exchange-bg">
      <img :src="bg" alt="">
      <div class="exchange-title">
        您现有积分
      </div>
      <div class="exchange-num">
        1288
      </div>
      <div class="lvavel">
        V1会员
      </div>
    </div>
    <div class="title">
      <div class="integral-text">兑换记录</div>
    </div>
    <div class="integralList" v-for="(item, index) in listData" :key="index">
      <div class="integralItem">
        <div class="integralTitle">
          {{item.tiem}}
        </div>
        <div class="line"></div>
        <div class="integral-conter">
          <div class="integral-img">
            <img :src="item.img" alt="">
          </div>
          <div class="integral-name">
            <div class="integralnum">
              <span>{{item.name}}</span>
              <span>x{{item.num}}</span>
            </div>
            <div class="subintegral">
              -{{item.jifen}}积分
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="kuaidi">
          {{item.kuaidiname}} {{item.kuaidiId}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bg: './static/exchangeImg/bg.png',
      listData: [{ img: './static/showImg/address.png', name: '蓝牙耳机', num: 1, jifen: 260, kuaidiname: '圆通', kuaidiId: '1234 5678 9999', tiem: '2018/06/06 12:30' }, { img: './static/showImg/address.png', name: '蓝牙耳机', num: 1, jifen: 260, kuaidiname: '暂无信息', kuaidiId: '', tiem: '2018/06/06 12:30' }, { img: './static/showImg/address.png', name: '蓝牙耳机', num: 1, jifen: 260, kuaidiname: '暂无信息', kuaidiId: '', tiem: '2018/06/06 12:30' }]
    }
  }
}
</script>

<style>
.integral {
  background: #f2f2f2
}
img {
  width: 100%;
}
.line{
  width: 100%;
  height: 2px;
  background: #DCDCDC;
}
.exchange-bg {
  width: 100%;
  position: relative;
}
.exchange-title {
  width: 130px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 22px;
  color: #59c2fa;
}
.exchange-num {
  width: 177px;
  height: 122px;
  text-align: center;
  line-height: 122px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 80px;
  color: #59c2fa;
}
.lvavel {
  width: 80px;
  height: 30px;
  line-height: 35px;
  text-align: center;
  border: 1px solid #ed6969;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 18px;
  color: #ed6969;
}
.integral-text {
  width: 140px;
  height: 30px;
  margin: 20px 0;
  background: #59c2fa;
  color: #fff;
  line-height: 30px;
  text-align: center;
  border-radius: 0 100px 100px 0;
  font-size: 20px;
}
.integralList {
  background: #fff;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.integralTitle {
  width: 100%;
  height: 83px;
  line-height: 83px;
  font-size: 24px;
  color: #9B9B9B;
}
.integral-conter{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}
.integral-img {
  width: 150px;
  height: 150px;
}
.integral-name {
  width: 480px;
}
.integralnum {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.subintegral {
  height: 75px;
  line-height: 75px;
  text-align: right;
  font-size: 24px;
  color: #ed6969;
}
.kuaidi {
  height: 83px;
  line-height: 83px;
  font-size: 24px;
  color: #4A4A4A;
}
</style>
