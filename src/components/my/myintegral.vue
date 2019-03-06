<template>
  <div class="integral">
    <div class="exchange-bg">
      <img :src="bg" alt>
      <div class="exchange-title">您现有积分</div>
      <div class="exchange-num">{{Levelnum.points}}</div>
      <div class="lvavel" v-if="Levelnum.level == 1">V1会员</div>
      <div class="lvavel" v-if="Levelnum.level == 2">V2会员</div>
    </div>
    <div class="integraltitleAll">
      <div class="integral-text">兑换记录</div>
    </div>
    <div class="integralList" v-for="(item, index) in listData" :key="index">
      <div class="integralItem">
        <div class="integralTitle">{{item.createDate | formatDate}}-{{item.createDate | formatDate}}</div>
        <div class="line"></div>
        <div class="integral-conter">
          <div class="integral-img">
            <img :src="item.url" alt>
          </div>
          <div class="integral-name">
            <div class="integralnum">
              <span>{{item.name}} {{item.goodsKind}}</span>
              <span>x{{item.num}}</span>
            </div>
            <div class="subintegral">-{{item.total}}积分</div>
          </div>
        </div>
        <div class="line"></div>
        <div class="kuaidi" v-if="item.courierNumber !== null">快递单号 {{item.courierNumber}}</div>
        <div class="kuaidi" v-else>暂无物流信息</div>
      </div>
    </div>
    <div class="integralListbox" v-show="showover">- 暂无兑换记录 -</div>
  </div>
</template>

<script>
import { ERR_OK, vxconfig } from "api/config";
import { getUserLevel, getAllPointGoodsOrder } from "api/user";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      bg: "./static/exchangeImg/bg.png",
      Levelnum: {},
      listData: [],
      showover: true
    };
  },
  created() {
    vxconfig(window.location.href.split("#")[0]);
    this._getUserLevel(this.UserID);
  },
  computed: {
    ...mapGetters(["UserID"])
  },
  methods: {
    _getUserLevel(id) {
      getUserLevel(id).then(res => {
        if (res.code === ERR_OK) {
          // console.log('会员积分=============================')
          // console.log(res.data)
          this.Levelnum = res.data;
          this._getAllPointGoodsOrder();
        }
      });
    },
    _getAllPointGoodsOrder() {
      getAllPointGoodsOrder(this.UserID).then(res => {
        if (res.code === ERR_OK) {
          // console.log('积分兑换列表=============')
          // console.log(res.data)
          this.listData = res.data;
          // console.log(this.listData)
          if (this.listData.length !== 0) {
            this.showover = false;
          }
        }
      });
    }
  }
};
</script>

<style>
.integral {
  background: #f2f2f2;
}
img {
  width: 100%;
}
.he20 {
  height: 6px;
}
.line {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
}
.exchange-bg {
  width: 100%;
  position: relative;
}
.exchange-title {
  width: 130px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 22px;
  color: #59c2fa;
}
.exchange-num {
  width: 177px;
  height: 122px;
  text-align: center;
  line-height: 122px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 80px;
  color: #59c2fa;
}
.lvavel {
  width: 100px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border: 1px solid #ed6969;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 20px;
  color: #ed6969;
}
.integraltitleAll {
  padding: 20px 0;
}
.integral-text {
  width: 140px;
  height: 40px;
  background: #59c2fa;
  color: #fff;
  line-height: 42px;
  text-align: center;
  border-radius: 0 100px 100px 0;
  font-size: 24px;
  /* margin: 20px 0; */
}
.integralList {
  background: #fff;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.integralListbox {
  width: 100%;
  text-align: center;
  background: #fff;
  height: 200px;
  line-height: 200px;
  color: #ddd;
}
.integralTitle {
  width: 100%;
  height: 83px;
  line-height: 83px;
  font-size: 24px;
  color: #9b9b9b;
}
.integral-conter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}
.integral-img {
  width: 150px;
  height: 150px;
}
.integral-name {
  width: 480px;
}
.integralnum {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.subintegral {
  height: 75px;
  line-height: 75px;
  text-align: right;
  font-size: 24px;
  color: #ed6969;
}
.kuaidi {
  height: 83px;
  line-height: 83px;
  font-size: 24px;
  color: #4a4a4a;
}
</style>
