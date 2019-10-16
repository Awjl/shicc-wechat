import axios from 'axios'
// 登录
export function login(data) {
  const url = `${process.env.API_HOST}/sicc/user/login`
  return axios.post(url, {
    mobile: data.name,
    password: data.password,
    openId: data.openId
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 注册
export function Register(data) {
  const url = `${process.env.API_HOST}/sicc/user/register`
  return axios.post(url, {
    identifyingCode: data.code,
    mobile: data.iphone,
    password: data.password,
    openId: data.openId
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 发送验证码
export function sendSMS(iph) {
  const url = `${process.env.API_HOST}/sicc/user/sendSMS`
  return axios.get(url, {
    params: {
      mobile: iph
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取新手优惠券
export function getNewbeeCoupon(userId) {
  const url = `${process.env.API_HOST}/sicc/coupon/getNewbeeCoupon`
  return axios.get(url, {
    params: {
      userId: userId
    },
    headers: {
      "session-token": window.sessionStorage.getItem('sessionToken')
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 停车注册查询
export function parkLogin(openId) {
  const url = `${process.env.API_HOST}/sicc/park/parkLogin`
  return axios.get(url, {
    params: {
      openId: openId
    },
    headers: {
      "session-token": window.sessionStorage.getItem('sessionToken')
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 绑定车牌号
export function bindPlateNumber(id, Num) {
  const url = `${process.env.API_HOST}/sicc/park/bindPlateNumber`
  return axios.get(url, {
    params: {
      userId: id,
      plateNumber: Num
    },
    headers: {
      "session-token": window.sessionStorage.getItem('sessionToken')
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 查询费用
export function queryParkingCost(id, Num, quanID) {
  console.log(id, Num, quanID)
  const url = `${process.env.API_HOST}/sicc/park/queryParkingCost`
  return axios.get(url, {
    params: {
      userId: id,
      plateNumber: Num,
      couponId: quanID
    },
    headers: {
      "session-token": window.sessionStorage.getItem('sessionToken')
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 支付接口
export function payCost(id) {
  const url = `${process.env.API_HOST}/sicc/park/payCost`
  return axios.get(url, {
    params: {
      userId: id
    },
    headers: {
      "session-token": window.sessionStorage.getItem('sessionToken')
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 支付成功
export function successParkPay(id) {
  const url = `${process.env.API_HOST}/sicc/park/successParkPay`
  return axios.get(url, {
    params: {
      id: id
    },
    headers: {
      "session-token": window.sessionStorage.getItem('sessionToken')
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}