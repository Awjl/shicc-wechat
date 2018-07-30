<template>
  <div class="home">
    <Swiper :listImg="listImg"></Swiper>
    <div class="he40"></div>
    <div class="title">
      <div class="title-text">一期一会</div>
    </div>
    <div class="he20"></div>
    <hall :hallList="hallList"></hall>
    <div class="he20"></div>
    <div class="title">
      <div class="title-text">一隅一食</div>
    </div>
    <div class="he20"></div>
    <Food :footList="footList"></Food>
    <div class="title">
      <div class="title-text">关于我们</div>
    </div>
    <div class="he20"></div>
    <HomeList></HomeList>
  </div>
</template>

<script>
import Swiper from 'base/swiper/swiper'
import Hall from 'base/hall/hall'
import Food from 'base/food/food'
import HomeList from 'base/homelist/homelist'

export default {
  data () {
    return {
      listImg: [
        {img: './static/img/banner.png', id: 1},
        {img: './static/img/banner.png', id: 1},
        {img: './static/img/banner.png', id: 1},
        {img: './static/img/banner.png', id: 1}
      ],
      hallList: [
        {img: './static/img/listone-1.png', text: '大堂吧'},
        {img: './static/img/listone-2.png', text: '咖啡吧'}
      ],
      footList: [
        {img: './static/img/listtwo-1.png', text: '上海风味餐厅 名厨料理', Price: 600},
        {img: './static/img/listtwo-2.png', text: '豪华江景房 专享服务', Price: 700}
      ]
    }
  },
  components: {
    Swiper,
    Hall,
    Food,
    HomeList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.he20{
  height: 20px;
}
.he40{
  height: 40px;
}
.title-text{
  width: 140px;
  height: 30px;
  background: #59C2FA;
  color: #fff;
  line-height: 30px;
  text-align: center;
  border-radius: 0 100px 100px 0;
  font-size: 20px;
}
</style>
