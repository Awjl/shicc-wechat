<template>
  <div>
    <router-view></router-view>
    <div class="tab">
      <div @click="oneItem()">
        <router-link tag="div" class="tab-item" to="/Home" v-if="!one">
          <img src="./tabIcon/home.png" alt="">
          <span class="tab-link">首页</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/Home" v-if="one">
          <img src="./tabIcon/home_active.png" alt="">
          <span class="tab-link_active">首页</span>
        </router-link>
      </div>
      <div @click="twoItem()">
        <router-link tag="div" class="tab-item" to="/Purchase" v-if="!two">
          <img src="./tabIcon/purchase.png" alt="">
          <span class="tab-link">荟购</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/Purchase" v-if="two">
          <img src="./tabIcon/purchase_avtive.png" alt="">
          <span class="tab-link_active">荟购</span>
        </router-link>
      </div>
      <div @click="threeItem()">
        <router-link tag="div" class="tab-item" to="/Exchange" v-if="!three">
          <img src="./tabIcon/exchange.png" alt="">
          <span class="tab-link">荟兑</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/Exchange" v-if="three">
          <img src="./tabIcon/exchange_active.png" alt="">
          <span class="tab-link_active">荟兑</span>
        </router-link>
      </div>
      <div @click="fourItem()">
        <router-link tag="div" class="tab-item" to="/My" v-if="!four">
          <img src="./tabIcon/my.png" alt="">
          <span class="tab-link">个人中心</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/My" v-if="four">
          <img src="./tabIcon/my_active.png" alt="">
          <span class="tab-link_active">个人中心</span>
        </router-link>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      one: true,
      two: false,
      three: false,
      four: false
    }
  },
  methods: {
    oneItem () {
      this.one = true
      this.two = false
      this.three = false
      this.four = false
      console.log(this.one, this.two, this.three, this.four)
    },
    twoItem () {
      this.one = false
      this.two = true
      this.three = false
      this.four = false
      console.log(this.one, this.two, this.three, this.four)
    },
    threeItem () {
      this.one = false
      this.two = false
      this.three = true
      this.four = false
      console.log(this.one, this.two, this.three, this.four)
    },
    fourItem () {
      this.one = false
      this.two = false
      this.three = false
      this.four = true
      console.log(this.one, this.two, this.three, this.four)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tab {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 98px;
  justify-content: space-between;
  border-top: 1px solid #ddd;
}
.tab div {
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.tab div.tab-item {
  width: 100%;
  height: 98px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.tab-link_active {
  color: #59c2fa;
}
.tab-item img {
  width: 40px;
  height: 40px;
  margin: 0 auto 10px;
}
</style>
