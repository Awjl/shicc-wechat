import axios from 'axios'
//  获取userId
export function defaultLogin() {
  const url = `${process.env.API_HOST}/sicc/user/defaultLogin`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 顶部Banner
export function getTopBanner() {
  const url = `${process.env.API_HOST}/sicc/index/getTopBanner`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取一期一会
export function getOneStageBanner() {
  const url = `${process.env.API_HOST}/sicc/index/getOneStageBanner`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取底部banner
export function getBottomBanner() {
  const url = `${process.env.API_HOST}/sicc/index/getBottomBanner`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取介绍
export function getIntroduce() {
  const url = `${process.env.API_HOST}/sicc/index/getIntroduce`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取一隅一食
export function getCornerMealBanner() {
  const url = `${process.env.API_HOST}/sicc/index/getCornerMealBanner`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取吧的详细内容
export function getBar(id, barid) {
  const url = `${process.env.API_HOST}/sicc/goods/getBar`
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
export function inLove(userid, id, type) {
  const url = `${process.env.API_HOST}/sicc/goods/inLove`
  return axios.post(url, {
    goodsId: id,
    userId: userid,
    type: type
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 取消心愿单
export function outLove(userid, id, type) {
  const url = `${process.env.API_HOST}/sicc/goods/outLove`
  return axios.post(url, {
    goodsId: id,
    userId: userid,
    type: type
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

//  获取热门问题
export function getAllHotIssues() {
  const url = `${process.env.API_HOST}/sicc/service/getAllHotIssues`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取电话
export function getPhone() {
  const url = `${process.env.API_HOST}/sicc/service/getPhone`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 会议预定
export function bookMeeting(data) {
  const url = `${process.env.API_HOST}/sicc/book/bookMeeting`
  return axios.post(url, {
    mobile: data.mobile,
    name: data.name,
    note: data.note,
    userId: data.userId,
    topic: data.topic,
    num: data.num
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
