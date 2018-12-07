<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
import { defaultLogin } from 'api/homeapi'
import { setUserID } from 'common/js/auth'

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
  created() {
    this._defaultLogin()
  },
  methods: {
    _defaultLogin() {
      defaultLogin().then((res) => {
        if (res.code === 0) {
          // this.$store.commit('SET_USERID', res.data)
          // setUserID(res.data)
          this.$store.commit('SET_USERID', 51)
          setUserID(51)
        }
      })
    },
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
