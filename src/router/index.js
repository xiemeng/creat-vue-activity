import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const Adventures = r => require.ensure([], () => r(require('../views/Adventures/')), 'Adventures');//主页
const accept = r => require.ensure([], () => r(require('../views/Adventures/accept')), 'accept');//测试
const success = r => require.ensure([], () => r(require('../views/Adventures/success')), 'success');//测试


export default new Router({
  routes: [
//二级路由,地址为空时跳转地址
    {
      path: '/',
      redirect:'/Adventures'
    },
    //主页面
    {
      path: '/Adventures',
      component: Adventures,
      name:'Adventures', 
    },
    {
      path: '/accept',
      component: accept,
      name:'accept',
    },
    {
      path: '/success',
      component: success,
      name:'success',
    },
  ]
})
