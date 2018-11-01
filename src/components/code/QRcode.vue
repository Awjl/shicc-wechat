<template>
  <div>
    <div @click="goQRover(11)">扫描二维码</div>
  </div>
</template>
<script>
import { ERR_OK } from 'api/config'
import { getParam } from 'api/user'

export default {
  data() {
    return {}
  },
  created() {
    this._getQRcode()
  },
  methods: {
    _getQRcode() {
      console.log("231")
      getParam(window.location.href.split('#')[0]).then(res => {
        if (res.code === ERR_OK) {
          var self = this
          wx.config({
            debug: true, //调试模式   当为tru时，开启调试模式
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
                this.$router.push({
                  path: `/QRover/${res.resultStr}`
                })
              }
            });
          })
        }
      })
    },
    goQRover(num) {
      this.$router.push({
        path: `/QRover/${num}`
      })
    }
  }
}
</script>

<style>
</style>
