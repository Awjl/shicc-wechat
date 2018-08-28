import Cookies from 'js-cookie'

const UserId = ''

export function getUserID (id) {
  return Cookies.get(UserId, id)
}

export function setUserID (id) {
  return Cookies.set(UserId, id)
}

export function removeUserID () {
  return Cookies.remove(UserId)
}
