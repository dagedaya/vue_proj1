import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',//默认加载
    component:() =>import('@/views/index.vue'),
    redirect: '/home',//重定向/ˌriːdəˈrekt/ 
    //  绑定数组（路由嵌套）
    children:[
      {
        path:'home',
        name:"home",
        component: () => import('@/views/home/index.vue'),
        // 路由元信息：存放的是出去路由相关订单完成的字段的其他内容
        meta:{
          title:'首页',
          is_show:true
        }
      },
    ]
  },
  {
    path:'/members',//会员
    name:'members',
    redirect: '/members/list',//重定向
    component:()=>import('@/views/index.vue'),
    // 路由嵌套
    children:[
      {
        path:'list',
        name:'members_list',
        component:()=>import('@/views/members/list.vue')
      },
      {
        path:'add',
        name:'members_add',
        component:()=>import('@/views/members/add.vue')
      }
    ]
  },
  {
    path:'*',//遇到不知道的路径提示页面不存在
    component:()=>import('@/views/error/404.vue')
  }
]


const router = new VueRouter({
  routes
})

export default router
