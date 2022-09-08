import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'

const routes : RouteRecordRaw[] = [
  {
      path:'/',
      redirect:'/index'
  },
  {
      path:'/index',
      name:'Layout',
      component: ()=> import('@/views/Layout.vue'),
      // children:[
      //     {
      //         path:'',
      //         name:'IndexPage',
      //         component: () => import('@/views/index/IndexPage.vue')
      //     },
      //     {
      //         path:'articlelist',
      //         name:'Articlelist',
      //         component: () => import('@/views/articlelist/Articlelist.vue')
      //     },
      //     {
      //         path:'messageboard',
      //         name:'Messageboard',
      //         component: () => import('@/views/messageboard/Messageboard.vue')
      //     },
      //     {
      //         path:'anime',
      //         name:'Anime',
      //         component: () => import('@/views/anime/Anime.vue')
      //     },
      //     {
      //         path:'edit',
      //         name:'Edit',
      //         component: () => import('@/views/edit/Edit.vue')
      //     }
      // ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router