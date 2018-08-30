import { api } from './config'
import axios from 'axios'
// 登录
export function login (data) {
  const url = `${api}/sicc/user/login`
  return axios.post(url, {
    mobile: data.name,
    password: data.password
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 注册
export function Register (data) {
  const url = `${api}/sicc/user/register`
  return axios.post(url, {
    identifyingCode: data.code,
    mobile: data.iphone,
    password: data.password
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 发送验证码
export function sendSMS (iph) {
  const url = `${api}/sicc/user/sendSMS`
  return axios.get(url, {
    params: {
      mobile: iph
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取新手优惠券 22 等待完善
export function getNewbeeCoupon (iph) {
  const url = `${api}/sicc/service/getNewbeeCoupon`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
