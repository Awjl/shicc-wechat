import { login } from 'api/login'
import { getUserID } from 'common/js/auth'
import { ERR_OK } from 'api/config'

const user = {
  state: {
    UserID: getUserID()
  },
  mutations: {
    SET_USERID: (state, UserID) => {
      state.UserID = UserID
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo.name, userInfo.password).then(res => {
          if (res === ERR_OK) {
            const data = res.data
            getUserID(data.UserID)
            commit('SET_USERID', data.UserID)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
