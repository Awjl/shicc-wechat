<template>
  <div class="wish">
    <div v-for="(item, index) in items" :key="index">
      <div class="wish-title">
        <div class="wish-img">
          <img :src="item.img" alt="">
        </div>
        <div class="wish-name">
          <p>{{item.name}}</p>
          <p>{{item.time}}</p>
          <div class="new">
            <div>￥{{item.new}}</div>
            <div class="newDetalis">查看详情</div>
          </div>
        </div>
      </div>
      <div class="line">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      items: [{ img: './static/showImg/submission.png', name: '上海国际会议中心餐厅代金券', time: '周一至周日 无需预约', new: '300' }, { img: './static/showImg/submission.png', name: '上海国际会议中心餐厅代金券', time: '周一至周日 无需预约', new: '300' }, { img: './static/showImg/submission.png', name: '上海国际会议中心餐厅代金券', time: '周一至周日 无需预约', new: '300' }, { img: './static/showImg/submission.png', name: '上海国际会议中心餐厅代金券', time: '周一至周日 无需预约', new: '300' }, { img: './static/showImg/submission.png', name: '上海国际会议中心餐厅代金券', time: '周一至周日 无需预约', new: '300' }]
    }
  }
}
</script>

<style>
img {
  width: 100%;
}
.line {
  width: 100%;
  height: 2px;
  background: #dcdcdc;
}
.wish-title {
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
  margin-top: 10px;
  line-height: 35px;
}
.wish-name p:nth-child(1) {
  font-size: 24px;
  color: #4a4a4a;
}
.wish-name p:nth-child(2) {
  font-size: 18px;
  color: #9B9B9B;
  letter-spacing: 1.09px;
}
.new {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.new div{
  font-size: 24px;
  color: #4A4A4A;
  letter-spacing: 1.45px;
}
.new div.newDetalis{
  width: 130px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 2px solid #59C2FA;
  border-radius: 100px;
  color: #59C2FA;
  font-size: 18px;
}
</style>
