export const ERR_OK = 0

import { getParam } from 'api/user'
// wmore.wearewer.com/
export function vxconfig(url) {
  getParam(url).then(res => {
    if (res.code === ERR_OK) {
      wx.config({
        debug: false, //调试模式   当为tru时，开启调试模式
        appId: res.data.appid,
        timestamp: res.data.timestamp, //签名时间戳
        nonceStr: res.data.nonceStr, //生成签名的随机串
        signature: res.data.signature, //签名
        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'],
      })
      wx.ready(function () {
        //分享到朋友圈
        wx.onMenuShareTimeline({
          title: '上海国际会议中心', // 分享标题
          link: `http://www.shiccs.net/sicc/`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `http://www.shiccs.net/pictures/scan/head.jpg`, // 分享图标
          success: function () {
          },
        })
        wx.onMenuShareAppMessage({
          title: '上海国际会议中心', // 分享标题
          desc: '上海国际会议中心', // 分享描述
          link: `http://www.shiccs.net/sicc/`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `http://www.shiccs.net/pictures/scan/head.jpg`, // 分享图标
          // dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
          }
        });
      })
    }
  })
}