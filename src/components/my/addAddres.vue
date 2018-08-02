<template>
  <div class="addaddres">
    <div class="list-inp">
      <input type="text" placeholder="收货人姓名">
    </div>
    <div class="list-inp">
      <input type="text" placeholder="手机号码">
    </div>
    <div class="list-inp">
      <input type="text" placeholder="省份、城市、县区">
    </div>
    <div class="list-inp">
      <input type="text" placeholder="详细地址（街道、楼牌号等）">
    </div>
    <div class="btn" @click="btn">
      保存
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    btn () {
      this.$router.back(-1)
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
  border-bottom: 1px solid #DCDCDC;
}
.list-inp input{
  width: 100%;
  outline: none;
}
.btn {
  width: 690px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: #59C2FA;
  border-radius: 10px;
  margin-top: 200px;
  font-size: 30px;
  color: #fff;
}
</style>
