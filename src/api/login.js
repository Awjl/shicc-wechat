import { api } from './config'
import axios from 'axios'
// 顶部Banner
export function login () {
  const url = `${api}/sicc/index/getTopBanner`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
