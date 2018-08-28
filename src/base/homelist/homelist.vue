<template>
  <div class="homelist">
    <div class="he20"></div>
    <div class="homelist-title">
      上海国际会议中心
    </div>
    <div class="he20"></div>
    <div class="homelist-text">
     {{dataList.contentFirst}}
    </div>
    <div class="he20"></div>
    <div class="homelist-img">
      <img :src="dataList.urlFirst" alt="">
    </div>
    <div class="he20"></div>
    <div class="homelist-text">
      {{dataList.contentSecond}}
    </div>
    <div class="he20"></div>
    <div class="homelist-img">
      <img :src="dataList.urlSecond" alt="">
    </div>
    <div class="he20"></div>
    <div class="homelist-text">
      {{dataList.contentThird}}
    </div>
    <div class="he20"></div>
    <div class="listItem-img">
      <div class="Item-box">
        <div class="Item">
          <div class="item-img" v-for="(str, index) in item" :key="index">
            <img :src="str.url" alt="">
            <div class="img-box">
              {{str.title}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBottomBanner, getIntroduce } from 'api/homeapi'
import { ERR_OK } from 'api/config'

export default {
  data () {
    return {
      listImg: './static/img/listthree-1.png',
      listImgtwo: './static/img/listthree2.png',
      item: [],
      dataList: {}
    }
  },
  created () {
    this._getBottomBanner()
    this._getIntroduce()
  },
  methods: {
    _getBottomBanner () {
      getBottomBanner().then((res) => {
        if (res.code === ERR_OK) {
          console.log(`底部banner=====`)
          console.log(res.data)
          this.item = res.data
        }
      })
    },
    _getIntroduce () {
      getIntroduce().then((res) => {
        if (res.code === ERR_OK) {
          console.log(`介绍banner=====`)
          console.log(res.data)
          this.dataList = res.data
        }
      })
    }
  }
}
</script>

<style>
.he20 {
  height: 20px;
}
.homelist-img img {
  width: 100%;
}
.homelist-title {
  font-size: 28px;
  color: #4a4a4a;
  letter-spacing: 1.7px;
  text-align: center;
}
.homelist-text {
  font-size: 24px;
  color: #9b9b9b;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  line-height: 40px;
}
.listItem-img {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.Item-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-x: auto;
  box-sizing: content-box;
}
.Item-box::-webkit-scrollbar {
  display: none;
  margin: 0;
  padding: 0;
}
.Item {
  display: flex;
  width: 100%;
}
.item-img {
  margin: 0 10px;
  position: relative;
}
.img-box {
  position: absolute;
  width: 100%;
  text-align: center;
  height: 200px;
  line-height: 200px;
  top: 0;
  left: 0;
  background: rgba(000, 000, 000, 0.5);
  font-size: 24px;
  color: #ffffff;
}
.item-img img {
  width: 300px;
  height: 200px;
  margin: 0;
  padding: 0;
}
</style>
