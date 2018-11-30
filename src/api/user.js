import axios from 'axios'

// 修改个人资料
export function editUserInfoDetail(data) {
  const url = `${process.env.API_HOST}/sicc/user/editUserInfoDetail`
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
// 获取配置
export function getParam(urlList) {
  const url = `${process.env.API_HOST}/sicc/wechat/getParam`
  return axios.get(url, {
    params: {
      url: urlList
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取微信支付权限配置
export function createWechatPayOrder(urlList, userId, orderId) {
  console.log(userId, orderId)
  const url = `${process.env.API_HOST}/sicc/wechatpay/createWechatPayOrder`
  return axios.get(url, {
    params: {
      url: urlList,
      userId: userId,
      orderId: orderId
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 修改个人头像uploadHead
export function uploadHead(pictureId, mediaId) {
  const url = `${process.env.API_HOST}/sicc/user/uploadHead`
  return axios.get(url, {
    params: {
      pictureId: pictureId,
      mediaId: mediaId
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取用户全部信息
export function getUserInfo(userid) {
  const url = `${process.env.API_HOST}/sicc/user/getUserInfo`
  return axios.get(url, {
    params: {
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取优惠券
export function getAllCoupon(userid, state, type) {
  const url = `${process.env.API_HOST}/sicc/user/getAllCoupon`
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
// 查优惠券 /coupon/judgeAvailableCoupon
export function judgeAvailableCoupon(userid,amount) {
  const url = `${process.env.API_HOST}/sicc/coupon/judgeAvailableCoupon`
  return axios.get(url, {
    params: {
      userId: userid,
      amount: amount
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取用户个人资料
export function getUserInfoDetail(userid) {
  const url = `${process.env.API_HOST}/sicc/user/getUserInfoDetail`
  return axios.get(url, {
    params: {
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 查询个人积分以及会员等级
export function getUserLevel(userid) {
  const url = `${process.env.API_HOST}/sicc/user/getUserLevel`
  return axios.get(url, {
    params: {
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取全部心愿单
export function getWishList(userid) {
  const url = `${process.env.API_HOST}/sicc/user/getWishList`
  return axios.get(url, {
    params: {
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 修改密码
export function changePwd(data) {
  const url = `${process.env.API_HOST}/sicc/user/changePwd`
  return axios.post(url, {
    mobile: data.mobile,
    password: data.password
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 验证手机号
export function matchCode(data) {
  const url = `${process.env.API_HOST}/sicc/user/matchCode`
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
export function addAddress(data) {
  const url = `${process.env.API_HOST}/sicc/address/addAddress`
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
export function changeAddressById(data) {
  const url = `${process.env.API_HOST}/sicc/address/changeAddressById`
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
export function deleteAddressById(addressId) {
  const url = `${process.env.API_HOST}/sicc/address/deleteAddressById`
  return axios.get(url, {
    params: {
      addressId: addressId
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 根据ID查询收货地址
export function getAddressById(addressId) {
  const url = `${process.env.API_HOST}/sicc/address/getAddressById`
  return axios.get(url, {
    params: {
      addressId: addressId
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取所有收货地
export function getAllAddress(userid) {
  const url = `${process.env.API_HOST}/sicc/address/getAllAddress`
  return axios.get(url, {
    params: {
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取所有商品订单
export function getAllGoodsOrder(userid, type) {
  const url = `${process.env.API_HOST}/sicc/order/getAllGoodsOrder`
  return axios.get(url, {
    params: {
      userId: userid,
      type: type
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 删除商品订单
export function deleteOrder(userId, data) {
  const url = `${process.env.API_HOST}/sicc/order/deleteOrder`
  return axios.get(url, {
    params: {
      userId: userId,
      orderId: data
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取所有积分订单列表
export function getAllPointGoodsOrder(userid) {
  const url = `${process.env.API_HOST}/sicc/order/getAllPointGoodsOrder`
  return axios.get(url, {
    params: {
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取代金券列表
export function getALLVoucher(userid, type) {
  const url = `${process.env.API_HOST}/sicc/voucher/getALLVoucher`
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
export function givenToOne(data) {
  const url = `${process.env.API_HOST}/sicc/voucher/givenToOne`
  return axios.post(url, {
    mobile: data.mobile,
    deliverer: data.deliverer,
    couponId: data.couponId
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 验证手机号
export function checkMobile(mobile, userid) {
  const url = `${process.env.API_HOST}/sicc/voucher/checkMobile`
  return axios.get(url, {
    params: {
      mobile: mobile,
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 立即使用
export function getQRcode(id) {
  const url = `${process.env.API_HOST}/sicc/voucher/getQRcode`
  return axios.get(url, {
    params: {
      id: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
