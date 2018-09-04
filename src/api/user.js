import { api } from './config'
import axios from 'axios'

// 修改个人资料
export function editUserInfoDetail (data) {
  const url = `${api}/sicc/user/editUserInfoDetail`
  return axios.post(url, {
    birthDate: data.birthDate,
    nickname: data.nickname,
    sex: data.sex,
    sign: data.sign,
    id: data.userId
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取用户全部信息
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

// 获取优惠券
export function getAllCoupon (userid, state, type) {
  const url = `${api}/sicc/user/getAllCoupon`
  return axios.get(url, {
    params: {
      userId: userid,
      state: state,
      type: type
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取用户个人资料
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

// 查询个人积分以及会员等级
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

// 获取全部心愿单
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

// 修改密码
export function changePwd (data) {
  const url = `${api}/sicc/user/changePwd`
  return axios.post(url, {
    mobile: data.mobile,
    password: data.password
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 验证手机号
export function matchCode (data) {
  const url = `${api}/sicc/user/matchCode`
  return axios.get(url, {
    params: {
      mobile: data.mobile,
      code: data.code
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 添加收货地址
export function addAddress (data) {
  const url = `${api}/sicc/address/addAddress`
  console.log(data.city)
  return axios.post(url, {
    address: data.address,
    mobile: data.mobile,
    name: data.name,
    userId: data.userId,
    zipCode: data.zipCode,
    city: data.city
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 修改收货地址
export function changeAddressById (data) {
  const url = `${api}/sicc/address/changeAddressById`
  return axios.post(url, {
    address: data.address,
    mobile: data.mobile,
    name: data.name,
    userId: data.userId,
    id: data.id,
    zipCode: data.zipCode,
    city: data.city
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 根据ID删除收货地址
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

// 根据ID查询收货地址
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

// 获取所有收货地
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

// 获取所有商品订单
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

// 获取所有积分订单列表
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

// 获取代金券列表
export function getALLVoucher (userid, type) {
  const url = `${api}/sicc/voucher/getALLVoucher`
  return axios.get(url, {
    params: {
      userId: userid,
      type: type
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 转赠接口
export function givenToOne (data) {
  const url = `${api}/sicc/voucher/givenToOne`
  return axios.post(url, {
    mobile: data.mobile,
    deliverer: data.deliverer,
    couponId: data.couponId
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 验证手机号
export function checkMobile (mobile) {
  const url = `${api}/sicc/voucher/checkMobile`
  return axios.get(url, {
    params: {
      mobile: mobile
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
