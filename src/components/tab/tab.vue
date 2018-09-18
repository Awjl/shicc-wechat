<template>
  <div>
    <router-view></router-view>
    <div class="tab">
      <div>
        <router-link tag="div" class="tab-item" to="/Home" v-if="$route.path.indexOf('Home') === -1">
          <img src="./tabIcon/home.png" alt="">
          <span class="tab-link">首页</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/Home" v-else>
          <img src="./tabIcon/home_active.png" alt="">
          <span class="tab-link_active">首页</span>
        </router-link>
      </div>
      <div>
        <router-link tag="div" class="tab-item" to="/Purchase" v-if="$route.path.indexOf('Purchase') === -1">
          <img src="./tabIcon/purchase.png" alt="">
          <span class="tab-link">荟购</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/Purchase" v-else>
          <img src="./tabIcon/purchase_avtive.png" alt="">
          <span class="tab-link_active">荟购</span>
        </router-link>
      </div>
      <div>
        <router-link tag="div" class="tab-item" to="/Exchange" v-if="$route.path.indexOf('Exchange') === -1">
          <img src="./tabIcon/exchange.png" alt="">
          <span class="tab-link">荟兑</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/Exchange" v-else>
          <img src="./tabIcon/exchange_active.png" alt="">
          <span class="tab-link_active">荟兑</span>
        </router-link>
      </div>
      <div>
        <router-link tag="div" class="tab-item" to="/My" v-if="$route.path.indexOf('My') === -1">
          <img src="./tabIcon/my.png" alt="">
          <span class="tab-link">个人中心</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/My" v-else>
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
      // one: true,
      // two: false,
      // three: false,
      // four: false
      item: '1',
    }
  },
  methods: {
    oneItem (id) {
      this.item = id
      // console.log('1')
      // this.one = true
      // this.two = false
      // this.three = false
      // this.four = false
    }
    // twoItem () {
    //   console.log('2')
    //   this.one = false
    //   this.two = true
    //   this.three = false
    //   this.four = false
    // },
    // threeItem () {
    //   console.log('3')
    //   this.one = false
    //   this.two = false
    //   this.three = true
    //   this.four = false
    // },
    // fourItem () {
    //   console.log('4')
    //   this.one = false
    //   this.two = false
    //   this.three = false
    //   this.four = true
    // }
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
  background: #fff;
  z-index: 9;
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
