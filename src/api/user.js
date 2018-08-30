import { api } from './config'
import axios from 'axios'

// 修改个人资料  22
export function editUserInfoDetail (data) {
  const url = `${api}/sicc/user/editUserInfoDetail`
  return axios.post(url, {
    birthday: data.birthday,
    nickname: data.nickname,
    sex: data.sex,
    sign: data.sign,
    userId: data.userId
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取用户全部信息 22
export function getUserInfo (userid) {
  const url = `${api}/sicc/user/getUserInfo`
  return axios.get(url, {
    params: {
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取优惠券 22
export function getAllCoupon (userid, state) {
  const url = `${api}/sicc/user/getAllCoupon`
  return axios.get(url, {
    params: {
      userId: userid,
      state: state
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取用户个人资料 22
export function getUserInfoDetail (userid) {
  const url = `${api}/sicc/user/getUserInfoDetail`
  return axios.get(url, {
    params: {
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 查询个人积分以及会员等级 22
export function getUserLevel (userid) {
  const url = `${api}/sicc/user/getUserLevel`
  return axios.get(url, {
    params: {
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取全部心愿单 22 
export function getWishList (userid) {
  const url = `${api}/sicc/user/getWishList`
  return axios.get(url, {
    params: {
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 修改密码 22 有疑问
export function changePwd (data) {
  const url = `${api}/sicc/user/changePwd`
  return axios.post(url, {
    mobile: data.mobile,
    password: data.password
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 添加收货地址 22
export function addAddress (data) {
  const url = `${api}/sicc/address/addAddress`
  return axios.post(url, {
    address: data.address,
    mobile: data.mobile,
    name: data.name,
    userId: data.userId,
    zipCode: data.zipCode
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 修改收货地址 22
export function changeAddressById (data) {
  const url = `${api}/sicc/address/changeAddressById`
  return axios.post(url, {
    address: data.address,
    mobile: data.mobile,
    name: data.name,
    userId: data.userId,
    zipCode: data.zipCode
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 根据ID删除收货地址 22
export function deleteAddressById (addressId) {
  const url = `${api}/sicc/address/deleteAddressById`
  return axios.get(url, {
    params: {
      addressId: addressId
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 根据ID查询收货地址 22
export function getAddressById (addressId) {
  const url = `${api}/sicc/address/getAddressById`
  return axios.get(url, {
    params: {
      addressId: addressId
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取所有收货地址 22
export function getAllAddress (userid) {
  const url = `${api}/sicc/address/getAllAddress`
  return axios.get(url, {
    params: {
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取所有商品订单 22 
export function getAllGoodsOrder (userid, type) {
  const url = `${api}/sicc/order/getAllGoodsOrder`
  return axios.get(url, {
    params: {
      userId: userid,
      type: type
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取所有积分订单列表 22 
export function getAllPointGoodsOrder (userid) {
  const url = `${api}/sicc/order/getAllPointGoodsOrder`
  return axios.get(url, {
    params: {
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
