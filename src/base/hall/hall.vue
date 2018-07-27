<template>
  <div class="hallList">
    <div class="hallItem" v-for="(str, index) in hallList" :key="index" @click="goDetails(index)">
      <img :src="str.img" alt="">
      <div class="hallItem-text">
        {{str.text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hallList'],
  methods: {
    goDetails (index) {
      console.log('去详情' + index)
    }
  }
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
  height: 40px;
  line-height: 40px;
  background:  rgba(0,0,0,0.50);
  color: #fff;
  padding-left: 30px;
  font-size: 18px;
  box-sizing: border-box;
}
.hallItem img{
  width: 100%;
  height: 100%;
}
</style>
