import { getUserID, getAdd } from 'common/js/auth'

const user = {
  state: {
    UserID: getUserID(),
    AddresId: getAdd()
  },
  mutations: {
    SET_USERID: (state, UserID) => {
      state.UserID = UserID
    },
    SET_ADDRES: (state, AddresId) => {
      state.AddresId = AddresId
    }
  }
}

export default user
