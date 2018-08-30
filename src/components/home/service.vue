<template>
  <div class="service">
    <div class="service-box">
      <img :src="service" alt="">
      <div class="service-title">
        <p class="sie-24">在线客服</p>
        <div class="he10"></div>
        <p class="sie-20">人工服务时间：工作日 9:00 - 18:00</p>
        <a href="tel:862150370000">拨打电话</a>
      </div>
    </div>
    <div class="hot">
      <div class="hot-line"></div>
      <div class="hot-title">热门问题</div>
      <div class="hot-line"></div>
    </div>
    <div class="he10"></div>
    <div class="hot-list" @click="detile($event)" style="height:16px;" v-for="(item, index) in dataList" :key="index">
      <div class="hot-name">
        <div class="hot-span">
          <span>&#8226;</span>{{item.question}}
        </div>
        <div class="hot-right">
          <img :src="rightimg" alt="">
        </div>
      </div>
      <div class="he10"></div>
      <div class="hot-text">
        {{item.answer}}
      </div>
    </div>
  </div>
</template>

<script>
import { getAllHotIssues } from 'api/homeapi'
import { ERR_OK } from 'api/config'

export default {
  data () {
    return {
      service: './static/img/service.png',
      rightimg: './static/icon/ic_back.png',
      dataList: []
    }
  },
  created () {
    this._getAllHotIssues()
  },
  methods: {
    _getAllHotIssues () {
      getAllHotIssues().then((res) => {
        if (res.code === ERR_OK) {
          console.log('热门问题=======')
          console.log(res.data)
          this.dataList = res.data
        }
      })
    },
    detile (e) {
      if (e.currentTarget.style.height) {
        e.currentTarget.style.height = ''
        e.currentTarget.children[0].children[1].style.transform = 'rotate(90deg)'
      } else {
        e.currentTarget.style.height = 16 + 'px'
        e.currentTarget.children[0].children[1].style.transform = 'rotate(-90deg)'
      }
    }
  }
}
</script>

<style scoped>
.he10 {
  height: 10px;
}
.sie-24 {
  font-size: 24px;
}
.sie-20 {
  font-size: 20px;
}
.service-box {
  width: 100%;
  position: relative;
  margin-bottom: 30px;
}
img {
  width: 100%;
}
.service-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  color: #fff;
  font-size: 24px;
}

.service-title a {
  margin-top: 40px;
  display: block;
  width: 193px;
  height: 49px;
  background: #59c2fa;
  border-radius: 5px;
  text-align: center;
  line-height: 49px;
  color: #fff;
}
.hot {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hot .hot-line {
  width: 278px;
  height: 2px;
  background: #59c2fa;
}
.hot-title {
  width: 134px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #59c2fa;
  font-size: 24px;
}
.hot-list {
  width: 100%;
  overflow: hidden;
  padding: 0 37px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.hot-name {
  height: 32px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  color: #4A4A4A;
  letter-spacing: 1.45px;
}
.hot-text {
  padding-left: 20px;
  box-sizing: border-box;
  font-size: 20px;
  color: #9B9B9B;
  margin-bottom: 30px;
}
.hot-name span {
  font-size: 30px;
  display:inline-block;
  width: 20px;
}
.hot-right {
  height: 30px;
  width: 17px;
  transform:rotate(-90deg);
  transition: all 0.5s;
}
.hot-span{
  font-size: 24px;
  color: #4A4A4A;
}
</style>
