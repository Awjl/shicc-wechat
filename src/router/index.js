import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/tab/tab'
import Home from '@/components/home/home'
import Reserve from '@/components/home/reserve' // 预定
import Service from '@/components/home/service'
import Purchase from '@/components/purchase/purchase'
import PurchaseDetalis from '@/components/purchase/purchaseDetalis' // 商品详情
import Submission from '@/components/purchase/submission' // 提交订单
import Exchange from '@/components/exchange/exchange'
import ExchangeDetalis from '@/components/exchange/exchangeDetalis'
import TrueExchange from '@/components/exchange/trueexchange' // 确认兑换
import My from '@/components/my/my'
import MyAddres from '@/components/my/myAddres' // 收货地址列表
import AddAddres from '@/components/my/addAddres' // 新增收货
import MyWish from '@/components/my/mywish'

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
    }
  ]
})
