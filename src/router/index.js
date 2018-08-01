import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/tab/tab'
import Home from '@/components/home/home'
import Reserve from '@/components/home/reserve' // 预定
import Service from '@/components/home/service'
import Purchase from '@/components/purchase/purchase'
import Exchange from '@/components/exchange/exchange'
import My from '@/components/my/my'

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
    }
  ]
})
