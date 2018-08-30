import Cookies from 'js-cookie'

const UserId = 'userId'

export function getUserID () {
  return Cookies.get(UserId)
}

export function setUserID (id) {
  return Cookies.set(UserId, id)
}

export function removeUserID () {
  return Cookies.remove(UserId)
}
