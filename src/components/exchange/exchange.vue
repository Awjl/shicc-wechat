<template>
  <div class="exchange">
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
    <div class="purchase-nav">
      <span :class="{active: show}" @click="tabOne()">V1会员区</span>
      <span :class="{active: !show}" @click="tabTwo()">V2尊享区</span>
    </div>
    <div class="exchangelist">
      <div class="item" v-for="(item, index) in items" :key="index" @click="goDetalis">
        <img :src="item.img" alt="">
        <div class="item-title">
          <p>{{item.name}}</p>
          <div class="item-jiage">
            <span class="new">{{item.new}}积分</span>
            <span class="old">{{item.old}}积分</span>
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
      bg: './static/exchangeImg/bg.png',
      show: true,
      items: [{ img: './static/exchangeImg/item1.png', name: '荣耀运动蓝牙耳机', new: 260, old: 260 }, { img: './static/exchangeImg/item2.png', name: '荣耀运动蓝牙耳机', new: 260, old: 260 }, { img: './static/exchangeImg/item3.png', name: '荣耀运动蓝牙耳机', new: 260, old: 260 }, { img: './static/exchangeImg/item4.png', name: '荣耀运动蓝牙耳机', new: 260, old: 260 }, { img: './static/exchangeImg/item5.png', name: '荣耀运动蓝牙耳机', new: 260, old: 260 }, { img: './static/exchangeImg/item6.png', name: '荣耀运动蓝牙耳机', new: 260, old: 260 }]
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
        path: `/ExchangeDetalis`
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
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
.purchase-nav {
  width: 100%;
  height: 83px;
  padding: 0 130px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdc;
}
.purchase-nav span {
  display: block;
  height: 83px;
  line-height: 83px;
  width: 120px;
  text-align: center;
  font-size: 28px;
  color: #4a4a4a;
}
.purchase-nav span.active {
  color: #59c2fa;
  border-bottom: 4px solid #59c2fa;
  box-sizing: border-box;
}
.exchangelist {
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.exchangelist .item {
  width: 325px;
  height: 450px;
  margin-bottom: 20px;
  border: 1px solid #dcdcdc;
}
.item-title p {
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  color: #4a4a4a;
  padding-left: 20px;
}
.item-jiage {
  padding-left: 20px;
}
.item-jiage .new {
  font-size: 24px;
  color: #ed6969;
}
.item-jiage .old {
  font-size: 18px;
  color: #9b9b9b;
  letter-spacing: 0.97px;
  position: relative;
}
.item-jiage .old::before {
  content: '';
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  height: 2px;
  box-sizing: border-box;
  background: #9b9b9b;
  transform-origin: bottom center;
  transform: rotate(9deg);
}
</style>
