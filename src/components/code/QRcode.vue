<template>
  <div>
    <!-- <div @click="goQRover()">手动核销</div> -->
  </div>
</template>
<script>
import { ERR_OK } from 'api/config'
import { getParam } from 'api/user'

export default {
  data() {
    return {
      codeId: ''
    }
  },
  created() {
    this._getQRcode()
  },
  methods: {
    _getQRcode() {
      getParam(window.location.href.split('#')[0]).then(res => {
        if (res.code === ERR_OK) {
          var self = this
          wx.config({
            debug: false, //调试模式   当为tru时，开启调试模式
            appId: res.data.appid,
            timestamp: res.data.timestamp,
            nonceStr: res.data.nonceStr,
            signature: res.data.signature,
            jsApiList: ['scanQRCode'],
          })
          wx.ready(function () {
            wx.scanQRCode({
              needResult: 1,
              scanType: ["qrCode", "barCode"],
              success: function (res) {
                self.codeId = res.resultStr;
                self.$router.push({
                  path: `/QRover/${res.resultStr}`
                })
              }
            });
          })
        }
      })
    },
    goQRover() {
      this.$router.push({
        path: `/QRover/${this.codeId}`
      })
    }
  }
}
</script>

<style>
</style>
