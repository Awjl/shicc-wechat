<template>
  <div class="wish">
    <div v-for="(item, index) in items" :key="index">
      <div class="wish-title">
        <div class="wish-img">
          <img :src="item.url" alt="">
        </div>
        <div class="wish-name">
          <p>{{item.name}}</p>
          <p>{{item.time}}</p>
          <div class="new">
            <div>￥{{item.newPrice}}</div>
            <div class="newDetalis">查看详情</div>
          </div>
        </div>
      </div>
      <div class="line">
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import { getWishList } from 'api/user'
import { ERR_OK } from 'api/config'

export default {
  data () {
    return {
      items: []
    }
  },
  created () {
    this._getWishList()
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getWishList () {
      getWishList(this.UserID).then((res) => {
        if (res.code === ERR_OK) {
          console.log('获取心愿单============')
          console.log(res.data)
          this.items = res.data
        }
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
.new {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.new div {
  font-size: 24px;
  color: #4a4a4a;
  letter-spacing: 1.45px;
}
.new div.newDetalis {
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
