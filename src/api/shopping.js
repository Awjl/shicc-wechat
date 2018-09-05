import { api } from './config'
import axios from 'axios'
// 获取一隅
export function getCornerGoods (pn, pg) {
  const url = `${api}/sicc/goods/getCornerGoods`
  return axios.get(url, {
    params: {
      pageNow: pn,
      pageNum: pg
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取一食
export function getMealGoods (pn, pg) {
  const url = `${api}/sicc/goods/getMealGoods`
  return axios.get(url, {
    params: {
      pageNow: pn,
      pageNum: pg
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取详情
export function getGoodsDetail (userid, id) {
  const url = `${api}/sicc/goods/getGoodsDetail`
  return axios.get(url, {
    params: {
      goodsId: id,
      userId: userid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取v1商品
export function getV1PointGoods (pn, pg) {
  const url = `${api}/sicc/pointGoods/getV1PointGoods`
  return axios.get(url, {
    params: {
      pageNow: pn,
      pageNum: pg
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取v2商品
export function getV2PointGoods (pn, pg) {
  const url = `${api}/sicc/pointGoods/getV2PointGoods`
  return axios.get(url, {
    params: {
      pageNow: pn,
      pageNum: pg
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 积分商品详情
export function getPointGoodsDetailById (id) {
  const url = `${api}/sicc/pointGoods/getPointGoodsDetailById`
  return axios.get(url, {
    params: {
      pointGoodsId: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 兑换积分商品
export function exchangeGoods (userId, point) {
  const url = `${api}/sicc/pointGoods/exchangeGoods`
  return axios.get(url, {
    params: {
      userId: userId,
      point: point
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 生成商品订单
export function changeAddressById (data) {
  const url = `${api}/sicc/order/createOrder`
  return axios.post(url, {
    goodsId: data.goodsId,
    mobile: data.mobile,
    num: data.num,
    total: data.total,
    userId: data.userId,
    couponId: data.couponId
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 查询商品
export function getGoodsOrderDetail (userId, goodsId) {
  const url = `${api}/sicc/order/getGoodsOrderDetail`
  return axios.get(url, {
    params: {
      userId: userId,
      goodsId: goodsId
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 生成积分商品订单
export function createPointOrder (data) {
  const url = `${api}/sicc/order/createPointOrder`
  return axios.post(url, {
    addressId: data.addressId,
    goodsId: data.goodsId,
    goodsKind: data.goodsKind,
    num: data.num,
    total: data.total,
    userId: data.userId
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 查询积分是否足够
export function isEnoughPoint (userId, point) {
  const url = `${api}/sicc/pointGoods/isEnoughPoint`
  return axios.get(url, {
    params: {
      userId: userId,
      point: point
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 查询积分详情
export function getPointGoodsOrderDetail (data) {
  const url = `${api}/sicc/order/getPointGoodsOrderDetail`
  return axios.get(url, {
    params: {
      userId: data.userId,
      goodsId: data.goodsId,
      kind: data.kind,
      point: data.point
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
