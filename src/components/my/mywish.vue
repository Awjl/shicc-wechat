<template>
  <div class="wish">
    <div v-for="item in items.room">
      <div class="wish-title">
        <div class="wish-img">
          <img :src="item.url" alt="">
        </div>
        <div class="wish-name">
          <p>{{item.name}}</p>
          <p>{{item.useTime}} <span v-if="item.isBespeak === 1">需要预约</span> <span v-else>无需预约</span></p>
          <div class="new">
            <div>￥{{item.newPrice/100}}</div>
            <div class="newDetalis" @click="goDetalis(item.goodsId)">查看详情</div>
          </div>
        </div>
      </div>
      <div class="line">
      </div>
    </div>
    <div v-for="item in items.food">
      <div class="wish-title">
        <div class="wish-img">
          <img :src="item.url" alt="">
        </div>
        <div class="wish-name">
          <p>{{item.name}}</p>
          <p>周一至周日 无需预约</p>
          <div class="newEnd">
            <p>详情请至门店</p>
          </div>
        </div>
      </div>
      <div class="line">
      </div>
    </div>
    <div class="wishNone" v-if="items.room.length == 0 && items.food.length == 0">
      - 暂无信息 -
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import { getWishList } from 'api/user'
import { ERR_OK, vxconfig } from 'api/config'

export default {
  data() {
    return {
      items: {
        food: [],
        room: []
      }
    }
  },
  created() {
    this._getWishList()
    vxconfig(window.location.href.split('#')[0])
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getWishList() {
      getWishList(this.UserID).then((res) => {
        if (res.code === ERR_OK) {
          // console.log('获取心愿单============')
          console.log(res.data)
          this.items = res.data
        }
      })
    },
    goDetalis(id) {
      this.$router.push({
        path: `/PurchaseDetalis/${id}`
      })
    }
  }
}
</script>

<style>
img {
  width: 100%;
}
.line {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
}
.wishNone {
  width: 100%;
  text-align: center;
  margin: 100px 0;
  color: #ddd;
}
.wish-title {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  box-sizing: border-box;
}
.wish-img {
  width: 130px;
  height: 130px;
}
.wish-name {
  width: 540px;
  margin-top: 10px;
  line-height: 35px;
}
.wish-name p:nth-child(1) {
  font-size: 26px;
  color: #4a4a4a;
}
.wish-name p:nth-child(2) {
  font-size: 20px;
  color: #9b9b9b;
  letter-spacing: 1.09px;
}
.wish-name > .new {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.wish-name > .newEnd {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
.wish-name > .newEnd > p {
  font-size: 20px;
  color: #9b9b9b;
}
.wish-name > .new div {
  font-size: 24px;
  color: #4a4a4a;
  letter-spacing: 1.45px;
}
.wish-name > .new div.newDetalis {
  width: 130px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 2px solid #59c2fa;
  border-radius: 100px;
  color: #59c2fa;
  font-size: 20px;
}
</style>
