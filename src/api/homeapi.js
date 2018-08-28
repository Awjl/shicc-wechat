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
