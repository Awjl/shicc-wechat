import Cookies from 'js-cookie'

const UserId = 'userId'
const add = 'add'
const openId = 'openId'
export function getUserID() {
  return Cookies.get(UserId)
}
export function setUserID(id) {
  return Cookies.set(UserId, id, { expires: 7 })
}
export function removeUserID() {
  return Cookies.remove(UserId)
}
// openID
export function getOpen() {
  return Cookies.get(openId)
}
export function setOpen(id) {
  return Cookies.set(openId, id)
}
export function removeOpen() {
  return Cookies.remove(openId)
}

// dizhi
export function getAdd() {
  return Cookies.get(add)
}

export function setAdd(id) {
  return Cookies.set(add, id)
}

export function removeAdd() {
  return Cookies.remove(add)
}
// openId 
