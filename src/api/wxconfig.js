import axios from 'axios'
import { ERR_OK } from "api/config";

const appId = ''
const timestamp = ''
const nonceStr = ''
const signature = ''
const packages = ''
const paySign = ''
// 请求参数
function getParam(urlList) {
  const url = `${process.env.API_HOST}/wmore/user/getParam`
  return axios.get(url, {
    params: {
      url: urlList
    }
  }).then((res) => {
    if (res.code === ERR_OK) {
      appId = res.data.appId;
      timestamp = res.data.timeStamp;
      nonceStr = res.data.nonceStr;
      signature = res.data.signature;
      packages = res.data.package;
      paySign = res.data.paySign;
    }
  })
}
// 配置公共参数 
// onMenuShareAppMessage 好友分享
// onMenuShareTimeline 朋友圈分享
// chooseImage 选图接口
// uploadImage 上传接口
// chooseWXPay 支付接口调用
// scanQRCode 微信扫一扫
function allBase() {
  wx.config({
    debug: true, //调试模式   当为true时，开启调试模式
    appId: appId,
    timestamp: timestamp, //签名时间戳
    nonceStr: nonceStr, //生成签名的随机串
    signature: signature, //签名
    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'chooseImage', 'uploadImage', 'chooseWXPay', 'scanQRCode'],
  })
}
// 分享至朋友圈
function onMenuShareTimeline() {
  wx.onMenuShareTimeline({
    title: '上海国际会议中心', // 分享标题
    link: `${window.location.href.split('#')[0]}/govx.html`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: `${window.location.href.split('#')[0]}/static/images/logo.jpg`, // 分享图标
    success: function () {
      console.log('分享成功')
    },
  })
}
// 分享至好友
function onMenuShareAppMessage() {
  wx.onMenuShareAppMessage({
    title: '上海国际会议中心', // 分享标题
    desc: '上海国际会议中心', // 分享描述
    link: `${window.location.href.split('#')[0]}/govx.html`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: `${window.location.href.split('#')[0]}/static/images/logo.jpg`, // 分享图标
    // dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
      console.log('分享成功')
    }
  });
}
// 微信支付
function chooseWXPay() {
  wx.chooseWXPay({
    timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
    nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
    package: packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
    signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
    paySign: paySign, // 支付签名
    success: function (res) {
      console.log(res)
    }
  });
}
// 微信扫一扫
function scanQRCode() {
  wx.scanQRCode({
    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
    scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
    success: function (res) {
      // var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
      console.log(res)
    }
  });
}
// 上传图片
function chooseImage() {
  wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      let wxImg = res.localIds[0].toString(); // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
      wx.uploadImage({
        localId: wxImg, // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
          return res.serverId
        }
      });
    }
  });
}

// 分享调用
export function wxshare(url) {
  getParam(url)
  allBase()
  wx.ready(function () {
    onMenuShareTimeline()
    onMenuShareAppMessage()
  })
}
// 微信支付
export function wxPay(url) {
  getParam(url)
  allBase()
  wx.ready(function () {
    chooseWXPay()
  })
}
// 扫一扫
export function wxScanQRCode(url) {
  getParam(url)
  allBase()
  wx.ready(function () {
    scanQRCode()
  })
}
// 上传头像
export function wxChooseImage(url) {
  getParam(url)
  allBase()
  wx.ready(function () {
    return chooseImage()
  })
}
