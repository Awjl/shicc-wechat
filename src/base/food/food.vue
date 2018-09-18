<template>
  <div class="food">
    <div class="foodItem" v-for="(str, index) in footList" :key="index" @click="goDetails(str.goodsId)">
      <img :src="str.pictureUrl" alt="" style="vertical-align:middle">
      <div class="foodItem-text">
       <span>{{str.title}}</span> <span><span style="font-size:10px;">惠后价：</span>￥{{str.newPrice}}</span>
      </div>
    </div>
    <not-logged v-if="notShow"></not-logged>
  </div>
</template>

<script>
import NotLogged from 'base/notlogin/notlogin'
import { mapGetters } from 'vuex'
export default {
  props: ['footList'],
  data () {
    return {
      notShow: false
    }
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    notShowbox () {
      if (!this.UserID) {
        this.$router.push({
          path: '/Login'
        })
      }
    },
    goDetails (id) {
      this.notShowbox()
      if (this.UserID) {
        console.log(id)
        this.$router.push({
          path: `/PurchaseDetalis/${id}`
        })
      }
    }
  },
  components: {
    NotLogged
  }
}
</script>

<style>
.he20{
  height: 20px;
}
.food{
  width: 100%;
}
.foodItem{
  width: 100%;
  position: relative;
  margin-bottom: 20px;
}
.foodItem-text{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background:  rgba(0,0,0,0.50);
  color: #fff;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.foodItem-text span{
  font-size: 24px;
}
.foodItem img{
  width: 100%;
}
</style>
