<template>
  <div class="QRover">
    <div class="QRover-box">
      <div class="QRover-tile">核销代金券</div>
      <div class="QRitem">
        <span>订&nbsp;&nbsp;&nbsp;&nbsp;单&nbsp;&nbsp;&nbsp;&nbsp;号：</span>
        <p>{{obj.orderCode}}</p>
      </div>
      <div class="QRitem">
        <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</span>
        <p>{{obj.name}}</p>
      </div>
      <div class="QRitem">
        <span>券&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
        <p>{{obj.couponCode}}</p>
      </div>
      <div class="QRitem">
        <span>数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</span>
        <p>×1</p>
      </div>
      <div class="QRitem">
        <span>用户手机号&nbsp;：</span>
        <p>{{obj.mobile}}</p>
      </div>
      <div class="QRitem">
        <span>原&nbsp;&nbsp;&nbsp;&nbsp;价&nbsp;&nbsp;&nbsp;&nbsp;格：</span>
        <p>{{(obj.oldPrice / 100).toFixed(2)}}元</p>
      </div>
      <div class="QRitem">
        <span>现&nbsp;&nbsp;&nbsp;&nbsp;价&nbsp;&nbsp;&nbsp;&nbsp;格：</span>
        <p>{{(obj.newPrice / 100).toFixed(2)}}元</p>
      </div>
      <div class="QRitem">
        <span>有&nbsp;&nbsp;&nbsp;&nbsp;效&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
        <p>{{obj.termOfValidity}}</p>
      </div>
      <div class="QRitem">
        <span>规&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;则：</span>
        <p>{{obj.useRule}}</p>
      </div>
      <div class="QRitem">
        <span>使&nbsp;用&nbsp;&nbsp;&nbsp;时&nbsp;间：</span>
        <p>{{obj.useTime}}</p>
      </div>
      <div class="QRbtn">
        <div class="true" @click="_writeOffVoucher()">确认</div>
        <div @click="closeWx">取消</div>
      </div>
    </div>
  </div>
</template>
<script>
import { getVoucherInfo, writeOffVoucher } from "api/shopping";
export default {
  data() {
    return {
      obj: {
        couponCode: "",
        id: "",
        mobile: "",
        name: "",
        newPrice: "",
        oldPrice: "",
        orderCode: "",
        state: "",
        termOfValidity: "",
        useRule: "",
        useTime: ""
      }
    };
  },
  created() {
    this._getQRcode();
  },
  methods: {
    _getQRcode() {
      getVoucherInfo(this.$route.params.id).then(res => {
        // console.log(res)
        this.obj = res.data;
      });
    },
    _writeOffVoucher() {
      writeOffVoucher(this.$route.params.id).then(res => {
        // console.log(res)
        if (res.code === 0) {
          if (res.data.code === 200) {
            this.$router.push({
              path: "/QRsuccessCode"
            });
          } else {
            alert(res.data.message);
          }
        }
      });
    },
    closeWx() {
      WeixinJSBridge.call("closeWindow");
    }
  }
};
</script>

<style>
.QRover-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
}
.QRover-tile {
  width: 100%;
  text-align: center;
  font-size: 40px;
  color: #59c2fa;
  font-weight: bold;
  margin: 100px 0;
}
.QRitem {
  display: flex;
  margin: 20px 0;
  font-size: 30px;
  align-items: center;
  width: 690px;
}
.QRitem span {
  display: block;
  width: 200px;
  font-size: 26px;
}
.QRitem > p {
  width: 450px;
}
.QRbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.QRbtn > div {
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 26px;
  border: 2px solid #ddd;
  margin: 0 20px;
  border-radius: 10px;
}
.QRbtn > div.true {
  border: 1px solid #59c2fa;
  background: #59c2fa;
  color: #fff;
}
</style>
