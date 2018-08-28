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
import MyOrder from '@/components/my/myOrder' // 我的订单
import MyModify from '@/components/my/mymodify' // 个人资料修改
import MyIntegral from '@/components/my/myintegral' // 积分中心
import MyPassword from '@/components/my/mypassword' // 修改密码
import Login from '@/components/login' // 登录页面
import Register from '@/components/register' // 注册页面

import index from '@/base/homelist/homelist' // 酒店介绍页面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Tab,
      redirect: '/home',
      children: [
        {
          path: '/Home',
          component: Home,
          meta: {
            title: '首页'
          }
        },
        {
          path: '/My',
          component: My,
          meta: {
            title: '个人中心'
          }
        },
        {
          path: '/Purchase',
          component: Purchase,
          meta: {
            title: '荟购'
          }
        },
        {
          path: '/Exchange',
          component: Exchange,
          meta: {
            title: '荟兑'
          }
        }
      ]
    },
    {
      path: '/Reserve',
      component: Reserve,
      meta: {
        title: '会议预定'
      }
    },
    {
      path: '/Service',
      component: Service,
      meta: {
        title: '服务'
      }
    },
    {
      path: '/PurchaseDetalis',
      component: PurchaseDetalis,
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '/Submission',
      component: Submission,
      meta: {
        title: '提交订单'
      }
    },
    {
      path: '/ExchangeDetalis',
      component: ExchangeDetalis,
      meta: {
        title: '积分兑换'
      }
    },
    {
      path: '/TrueExchange',
      component: TrueExchange,
      meta: {
        title: '兑换'
      }
    },
    {
      path: '/MyAddres',
      component: MyAddres,
      meta: {
        title: '收货地址'
      }
    },
    {
      path: '/AddAddres',
      component: AddAddres,
      meta: {
        title: '添加收货地址'
      }
    },
    {
      path: '/MyWish',
      component: MyWish,
      meta: {
        title: '心愿单'
      }
    },
    {
      path: '/MyCoupon',
      component: MyCoupon,
      meta: {
        title: '优惠券'
      }
    },
    {
      path: '/MyOrder',
      component: MyOrder,
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '/MyModify',
      component: MyModify,
      meta: {
        title: '修改个人资料'
      }
    },
    {
      path: '/MyIntegral',
      component: MyIntegral,
      meta: {
        title: '个人积分'
      }
    },
    {
      path: '/MyPassword',
      component: MyPassword,
      meta: {
        title: '修改密码'
      }
    },
    {
      path: '/Details',
      component: Details,
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '/Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/Register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/index',
      component: index,
      meta: {
        title: '酒店介绍'
      }
    }
  ]
})
