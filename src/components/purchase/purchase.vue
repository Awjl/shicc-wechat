<template>
  <div class="purchase">
    <div class="purchase-banner">
      <img :src="bannerImg" alt="">
      <div class="banner-text">
        餐厅包间预定
      </div>
    </div>
    <div class="purchase-nav">
      <span :class="{active: show}" @click="tabOne()">一 隅</span>
      <span :class="{active: !show}" @click="tabTwo()">一 食</span>
    </div>
    <div class="purchase-list">
      <div class="purchase-item" v-for="(item, index) in item" :key="index" @click="goDetalis">
        <div class="purchase-img">
          <img :src="item.img" alt="">
          <div class="purchase-name">
            {{item.name}}
          </div>
        </div>
        <div class="purchase-title">
          <div class="titleItem">
            <span >
              <img :src="hotIcon" alt="" v-if="item.hot == 1">
            </span>
            <div class="title-name">
              {{item.title}}
            </div>
          </div>
          <div class="Price">
            <span class="PriceNew">￥{{item.new}}</span>
            <span class="PriceOld">￥{{item.old}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerImg: './static/showImg/shopping-bg.png',
      hotIcon: './static/icon/hot-icon.png',
      show: true,
      item: [{ img: './static/showImg/item1.png', name: '轻薄自然的上身触感', title: '商务房1000元代金券', hot: 1, new: 693, old: 1000 }, { img: './static/showImg/item2.png', name: '轻薄自然的上身触感', title: '商务房1000元代金券', hot: 0, new: 693, old: 1000 }, { img: './static/showImg/item1.png', name: '轻薄自然的上身触感', title: '商务房1000元代金券', hot: 0, new: 693, old: 1000 }, { img: './static/showImg/item2.png', name: '轻薄自然的上身触感', title: '商务房1000元代金券', hot: 1, new: 693, old: 1000314 }]
    }
  },
  methods: {
    tabOne () {
      this.show = true
    },
    tabTwo () {
      this.show = false
    },
    goDetalis () {
      this.$router.push({
        path: `/PurchaseDetalis`
      })
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
}
.purchase-banner {
  width: 100%;
  position: relative;
}
.banner-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding-left: 30px;
  box-sizing: border-box;
  background: rgba(000, 000, 000, 0.5);
  color: #fff;
  font-size: 24px;
  letter-spacing: 1.45px;
}
.purchase-nav {
  width: 100%;
  height: 83px;
  padding: 0 180px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdc;
}
.purchase-nav span {
  display: block;
  height: 83px;
  line-height: 83px;
  width: 80px;
  text-align: center;
  font-size: 24px;
  color: #4a4a4a;
}
.purchase-nav span.active {
  color: #59c2fa;
  border-bottom: 4px solid #59c2fa;
  box-sizing: border-box;
}
.purchase-list {
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.purchase-item {
  width: 335px;
  margin-bottom: 20px;
}
.purchase-img {
  position: relative;
}
.purchase-name {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 30px;
  color: #fff;
  font-size: 18px;
  background: rgba(000, 000, 000, 0.5);
  box-sizing: border-box;
}
.purchase-title {
  width: 100%;
  height: 100px;
}
.titleItem {
  display: flex;
  align-items: center;
  height: 50px;
  line-height: 50px;
}
.titleItem span {
  display: block;
  width: 30px;
  height: 30px;
  margin-top: -5px;
}
.title-name {
  font-size: 24px;
  color: #4a4a4a;
  letter-spacing: 1.45px;
}
.Price {
  width: 100%;
  padding-left: 30px;
  box-sizing: border-box;
}
.Price .PriceNew {
  font-size: 24px;
  color: #59c2fa;
  letter-spacing: 1.45px;
  font-weight: bold;
}
.Price .PriceOld {
  font-size: 18px;
  color: #9B9B9B;
  letter-spacing: 0.97px;
  position:relative;
  overflow: hidden;
}
.Price .PriceOld::before{
  content:"";
  position:absolute;
  left:0;
  top:45%;
  width:100%;
  height:1px;
  box-sizing:border-box;
  background:#9B9B9B;
  transform-origin:bottom center;
  transform: rotate(9deg)
}
</style>
