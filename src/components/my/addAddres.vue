<template>
  <div class="addaddres">
    <div class="addaddreslist-inp">
      <input
        type="text"
        placeholder="收货人姓名"
        v-model="data.name"
        @blur="OnBlurName()"
      >
      <span>{{nameERR}}</span>
    </div>
    <div class="addaddreslist-inp">
      <input
        type="text"
        placeholder="手机号码"
        v-model="data.mobile"
        @blur="OnBlur()"
      >
      <span>{{content}}</span>
    </div>
    <div
      class="addaddreslist-inp"
      @click="setAddres()"
    >
      {{data.city}}
      <span>{{addressERR}}</span>
    </div>
    <div class="addaddreslist-inp">
      <input
        type="text"
        placeholder="详细地址（街道、楼牌号等）"
        v-model="data.address"
        @blur="OnBluradd()"
      >
      <span>{{addErr}}</span>
    </div>
    <div
      class="addaddresbtn"
      @click="btn"
    >
      保存
    </div>
    <Addres
      :addresStater="addresStater"
      v-on:Addres="Addres"
    ></Addres>
  </div>
</template>

<script>
import Addres from "base/addres/addres";
import { mapGetters } from 'vuex'
import { addAddress, changeAddressById, getAddressById } from 'api/user'
import { ERR_OK } from 'api/config'

let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/

export default {
  data() {
    return {
      addresStater: false,
      content: '',
      nameERR: '',
      addressERR: '',
      addErr: '',
      data: {
        address: '',
        mobile: '',
        name: '',
        userId: '',
        zipCode: 0,
        city: '请选择省份、城市、县区',
        id: ''
      }
    }
  },
  created() {
    this._getAddressById()
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getAddressById() {
      // console.log(this.$route.params.id !== 'null')
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
          city: '请选择省份、城市、县区',
        }
      }
    },
    _changeAddressById() {
      this.data.userId = this.UserID
      this.data.id = this.$route.params.id
      changeAddressById(this.data).then((res) => {
        if (res.code === ERR_OK) {
          alert('修改完成')
          this.$router.back(-1)
        }
      })
    },
    _addAddress() {
      this.data.userId = this.UserID
      addAddress(this.data).then((res) => {
        if (res.code === ERR_OK) {
          alert('保存成功')
          this.$router.back(-1)
        }
      })
    },
    Addres: function (Addres) {
      // childValue就是子组件传过来的值
      this.addresStater = false;
      if (!Addres) {
        this.data.city = '请选择省份、城市、县区'
      } else {
        this.data.city = `${Addres.Province}-${Addres.City}-${
          Addres.District
          }`;
      }
      // this.myList = childValue
    },
    setAddres() {
      this.addresStater = true;
      if (this.data.city == '请选择省份、城市、县区') {
        this.addressERR = '必填'
      } else {
        this.addressERR = ''
      }
    },
    OnBlur() {
      if (this.data.mobile) {
        if (phoneReg.test(this.data.mobile)) {
          this.content = '必填'
        } else {
          this.content = '格式不正确'
        }
      } else {
        this.content = '必填'
      }
    },
    OnBlurName() {
      if (!this.data.name) {
        this.nameERR = '必填'
      } else {
        this.nameERR = ''
      }
    },
    OnBluradd() {
      if (!this.data.address) {
        this.addErr = '必填'
      } else {
        this.addErr = ''
      }
    },
    btn() {
      if (this.data.city == '请选择省份、城市、县区') {
        this.addressERR = '必填'
      } else {
        this.addressERR = ''
      }
      if (this.$route.params.id === 'null') {
        if (this.data.city != '请选择省份、城市、县区' && this.data.mobile != '' && this.data.name != '' && this.data.address != '' && this.data.address != '') {
          this._addAddress()
        }
      } else {
        if (this.data.city != '请选择省份、城市、县区' && this.data.mobile != '' && this.data.name != '' && this.data.address != '' && this.data.address != '') {
          this._changeAddressById()
        }
      }
    }
  },
  components: {
    Addres
  },
  // beforeRouteLeave (to, from, next) {
  //   to.meta.keepAlive = false
  //   next()
  // }
}
</script>

<style scoped>
.addaddres {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.addaddreslist-inp {
  width: 100%;
  height: 93px;
  line-height: 93px;
  border-bottom: 1px solid #dcdcdc;
  color: #666;
  position: relative;
  font-size: 24px;
}
.addaddreslist-inp > span {
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  height: 93px;
  line-height: 93px;
  color: red;
}
.addaddreslist-inp input {
  width: 100%;
  outline: none;
}
.addaddreslist-inp input::-webkit-input-placeholder {
  color: #666;
  font-size: 24px;
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
