<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
import { defaultLogin } from "api/homeapi";
import { setUserID, setOpen, getUserID } from "common/js/auth";

export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true,
      open: window.location.href.split("=")[1]
    };
  },
  created() {
    this._defaultLogin();
    setOpen(this.open);
  },
  methods: {
    _defaultLogin() {
      defaultLogin(this.open).then(res => {
        if (res.code === 0) {
          if (res.data) {
            this.$store.commit("SET_USERID", res.data);
            setUserID(res.data);
            window.sessionStorage.setItem(
              "sessionToken",
              res.data.sessionToken
            );
          } else {
            this.$store.commit("SET_USERID", null);
            setUserID(null);
            window.sessionStorage.setItem("sessionToken", null);
          }

          // this.$store.commit('SET_USERID', 51)
          // setUserID(51)
        }
      });
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
#app {
  margin-bottom: 100px;
}
</style>
