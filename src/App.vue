<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"  v-wechat-title="$route.meta.title"></router-view>
    </keep-alive> -->
    <!-- <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title"></router-view> -->
    <router-view v-wechat-title="$route.meta.title"></router-view>

  </div>
</template>

<script>
export default {
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
#app {
  margin-bottom: 100px;
}
</style>
