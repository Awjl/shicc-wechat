<template>
  <div class="wish">
    <div class="wish-title"  v-for="(item, index) in items" :key="index">
      <div class="wish-img">
        <img :src="img" alt="">
      </div>
      <div class="wish-name">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [{img: './static/showImg/submission.png', name: '上海国际会议中心餐厅代金券', time: '周一至周日 无需预约', new: '300'}]
    }
  }
}
</script>

<style>
img{
  width: 100%
}
.wish-title {
  margin-bottom: 20px;
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
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}

</style>
