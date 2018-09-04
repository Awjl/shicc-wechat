<template>
  <div class="submission">
    <div class="submission-list">
      <div class="submission-title">
        <div class="submission-img">
          <img :src="shoping.pictureUrl" alt="">
        </div>
        <div class="submission-name">
          <div class="submission-time">
            <p>{{shoping.name}}</p>
            <p>周一至周日 | 需预约</p>
          </div>
          <div class="new">
            ¥{{shoping.newPrice}}
          </div>
        </div>
      </div>
      <div class="line">
      </div>
      <div class="num">
        <div class="num-title">
          数量：
        </div>
        <div class="num-add">
          <img :src="subIcon" alt="" @click="subclick">
          <span>{{num}}</span>
          <img :src="addIcon" alt="" @click="addclick">
        </div>
      </div>
      <div class="line">
      </div>
      <div class="num">
        <div class="num-title">
          小计：
        </div>
        <div class="num-jiage">
          {{sum}}
        </div>
      </div>
    </div>
    <div class="submission-iph">
      <div class="iph-title">
        手机号:
      </div>
      <div class="iph-jiage">
        {{shoping.mobile}}
      </div>
    </div>
    <div class="submission-btn" @click="sumBtn">
      提交订单
    </div>
  </div>
</template>

<script>
import { getGoodsOrderDetail, changeAddressById } from 'api/shopping'
import { ERR_OK } from 'api/config'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      num: 1,
      sum: 1,
      img: './static/showImg/submission.png',
      addIcon: './static/icon/add-icon.png',
      subIcon: './static/icon/sub-icon.png',
      imgRight: './static/icon/ic_back.png',
      shoping: {
        goodsId: '',
        mobile: '',
        num: 1,
        total: 1,
        userId: ''
      }
    }
  },
  created () {
    this._getGoodsOrderDetail()
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getGoodsOrderDetail () {
      console.log(this.UserID, this.$route.params.id)
      getGoodsOrderDetail(this.UserID, this.$route.params.id).then((res) => {
        if (res.code === ERR_OK) {
          console.log(`提交订单=====`)
          console.log(res.data)
          this.shoping = res.data
          this.shoping.num = 1
          this.shoping.total = this.shoping.num * this.shoping.newPrice
          this.sum = this.shoping.newPrice
        }
      })
    },
    _changeAddressById () {
      console.log(this.shoping)
      this.shoping.userId = this.UserID
      changeAddressById(this.shoping).then((res) => {
        if (res.code === ERR_OK) {
          alert('提交成功')
        }
      })
    },
    sumBtn () {
      this._changeAddressById()
    },
    subclick () {
      if (this.shoping.num === 1) {
        return
      }
      this.shoping.num = this.shoping.num - 1
      this.shoping.total = this.shoping.newPrice * this.shoping.num
      this.num = this.shoping.num
      this.sum = this.shoping.total
    },
    addclick () {
      console.log('ce')
      this.shoping.num = this.shoping.num + 1
      this.shoping.total = this.shoping.newPrice * this.shoping.num
      this.num = this.shoping.num
      this.sum = this.shoping.total
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
}
.line {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
}
.submission {
  width: 100vw;
  height: calc(100vh - 100px);
  background: #f2f2f2;
  overflow: hidden;
}
.submission-list {
  margin: 38px 0 20px;
  padding: 20px 30px 0;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
}
.submission-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background: #59c2fa;
  text-align: center;
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 1.45px;
}
.submission-img {
  width: 130px;
  height: 130px;
}
.submission-name {
  width: 540px;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.submission-name .new {
  height: 45px;
  line-height: 45px;
  font-size: 24px;
  color: #9b9b9b;
  letter-spacing: 1.45px;
}
.submission-title {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.submission-time p:nth-child(1) {
  font-size: 24px;
  height: 45px;
  line-height: 45px;
  color: #4a4a4a;
}
.submission-time p:nth-child(2) {
  font-size: 24px;
  color: #59c2fa;
  letter-spacing: 1.45px;
}
.num-title{
  font-size: 24px;
  color: #4a4a4a;
}
.num {
  height: 73px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.num-add {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.num-jiage {
  font-size: 24px;
  color: #ed6969;
}
.num-add img {
  width: 30px;
  height: 30px;
}
.num-add span {
  padding: 5px 40px;
  background: #f2f2f2;
  margin: 0 10px;
}
.submission-iph {
  height: 73px;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.iph-title {
  color: #4a4a4a;
  font-size: 24px;
}
.iph-jiage img {
  width: 10px;
  height: 19px;
  transform: rotate(180deg);
  margin-left: 10px;
}
</style>
