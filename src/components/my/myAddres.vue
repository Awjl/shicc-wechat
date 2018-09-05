<template>
  <div class="myadd">
    <ul>
      <li class="myadd-item " v-for="(item,index) in list " data-type="0" :key="index">
        <div class="myadd-box" @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip(item.id)">
          <div class="myadd-content">
            <div class="myadd-left">
              <div class="myaddtitle">
                <span>{{item.name}}</span>
                <span>{{item.mobile}}</span>
              </div>
              <p>{{item.city}}{{item.address}}</p>
            </div>
            <div class="myadd-right"  @click.stop="addAddres(item.id)">
              修改<img :src="rightImg" alt="">
            </div>
          </div>
        </div>
        <div class="delete" @click="deleteItem(index, item.id)" :data-index="index">删除</div>
      </li>
    </ul>
    <div class="addAddres" @click="addAddres(null)">
      +添加收货信息
    </div>
    <div class="myaddline"></div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { getAllAddress, deleteAddressById } from 'api/user'
import { ERR_OK } from 'api/config'

export default {
  data () {
    return {
      rightImg: './static/icon/addres.png',
      list: [],
      startX: 0,
      endX: 0
    }
  },
  created () {
    this._getAllAddress()
  },
  computed: {
    ...mapGetters([
      'UserID',
      'AddresId'
    ])
  },
  methods: {
    ...mapMutations({
      setAddres: 'SET_ADDRES'
    }),
    _getAllAddress () {
      getAllAddress(this.UserID).then((res) => {
        if (res.code === ERR_OK) {
          console.log('查询所有地址信息=============')
          console.log(res.data)
          this.list = res.data
        }
      })
    },
    _deleteAddressById (id) {
      deleteAddressById(id).then((res) => {
        if (res.code === ERR_OK) {
          console.log('删除地址信息=============')
          console.log(res.data)
        }
      })
    },
    addAddres (id) {
      console.log(id)
      this.$router.push({
        path: `/AddAddres/${id}`
      })
    },
    // 跳转
    skip (id) {
      if (this.checkSlide()) {
        this.restSlide()
      } else {
        if (this.$route.params.type === '1') {
          this.$store.commit('SET_ADDRES', id)
          console.log(this.AddresId)
          this.$router.back(-1)
        }
      }
    },
    // 滑动开始
    touchStart (e) {
      // 记录初始位置
      this.startX = e.touches[0].clientX
    },
    // 滑动结束
    touchEnd (e) {
      // 当前滑动的父级元素
      let parentElement = e.currentTarget.parentElement
      // 记录结束位置
      this.endX = e.changedTouches[0].clientX
      // 左滑
      if (parentElement.dataset.type === '0' && this.startX - this.endX > 30) {
        this.restSlide()
        parentElement.dataset.type = '1'
      }
      // 右滑
      if (parentElement.dataset.type === '1' && this.startX - this.endX < -30) {
        this.restSlide()
        parentElement.dataset.type = 0
      }
      this.startX = 0
      this.endX = 0
    },
    // 判断当前是否有滑块处于滑动状态
    checkSlide () {
      let listItems = document.querySelectorAll('.list-item')
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].dataset.type === '1') {
          return true
        }
      }
      return false
    },
    // 复位滑动状态
    restSlide () {
      let listItems = document.querySelectorAll('.list-item')
      // 复位
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].dataset.type = '0'
      }
    },
    // 删除
    deleteItem (index, id) {
      // 当前索引
      // 复位
      this.restSlide()
      // 删除
      this.list.splice(index, 1)
      this._deleteAddressById(id)
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.name === 'TrueExchange') {
      console.log('执行')
      to.meta.keepAlive = false
      next()
    }
    if (to.name === 'AddAddres') {
      console.log('执行')
      to.meta.keepAlive = false
      next()
    }
    if (to.name === 'My') {
      console.log('执行')
      to.meta.keepAlive = true
      next()
    }
  }
}
</script>

<style scoped>
ul {
  width: 100%;
  overflow: hidden;
  background: #F2F2F2;
}
.myaddline{
  width: 100%;
  height: 10px;
  background: #F2F2F2;
}
.myadd-item {
  position: relative;
  height: 136px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  margin-bottom: 10px;
}
.myadd-item[data-type='0'] {
  transform: translate3d(0, 0, 0);
}
.myadd-item[data-type='1'] {
  transform: translate3d(-100px, 0, 0);
}

.myadd-box {
  background: #fff;
  display: flex;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 0;
}
.myadd-content {
  padding: 0 50px;
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}
.myadd-item span{
  display: block;
  color: #333;
  overflow: hidden;
  font-size: 28px;
  color: #4A4A4A;
  letter-spacing: 1px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.myaddtitle {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.myadd-left p {
  margin-top: 20px;
  font-size: 24px;
  color: #9B9B9B;
  letter-spacing: 1px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.myadd-right {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 24px;
  color: #4A4A4A;
  letter-spacing: 0.67px;
}
.myadd-right img {
  width: 28px;
  height: 28px;
  margin-left: 12px;
}
.myadd-item .delete {
  width: 100px;
  height: 136px;
  line-height: 136px;
  background: #ff4949;
  font-size: 17px;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 0;
  right: -100px;
}
.addAddres {
  width: 100%;
  height: 136px;
  line-height: 136px;
  text-align: center;
  background: #fff;
  font-size: 22px;
  color: #000000;
  letter-spacing: 0.61px;
}
/* .footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: #f2f2f2;
} */
</style>
