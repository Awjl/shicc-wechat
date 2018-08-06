<template>
  <div class="modify">
    <div class="modify-tou">
      <div class="tou">
        <img :src="imgTou" alt="">
      </div>
      <div class="tou-btn">点击修改头像</div>
    </div>
    <div class="modifyList">
      <div class="modifyItem">
        <span>用户ID&nbsp;&nbsp;&nbsp;：</span> 20180724558
      </div>
      <div class="line"></div>
      <div class="modifyItem">
        <span>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</span> <input type="text" placeholder="请输入昵称">
      </div>
      <div class="line"></div>
      <div class="modifyItem">
        <span>个性签名：</span><input type="text" placeholder="请输入个性签名">
      </div>
      <div class="line"></div>
      <div class="modifyItem">
        <span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
        <div class="sex">
          <span @click="sexgentlemen"><img :src="trueiocn"  v-if="sexMen"> <img :src="weiiocn"  v-else>男</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span @click="sexLadies"><img :src="trueiocn"  v-if="!sexMen"> <img :src="weiiocn"  v-else>女</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="modifyItem">
        <span>出生日期：</span>
      </div>
    </div>
    <div class="submission-btn">
      保存
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgTou: './static/myimg/my-tou.png',
      weiiocn: './static/myimg/wei.png',
      trueiocn: './static/myimg/true.png',
      sexMen: true
    }
  },
  methods: {
    sexgentlemen () {
      this.sexMen = true
    },
    sexLadies () {
      this.sexMen = false
    }
  }
}
</script>

<style>
img{
  width: 100%;
}
.line{
  width: 100%;
  height: 2px;
  background: #dcdddc;
}
.modify{
  width: 100vw;
  height: calc(100vh - 100px);
  background: #f2f2f2;
  overflow: hidden;
}
.modify-tou {
  width: 100%;
  height: 288px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tou {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}
.tou-btn {
  font-size: 20px;
  color: #9B9B9B;
}
.modifyList {
  margin-top:10px;
  width: 100%;
  background: #fff;
  padding: 0 40px;
  box-sizing: border-box;
}
.modifyItem{
  width: 100%;
  height: 78px;
  line-height: 78px;
  display: flex;
  align-items: center;
}
.modifyItem>span{
  display: block;
  width: 130px;
  font-size: 24px;
  color: #4A4A4A;
}
.modifyItem input{
  width: 500px;
  outline: none;
}
.sex {
  display: flex;
}
.sex img{
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
.sex span{
  display: flex;
  align-items: center;
}
.submission-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background: #59c2fa;
  text-align: center;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 1.45px;
}
</style>
