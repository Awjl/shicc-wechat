import axios from 'axios'
// 获取一隅
export function getCornerGoods (pn, pg) {
  const url = `${process.env.API_HOST}/sicc/goods/getCornerGoods`
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
  const url = `${process.env.API_HOST}/sicc/goods/getMealGoods`
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
  const url = `${process.env.API_HOST}/sicc/goods/getGoodsDetail`
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
  const url = `${process.env.API_HOST}/sicc/pointGoods/getV1PointGoods`
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
  const url = `${process.env.API_HOST}/sicc/pointGoods/getV2PointGoods`
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
  const url = `${process.env.API_HOST}/sicc/pointGoods/getPointGoodsDetailById`
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
  const url = `${process.env.API_HOST}/sicc/pointGoods/exchangeGoods`
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
  const url = `${process.env.API_HOST}/sicc/order/createOrder`
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
  const url = `${process.env.API_HOST}/sicc/order/getGoodsOrderDetail`
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
  const url = `${process.env.API_HOST}/sicc/order/createPointOrder`
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
  const url = `${process.env.API_HOST}/sicc/pointGoods/isEnoughPoint`
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
  const url = `${process.env.API_HOST}/sicc/order/getPointGoodsOrderDetail`
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

// 获取核销优惠券信息
export function getVoucherInfo (id) {
  const url = `${process.env.API_HOST}/sicc/voucher/getVoucherInfo`
  return axios.get(url, {
    params: {
      id: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}