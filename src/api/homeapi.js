import { api } from './config'
import axios from 'axios'
// 顶部Banner
export function getTopBanner () {
  const url = `${api}/sicc/index/getTopBanner`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取一期一会
export function getOneStageBanner () {
  const url = `${api}/sicc/index/getOneStageBanner`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取底部banner
export function getBottomBanner () {
  const url = `${api}/sicc/index/getBottomBanner`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取介绍
export function getIntroduce () {
  const url = `${api}/sicc/index/getIntroduce`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取一隅一食
export function getCornerMealBanner () {
  const url = `${api}/sicc/index/getCornerMealBanner`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取吧的详细内容
export function getBar (id, barid) {
  const url = `${api}/sicc/goods/getBar`
  return axios.get(url, {
    params: {
      userId: id,
      barId: barid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 添加心愿单
export function inLove (userid, id) {
  const url = `${api}/sicc/goods/inLove`
  return axios.post(url, {
    goodsId: id,
    userId: userid
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 取消心愿单
export function outLove (userid, id) {
  const url = `${api}/sicc/goods/outLove`
  return axios.post(url, {
    goodsId: id,
    userId: userid
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

//  获取热门问题
export function getAllHotIssues () {
  const url = `${api}/sicc/service/getAllHotIssues`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 会议预定
export function bookMeeting (data) {
  const url = `${api}/sicc/book/bookMeeting`
  return axios.post(url, {
    mobile: data.mobile,
    name: data.name,
    note: data.note,
    userId: data.userId
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
