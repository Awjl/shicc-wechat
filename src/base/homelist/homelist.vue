<template>
  <div class="homelist">
    <div class="homelist-title">
      上海国际会议中心
    </div>
    <div class="he20"></div>
    <div class="homelist-text">
      上海国际会议中心地处陆家嘴金融贸易中心，毗邻东方明珠电视塔，与外滩万国建筑群隔江相望，交通设施方便快捷，地理位置得天独厚，于1999年8月落成并正式对外营业。总建筑面积11万平方米，作为上海标志性新景观，被评为建国五十年十大经典建筑之一。
    </div>
    <div class="he20"></div>
    <div class="homelist-img">
      <img :src="listImg" alt="">
    </div>
    <div class="he20"></div>
    <div class="homelist-text">
      上海国际会议中心素以举办大型国际会议、商务论坛而蜚声海内外。位于酒店7楼的上海厅可同时容纳3000人会议，是目前国内最大的无柱型多功能厅，30个大小不等、风格迥异的多功能会议厅，均备有最先进的高科技影音系统及同声传译设备，无与伦比的会议场馆与专业化的会务服务都将展示您每次跨越成功的风采。
    </div>
    <div class="homelist-text">内设五星级的东方滨江大酒店，拥有273间景观豪华客房、风格迥异的餐厅设施以及丰富多样的娱乐与健身设施。</div>
    <div class="he20"></div>
    <div class="homelist-img">
      <img :src="listImgtwo" alt="">
    </div>
    <div class="he20"></div>
    <div class="homelist-text">
      上海国际会议中心出色地完成了"财富"全球论坛、APEC领导人峰会及系列会议、第35届亚洲发展银行年会、APEC第五次电信部长会议、联合国亚太经社会第60届会议、全球扶贫大会、世界工程师大会、第24届世界港口大会、第22届世界法律大会、第28届世界软件工程大会、上海合作组织成员国元首理事会会议以及非洲开发银行集团理事会年会、中国2010年上海世博会开幕欢迎晚宴以及2014年亚洲相互协作与信任措施会议第四次峰会欢迎晚宴等国内外重要会议及政要接待任务，受到各方赞誉。
    </div>
    <div class="he20"></div>
    <div class="listItem-img">
      <div class="Item-box">
        <div class="Item">
          <div class="item-img" v-for="(str, index) in item" :key="index">
            <img :src="str.img" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listImg: './static/img/listthree-1.png',
      listImgtwo: './static/img/listthree2.png',
      item: [
        { img: './static/img/listItem-1.png', name: '上海厅' },
        { img: './static/img/listItem-2.png', name: '上海厅' },
        { img: './static/img/listItem-3.png', name: '上海厅' },
        { img: './static/img/listItem-3.png', name: '上海厅' },
        { img: './static/img/listItem-3.png', name: '上海厅' }
      ]
    }
  },
  mounted () {
  }
}
</script>

<style>
.he20 {
  height: 20px;
}
.homelist-img img {
  width: 100%;
}
.homelist-title {
  font-size: 28px;
  color: #4a4a4a;
  letter-spacing: 1.7px;
  text-align: center;
}
.homelist-text {
  font-size: 24px;
  color: #9b9b9b;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  line-height: 40px;
}
.listItem-img {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.Item-box {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  box-sizing: content-box;
}
.Item {
  display: flex;
}
.item-img {
  margin: 0 10px;
}
.item-img img {
  width: 300px;
  height: 200px;
}
</style>
