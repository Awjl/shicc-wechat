import Cookies from 'js-cookie'

const UserId = 'userId'
const add = 'add'

export function getUserID () {
  return Cookies.get(UserId)
}

export function setUserID (id) {
  return Cookies.set(UserId, id)
}

export function removeUserID () {
  return Cookies.remove(UserId)
}
// dizhi
export function getAdd () {
  return Cookies.get(add)
}

export function setAdd (id) {
  return Cookies.set(add, id)
}

export function removeAdd () {
  return Cookies.remove(add)
}
