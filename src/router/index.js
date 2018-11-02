import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/tab/tab'
import Home from '@/components/home/home' // 首页
import Reserve from '@/components/home/reserve' // 预定
import Service from '@/components/home/service' // 人工服务
import Details from '@/components/home/details' // 详情
import Purchase from '@/components/purchase/purchase'
import PurchaseDetalis from '@/components/purchase/purchaseDetalis' // 商品详情
import Submission from '@/components/purchase/submission' // 提交订单
import Exchange from '@/components/exchange/exchange' // 积分商城
import ExchangeDetalis from '@/components/exchange/exchangeDetalis' // 积分商城详情
import TrueExchange from '@/components/exchange/trueexchange' // 确认兑换
import My from '@/components/my/my' //  个人中心
import MyAddres from '@/components/my/myAddres' // 收货地址列表
import AddAddres from '@/components/my/addAddres' // 新增收货
import MyWish from '@/components/my/mywish' // 心愿单
import MyCoupon from '@/components/my/myCoupon' // 优惠券
import MyTransfer from '@/components/my/myTransfer' // 我的代金券
import MyOrder from '@/components/my/myOrder' // 我的订单
import MyModify from '@/components/my/mymodify' // 个人资料修改
import MyIntegral from '@/components/my/myintegral' // 积分中心
import MyPassword from '@/components/my/mypassword' // 修改密码
import Login from '@/components/login' // 登录页面
import Register from '@/components/register' // 注册页面

import QRcode from '@/components/code/QRcode' // 扫描二维码
import QRover from '@/components/code/QRover' // 扫描成功
import QRsuccess from '@/components/code/QRsuccess' // 领取成功
import index from '@/base/homelist/homelist' // 酒店介绍页面
import Packing from '@/base/parking/parking' // 停车页面


Vue.use(Router)

export default new Router({
  mode: "hash",
  base: '/?#',
  routes: [
    {
      path: '/',
      component: Tab,
      redirect: '/Home',
      children: [
        {
          path: '/Home',
          component: Home,
          name: 'Home',
          meta: {
            title: '首页'
            // keepAlive: true
          }
        },
        {
          path: '/My',
          component: My,
          name: 'My',
          meta: {
            title: '个人中心'
            // keepAlive: true
          }
        },
        {
          path: '/Purchase',
          component: Purchase,
          name: 'Purchase',
          meta: {
            title: '荟购'
            // keepAlive: true
          }
        },
        {
          path: '/Exchange',
          component: Exchange,
          name: 'Exchange',
          meta: {
            title: '荟兑'
            // keepAlive: true
          }
        }
      ]
    },
    {
      path: '/Reserve',
      component: Reserve,
      name: 'Reserve',
      meta: {
        title: '会议预定'
      }
    },
    {
      path: '/Service',
      component: Service,
      name: 'Service',
      meta: {
        title: '服务'
        // keepAlive: false
      }
    },
    {
      path: '/PurchaseDetalis/:id',
      component: PurchaseDetalis,
      name: 'PurchaseDetalis',
      meta: {
        title: '商品详情'
        // keepAlive: false
      }
    },
    {
      path: '/Submission/:id',
      component: Submission,
      name: 'Submission',
      meta: {
        title: '提交订单'
        // keepAlive: false
      }
    },
    {
      path: '/ExchangeDetalis/:id/:type/:level',
      component: ExchangeDetalis,
      name: 'ExchangeDetalis',
      meta: {
        title: '积分兑换'
        // keepAlive: false
      }
    },
    {
      path: '/TrueExchange/:id/:kind/:point',
      component: TrueExchange,
      name: 'TrueExchange',
      meta: {
        title: '兑换'
        // keepAlive: false
      }
    },
    {
      path: '/MyAddres/:type',
      component: MyAddres,
      name: 'MyAddres',
      meta: {
        title: '收货地址'
        // keepAlive: false
      }
    },
    {
      path: '/AddAddres/:id',
      component: AddAddres,
      name: 'AddAddres',
      meta: {
        title: '添加收货地址'
        // keepAlive: false
      }
    },
    {
      path: '/MyWish',
      component: MyWish,
      name: 'MyWish',
      meta: {
        title: '心愿单'
        // keepAlive: false
      }
    },
    {
      path: '/MyTransfer',
      component: MyTransfer,
      name: 'MyTransfer',
      meta: {
        title: '代金券'
        // keepAlive: false
      }
    },
    {
      path: '/MyCoupon',
      component: MyCoupon,
      name: 'MyCoupon',
      meta: {
        title: '优惠券'
        // keepAlive: false
      }
    },
    {
      path: '/MyOrder',
      component: MyOrder,
      name: 'MyOrder',
      meta: {
        title: '我的订单'
        // keepAlive: false
      }
    },
    {
      path: '/MyModify',
      component: MyModify,
      name: 'MyModify',
      meta: {
        title: '修改个人资料'
        // keepAlive: false
      }
    },
    {
      path: '/MyIntegral',
      component: MyIntegral,
      name: 'MyIntegral',
      meta: {
        title: '个人积分'
        // keepAlive: false
      }
    },
    {
      path: '/MyPassword',
      component: MyPassword,
      name: 'MyPassword',
      meta: {
        title: '修改密码'
        // keepAlive: false
      }
    },
    {
      path: '/Details/:barid',
      component: Details,
      name: 'Details',
      meta: {
        title: '商品详情'
        // keepAlive: false
      }
    },
    {
      path: '/Login',
      component: Login,
      name: 'Login',
      meta: {
        title: '登录'
      }
    },
    {
      path: '/Register',
      component: Register,
      name: 'Register',
      meta: {
        title: '注册'
      }
    },
    {
      path: '/index',
      component: index,
      name: 'index',
      meta: {
        title: '酒店介绍'
      }
    },
    {
      path: '/packing',
      component: Packing,
      name: 'packing',
      meta: {
        title: '优惠停车'
      }
    },
    {
      path: '/QRcode',
      component: QRcode,
      name: 'QRcode',
      meta: {
        title: '核销优惠券'
      }
    },
    {
      path: '/QRover/:id',
      component: QRover,
      name: 'QRover',
      meta: {
        title: '确认核销'
      }
    },
    {
      path: '/QRsuccess',
      component: QRsuccess,
      name: 'QRsuccess',
      meta: {
        title: '领取成功'
      }
    },
  ]
})
