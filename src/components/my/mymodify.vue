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
        <span>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</span> <input type="text" placeholder="请输入昵称" v-model="user.nickname">
      </div>
      <div class="line"></div>
      <div class="modifyItem">
        <span>个性签名：</span><input type="text" placeholder="请输入个性签名" v-model="user.sign">
      </div>
      <div class="line"></div>
      <div class="modifyItem">
        <span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
        <div class="sex">
          <span @click="sexgentlemen"><img :src="trueiocn" v-if="user.sex == 1"> <img :src="weiiocn" v-else>男</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span @click="sexLadies"><img :src="trueiocn" v-if="user.sex == 2"> <img :src="weiiocn" v-else>女</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="modifyItem" @click="setDate()">
        <span>出生日期：</span>
        <span v-if="user.birthday !== null">{{dataTime | formatDate}} </span>
      </div>
    </div>
    <div class="submission-btn" @click="_editUserInfoDetail">
      保存
    </div>
    <!-- <div class="MyMoDifyBox" v-if="showMyMoDifyBox">
      <div class="MoDifyBox">
        <p>修改成功</p>
        <div @click="toMy">返回个人中心</div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getUserInfoDetail, editUserInfoDetail, uploadHead, getParam } from 'api/user'
import { ERR_OK, vxconfig } from 'api/config'
import { wxChooseImage } from 'api/wxconfig'
export default {
  data() {
    return {
      imgTou: './static/myimg/my-tou.png',
      weiiocn: './static/myimg/wei.png',
      trueiocn: './static/myimg/true.png',
      sexMen: true,
      showMyMoDifyBox: false,
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
    vxconfig(window.location.href.split('#')[0])
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
          // console.log('查找个人信息============')
          // console.log(res.data)
          this.user = res.data
          // console.log(this.user.birthday)
          this.dataTime = this.user.birthday
          // console.log(this.dataTime)
        }
      })
    },
    _editUserInfoDetail() {
      this.user.userId = this.UserID
      this.user.birthDate = this.user.birthday
      // console.log(this.user)
      editUserInfoDetail(this.user).then((res) => {
        if (res.code === ERR_OK) {
          // console.log('修改个人资料============')
          // console.log(res.data)
          this.$router.push({
            path: '/My'
          })
        }
      })
    },
    uplode() {
      getParam(window.location.href.split('#')[0]).then(res => {
        if (res.code === ERR_OK) {
          var self = this
          wx.config({
            debug: false,
            appId: res.data.appid,
            timestamp: res.data.timestamp,
            nonceStr: res.data.nonceStr,
            signature: res.data.signature,
            jsApiList: ['chooseImage', 'uploadImage']
          })
          wx.ready(function () {
            wx.chooseImage({
              count: 1, // 默认9
              sizeType: ['original', 'compressed'],
              sourceType: ['album', 'camera'],
              success: function (res) {
                self.wxImg = res.localIds[0].toString();
                wx.uploadImage({
                  localId: self.wxImg,
                  isShowProgressTips: 1,
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
          // console.log(this.user.birthday)
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
          // alert('保存成功')
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
.MyMoDifyBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(000, 000, 000, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.MoDifyBox {
  width: 400px;
  height: 300px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.MoDifyBox > p {
  text-align: center;
  font-size: 40px;
}
.MoDifyBox > div {
  width: 180px;
  height: 50px;
  line-height: 50px;
  margin-top: 50px;
  font-size: 12px;
  background: #59c2fa;
  border-radius: 10px;
  text-align: center;
  color: #ffffff;
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
  width: 140px;
  font-size: 28px;
  color: #4a4a4a;
}
.modifyItem input {
  width: 500px;
  outline: none;
  color: #4a4a4a;
  font-size: 28px;
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
  font-size: 28px;
  color: #4a4a4a;
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
