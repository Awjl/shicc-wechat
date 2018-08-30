import { getUserID } from 'common/js/auth'

const user = {
  state: {
    UserID: getUserID()
  },
  mutations: {
    SET_USERID: (state, UserID) => {
      state.UserID = UserID
    }
  }
}

export default user
