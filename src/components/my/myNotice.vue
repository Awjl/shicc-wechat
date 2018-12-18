<template>
  <div class="NoticeList">
    <div class="NoticeItem" v-for="(item, index) in noticeList" :key="index" @click="LookDetails(item)">
      <div class="NoticeItemImg">
        <img src="./myicon/noticeAct.png" alt="">
      </div>
      <div class="NoticeItemConter">
        <p class="NoticeItemConterTitle">
          <span>{{item.title}}</span>          
        </p>
        <p class="NoticeItemCon">{{item.content}}</p>
      </div>
      <div class="NoticeItemState">
        <span v-if="item.isRead === 1">未读</span>
        <span v-else>已读</span>
      </div>
    </div>
    <div class="NoticeListBox" v-if="show">
      <div class="NoticeListBox-title">
        {{noticeContent.title}}
      </div>
      <p class="NoticeListBox-time">{{noticeContent.createTime}}</p>
      <div class="NoticeListBoxCon">
          {{noticeContent.content}}
      </div>
      <div class="NoticeListBox-btn" @click="hideBox">
        确定
      </div>
    </div>
    <div class="integralListbox" v-if='noticeList.length == 0'>
      - 暂无通知记录 -
    </div>
  </div>
</template>

<script>
import { getAllNotice, setReadNotice } from 'api/user'
import { vxconfig } from 'api/config'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      noticeList: [],
      show: false,
      noticeContent: {
        content:'',
        createTime:'',
        title: ''
      }
    }
  },
  created() {
    this._getAllNotice()
        vxconfig(window.location.href.split('#')[0])

  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getAllNotice() {
      getAllNotice(this.UserID).then(res => {
        if (res.code === 0) {
          console.log(res.data)
          this.noticeList = res.data
        }
      })
    },
    hideBox() {
      this.show = false
      this._getAllNotice()
    },
    LookDetails(item) {
      setReadNotice(item.id).then( res => {
        if (res.code === 0) {
          this.noticeContent = item
          this.show = true
        }
      })
    }
  }
}
</script>

<style>
.NoticeList{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  overflow-y: auto;
  padding-top: 20px;
  box-sizing: border-box;
}
.NoticeList .NoticeItem {
  display: flex;
  padding:20px 30px;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
}
.NoticeList .NoticeItem .NoticeItemImg {
  width: 80px;
  height: 80px;
  margin-right: 20px;
}
.NoticeItemConter p{
  width: 500px;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-size: 24px;
  color: #999999;
}
.NoticeItemConter p.NoticeItemConterTitle {
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  color: #222222;
}
.NoticeItemState {
  width: 100px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.integralListbox {
  width: 100%;
  text-align: center;
  height: 200px;
  line-height: 200px;
  color: #ddd;
}
.NoticeItemState span{
  font-size: 20px;
  color: #999999;
  letter-spacing: 1.45px;
}
.NoticeItem .NoticeItemImg img {
  width: 100%;
}
.NoticeListBox {
  position: fixed;
  top: 20vh;
  left: 0;
  right: 0;
  width: 600px;
  padding: 30px 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #999;
  margin: auto;
}
.NoticeListBox-title {
  text-align: center;
  font-size: 28px;
  color: #222222;
}
.NoticeListBox-time {
  text-align: center;
  font-size: 24px;
  color: #999999;
  margin: 20px 0;
}
.NoticeListBoxCon {
  font-size: 24px;
  line-height: 34px;
  color: #222222;
  margin: 30px 0;
  text-align: center;
}
.NoticeListBox-btn {
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin: 0 auto;
  background: #59c2fa;
  color: #fff;
  border-radius: 10px;

}
</style>
