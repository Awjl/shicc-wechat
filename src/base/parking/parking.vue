<template>
  <div class="packing">
    <div class="bg">
      <img src="./pack.png" alt="">
      <div class="bg-text">
        <input type="text" placeholder="请输入车牌号">
        <div class="packingtext">
          上海国际会议中心停车场
        </div>
      </div>
    </div>
    <div class="packinglist">
      <div class="packinglistitem">
        <span>入场时间：</span>
        <span>2018-01-01 00:00</span>
      </div>
      <div class="packinglistitem">
        <span>停车时长：</span>
        <span>0天0小时0分</span>
      </div>
      <div class="packinglistitem">
        <span>支付金额：</span>
        <span class="redcolor">￥00</span>
      </div>
      <div class="he20"></div>
      <div class="packingline"></div>
      <div class="he20"></div>
      <div class="packinglistitem">
        <span>抵用券：</span>
        <span>暂无可用</span>
      </div>
      <div class="he20"></div>
      <div class="packingline"></div>
      <div class="he20"></div>
      <div class="he20"></div>
      <div class="sumpacking">
        <div>小计<span class="redcolor redsum">￥00</span></div>
      </div>
    </div>
    <div class="packing-btn">
      立即支付
    </div>
  </div>
</template>

<script>

</script>

<style>
.he20{
  height: 20px;
}
img {
  width: 100%;
}
.packing {
  padding: 20px;
  box-sizing: border-box;
}
.bg {
  position: relative;
}
.packingtext {
  font-size: 24px;
  color: #ffffff;
  text-align: center;
}
.bg-text {
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  width: 50%;
  margin: 0 auto;
}
.bg-text input {
  background: inherit;
  height: 50px;
  width: 100%;
  outline: none;
  text-align: center;
  color: #fff;
  font-size: 40px;
  margin-bottom: 20px;
}
.bg-text input::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #fff;
  font-weight: bold;
}
.packinglist {
  width: 100%;
  height: 500px;
  background: #fff;
}
.packinglistitem {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.packinglistitem > span {
  display: block;
  font-size: 24px;
  color: #4a4a4a;
}
.packingline {
  width: 100%;
  height: 2px;
  background:#DCDCDC;
}
.sumpacking {
  display: flex;
  justify-content: flex-end;
  font-size: 24px;
  color: #4A4A4A;
}
span.redcolor {
  color: #ed6969;
}
span.redsum {
  font-size: 40px;
}
.packing-btn {
  width: 500px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  background: #59C2FA;
  color: #fff;
  font-size:40px;
  border-radius: 100px;
  margin: 50px auto 0;
}
</style>
