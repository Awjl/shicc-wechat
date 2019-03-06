<template>
  <div class="stackAll">
    <div class="stack-wrapper">
      <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
    </div>
    <div class="OverBox-img" @click="goBack">
      <img :src="overImg" alt>
    </div>
  </div>
</template>
<script>
import stack from "base/stack/stack";

import { getBar } from "api/homeapi";
import { ERR_OK, vxconfig } from "api/config";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      overImg: "./static/icon/done.png",
      someList: [],
      stackinit: {
        visible: 3
      },
      user: 0,
      dataList: []
    };
  },
  created() {
    vxconfig(window.location.href.split("#")[0]);
    if (this.UserID) {
      this.user = this.UserID;
      this._getBar(this.user);
    }
  },
  components: {
    stack
  },
  computed: {
    ...mapGetters(["UserID"])
  },
  methods: {
    _getBar(user) {
      getBar(user, this.$route.params.barid).then(res => {
        if (res.code === ERR_OK) {
          // console.log(`吧详情banner=====`)
          // console.log(res.data)
          this.someList = res.data;
        }
      });
    },
    goBack() {
      this.$router.back(-1);
    }
  }
};
</script>
<style>
.stackAll {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: -webkit-linear-gradient(#27283b, #595a6d); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#27283b, #595a6d); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#27283b, #595a6d); /* Firefox 3.6 - 15 */
  background: linear-gradient(#27283b, #595a6d); /* 标准的语法 */
}
.stack-wrapper {
  left: 0;
  top: 132px;
  right: 0;
  margin: 0 auto;
  position: absolute;
  z-index: 1000;
  width: 550px;
  height: 750px;
  padding: 0;
  list-style: none;
  pointer-events: none;
}
.OverBox-img {
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 5vh;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.OverBox-img img {
  width: 100%;
}
</style>
