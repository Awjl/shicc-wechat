<template>
  <div class="modify">
    <div class="modify-tou">
      <div class="tou" @click="uplode">
        <img :src="user.url" alt="" v-if="!serverId">
        <img :src="wxImg" alt="" v-else>
      </div>
      <div class="tou-btn" @click="uplode">点击修改头像</div>
    </div>
    <div class="modifyList">
      <div class="modifyItem">
        <span>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</span> <input type="text" placeholder="请输入昵称" v-model="user.nickname">
      </div>
      <div class="line"></div>
      <div class="modifyItem">
        <span>个性签名：</span><input type="text" placeholder="请输入个性签名" v-model="user.sign">
      </div>
      <div class="line"></div>
      <div class="modifyItem">
        <span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
        <div class="sex">
          <span @click="sexgentlemen"><img :src="trueiocn" v-if="user.sex == 1"> <img :src="weiiocn" v-else>男</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span @click="sexLadies"><img :src="trueiocn" v-if="user.sex == 2"> <img :src="weiiocn" v-else>女</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="modifyItem" @click="setDate()">
        <span>出生日期：</span>
        <span v-if="user.birthday !== null">{{new Date(dataTime).getFullYear()}}-{{new Date(dataTime).getMonth() + 1}}-{{new Date(dataTime).getDate()}} </span>
        <!-- <span v-if="dataTime">{{dataTime}}</span> -->
      </div>
    </div>
    <div class="submission-btn" @click="_editUserInfoDetail">
      保存
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getUserInfoDetail, editUserInfoDetail, uploadHead, getParam } from 'api/user'
import { ERR_OK } from 'api/config'
import { wxChooseImage } from 'api/wxconfig'
export default {
  data() {
    return {
      imgTou: './static/myimg/my-tou.png',
      weiiocn: './static/myimg/wei.png',
      trueiocn: './static/myimg/true.png',
      sexMen: true,
      date: '',
      user: {
        birthday: null,
        nickname: '',
        sex: '',
        sign: '',
        url: '',
        userId: '',
        birthDate: '',
        pictureId: ''
      },
      dataTime: '',
      wxImg: '',
      serverId: ''
    }
  },
  created() {
    this._getUserInfoDetail()
  },
  computed: {
    ...mapGetters([
      'UserID'
    ])
  },
  methods: {
    _getUserInfoDetail() {
      getUserInfoDetail(this.UserID).then((res) => {
        if (res.code === ERR_OK) {
          console.log('查找个人信息============')
          console.log(res.data)
          this.user = res.data
          console.log(this.user.birthday)
          this.dataTime = this.user.birthday
        }
      })
    },
    _editUserInfoDetail() {
      this.user.userId = this.UserID
      this.user.birthDate = this.user.birthday
      console.log(this.user)
      editUserInfoDetail(this.user).then((res) => {
        if (res.code === ERR_OK) {
          console.log('修改个人资料============')
          console.log(res.data)
          alert('修改完成')
        }
      })
    },
    uplode() {
      // alert('123')
      getParam(window.location.href.split('#')[0]).then(res => {
        if (res.code === ERR_OK) {
          var self = this
          wx.config({
            debug: true, //调试模式   当为tru时，开启调试模式
            appId: res.data.appid,
            timestamp: res.data.timestamp, //签名时间戳
            nonceStr: res.data.nonceStr, //生成签名的随机串
            signature: res.data.signature, //签名
            jsApiList: ['chooseImage', 'uploadImage'],
          })
          wx.ready(function () {
            wx.chooseImage({
              count: 1, // 默认9
              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
              sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
              success: function (res) {
                self.wxImg = res.localIds[0].toString(); // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                wx.uploadImage({
                  localId: self.wxImg, // 需要上传的图片的本地ID，由chooseImage接口获得
                  isShowProgressTips: 1, // 默认为1，显示进度提示
                  success: function (res) {
                    self.serverId = res.serverId
                  }
                });
              }
            });
          })
        }
      })
    },
    setDate() {
      this.$picker.show({
        type: 'datePicker',
        onOk: date => {
          this.user.birthday = date
          console.log(this.user.birthday)
          this.dataTime = date.replace(new RegExp(/-/gm), '/')
        }
      })
    },
    sexgentlemen() {
      this.user.sex = 1
    },
    sexLadies() {
      this.user.sex = 2
    }
  },
  watch: {
    serverId: function () {
      uploadHead(this.user.pictureId, this.serverId).then((res) => {
        if (res.data) {
          alert('保存成功')
        } else {
          alert('保存失败')
          this.wxImg = ''
        }
      })
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
  background: #dcdddc;
}
.modify {
  width: 100vw;
  height: calc(100vh - 100px);
  background: #f2f2f2;
  overflow: hidden;
}
.modify-tou {
  width: 100%;
  height: 288px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tou {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}
.tou-btn {
  font-size: 20px;
  color: #9b9b9b;
}
.modifyList {
  margin-top: 10px;
  width: 100%;
  background: #fff;
  padding: 0 40px;
  box-sizing: border-box;
}
.modifyItem {
  width: 100%;
  height: 78px;
  line-height: 78px;
  display: flex;
  align-items: center;
}
.modifyItem > span {
  display: block;
  width: 130px;
  font-size: 24px;
  color: #4a4a4a;
}
.modifyItem input {
  width: 500px;
  outline: none;
}
.sex {
  display: flex;
}
.sex img {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
.sex span {
  display: flex;
  align-items: center;
}
.submission-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background: #59c2fa;
  text-align: center;
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 1.45px;
}
</style>
