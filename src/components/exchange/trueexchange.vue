<template>
  <div class="trueexchange">
    <div class="he30"></div>
    <div class="addres addresactive" @click="goAddres(1)" v-if="show">
      + 添加收货信息
    </div>
    <div class="addres" v-else @click="goAddres(1)">
      <div class="list-content">
        <div class="list-left">
          <div class="title">
            <span>{{addres.name}}</span>
            <span>{{addres.mobile}}</span>
          </div>
          <p>{{addres.city}}{{addres.address}}</p>
        </div>
        <!-- <div class="list-right">
          修改<img :src="rightImg" alt="">
        </div> -->
      </div>
    </div>
    <div class="line"></div>
    <div class="list">
      <div class="list-img">
        <img :src="data.pictureUrl" alt="">
      </div>
      <div class="list-name">
        <p>{{data.name}}</p>
        <p>{{data.kind}}</p>
        <div class="list-jiage">
          <div class="new">
            {{data.point}}积分
          </div>
          <div class="num">
            <span>X{{num}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        兑换积分：{{data.point}}
      </div>
      <div class="footer-right" @click="trueorder">
        确定兑换
      </div>
    </div>
  </div>
</template>

<script>
import { getPointGoodsOrderDetail, createPointOrder } from 'api/shopping'
import { getAddressById } from 'api/user'
import { ERR_OK } from 'api/config'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      rightImg: './static/icon/addres.png',
      img: './static/showImg/address.png',
      num: 1,
      show: true,
      data: {
        userId: '',
        goodsId: '',
        kind: '',
        point: '',
        pictureUrl: '',
        mobile: '',
        num: 1,
        total: '',
        addressId: '',
        goodsKind: ''
      },
      addres: {}
    }
  },
  created () {
    this._getPointGoodsOrderDetail()
    this._getAddressById()
  },
  computed: {
    ...mapGetters([
      'UserID',
      'AddresId'
    ])
  },
  methods: {
    _getAddressById () {
      if (this.AddresId) {
        getAddressById(this.AddresId).then((res) => {
          if (res.code === ERR_OK) {
            console.log('获取地址ID===================================================')
            this.show = false
            console.log(res.data)
            this.addres = res.data
          }
        })
      } else {
        this.show = true
      }
    },
    _getPointGoodsOrderDetail () {
      this.data.userId = this.UserID
      this.data.goodsId = this.$route.params.id
      this.data.kind = this.$route.params.kind
      this.data.point = this.$route.params.point
      getPointGoodsOrderDetail(this.data).then((res) => {
        if (res.code === ERR_OK) {
          console.log('查询=============================')
          console.log(res.data)
          this.data = res.data
        }
      })
    },
    _createPointOrder (data) {
      createPointOrder(data).then((res) => {
        if (res.code === ERR_OK) {
          if (res.data.code === 500206) {
            alert('库存不足')
          } else {
            alert('订单提交成功')
          }
        }
      })
    },
    goAddres (tyep) {
      this.$router.push({
        path: `/MyAddres/${tyep}`
      })
    },
    trueorder () {
      this.data.addressId = this.AddresId
      this.data.goodsKind = this.data.kind
      this.data.total = this.data.point
      this.data.userId = this.UserID
      this.data.goodsId = this.$route.params.id
      this.data.num = 1
      console.log(this.data)
      this._createPointOrder(this.data)
    }
  }
}
</script>

<style scoped>
.he30{
  height: 30px;
}
img {
  width: 100%;
}
.line {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
  margin: 30px 0;
}
.trueexchange {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.addres {
  width: 100%;
  height: 136px;
  text-align: center;
  background: #dcdcdc;
}
.addresactive {
  line-height: 136px;
}
.list-content {
  height: 100%;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}
.list-content span {
  display: block;
  color: #333;
  font-size: 28px;
  color: #4a4a4a;
  letter-spacing: 1px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.list-left p {
  margin-top: 20px;
  font-size: 24px;
  color: #9b9b9b;
  letter-spacing: 1px;
  white-space: nowrap;
  text-align: left;
}
.list-right {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #4a4a4a;
  letter-spacing: 0.67px;
}
.list-right img {
  width: 28px;
  height: 28px;
  margin-left: 12px;
}
.list {
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.list-img {
  width: 130px;
  height: 130px;
}
.list-name {
  width: 520px;
}
.list-name p:nth-child(1) {
  margin-top: 10px;
  font-size: 30px;
  height: 35px;
  line-height: 35px;
}
.list-name p:nth-child(2) {
  font-size: 22px;
  color: #9b9b9b;
  height: 35px;
  line-height: 35px;
}
.list-jiage {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-jiage>.new {
  font-size: 28px;
  color: #ed6969;
  letter-spacing: 0.78px;
}
.num-add {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.num {
  font-size: 24px;
  /* color: #ed6969; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88px;
  border-top: 1px solid #dcdcdc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer div {
  width: 50%;
  text-align: center;
  height: 88px;
  line-height: 88px;
}
.footer div.footer-left {
  font-size: 28px;
  color: #ed6969;
  letter-spacing: 1px;
}
.footer div.footer-right {
  background: #59c2fa;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 0.86px;
}
</style>
