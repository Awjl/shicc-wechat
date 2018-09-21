<template>
  <div class="hallList">
    <div class="hallItem" v-for="(str, index) in hallList" :key="index" @click="goDetails(str.goodsId)">
      <img :src="str.pictureUrl" alt="">
      <div class="hallItem-text">
        {{str.title}}
      </div>
    </div>
    <!-- <not-logged v-if="notShow"></not-logged> -->
  </div>
</template>

<script>
// import NotLogged from 'base/notlogin/notlogin'
import { mapGetters } from 'vuex'

export default {
  props: ['hallList'],
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
        this.$router.push({
          path: `/Details/${id}`
        })
      }
    }
  }
  // components: {
  //   NotLogged
  // }
}
</script>

<style>
.hallList{
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.hallItem {
  width: 335px;
  height: 300px;
  position: relative;
}
.hallItem-text{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background:  rgba(0,0,0,0.50);
  color: #fff;
  padding-left: 30px;
  font-size: 24px;
  box-sizing: border-box;
}
.hallItem img{
  width: 100%;
  height: 100%;
}
</style>
