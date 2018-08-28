<template>
  <div class="food">
    <div class="foodItem" v-for="(str, index) in footList" :key="index" @click="goDetails(str.goodsId)">
      <img :src="str.pictureUrl" alt="">
      <div class="foodItem-text">
       <span>{{str.title}}</span> <span><span style="font-size:10px;">惠后价：</span>￥{{str.newPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['footList'],
  methods: {
    goDetails (index) {
      console.log('去详情' + index)
    }
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
