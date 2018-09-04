<template>
  <div class="addaddres">
    <div class="list-inp">
      <input type="text" placeholder="收货人姓名" v-model="data.name">
    </div>
    <div class="list-inp">
      <input type="text" placeholder="手机号码" v-model="data.mobile">
    </div>
    <div class="list-inp">
      <input type="text" placeholder="省份、城市、县区" v-model="data.city">
    </div>
    <div class="list-inp">
      <input type="text" placeholder="详细地址（街道、楼牌号等）" v-model="data.address">
    </div>
    <div class="addaddresbtn" @click="btn">
      保存
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { addAddress, changeAddressById, getAddressById } from 'api/user'
import { ERR_OK } from 'api/config'

export default {
  data () {
    return {
      data: {
        address: '',
        mobile: '',
        name: '',
        userId: '',
        zipCode: 0,
        city: '',
        id: ''
      }
    }
  },
  created () {
    this._getAddressById()
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getAddressById () {
      console.log(this.$route.params.id !== 'null')
      if (this.$route.params.id !== 'null') {
        getAddressById(this.$route.params.id).then((res) => {
          if (res.code === ERR_OK) {
            this.data = res.data
          }
        })
      } else {
        this.data = {
          address: '',
          mobile: '',
          name: '',
          userId: '',
          zipCode: 0,
          city: ''
        }
      }
    },
    _changeAddressById () {
      this.data.userId = this.UserID
      this.data.id = this.$route.params.id
      changeAddressById(this.data).then((res) => {
        if (res.code === ERR_OK) {
          alert('修改完成')
          this.$router.back(-1)
        }
      })
    },
    _addAddress () {
      this.data.userId = this.UserID
      addAddress(this.data).then((res) => {
        if (res.code === ERR_OK) {
          alert('保存成功')
          this.$router.back(-1)
        }
      })
    },
    btn () {
      if (this.$route.params.id === 'null') {
        this._addAddress()
      } else {
        this._changeAddressById()
      }
    }
  }
}
</script>

<style scoped>
.addaddres {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.list-inp {
  width: 100%;
  height: 93px;
  line-height: 93px;
  border-bottom: 1px solid #dcdcdc;
}
.list-inp input {
  width: 100%;
  outline: none;
}
.addaddresbtn {
  width: 690px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: #59c2fa;
  border-radius: 10px;
  margin-top: 200px;
  font-size: 30px;
  color: #fff;
}
</style>
